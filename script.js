const HEIGHT = window.screen.height;
const WIDTH = window.screen.width;
const DAY_SIZE = HEIGHT/24 + "pt";

const links = [
    "https://drive.google.com/file/d/1yfdCPMnQDBnyAVWRUlFOxxNQl8-6Be5Q/view"
]


function createDivs() {
    const days = []
    for(i=1; i<25; i++) {
        let day = document.createElement("div");
        day.id = i;
        day.classList.add("day");
        day.style.width = DAY_SIZE;
        day.style.height = DAY_SIZE;
        day.innerText = i;
        
        day.style.top = HEIGHT*((i-1)/24)+HEIGHT/7 + "pt";
        day.style.right = WIDTH*((i-1)%6/24) + "pt";
        days.push(day);
        document.body.appendChild(day);
    }
    return days;
}


function openDay(day) {
    const date = new Date().getDate();
    if(date >= day.id) {
        window.open(links[day.id - 1]);
    }
    else {
        alert("This door is not open yet!");
    }
}

const days = createDivs();
days.map((day) => day.addEventListener("click", () => openDay(day)));
