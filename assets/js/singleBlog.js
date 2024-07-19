// // Get the blog ID from the URL query parameters
// const urlParams = new URLSearchParams(window.location.search);
// const blogId = urlParams.get("id");

// // Fetch blog data from data.json
// fetch("data.json")
//   .then((response) => response.json())
//   .then((data) => {
//     const blog = data.find((b) => b.id === blogId);

//     if (blog) {
//       const blogDetail = document.getElementById("blog-detail");

//       // Construct blog details HTML
//       let blogHTML = `
//         <div class="blog-title">${blog.title}</div>
//         <div class="blog-date">Published on: ${blog.date_published}</div>
//         <div class="blog-author">Author: ${blog.author}</div>
//         <div class="blog-introduction">${blog.content.introduction}</div>
//       `;

//       blogHTML += blog.content.sections.map((section) => `
//         <div class="section">
//           <div class="section-title">${section.section_title}</div>
//           <div class="section-content">${section.section_content}</div>
//           ${section.code_snippet ? `
//             <pre class="code-snippet">
//               <code>${escapeHTML(section.code_snippet)}</code>
//               <button class="copy-btn" data-code="${encodeURIComponent(section.code_snippet)}">
//                 <img src="assets/images/copy.svg" alt="Copy">
//               </button>
//             </pre>
//           ` : ''}
//           ${section.images ? section.images.map((image) => `
//             <img class="blog-image" src="images/${image}" alt="${image}">
//           `).join('') : ''}
//           ${section.additional_info ? `
//             <div class="additional-info">${section.additional_info}</div>
//           ` : ''}
//           ${section.recommendation ? `
//             <div class="recommendation">${section.recommendation}</div>
//           ` : ''}
//         </div>
//       `).join('');

//       blogHTML += '<a class="back-button" href="blogs.html">Back to Blog List</a>';

//       blogDetail.innerHTML = blogHTML;

//       // Attach event listeners for copy buttons
//       document.querySelectorAll('.copy-btn').forEach((btn) => {
//         btn.addEventListener('click', (event) => {
//           const code = decodeURIComponent(event.currentTarget.getAttribute('data-code'));
//           copyCode(code);
//         });
//       });

//     } else {
//       document.getElementById("blog-detail").innerHTML = "<p>Blog not found.</p>";
//     }
//   })
//   .catch((error) => console.error("Error fetching blog data:", error));

// function escapeHTML(html) {
//   return html
//     .replace(/&/g, '&amp;')
//     .replace(/</g, '&lt;')
//     .replace(/>/g, '&gt;')
//     .replace(/"/g, '&quot;')
//     .replace(/'/g, '&#039;');
// }

// function copyCode(code) {
//   navigator.clipboard.writeText(code)
//     .then(() => {
//       showToaster("Code copied to clipboard!");
//     })
//     .catch((err) => console.error("Failed to copy code: ", err));
// }

// function showToaster(message) {
//   const toaster = document.getElementById("toaster");
//   toaster.textContent = message;
//   toaster.classList.add("show");
//   setTimeout(() => {
//     toaster.classList.remove("show");
//   }, 3000);
// }
// Initialize global variables
let currentBlogIndex = 0;
let blogs = [];

// Fetch blog data from data.json
fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    blogs = data; // Store blog data
    const urlParams = new URLSearchParams(window.location.search);
    const blogId = urlParams.get("id");
    
    // Find and set the initial blog index based on URL
    if (blogId) {
      currentBlogIndex = blogs.findIndex((b) => b.id === blogId);
    }

    if (currentBlogIndex === -1) {
      currentBlogIndex = 0; // Default to the first blog if not found
    }

    displayBlog(currentBlogIndex); // Display the blog based on current index
    updatePaginationButtons(); // Update pagination button states
  })
  .catch((error) => console.error("Error fetching blog data:", error));

// Function to display blog based on index
function displayBlog(index) {
  if (index < 0 || index >= blogs.length) {
    document.getElementById("blog-detail").innerHTML = "<p>Blog not found.</p>";
    return;
  }

  const blog = blogs[index];
  const blogDetail = document.getElementById("blog-detail");

  // Construct blog details HTML
  let blogHTML = `
    <div class="blog-title">${blog.title}</div>
    <div class="blog-date">Published on: ${blog.date_published}</div>
    <div class="blog-author">Author: ${blog.author}</div>
    <div class="blog-introduction">${blog.content.introduction}</div>
  `;

  blogHTML += blog.content.sections.map((section) => `
    <div class="section">
      <div class="section-title">${section.section_title}</div>
      <div class="section-content">${section.section_content}</div>
      ${section.code_snippet ? `
        <pre class="code-snippet">
          <code>${escapeHTML(section.code_snippet)}</code>
          <button class="copy-btn" data-code="${encodeURIComponent(section.code_snippet)}">
            <img src="assets/images/copy.svg" alt="Copy">
          </button>
        </pre>
      ` : ''}
      ${section.images ? section.images.map((image) => `
        <img class="blog-image" src="images/${image}" alt="${image}">
      `).join('') : ''}
      ${section.additional_info ? `
        <div class="additional-info">${section.additional_info}</div>
      ` : ''}
      ${section.recommendation ? `
        <div class="recommendation">${section.recommendation}</div>
      ` : ''}
    </div>
  `).join('');


  blogDetail.innerHTML = blogHTML;

  // Attach event listeners for copy buttons
  document.querySelectorAll('.copy-btn').forEach((btn) => {
    btn.addEventListener('click', (event) => {
      const code = decodeURIComponent(event.currentTarget.getAttribute('data-code'));
      copyCode(code);
    });
  });
}

// Function to escape HTML characters
function escapeHTML(html) {
  return html
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

// Function to copy code to clipboard
function copyCode(code) {
  navigator.clipboard.writeText(code)
    .then(() => {
      showToaster("Code copied to clipboard!");
    })
    .catch((err) => console.error("Failed to copy code: ", err));
}

// Function to show toaster notification
function showToaster(message) {
  const toaster = document.getElementById("toaster");
  toaster.textContent = message;
  toaster.classList.add("show");
  setTimeout(() => {
    toaster.classList.remove("show");
  }, 3000);
}

// Function to update pagination button states
function updatePaginationButtons() {
  document.getElementById('previous').disabled = currentBlogIndex <= 0;
  document.getElementById('next').disabled = currentBlogIndex >= blogs.length - 1;
}

// Function to navigate to a blog and update URL
function navigateToBlog(index) {
  if (index >= 0 && index < blogs.length) {
    const blogId = blogs[index].id;
    // Update URL without reloading the page
    history.pushState(null, null, `?id=${blogId}`);
    displayBlog(index);
    updatePaginationButtons();
  }
}

// Event listeners for pagination buttons
document.getElementById('previous').addEventListener('click', () => {
  if (currentBlogIndex > 0) {
    currentBlogIndex--;
    navigateToBlog(currentBlogIndex);
  }
});

document.getElementById('next').addEventListener('click', () => {
  if (currentBlogIndex < blogs.length - 1) {
    currentBlogIndex++;
    navigateToBlog(currentBlogIndex);
  }
});

// Handle back/forward navigation
window.addEventListener('popstate', () => {
  const urlParams = new URLSearchParams(window.location.search);
  const blogId = urlParams.get("id");
  if (blogId) {
    currentBlogIndex = blogs.findIndex((b) => b.id === blogId);
    displayBlog(currentBlogIndex);
    updatePaginationButtons();
  }
});
