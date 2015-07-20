/**
 * View returning all documents not deleted by producer
 *
 * @type {{map: Function}}
 */
exports.viewDocumentsByName = {
    map: function (doc) {
        if (doc.schema === "article" &&	!doc.deleted_by_producer) {
            emit(doc.title, doc);
        }
    }
};

/**
 * View returning all documents not deleted by producer
 *
 * @type {{map: Function}}
 */
exports.articles = {
    map: function (doc) {
        if (doc.producer && !doc.deleted_by_producer) {
            var key = doc.producer; //sort by post date desc and return title, thumbnail, nbr of comments, author, avatar, authid, post id
            var value = {
                title: doc.fields.title,
                created: doc.created
            };
            emit(key, value);
        }
    }
};
/**
 * View returning the _id not deleted by producer for a given producer and producer_content_id
 *
 * @param {string} producer is the producer username.
 * @param {string} producer_content_id is the procuder internal id username.
 *
 * @type {{map: Function}}
 */
exports.uuid = {
    map: function (doc) {
        if (doc.producer && doc.producer_content_id && !doc.deleted_by_producer) {
            var key = [doc.producer, doc.producer_content_id];  //sort by post date desc and return title, thumbnail, nbr of comments, author, avatar, authid, post id
            var value = doc._id;
            emit(key, value);
        }
    }
};
/**
 * View returning the list of producers and the amount of document they own
 *
 * @type {{map: Function, reduce: string}}
 */
exports.producers = {
    map: function (doc) {
        if (doc.producer && doc.type &&	!doc.deleted_by_producer) {
            var key = [doc.producer];
            emit(key, 1);
        }
    },
    reduce: "_sum"
};
/**
 * View returning the list of types and the amount of document of these types
 *
 * @type {{map: Function, reduce: string}}
 */
exports.types = {
    map: function (doc) {
        if (doc.producer && doc.type &&	!doc.deleted_by_producer) {
            var key = [doc.type];
            emit(key, 1);
        }
    },
    reduce: "_sum"
};