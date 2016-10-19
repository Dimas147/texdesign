function _checkboxRadio() {

    function insertAfter(elem, refElem) {
        var parent = refElem.parentNode, next = refElem.nextSibling;
        if (next) {
            return parent.insertBefore(elem, next);
        } else {
            return parent.appendChild(elem);
        }
    }

    var items = document.querySelectorAll('[type="checkbox"]:not(.filed-upgrade):not(.icon):not(.hidden),[type="radio"]:not(.filed-upgrade):not(.icon):not(.hidden)'),
        itemsLength = items.length,
        label, id;

    while(itemsLength--){
        id = items[itemsLength].id;

        if(!id){
            items[itemsLength].id = id = 'chr-' + itemsLength;
        }

        items[itemsLength].classList.add('filed-upgrade');

        if(items[itemsLength].parentNode.className.indexOf('btn-group') == -1){
            label = document.createElement('LABEL');
            label.classList.add('checkbox_radio');
            label.setAttribute('for', id);
            insertAfter(label, items[itemsLength]);
        }

        if(items[itemsLength].parentNode.nodeName == 'LABEL'){
            items[itemsLength].parentNode.setAttribute('for', id);
        }
    }
}
_checkboxRadio();

//$(function(){
//    $('body').on('DOMNodeInserted', function(event) {
//        if (event.type === 'DOMNodeInserted') {
//            _checkboxRadio();
//        } else {
//        }
//    });
//});
//
//$(document).ajaxStop(function(){
//    _checkboxRadio();
//});