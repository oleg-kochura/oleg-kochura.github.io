function blockTemplate(text, className, buttonValue) {
    return	'<section class="section ' + className + '">' +
                '<header class="header">' +
                    '<h2>' + text + '</h2>' +
                '</header>' +
                '<section class="list">' +
                    '<ul class="list-group"></ul>' +
                '</section>' +
                '<footer class="bottom panel-footer">' +
                    '<input type="button" value="'+ buttonValue +'" class="add-all btn btn-primary btn-sm" tabindex="0">' +
                '</footer>' +
            '</section>';
}

function itemTemplate(item) {
    return  "<li class='list-item'>" +
                "<label>" +
                    "<input type='checkbox' class='checkbox'>" +
                    "<span class='item-title'>" + item.title + "</span><br>" +
                    "<span>" + item.subtext + "</span>" +
                "</label>" +
            "</li>";
}

function outputTemplate(item) {
    return  '<li class="icon-result ' + item.className + '">' + item.title + item.subtext +
                '<input type="button" class="trash-bin">' +
            '</li>';
}


