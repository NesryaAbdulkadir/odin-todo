export function mainContent() {
  const itemList = ["todo1", "todo2", "todo3"];

  const mainContent = document.createElement("div");
  mainContent.classList.add("mainContent");

  const projectHeader = document.createElement("div");
  projectHeader.classList.add("projectHeader");
  const projectHeaderH1 = document.createElement("h1");
  projectHeaderH1.innerText = "Project 3";
  const controls = document.createElement("div");
  controls.classList.add("controls");
  const listView = document.createElement("button");
  listView.innerText = "List View";
  listView.classList.add("controlBtn");
  const boardView = document.createElement("button");
  boardView.innerText = "Board View";
  boardView.classList.add("controlBtn");
  controls.append(listView, boardView);
  projectHeader.append(projectHeaderH1, controls);

  const content = document.createElement("div");
  content.classList.add("content");
  const contentContainer = document.createElement("ul");
  contentContainer.classList.add("contentContainer");
  itemList.forEach((item) => {
    const task = document.createElement("li");
    task.classList.add("task");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("checkbox");
    checkbox.id = item;
    const label = document.createElement("label");
    label.setAttribute("for", item);
    label.classList.add("label");
    label.innerText = item;
    task.append(checkbox, label);
    contentContainer.appendChild(task);
  });
  content.appendChild(contentContainer);
  mainContent.append(projectHeader, content);
  return mainContent;
}
