$(document).ready(function () {
    var selectedItems = [],
        addAllButton = 'ADD ALL',
        removeAllButton = 'REMOVE ALL',
        container = $('#content'),
        chosenItems = $("#chosenItems");

    data().forEach(function (item) {
        renderBlocks(item);
    }); 

    function renderBlocks(obj) {
        container.append( blockTemplate(obj.headText, obj.className, addAllButton) );
        renderList(obj);
        $('.' + obj.className + ' .add-all').on("click", obj, toggleAll);
    }

    function renderList(obj)  {
        var list = $('.' + obj.className + ' .list-group'),
            checkbox;

        obj.items.forEach(function (item, i) {
            item = addIndexAndClassToItem(item, i, obj.className);
            list.append( itemTemplate(item) );
            checkbox = $('.' + item.className + ' ' + '.checkbox')[i];
            $(checkbox).on("change", item, check);
            bindModelInput(item, 'checked', checkbox);
        });
    }

    function addIndexAndClassToItem(elementData, i, className) {
        elementData.index = i;
        elementData.className = className;
        return elementData;
    }

    function check(event) {
        event.data.checked ? select(event.data) : unSelect(event.data);
        updateAddAllBtn(event.data.className);
        outputSelected();
    }

    function select(el) {
        selectedItems.push(el);
    }

    function unSelect(el) {
        selectedItems.forEach(function (item, i) {
            if (el.index === item.index && el.className === item.className) {
                selectedItems.splice(i, 1);
            }
        });
    }

    function toggleAll(event) {
        event.data.items.forEach(function (item) {
            if (checkAddAllStatus(event) && !item.checked) {
                item.checked = true;
                select(item);
            } else if (!checkAddAllStatus(event)) {
                item.checked = false;
                unSelect(item);
            }
        });
        updateAddAllBtn(event.data.className);
        outputSelected();
    }

    function checkAddAllStatus(event) {
        return event.target.value === addAllButton;
    }

    function counter() {
        $('.counter').html(selectedItems.length);
    }

    function updateAddAllBtn(className) {
        var checkedLength = $('.' + className + ' input[type=checkbox]:checked').length,
            itemsLength = $('.' + className + ' input[type=checkbox]').length,
            button = $('.' + className + ' .add-all');

        itemsLength === checkedLength ? button.val(removeAllButton) : button.val(addAllButton);
    }

    function outputSelected() {
        chosenItems.empty();
        selectedItems.forEach(function (item, i) {
            chosenItems.append( outputTemplate(item) );
            $($('.trash-bin')[i]).on('click', item, deleteLi);
        });
        counter();
    }

    function deleteLi(event) {
        unSelect(event.data);
        event.data.checked = false;
        outputSelected();
        updateAddAllBtn(event.data.className);
    }

    function bindModelInput(obj, property, domElem) {
        Object.defineProperty(obj, property, {
            get: function() { return domElem.checked; },
            set: function(newValue) { domElem.checked = newValue; },
            configurable: true
        });
    }

    function cleanForm() {
        selectedItems = [];
        $('.checkbox').prop('checked', false);
        $('#name').val('');
        $('#email').val('');
        $('#message').val('');
        $('.add-all').val(addAllButton);
        $("#chosenItems").empty();
        counter();
    }

    $('#send').on("click", function () {
        $('#modalName').html('Name: ' +  $('#name').val());
        $('#modalMail').html('Email: ' +  $('#email').val());
        $('#modalMessage').html('Message: ' +  $('#message').val());
        $('#modalCount').html('You send: ' + selectedItems.length + ' articles');
    });

    $('#closeModal').on('click', cleanForm);
    $('#closeModalWin').on('click', cleanForm);
    $('.carousel').slick({ arrows: false, dots: true, infinite: false });

});