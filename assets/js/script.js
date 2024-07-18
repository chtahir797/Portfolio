//media query code
let width = window.matchMedia("(width < 1200px)");
const menu = document.querySelector(".menu-list");
const hamburger = document.querySelector("#hamburger");
const cross = document.querySelector(".cross");
width.addEventListener("change", () => {
  if (width.matches) {
    menu.style.display = "none";
    hamburger.style.display = "block";
  } else {
    menu.style.display = "block";
    hamburger.style.display = "none";
  }
});

hamburger.addEventListener("click", () => {
  // menu.style.display = menu.style.display === 'none' ? 'block' : 'none';
  if (menu.style.display === "none" || menu.style.display === "") {
    menu.style.display = "block";
  } else {
    menu.style.display = "none";
  }
});

const certificatesSlider = document.querySelector(".certificates-slider");

document.addEventListener("DOMContentLoaded", function () {
  const certificates = document.querySelectorAll(".certificate");
  const certificatePopup = document.getElementById("certificate-popup");
  const popupImage = document.getElementById("popup-image");
  const closePopup = document.querySelector(".close-popup");

  certificates.forEach((certificate) => {
    certificate.addEventListener("click", function () {
      const certificateImage = this.querySelector("img").src;
      popupImage.src = certificateImage;
      certificatePopup.style.display = "flex";
    });
  });

  closePopup.addEventListener("click", function () {
    certificatePopup.style.display = "none";
  });
});
const projects = [
  {
    id: 1,
    title: "Password Generator App",
    description:
      "A React-based application that generates secure passwords, allowing users to specify the length and include special characters and numbers, with an option to copy the generated password.",
    link: "https://github.com/chtahir797/React-Practice-Projects/tree/main/password-generator",
    demo: "https://passgenbytahir.netlify.app/",
    tags: ["React", "JavaScript"],
  },
  {
    id: 2,
    title: "Blog App",
    description:
      "An application for managing and displaying blogs, allowing users to add, edit, and remove blogs. It includes features like Quill editor integration, local storage for data persistence, and responsive design.",
    link: "https://github.com/chtahir797/Blog-APP",
    demo: "https://chtahir797.github.io/Blog-APP",
    tags: ["JavaScript", "HTML", "CSS"],
  },
  {
    id: 3,
    title: "Notes App",
    description:
      "A simple note application where users can add and delete notes. Each note is stored locally and can be edited or deleted as needed.",
    link: "https://github.com/chtahir797/NotesApp",
    demo: "https://chtahir797.github.io/NotesApp/",
    tags: ["JavaScript", "HTML", "CSS"],
  },

  {
    id: 4,
    title: "Todo List App",
    description:
      "A basic todo list application where users can add, edit, and delete tasks. Tasks are stored locally using browser storage and persist between sessions.",
    link: "https://github.com/chtahir797/Simple-TodoList-JS",
    demo: "https://chtahir797.github.io/Simple-TodoList-JS/",
    tags: ["JavaScript", "HTML", "CSS"],
  },
];



let currentProjectIndex = 0;
const projectsPerPage = 3; 
let showMore = true; 

function displayProjects() {
  const projectGrid = document.getElementById("project-grid");
  const showMoreBtn = document.getElementById("show-more");
  const loadingIcon = document.getElementById("loading-icon");
  loadingIcon.style.display = "block";
  projectGrid.innerHTML = "";
  const endIndex = currentProjectIndex + projectsPerPage;
  setTimeout(() => {
    for (let i = currentProjectIndex; i < endIndex; i++) {
      if (i >= projects.length) {
        break; 
      }

      const project = projects[i];
      const projectItem = document.createElement("div");
      projectItem.classList.add("project-item");
      projectItem.setAttribute("data-title", project.title);
      projectItem.innerHTML = `
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <div class="tags">
          ${project.tags
            .map((tag) => `<span class="tag">${tag}</span>`)
            .join(" ")}
        </div>
        <div class="links">
          <a href="${project.link}" target="_blank"><img src="assets/images/code.svg" alt="Code"></a>
          <a href="${project.demo}" target="_blank"><img src="assets/images/redirect.svg" alt="Demo"></a>
        </div>
      `;
      projectGrid.appendChild(projectItem);
    }
    loadingIcon.style.display = "none";
    if (currentProjectIndex + projectsPerPage >= projects.length) {
      showMoreBtn.textContent = "Show Less";
    } else {
      showMoreBtn.textContent = "Show More";
    }
    VanillaTilt.init(document.querySelectorAll(".project-item"), {
      max: 25,
      speed: 400,
      glare: true,
      "max-glare": 0.5,
    });
  }, 1000); 
      // Initialize Tilt.js on project items
     
}
document.getElementById("show-more").addEventListener("click", () => {
  if (currentProjectIndex + projectsPerPage >= projects.length) {
    currentProjectIndex = 0;
    showMore = true;
  } else {
    currentProjectIndex += projectsPerPage; 
    showMore = true; 
  }
  
  displayProjects();


  
});
displayProjects();

// tilt effect

const tilt = $(".certificate img").tilt();
tilt.on("tilt.mouseEnte", function (e, transforms) {});
