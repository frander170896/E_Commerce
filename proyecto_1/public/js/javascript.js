$(function () {
    $('#table').bootstrapTable({
        toolbar: ".toolbar",
        search: true,
        pagination: true,
        pageSize: 5,
        pageList: [5,10,25,50,100]   
    });
    
    $(window).resize(function () {
        $('#table').bootstrapTable('resetView');
    });    
});