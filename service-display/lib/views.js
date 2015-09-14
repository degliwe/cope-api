/**
 * View returning Teaser fields for all documents by producer by schema
 *
 * @type {{map: Function}}
 */
exports.viewTeaserByProducerByschema = {
    map: function (doc) {
        if (doc.type && !doc.deleted_by_producer) {
            var key = [doc.producer, doc.type];
            var value = {
                title: doc.fields.title,
                created: doc.created,
                type:doc.type ,
                thumbnail: doc.thumbnail,
                summary: doc.summary
            };
            emit(key, value);
        }
    }
};

/**
 * View returning Title fields for all documents by producer by schema
 *
 * @type {{map: Function}}
 */
exports.viewTitleByProducerByschema = {
    map: function (doc) {
        if (doc.type && !doc.deleted_by_producer) {
            var key = [doc.producer, doc.type];
            var value = {
                title: doc.fields.title
            };
            emit(key, value);
        }
    }
};

/**
 * View returning Meta fields for all documents by producer by schema
 *
 * @type {{map: Function}}
 */
exports.viewMetaByProducerByschema = {
    map: function (doc) {
        if (doc.type && !doc.deleted_by_producer) {
            var key = [doc.producer, doc.type];
            var value = {
                title: doc.fields.title,
                created: doc.created,
                type:doc.type
            };
            emit(key, value);
        }
    }
};

/**
 * View returning Full fields for all documents by producer by schema
 *
 * @type {{map: Function}}
 */
exports.viewFullByProducerByschema = {
    map: function (doc) {
        if (doc.type && !doc.deleted_by_producer) {
            var key = [doc.producer, doc.type];
            var value = doc.fields;
            emit(key, value);
        }
    }
};