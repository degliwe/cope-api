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