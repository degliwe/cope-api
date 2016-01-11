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
        nodocumentation:{
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
        from: '/v1/uuid/:producer/:producer_id',
        to: '../document/_view/uuid',
        query: {
            key: [
                ':producer',
                ':producer_id'
            ]
        },
        method: 'GET',
        documentation:{
            title: 'get document unique id',
            description: 'return uuid for a given :producer/:producer_id',
            params: {':producer':' producer',':producer_id':'the internal document id'}
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
        from: '/v1/browser',
        to: '../remote-browser/_list/list_browser/browse_by_url',
        query: {
            limit: '1',
            key:':url'
        },
        method: 'GET',
        documentation:{
            title: 'Get content preview from :url',
            description: 'return a document preview for a given ?url=http://...',
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
    // Display service
    {
        from: '/v1/display/teaser/:producer/:type',
        to: '../display/_view/viewTeaserByProducerByschema',
        query:{
            key:[":producer",":type"],
            descending : 'true'
        },
        method: 'GET',
        documentation:{
            title: 'Get teaser',
            description: 'Fetch the teaser for producer and type',
            params: {
                ':producer (optional)':'producer id',
                ':type (optional)':'schema name'
            }
        }
    },
    {
        from: '/v1/display/teaser/:producer',
        to: '../display/_view/viewTeaserByProducerByschema',
        query:{
            endkey:[':producer'],
            startkey:[':producer',{}],
            descending : 'true'
        },
        method: 'GET'
    },
    {
        from: '/v1/display/teaser',
        to: '../display/_view/viewTeaserByProducerByschema',
        method: 'GET'
    },
    {
        from: '/v1/display/title/:producer/:type',
        to: '../display/_view/viewTitleByProducerByschema',
        query:{
            key:[":producer",":type"],
            descending : 'true'
        },
        method: 'GET',
        documentation:{
            title: 'Get title',
            description: 'Fetch the title for producer and type',
            params: {
                ':producer (optional)':'producer id',
                ':type (optional)':'schema name'
            }
        }
    },
    {
        from: '/v1/display/title/:producer',
        to: '../display/_view/viewTitleByProducerByschema',
        query:{
            endkey:[':producer'],
            startkey:[':producer',{}],
            descending : 'true'
        },
        method: 'GET'
    },
    {
        from: '/v1/display/title',
        to: '../display/_view/viewTeaserByProducerByschema',
        method: 'GET'
    },
    {
        from: '/v1/display/full/:producer/:type',
        to: '../display/_view/viewFullByProducerByschema',
        query:{
            key:[":producer",":type"],
            descending : 'true'
        },
        method: 'GET',
        documentation:{
            title: 'Get full',
            description: 'Fetch full document for producer and type',
            params: {
                ':producer (optional)':'producer id',
                ':type (optional)':'schema name'
            }
        }
    },
    {
        from: '/v1/display/full/:producer',
        to: '../display/_view/viewFullByProducerByschema',
        query:{
            endkey:[':producer'],
            startkey:[':producer',{}],
            descending : 'true'
        },
        method: 'GET'
    },
    {
        from: '/v1/display/full',
        to: '../display/_view/viewFullByProducerByschema',
        method: 'GET'
    },
    {
        from: '/v1/display/meta/:producer/:type',
        to: '../display/_view/viewMetaByProducerByschema',
        query:{
            key:[":producer",":type"],
            descending : 'true'
        },
        method: 'GET',
        documentation:{
            title: 'Get meta',
            description: 'Fetch meta for producer and type',
            params: {
                ':producer (optional)':'producer id',
                ':type (optional)':'schema name'
            }
        }
    },
    {
        from: '/v1/display/meta/:producer',
        to: '../display/_view/viewMetaByProducerByschema',
        query:{
            endkey:[':producer'],
            startkey:[':producer',{}],
            descending : 'true'
        },
        method: 'GET'
    },
    {
        from: '/v1/display/meta',
        to: '../display/_view/viewMetaByProducerByschema',
        method: 'GET'
    },
    // return file for a given document, filename
    {
        from: '/v1/articles/:doc/:attachment',
        to: '../../:doc/:attachment'
    },
    {
        from: '/v1/changes/articles',
        to: '../../_changes',
        query: {
            filter: 'notification/articles'
        },
        method: 'GET'
    },
        // change feed for article from a given producer
    {
        from: '/v1/changes/articles/:producer',
        to: '../../_changes',
        query: {
            filter: 'notification/articlesPerProducer',
            producer:':producer'
        },
        method: 'GET',
        documentation:{
            title: 'Articles changes ',
            description: 'Change feed for articles from a given :producer',
            params: {':producer (optional)':'producer name'}
        }
    }
    ]
