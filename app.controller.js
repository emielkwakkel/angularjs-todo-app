angular
    .module('todoApp')
    .controller('todoController', todoController);

function todoController() {
    var vm = this;
    vm.addTodo = addTodo;
    vm.todos = [];
    
    

    function addTodo() {
        // Add the todo the the array
        vm.todos.push(vm.desc);

        // Clear the input
        vm.desc = '';
        console.log(vm.todos);
        
    }
}