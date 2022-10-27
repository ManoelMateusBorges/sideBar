const controlToggle: HTMLElement = document.querySelector(".sidebar-toggle")!;
const sidebar = <HTMLElement>document.querySelector(".sidebar")!;
const  closeBtn = document.querySelector(".close-btn") as HTMLElement;

controlToggle.addEventListener("click", () => {

    // if(sidebar.classList.contains("show-sidebar")){
    //     sidebar.classList.remove("show-sidebar")
    // }else {
    //     sidebar.classList.add("show-sidebar")
    // }

    sidebar.classList.toggle("show-sidebar");
})

closeBtn.addEventListener("click", () => {
    sidebar.classList.remove("show-sidebar")
})