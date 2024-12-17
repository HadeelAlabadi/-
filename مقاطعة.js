//JavaScript to control the functionality
// Toggle To Do List visibility
document.querySelector('.STYLISH-TO-DO-LIST-button').addEventListener('click', function () {
    var todoList = document.querySelector('.todo-list');
    if (todoList.style.display === 'none' || todoList.style.display === '') {
        todoList.style.display = 'block';
    } else {
        todoList.style.display = 'none';
    }
});

// Toggle between list view and grid view
document.querySelector('.li-list').addEventListener('click', function () {
    document.querySelector('.view_wrap.list-view').style.display = 'block';
    document.querySelector('.view_wrap.grid-view').style.display = 'none';
    document.querySelector('.li-list').classList.add('active');
    document.querySelector('.li-grid').classList.remove('active');
});

document.querySelector('.li-grid').addEventListener('click', function () {
    document.querySelector('.view_wrap.list-view').style.display = 'none';
    document.querySelector('.view_wrap.grid-view').style.display = 'grid';
    document.querySelector('.li-list').classList.remove('active');
    document.querySelector('.li-grid').classList.add('active');
});
// Delete task functionality
document.querySelectorAll('.delete-btn').forEach(function (button) {
    button.addEventListener('click', function () {
        this.parentElement.remove();
    });
});

// Add new task functionality
document.getElementById('add-task-btn').addEventListener('click', function () {
    var taskInput = document.getElementById('new-task-input');
    var taskText = taskInput.value.trim();
    if (taskText) {
        var newTask = document.createElement('li');
        newTask.innerHTML = `
            <input type="checkbox" id="item${Date.now()}">
            <label for="item${Date.now()}">${taskText}</label>
            <button class="delete-btn"><i class="fas fa-trash-alt"></i></button>
        `;
        document.getElementById('task-list').appendChild(newTask);
        taskInput.value = '';
        newTask.querySelector('.delete-btn').addEventListener('click', function () {
            newTask.remove();
        });
    }
});

// Toggle dropdown visibility
document.querySelector('.dropdown-btn').addEventListener('click', function () {
    const dropdownContent = document.querySelector('.dropdown-content');
    dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
});

// Hide dropdown when clicking outside of it
window.addEventListener('click', function (event) {
    if (!event.target.matches('.dropdown-btn')) {
        const dropdowns = document.querySelectorAll('.dropdown-content');
        dropdowns.forEach(dropdown => {
            if (dropdown.style.display === 'block') {
                dropdown.style.display = 'none';
            }
        });
    }
});
