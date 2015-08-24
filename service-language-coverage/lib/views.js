/**
 * View returning the language coverage for a given origin
 *
 * @param {string} origin.
 *
 * @type {{map: Function}}
 */
exports.language_coverage_by_url = {
    map: function (doc) {
        if (doc.producer && doc.producer_content_id && !doc.deleted_by_producer) {

            var langs = require('views/lib/languages');
            var origins = doc.fields.origin;

            var value = Object.keys(origins).map(function(curr){
                var item = langs.languages[curr];
                item.code = curr;
                item.origin = origins[curr][0];
                return item;
            });

           value.sort(function(a,b){
                a.order.localeCompare(b.order);
            });

            //emit one item per url
            Object.keys(origins).map(function(curr){
                var key = origins[curr][0];
                emit(key, value);
             });
        }
    }
};
/**
 * View returning the language coverage for a given _id
 *
 * @param {string} _id.
 *
 * @type {{map: Function}}
 */
exports.language_coverage_by_id = {
    map: function (doc) {
        if (doc.producer && doc.producer_content_id && !doc.deleted_by_producer) {

            var langs = require('views/lib/languages');
            var origins = doc.fields.origin;

            var value = Object.keys(origins).map(function(curr){
                var item = langs.languages[curr];
                item.code = curr;
                item.origin = origins[curr][0];
                return item;
            });

            value.sort(function(a,b){
                a.order.localeCompare(b.order);
            });

            emit(doc._id, value);
        }
    }
};