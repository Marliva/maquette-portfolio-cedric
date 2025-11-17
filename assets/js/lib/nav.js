const navImg = document.getElementById("navImg");
const header = document.querySelector("header");
const work = document.getElementById("workContainer");

navImg.addEventListener("click", () => {
    const div = document.createElement("div");
    if (header.contains(document.getElementById("portfolioNav"))) {
        header.removeChild(document.getElementById("portfolioNav"));
    } else {
        div.id = "portfolioNav";
        header.appendChild(div);
        const workClone = work.cloneNode(true);
        workClone.id = "portfolio";
        div.appendChild(workClone);
    }
});
export default navImg;