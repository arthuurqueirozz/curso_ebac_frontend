$(document).ready(() =>{
    

    $('form').on('submit' ,function (e) { 
        e.preventDefault();
        const taskName = $('#task-name').val();      

        const newTask = `<li><a>${taskName}</a></li>`

        $(newTask).appendTo('ul');



    });

    $('ul').on('click', 'li', function () {
        $(this).css('text-decoration', 'line-through');
    })
})


