$(document).ready(function () {
    var selectedItems = [];
    
    data().objects.forEach(function (item, objIndex) {
        renderList(item, objIndex);
    });

    function renderList(obj, objIndex) {
        var addAllBtn = $(".add-all")[objIndex],
            list = $(".list-group")[objIndex],
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
            item.index = i;
            item.className = obj.className;
            checkbox = $('.' + obj.className + ' ' + '.checkbox')[i];

            $(checkbox).on("change", item, check);
            bindModelInput(item,'checked', checkbox);
        });
        $(addAllBtn).on("click", obj, toggleAll)
    }

    function bindModelInput(obj, property, domElem) {
        Object.defineProperty(obj, property, {
            get: function() { return domElem.checked; },
            set: function(newValue) { domElem.checked = newValue; },
            configurable: true
        });
    }

    function check(event) {
        event.target.checked ? select(event.data) : unSelect(event.data);
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
        	if (event.target.value === "ADD ALL" && !item.checked) {
        		item.checked = true;
				select(item);
        	} else if (event.target.value === "REMOVE ALL") {
                item.checked = false;
                unSelect(item);
        	}
        });
        updateAddAllBtn(event.data.className);
        outputSelected();
    }

    function updateAddAllBtn(className) {
        var checkedLength = $('.' + className + ' input[type=checkbox]:checked').length,
            itemsLength = $('.' + className + ' input[type=checkbox]').length,
            button = $('.' + className + ' .add-all');

        itemsLength === checkedLength ? button.val('REMOVE ALL') : button.val('ADD ALL');
    }

    function outputSelected() {
        var list = $("#chosenItems"),
            li;

        list.empty();
        selectedItems.forEach(function (item, i) {
            li = '<li class="icon-result ' + item.className + '">' + item.title + item.subtext + 
                    '<input type="button" class="trash-bin">' + 
                 '</li>';

            list.append(li);
            $($('.trash-bin')[i]).on('click', item, deleteLi);
        });
        $('.counter').html(selectedItems.length);
    }

    function deleteLi(event) {
        unSelect(event.data);
        event.data.checked = false;
        outputSelected();
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

    $('.carousel').slick({ arrows: false, dots: true, infinite: false });
});