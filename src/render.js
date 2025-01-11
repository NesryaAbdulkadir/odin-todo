import { mainContent } from "./Components/mainContent";
import { sideBar } from "./Components/sideBar";

export function render() {
  const main = document.getElementById("main");
  const sideBarElement = sideBar();
  const mainContentElement = mainContent();
  main.append(sideBarElement, mainContentElement);
}
