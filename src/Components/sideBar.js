export function sideBar() {
  const itemList = ["todo1", "todo2", "todo3"];
  const sideBar = document.createElement("div");
  sideBar.classList.add("sideBar");
  const header = document.createElement("h1");
  header.innerText = "Odin Todo";
  const sideBarContent = document.createElement("div");
  sideBarContent.classList.add("sideBarContent");
  const sideBarItem = document.createElement("div");
  sideBarItem.classList.add("sideBarItem");
  const itemHeader = document.createElement("h2");
  itemHeader.innerText = "Projects";
  const projects = document.createElement("ul");
  projects.classList.add("projects");
  itemList.forEach((item) => {
    const projectList = document.createElement("li");
    projectList.innerText = item;
    projects.appendChild(projectList);
  });
  sideBarItem.append(itemHeader, projects);
  const addProject = document.createElement("button");
  addProject.innerText = "Add Project";
  addProject.classList.add("btn");
  sideBarContent.append(sideBarItem, addProject);
  sideBar.append(header, sideBarContent);
  return sideBar;
}
