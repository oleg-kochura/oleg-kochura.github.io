$(document).ready(function () {
    var selectedItems = [];

    (function init(data) {
        var items = data.objects;
        items.forEach(function (item, objIndex) {
            renderList(item, objIndex);
        })
    })(data());

    function renderList(obj, objIndex) {
        var addAllBtn = $(".add-all")[objIndex],
            list = $(".list-group")[objIndex],
            element,
            li,
            checkbox;

        obj.items.forEach(function (item, i) {
            li = "<li class='list-item'>" +
                     "<label>" +
                         "<input type='checkbox' class='checkbox'>" +
                         "<span class='item-title'>" + item.title + "</span><br>" +
                         "<span>" + item.subtext + "</span>" +
                     "</label>" +
                 "</li>";

            $(list).append(li);
            element = $('.' + obj.className + ' li')[i];
            item.index = i;
            item.className = obj.className;
            checkbox = $('.' + obj.className + ' ' + '.checkbox')[i];

            //binding events
            $(element).on("change", item, check);

            //bind model to view (2-way data-binding)
            bindModelInput(item,'checked', checkbox);
        });
        $(addAllBtn).on("click", obj, toggleAll)
    }
        // связываем представление с моделью, 2-сторонний дата-байндинг
    function bindModelInput(obj, property, domElem) {
        Object.defineProperty(obj, property, {
            get: function() { return domElem.checked; },
            set: function(newValue) { domElem.checked = newValue; },
            configurable: true
        });
    }
        //проверка статуса элемента checked == true или checked == false
    function check(event) {
        event.data.checked ? select(event.data) : unselect(event.data);
        updateAddAllBtn(event.data.className);
        outputSelected();
    }
        //добавление элемента в массив
    function select(el) {
        selectedItems.push(el);
    }
        // удаление элемента из массива
    function unselect(el) {
        selectedItems.forEach(function (item, i) {
            if (el.index === item.index && el.className === item.className) {
                selectedItems.splice(i, 1);
            }
        });
    }

    function toggleAll(event) {
        if (this.value === "ADD ALL") {
            event.data.items.forEach(function (item) {
                if (!item.checked) {
                    item.checked = true;
                    select(item);
                }
            });
        } else {
            event.data.items.forEach(function (item) {
                item.checked = false;
                unselect(item);
            });
        }
        updateAddAllBtn(event.data.className);
        outputSelected();
    }

    function updateAddAllBtn(className) {
        var checkedLength = $('.' + className + ' input:checked').length,
            itemsLength = $('.' + className + ' input[type=checkbox]').length;

        if (itemsLength === checkedLength) {
            $('.' + className + ' .add-all').attr('value', 'REMOVE ALL');
        }
        else $('.' + className + ' .add-all').attr('value', 'ADD ALL');
    }

    function outputSelected() {
        var li,
            list = $("#chosenItems");

        list.empty();
        selectedItems.forEach(function (item, i) {
            li = '<li class="icon-result">' + item.title + ' ' + item.subtext + '<input type="button" class="trash-bin">' + '</li>';

            list.append(li);
            $($("#chosenItems .icon-result")[i]).addClass(item.className);
            $($('.trash-bin')[i]).on('click', item, deleteLi);
        });

        $('.counter').html(selectedItems.length);
    }

    function deleteLi(event) {
        unselect(event.data);
        event.data.checked = false;
        outputSelected(event.data.className);
        updateAddAllBtn(event.data.className);
    }

    function cleanForm() {
        selectedItems = [];

        $('.checkbox').prop('checked', false);
        $('#name').val('');
        $('#email').val('');
        $('#message').val('');
        $("#chosenItems").empty();
        $('.counter').html(selectedItems.length);
        $('.add-all').val('ADD ALL');
    }

    $('#closeModal').on('click', cleanForm);
    $('#closeModalWin').on('click', cleanForm);

    $('#send').on("click", function () {
        $('#modalName').html('Name: ' +  $('#name').val());
        $('#modalMail').html('Email: ' +  $('#email').val());
        $('#modalMessage').html('Message: ' +  $('#message').val());
        $('#modalCount').html('You send: ' + selectedItems.length + ' articles');
    });

    $('.carousel').slick({
        arrows: false,
        dots: true,
        infinite: false
    });
});