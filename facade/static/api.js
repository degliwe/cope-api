document.onreadystatechange = function () {
    if (document.readyState == "interactive") {
        generateNav();
    }
}

function generateNav(){
    var endpoints = document.querySelectorAll('fieldset');
    var sidenav = document.querySelector('aside');
    var li = document.createElement('ul');
    for (var x=0 ; x<endpoints.length; x++){
        if (endpoints.item(x).querySelector('legend') != null) {
        var title = endpoints.item(x).querySelector('legend').querySelector('a').getAttribute('name');

        var link = document.createElement('a');
        link.textContent = title;
        link.setAttribute('href', '#'.concat(title));

        var item = document.createElement('li');

        item.appendChild(link);
        li.appendChild(item);
        }
    }

    sidenav.appendChild(li);
}