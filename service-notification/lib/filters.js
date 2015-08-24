/**
 * Change feed for article
 *
 * @param doc
 * @param req
 * @returns {boolean}
 */
exports.articles = function (doc, req) {

    if (doc.type === "article") {
        return true;
    }
    return false;
};

/**
 *  Change feed for article from a given producer
 *
 * @param doc
 * @param req
 * @returns {boolean}
 */
exports.articlesPerProducer = function (doc, req) {

    if (doc.type === "article" && doc.producer == req.query.producer) {
        return true;
    }
    return false;
};