let projects = JSON.parse(localStorage.getItem('projects')) || [];
let todos = JSON.parse(localStorage.getItem('todos')) || [];


function createproject(){
    return {
        Name :prompt("enter project name:"),
        desc : prompt("enter description for the project:"),
        date: prompt("enter expected completion date:"),
    }
}

function createTodo(projectName, task, description, date, priority ){
    return {
        projectName:prompt("enter project name:"),
        Name :prompt("enter task:"),
        desc : prompt("enter description of task:"),
        date: prompt("enter due date:"),
        priority: prompt("enter priority level (urgent/medium/non-priority):"),
    }
}


function createProjectElement(){

    const projectData = createproject()

    projects.push(projectData);
    localStorage.setItem('projects', JSON.stringify(projects));


    const maincontainer = document.createElement("div")
    maincontainer.classList.add("maincontainer")
    document.body.append(maincontainer)
    maincontainer.setAttribute('id', projectData.Name)

    const container = document.createElement("div")
    container.classList.add("container")
    maincontainer.append(container)
   
    const title = document.createElement("h2")
    const disc = document.createElement("h3")
    const due = document.createElement("h4")
    title.innerText = projectData.Name
    disc.innerText = projectData.desc
    due.innerText = "expected completion date: " + projectData.date

    
    const deleteBtn = document.createElement("button")
    deleteBtn.innerText = "Delete Project"
    deleteBtn.addEventListener('click', () => {
    // Remove from DOM
    maincontainer.remove()
    // Remove project from array and save
    projects = projects.filter(p => p.Name !== projectData.Name)
    localStorage.setItem('projects', JSON.stringify(projects))
    // Also remove its todos
    todos = todos.filter(t => t.projectName !== projectData.Name)
    localStorage.setItem('todos', JSON.stringify(todos))
    })
    container.append(title, disc, due, deleteBtn)
}


function addToDo(){
    const todoData = createTodo()

    if(document.getElementById(todoData.projectName) == null){
        alert("project must be created first")
        return
    }

    todos.push(todoData);
    localStorage.setItem('todos', JSON.stringify(todos));  // ← save

        const Todocontainer = document.getElementById(todoData.projectName)
        const taskCard = document.createElement("div")
        taskCard.classList.add("taskcard")
        Todocontainer.append(taskCard)
    
    

     const title = document.createElement("h4")
    const disc = document.createElement("h5")
    const due = document.createElement("hp")
    const priority = document.createElement("div")
    title.innerText = todoData.Name
    disc.innerText = todoData.desc
    due.innerText = "To Do By: " + todoData.date
    priority.innerText = "priority level: " + todoData.priority

    const completeBtn = document.createElement("button")
    completeBtn.innerText = "Complete"
    completeBtn.addEventListener('click', () => {
    // Remove from DOM
    title.remove(); disc.remove(); due.remove(); priority.remove(); completeBtn.remove()
    // Remove from array and save
    todos = todos.filter(t => t.Name !== todoData.Name || t.projectName !== todoData.projectName)
    localStorage.setItem('todos', JSON.stringify(todos))
    })
    taskCard.append(title, disc, due, priority, completeBtn)


}


// Rebuild projects from localStorage on page load
projects.forEach(projectData => {
    const maincontainer = document.createElement("div")
    maincontainer.classList.add("maincontainer")
    document.body.append(maincontainer)
    maincontainer.setAttribute('id', projectData.Name)

    const container = document.createElement("div")
    container.classList.add("container")
    maincontainer.append(container)

    const title = document.createElement("h2")
    const disc = document.createElement("h3")
    const due = document.createElement("h4")
    title.innerText = projectData.Name
    disc.innerText = projectData.desc
    due.innerText = "expected completion date: " + projectData.date

    const deleteBtn = document.createElement("button")
    deleteBtn.innerText = "Delete Project"
    deleteBtn.addEventListener('click', () => {
    // Remove from DOM
    maincontainer.remove()
    // Remove project from array and save
    projects = projects.filter(p => p.Name !== projectData.Name)
    localStorage.setItem('projects', JSON.stringify(projects))
    // Also remove its todos
    todos = todos.filter(t => t.projectName !== projectData.Name)
    localStorage.setItem('todos', JSON.stringify(todos))
    })
    container.append(title, disc, due, deleteBtn)
})

// Rebuild todos from localStorage on page load
todos.forEach(todoData => {
    const Todocontainer = document.getElementById(todoData.projectName)
    if (!Todocontainer) return

       
        const taskCard = document.createElement("div")
        taskCard.classList.add("taskcard")
        Todocontainer.append(taskCard)
    
    

     const title = document.createElement("h4")
    const disc = document.createElement("h5")
    const due = document.createElement("hp")
    const priority = document.createElement("div")
    title.innerText = todoData.Name
    disc.innerText = todoData.desc
    due.innerText = "To Do By: " + todoData.date
    priority.innerText = "priority level: " + todoData.priority

    const completeBtn = document.createElement("button")
    completeBtn.innerText = "Complete"
    completeBtn.addEventListener('click', () => {
    // Remove from DOM
    title.remove(); disc.remove(); due.remove(); priority.remove(); completeBtn.remove()
    // Remove from array and save
    todos = todos.filter(t => t.Name !== todoData.Name || t.projectName !== todoData.projectName)
    localStorage.setItem('todos', JSON.stringify(todos))
    })
    taskCard.append(title, disc, due, priority, completeBtn)
})




const btnTask = document.querySelector('#new-task');

btnTask.addEventListener('click', () => {
  addToDo();
});

const btnProject = document.querySelector('#new-project');

btnProject.addEventListener('click', () => {
  createProjectElement();
});