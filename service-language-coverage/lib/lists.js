/**
 *
 * @param head
 * @param req
 * @returns {*}
 */
exports.listLanguageCoverage = function(head, req) {

    //var langs = require('lib/languages/languages');


    function element(name, row) {
        send('<' + name + '>\n');
        for (field in row) {
            if (typeof(row[field]) == 'object') {
                element(field, row[field])
            } else {
                send('<field name=\"' + field + '\">');
                send(('' + row[field]).replace(/&/g, '&amp;').replace(/</g, '&lt;'));
                send('</field>\n');
            }
        }
        send('</' + name + '>\n');

    };

    /*
     [
        {label: "English (en)", order: "english (en)", type: "EU official language", type_value: "16", code: "en", origin: "url_en"},
        {label: "français (fr)", order: "francais (fr)", type: "EU official language", type_value: "16", code: "fr", origin: "url_fr"}
     ]
     */

    provides('json', function(){
        var row, rows = [];
        while (row = getRow()) {
            for(lang in row.value) {
                var item = {};
                item.label = row.value[lang].label;
                item.type = row.value[lang].type;
                item.code = row.value[lang].code;
                item.origin = row.value[lang].origin;
                rows.push(item);
            }
        }
        if (req.client) {
            JSON.stringify(rows);
        }
        return toJSON(rows);
    })

    provides('xml', function() {
        send('<?xml version="1.0" encoding="utf-8"?>\n');
        send('<language_coverage domain="'+ req.headers.Host +'" request="'+ escape(req.query.key) +'">');
        while (row = getRow()) {
            for(lang in row.value){
                send('<document lang="' + row.value[lang].code + '" label="'+ row.value[lang].label +'" type="'+ row.value[lang].type +'" href="'+row.value[lang].origin+'"/>');
            }
        }
        send('</language_coverage>');
    });
}