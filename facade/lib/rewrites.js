/**
 * HTTP FACADE API definition
 *
 * @type {*[]}
 */
module.exports = [
    {
        //return api status (200)
        from: '/v1',
        to: '_show/api',
        method: 'GET'
    },
    {
    //return api status (200)
        from: '/static/*',
        to: 'static/*',
        method: 'GET'
    },
    {
        from: '/v1/articles',
        to: '../document/_update/updateDocument/',
        method: 'POST',
        documentation:{
            title: 'Post article',
            description: 'Create an article document',
            headers: {'Authorization':'basic','content-type':'application/json'},
            params: {'data':'The article to be inserted'}
        }
    },
    {
        from: '/v1/articles/',
        to:'../document/_list/listDocuments/articles',
        method: 'GET',
        documentation:{
            title: 'Get articles',
            description: 'Fetch articles',
            headers: {'content-type':'application/json'}
        }
    },
    {
        from: '/v1/articles/latest',
        to:'../document/_list/listDocuments/articles',
        query:{ descending : 'true' },
        method: 'GET',
        documentation:{
            title: 'Get latest articles',
            description: 'Fetch the lastest articles',
            headers: {'content-type':'application/json'}
        }
    },
    {
        from: '/v1/articles/:uuid',
        to: '../document/_show/showArticles/:uuid',
        method: 'GET',
        documentation:{
            title: 'Get article',
            description: 'Fetch a given article based on :uuid',
            headers: {'content-type':'application/json'},
            params: {':uuid':'The unique id of the article to be retrieved'}
        }
    },
    //UPDATE
    {
        from: '/v1/articles/:uuid',
        to: '../document/_update/updateDocument/:uuid',
        method: 'PUT',
        documentation:{
            title: 'Put article',
            description: 'update an article :uuid',
            headers: {'content-type':'application/json'},
            params: {':uuid':'the unique id of the content'}
        }
    },
    //DELETE
    {
        from: '/v1/articles/:uuid',
        to: '../document/_update/deleteDocument/:uuid',
        method: 'DELETE',
        documentation:{
            title: 'Delete article',
            description: 'Delete an article for a given :uuid',
            headers: {'content-type':'application/json'},
            params: {':uuid':'the unique id of the content'}
        }
    },
    {
        //_rewrite/schema/basic/v1
        from: '/v1/schema/:type/:version',
        //_show/showSchema?type=basic&version=v1
        to: '../resource-type/_show/showSchema',
        query: {
            type: ':type',
            version: ':version'
        },
        method: 'GET',
        documentation:{
            title: 'Get schema',
            description: 'Fetch schema for :type and :version',
            headers: {'content-type':'application/json'},
            params: {':type':'content type name',':version':'version number'}
        }
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
        to: '../document/_view/uuid',
        query: {
            key: [
                ':service',
                ':id'
            ]
        },
        method: 'GET',
        documentation:{
            title: 'get document unique id',
            description: 'return uuid for a given producer:producer_id',
            params: {':service':' producer',':id':'the internal document id'}
        }
    },
    {
        from: '/v1/stats/producers',
        to: '../document/_view/producers',
        query: {
            group: 'true'
        },
        method: 'GET',
        documentation:{
            title: 'Get producers',
            description: 'Fetch the list of producers',
            headers: {'content-type':'application/json'}
        }
    },
    {
        from: '/v1/types',
        to: '../resource-type/_show/showTypes',
        method: 'GET',
        documentation:{
            title: 'Get types',
            description: 'Fetch the list of content types',
            headers: {'content-type':'application/json'}
        }
    },
    {
        from: '/v1/stats/types',
        to: '../document/_view/types',
        query: {
            group: 'true'
        },
        method: 'GET'
    },
    // return list of articles for a given producer
    {
        from: '/v1/articles/producer/:producer',
        to: '../document/_view/articles',
        query: {
            key:':producer',
            descending: 'true'
        },
        method: 'GET',
        documentation:{
            title: 'Get articles from producer',
            description: 'Fetch the list of articles created by :producer',
            headers: {'content-type':'application/json'},
            params: {':producer':'the producer id'}
        }
    },
    {
        from: '/v1/redirection',
        to: '../redirection/_list/list_redirection/redirection_by_url',
        query: {
            limit: '1',
            key:':url'
        },
        method: 'GET',
        documentation:{
            title: 'Get redirection url from :url',
            description: 'return the new url for a given ?url=http://...',
            headers: {'content-type':'application/json'},
            params: {':url':'the url'}
        }
    },
    {
        from: '/v1/language_coverage',
        to: '../language-coverage/_list/listLanguageCoverage/language_coverage_by_url',
        query: {
            limit: '1',
            key:':url'
        },
        method: 'GET',
        documentation:{
            title: 'Get language coverage by url',
            description: 'return list of multilingual urls for a given ?url=http://...',
            headers: {'content-type':'application/json'},
            params: {':url':'the url'}
        }
    },
    {
        from: '/v1/language_coverage/:uuid',
        to: '../language-coverage/_list/listLanguageCoverage/language_coverage_by_id',
        query: {
            limit: '1',
            key:':uuid'
        },
        method: 'GET',
        documentation:{
            title: 'Get language coverage by uuid',
            description: 'return list of multilingual urls for a given :uuid',
            headers: {'content-type':'application/json'},
            params: {':uuid':'the unique id of the content'}
        }
    },
    // return file for a given document, filename
    {
        from: '/v1/articles/:doc/:attachment',
        to: '../../:doc/:attachment'
    },
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
