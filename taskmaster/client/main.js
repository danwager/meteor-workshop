//Template.registerHelper('tasks', function() {
//    return [{name:"HC JSON Task 1"}
//        , {name:"HC JSON Task 2"}
//        , {name:"HC JSON Task 3"}];
//});


Template.taskList.helpers({ tasks: function() {
    return [
        {name:"HC JSON Task 1"},
        {name:"HC JSON Task 2"},
        {name:"HC JSON Task 3"}
        ]
    }
})