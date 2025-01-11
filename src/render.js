import { sideBar } from "./Components/sideBar";

export function render() {
  const main = document.getElementById("main");
  const sideBarElement = sideBar();
  main.append(sideBarElement);
}
