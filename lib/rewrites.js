/**
 * HTTP API definition
 *
 * @type {*[]}
 */
module.exports = [
    {
        //return api status (200)
        from: '/v1',
        to: 'static/index.html',
        method: 'GET'
    },
    //CREATE
    {
        from: '/v1/articles',
        to: '_update/updateDocument/',
        method: 'POST'
    },
    //READ
    {
        from: '/v1/articles/',
        to:'_list/listDocuments/articles',
        method: 'GET'
    },
    {
        from: '/v1/articles/latest',
        to:'_list/listDocuments/articles',
        query:{ descending : 'true' },
        method: 'GET'
    },
    {
        from: '/v1/articles/:docid',
        to: '_show/showArticles/:docid',
        method: 'GET'
    },
    {
        //_rewrite/schema/basic/v1
        from: '/v1/schema/:type/:version',
        //_show/showSchema?type=basic&version=v1
        to: '_show/showSchema',
        query: {
            type: ':type',
            version: ':version'
        },
        method: 'GET'
    },
    {
        from: '/v1/changes/docs/:author',
        to: '../../_changes?filter=v1/docs',
        query: {
            key:':author'
        },
        method: 'GET'
    },
    // return uuid for a given producer:producer_id
    {
        from: '/v1/uuid/:service/:id',
        to: '_view/uuid',
        query: {
            key: [
                ':service',
                ':id'
            ]
        },
        method: 'GET'
    },
    // return list of producers
    {
        from: '/v1/producers',
        to: '_view/producers',
        query: {
            group: 'true'
        },
        method: 'GET'
    },
    //return list of types
    {
        from: '/v1/types',
        to: '_view/types',
        query: {
            group: 'true'
        },
        method: 'GET'
    },
    // return list of articles
    {
        from: '/v1/articles',
        to: '_view/articles',
        query: {
            descending: 'true'
        },
        method: 'GET'
    },
    // return list of articles for a given producer
    {
        from: '/v1/articles/producer/:service',
        to: '_view/articles',
        query: {
            key:':service',
            descending: 'true'
        },
        method: 'GET'
    },
    // return list of multilingual urls for a given ?key=url
    {
        from: '/v1/language_coverage',
        to: '../language-coverage/_list/listLanguageCoverage/language_coverage_by_url',
        query: {
            key:':url'
        },
        method: 'GET'
    },{
        from: '/v1/language_coverage/:id',
        to: '../language-coverage/_list/listLanguageCoverage/language_coverage_by_id',
        query: {
            key:':id'
        },
        method: 'GET'
    },
    // return file for a given document, filename
    {
        from: '/v1/articles/:doc/:attachment',
        to: '../../:doc/:attachment'
    },
    //UPDATE
    {
        from: '/v1/articles/:docid',
        to: '_update/updateDocument/:docid',
        method: 'PUT'
    },
    //DELETE
    {
        from: '/v1/articles/:docid',
        to: '_update/deleteDocument/:docid',
        method: 'DELETE'
    },

    {from: '/v1/login', to: '_update/login'},
    {from: '/v1/create_user', to: '_show/create_user'},
    {from: '/v1/update_user', to: '_update/update_user'},

        // change feed for articles
    {
        from: '/v1/changes/articles',
        to: '../../_changes',
        query: {
            filter: 'integration-layer/articles'
        },
        method: 'GET'
    },
        // change feed for article from a given producer
    {
        from: '/v1/changes/articles/:service',
        to: '../../_changes',
        query: {
            filter: 'integration-layer/articlesPerProducer',
            producer:':service'
        },
        method: 'GET'
    }
    ]
