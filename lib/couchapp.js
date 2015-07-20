/**
 * Mapping of the ddoc attibutes to files
 *
 * @type {{rewrites: exports, views: exports, shows: exports, lists: exports, filters: exports, validate_doc_update: exports, updates: exports}}
 */
module.exports = {
    rewrites: require("./rewrites"),
    views: require("./views"),
    shows: require("./shows"),
    lists: require("./lists"),
    filters: require("./filters"),
    validate_doc_update: require("./validate_doc_update"),
    updates: require("./updates")
};