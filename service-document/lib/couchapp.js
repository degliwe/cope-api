/**
 * Mapping of the ddoc attibutes to files
 *
 * @type {{rewrites: exports, views: exports, shows: exports, lists: exports, filters: exports, validate_doc_update: exports, updates: exports}}
 */
module.exports = {
    views: require("./views"),
    shows: require("./shows"),
    lists: require("./lists"),
    updates: require("./updates")
};