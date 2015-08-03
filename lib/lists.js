/**
 *
 * @param head
 * @param req
 * @returns {*}
 */
exports.listDocuments = function (head, req) {
    start({
        code: 200,
        headers: {
            'Content-Type': 'application/json'
        }
    });

    var row, rows = [];

    while (row = getRow()) {
        rows.push(row.value);
    }

    if (req.client) {
        console.log(JSON.stringify(rows));
    }

    return toJSON(rows);
};

exports.listLanguageCoverage = function(head, req) {

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


    provides('json', function(){
        var row, rows = [];
        while (row = getRow()) {
            rows.push(row.value);
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
            //element('row', row)
            for(lang in row.value){
                send('<document lang="' + lang + '" href="'+row.value[lang]+'"/>');
            }

        }
        send('</language_coverage>');
    });
}