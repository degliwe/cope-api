/**
 * Mapping of the ddoc attibutes to files
 *
 * @type {{rewrites: exports, views: exports, shows: exports, lists: exports, filters: exports, validate_doc_update: exports, updates: exports}}
 */
module.exports = {
    shows: require("./shows"),
    validate_doc_update: require("./validate_doc_update")
};