import {
    navigation
} from './data.js';
import {
    project
} from './data.js';


function nav(x, clas) {
    const a = document.createElement('a');
    const linktext = document.createTextNode(`${navigation[x].name}`);
    a.append(linktext);
    a.title = `${navigation[x].name}`;
    a.href = `${navigation[x].link}`;
    document.querySelector(clas).append(a);
};



nav(0, ".een");
nav(1, ".twee");
nav(2, ".drie");

function events(x, clas) {
    const a = document.createElement('a');
    const linktext = document.createTextNode(`${project.events[x].name}`);
    a.append(linktext);
    a.title = `${project.events[x].name}`;
    a.href = `${project.events[x].link}`;
    document.querySelector(clas).append(a);
};

events(0, ".event1");
events(1, ".event2");
events(2, ".event3");
events(3, ".event4");

function button(x, clas) {
    let img = new Image();
    img.src = `${project.projecten[x].screenshots[0]}`;
    document.querySelector(clas).append(img);
    const h2 = document.createElement('h2');
    const name = document.createTextNode(`${project.projecten[x].author.firstName} ${project.projecten[x].author.lastName}`);
    h2.append(name);
    document.querySelector(clas).append(h2);
    const h1 = document.createElement('h1');
    const title = document.createTextNode(`${project.projecten[x].title}`);
    h1.append(title);
    document.querySelector(clas).append(h1);
    const ul = document.createElement('ul');
    const li1 = document.createElement('li');
    const li2 = document.createElement('li');
    const name1 = document.createTextNode(`${project.projecten[x].technologies[0].name}`);
    const name2 = document.createTextNode(`${project.projecten[x].technologies[1].name}`);
    li1.append(name1);
    li2.append(name2);
    ul.append(li1, li2);
    document.querySelector(clas).append(ul);
};

button(0, ".project1");
button(1, ".project2");
button(2, ".project3");
button(3, ".project4");
button(4, ".project5");
button(5, ".project6");
button(6, ".project7");
button(7, ".project8");
button(8, ".project9");

function openInfo(info, button) {
    const open = () => {
        document.querySelector(info).classList.remove("hidden")
    };
    document.querySelector(button).addEventListener("click", open);
};

openInfo(".project_info1", ".project1");
openInfo(".project_info2", ".project2");
openInfo(".project_info3", ".project3");
openInfo(".project_info4", ".project4");
openInfo(".project_info5", ".project5");
openInfo(".project_info6", ".project6");
openInfo(".project_info7", ".project7");
openInfo(".project_info8", ".project8");
openInfo(".project_info9", ".project9");

function kruisje(project, but) {
    let img = new Image();
    img.src = "../app/images/icoons/kruisje.png";
    const button = document.createElement("button");
    button.append(img);
    document.querySelector(project).append(button);
    button.classList.add(but)
};

kruisje(".project_info1", "close1");
kruisje(".project_info2", "close2");
kruisje(".project_info3", "close3");
kruisje(".project_info4", "close4");
kruisje(".project_info5", "close5");
kruisje(".project_info6", "close6");
kruisje(".project_info7", "close7");
kruisje(".project_info8", "close8");
kruisje(".project_info9", "close9");

function closeInfo(project, button) {
    const close = () => {
        document.querySelector(project).classList.add("hidden")
    };
    document.querySelector(button).addEventListener("click", close);
};


closeInfo(".project_info1", ".close1");
closeInfo(".project_info2", ".close2");
closeInfo(".project_info3", ".close3");
closeInfo(".project_info4", ".close4");
closeInfo(".project_info5", ".close5");
closeInfo(".project_info6", ".close6");
closeInfo(".project_info7", ".close7");
closeInfo(".project_info8", ".close8");
closeInfo(".project_info9", ".close9");



function fill(clas, x, screenshot) {
 const div = document.createElement('div');  
    if (screenshot > 3) {
        let img1 = new Image();
        img1.src = `${project.projecten[x].screenshots[0]}`;
        let img2 = new Image();
        img2.src = `${project.projecten[x].screenshots[1]}`;
        let img3 = new Image();
        img3.src = `${project.projecten[x].screenshots[2]}`;
        let img4 = new Image();
        img4.src = `${project.projecten[x].screenshots[3]}`;
        div.append(img1, img2, img3, img4);
    } else if (screenshot == 3) {
        let img1 = new Image();
        img1.src = `${project.projecten[x].screenshots[0]}`;
        let img2 = new Image();
        img2.src = `${project.projecten[x].screenshots[1]}`;
        let img3 = new Image();
        img3.src = `${project.projecten[x].screenshots[2]}`;
        div.append(img1, img2, img3);
    } else {
        let img1 = new Image();
        img1.src = `${project.projecten[x].screenshots[0]}`;
        let img2 = new Image();
        img2.src = `${project.projecten[x].screenshots[1]}`;
        div.append(img1, img2);
    }
    document.querySelector(clas).append(div);
    const h2 = document.createElement('h2');
    const name = document.createTextNode(`${project.projecten[x].author.firstName} ${project.projecten[x].author.lastName}`);
    h2.append(name);
    document.querySelector(clas).append(h2);
    const h1 = document.createElement('h1');
    const title = document.createTextNode(`${project.projecten[x].title}`);
    h1.append(title);
    document.querySelector(clas).append(h1);
    const ul = document.createElement('ul');
    const li1 = document.createElement('li');
    const li2 = document.createElement('li');
    const name1 = document.createTextNode(`${project.projecten[x].technologies[0].name}`);
    const name2 = document.createTextNode(`${project.projecten[x].technologies[1].name}`);
    li1.append(name1);
    li2.append(name2);
    ul.append(li1, li2);
    document.querySelector(clas).append(ul);
    const p = document.createElement('p');
    const synopsis = document.createTextNode(`${project.projecten[x].synopsis}`);
    p.append(synopsis);
    document.querySelector(clas).append(p);
};

fill (".project_info1", 0, 2);
fill (".project_info2", 1, 4);
fill (".project_info3", 2, 4);
fill (".project_info4", 3, 3);
fill (".project_info5", 4, 3);
fill (".project_info6", 5, 3);
fill (".project_info7", 6, 3);
fill (".project_info8", 7, 4);
fill (".project_info9", 8, 3);


function socials(x, clas) {
    let img = new Image();
    img.src = `${project.socials[x].img}`;
    img.onclick = function () {
        window.location.href = `${project.socials[x].link}`;
    };
    document.querySelector(clas).append(img);
};

socials(0, ".website");
socials(1, ".linkedin");
socials(2, ".facebook");
socials(3, ".instagram");
socials(4, ".youtube");