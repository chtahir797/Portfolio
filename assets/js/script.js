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

const container = document.querySelector('.container');
const blogContainer = document.querySelector('.blog-container');

hamburger.addEventListener("click", () => {
  const isMenuHidden = menu.style.display === "none" || menu.style.display === "";
  menu.style.display = isMenuHidden ? "block" : "none";
  
  const positionStyle = isMenuHidden ? 'position: sticky; z-index: -1;' : '';
  container.style.cssText = positionStyle;
  blogContainer.style.cssText = positionStyle;
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
    title: "Password Generator",
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
  {
    id: 5,
    title: "Weather App",
    description:
      "A weather application that fetches and displays current weather conditions and forecasts for any location using a public weather API.",
    link: "https://github.com/chtahir797/Weather-App",
    demo: "https://chtahir797.github.io/Weather-App/",
    tags: ["JavaScript", "API"],
  },
  {
    "id": 6,
    "title": "GitHub User Explorer",
    "description": "Check out my GitHub User Explorer app built with React, Tailwind CSS, TanStack Query, and TypeScript. Explore user profiles and repositories with a sleek dark mode! 🌟",
    "link": "https://github.com/chtahir797/React-Practice-Projects/tree/main/ExploreGithubUsers",
    "demo": "https://exploregithubusers.netlify.app/",
    "tags": ["React", "Tailwind CSS", "TanStack Query", "TypeScript"]
},
{
  "id": 7,
  "title": "Authentication App",
  "description": "Explore my Authentication App built with Next.js, Tailwind CSS, and Firebase. This app offers a seamless sign-in experience, complete with email/password authentication and responsive design. Check it out now! 🔒",
  "link": "https://github.com/chtahir797/authentication-app",
  "demo": "https://authentication-app-by-tahir.vercel.app/signin",
  "tags": ["Next.js", "Tailwind CSS"]
}


  
];


let currentProjectIndex = 0;
const projectsPerPage = 3;

function displayProjects() {
  const projectGrid = document.getElementById("project-grid");
  const nextBtn = document.getElementById("next");
  const prevBtn = document.getElementById("previous");
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

    // Update button states based on the current project index
    if (currentProjectIndex + projectsPerPage >= projects.length) {
      nextBtn.disabled = true;
    } else {
      nextBtn.disabled = false;
    }

    if (currentProjectIndex === 0) {
      prevBtn.disabled = true;
    } else {
      prevBtn.disabled = false;
    }
    // Initialize Tilt.js on project items
    VanillaTilt.init(document.querySelectorAll(".project-item"), {
      max: 25,
      speed: 400,
      glare: true,
      "max-glare": 0.5,
    });

  }, 1000);
}

document.getElementById("next").addEventListener("click", () => {
  if (currentProjectIndex + projectsPerPage < projects.length) {
    currentProjectIndex += projectsPerPage;
  }
  displayProjects();
});

document.getElementById("previous").addEventListener("click", () => {
  if (currentProjectIndex > 0) {
    currentProjectIndex -= projectsPerPage;
  }
  displayProjects();
});

displayProjects();


document.getElementById('send-email').addEventListener('click', function() {

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Compose email content
  const subject = encodeURIComponent('Message from ' + name);
  const body = encodeURIComponent('Email: ' + email + '\n\nMessage:\n' + message);
  const mailtoLink = 'mailto:chtahir797@gmail.com?subject=' + subject + '&body=' + body;

  // Detect device type
  const isMobile = /Mobi|Android/i.test(navigator.userAgent);
  if (isMobile) {
    window.location.href = mailtoLink;
  } else {
    setTimeout(() => {
      // This creates a Gmail URL to open in a new tab
      const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=chtahir797@gmail.com&su=${subject}&body=${body}`;
      window.open(gmailUrl, '_blank');
    }, 2000);
  }
  showToaster("Opening Gmail ...");

});


function showToaster(message) {
  const toaster = document.getElementById("toaster");
  toaster.textContent = message;
  toaster.classList.add("show");
  setTimeout(() => {
    toaster.classList.remove("show");
  }, 3000);
}


// tilt effect

const tilt = $(".certificate img").tilt();
tilt.on("tilt.mouseEnte", function (e, transforms) {});
