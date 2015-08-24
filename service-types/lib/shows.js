/**
 * Return a available types
 *
 * @param doc
 * @param req
 * @returns {*}
 */
exports.showTypes = function(doc, req) {

    var schemas;

    // schema needs to exists
    if (!this.lib.hasOwnProperty(schemas)) {
        return {'json':{code: 404, error: "not_found", reason: 'There is no schema'}};
    }
    schemas = require('lib/schemas');

    //schema =  schema[version];

    if(schemas==null) {
        return {'json':{code: 404, error: "not_found", reason: "schema doesn't exist"}};
    }
    return {'json': schemas};
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