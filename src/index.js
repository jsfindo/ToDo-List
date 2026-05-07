

function createproject(projectName, projectdesc, date ){
    return {
        Name :projectName,
        desc : projectdesc,
        date: date,
    }
}

function createTodo(projectName, task, description, date, priority ){
    return {
        projectName:projectName,
        Name :task,
        desc : description,
        date: date,
        priority: priority,
    }
}


function createProjectElement(){

    const projectData = createproject()


    const maincontainer = document.createElement("div")
    maincontainer.classList.add("maincontainer")
    document.body.append(maincontainercontainer)
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

    container.append(title)
    container.append(disc)
    container.append(due)
}


function addToDo(){
    const todoData = createTodo()

    if(document.getElementById(todoData.projectName) == null){
        alert("project must be created first")
    }else{
        const Todocontainer = document.getElementById(todoData.projectName)
    }
    

     const title = document.createElement("h4")
    const disc = document.createElement("h5")
    const due = document.createElement("hp")
    const priority = document.createElement("div")
    title.innerText = todoData.Name
    disc.innerText = todoData.desc
    due.innerText = "To Do By: " + todoData.date
    priority.innerText = "*" * todoData.priority

    Todocontainer.append(title)
    Todocontainer.append(disc)
    Todocontainer.append(due)
    Todocontainer.append(priority)


}