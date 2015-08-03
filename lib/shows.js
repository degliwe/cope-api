exports.language_coverage_by_id = function(doc, req){
    provides('json', function(){
        return {
            'headers': {'Content-Type': 'application/json'},
            'body': toJSON(doc.fields.origin)
        }
    });
    provides('xml', function(){

        doc = doc.fields.origin;

        return {
            'headers': {'Content-Type': 'application/xml'},
            'body' : ''.concat(
                '<?xml version="1.0" encoding="utf-8"?>\n',
                '<language_coverage domain="'+ req.headers.Host +'" request="'+ req.query.key +'">',
                (function(){
                    escape = function(s){
                        return s.replace(/&quot;/g, '"')
                            .replace(/&gt;/g, '>')
                            .replace(/&lt;/g, '<')
                            .replace(/&amp;/g, '&');
                    };
                    var content = '';
                    for(var key in doc){
                        if(!doc.hasOwnProperty(key)) continue;
                        var value = escape(toJSON(doc[key]));
                        var key = escape(key);
                        content += ''.concat('<document lang="' + key + '" href=', value.replace('[', '').replace(']', '') + '/>' );
                    }
                    return content;
                })(),
                '</language_coverage>'
            )
        }
    });
    registerType('text-json', 'text/json');
    provides('text-json', function(){
        return toJSON(doc);
    })
};


/**
 * Return a filtered version of document
 *
 * @param doc
 * @param req
 * @returns {*}
 */
exports.showArticles = function(doc, req) {

    var newDoc =  {};
    newDoc._id = doc._id;
    newDoc.created = doc.created;
    newDoc.updated = doc.updated;
    newDoc.default_language = doc.default_language;
    newDoc.languages = doc.languages;
    newDoc.fields = doc.fields;

	if(doc==null) {
		return {'json':{code: 404, error: "not_found", reason: "document doesn't exist"}};
	}

    if(doc.deleted_by_producer) {
        return {'json': {code: 404, "error": "not_found", "reason": "deleted"}};
    }

    return {'json': newDoc};
};

/**
 * Return a schema document
 *
 * @param doc
 * @param req
 * @returns {*}
 */
exports.showSchema = function(doc, req) {

	var type = req.query.type;
	var version = req.query.version;
	var schema;

	// schema needs to exists
	if (!this.lib.schemas.hasOwnProperty(type)) {
		return {'json':{code: 404, error: "not_found", reason: 'There is no schema for: ' + type}};
	}
	schema = require('lib/schemas/' + type);

	// schema needs to exists in the right version
	if (!schema[version]) {
		return {'json':{code: 404, error: "not_found", reason: 'There is no schema for: ' + type +':'+ version}};
	}
	schema =  schema[version];

	if(schema==null) {
		return {'json':{code: 404, error: "not_found", reason: "schema doesn't exist"}};
	}
	return {'json': schema};
};