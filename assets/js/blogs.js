document.addEventListener("DOMContentLoaded", function() {
    const searchButton = document.getElementById("search-button");
    const searchInput = document.getElementById("search-input");
    const searchIcon = searchButton.querySelector('img');
    const blogContainer = document.getElementById("blog-container");
    const nextBtn = document.getElementById("next");
    const prevBtn = document.getElementById("previous");
    const loadingIcon = document.getElementById("loading-icon"); // Get the loading icon element
    const blogsPerPage = 3;
    let currentPage = 0;
    let blogData = [];

    // Show the loading icon only during the initial data fetch
    loadingIcon.style.display = "block";

    // Fetch blog data from data.json
    fetch("https://raw.githubusercontent.com/chtahir797/JSONDATA/main/MrTahir/data.json")
        .then(response => response.json())
        .then(data => {
            blogData = data;
            displayBlogs(blogData);

        })
        .catch(error => {
            console.error("Error fetching blog data:", error);
            // Hide the loading icon even if there's an error
            loadingIcon.style.display = "none";
        });

    // Function to create and display blog cards
    function displayBlogs(blogs) {
        blogContainer.innerHTML = ""; // Clear existing content
        const startIndex = currentPage * blogsPerPage;
        const endIndex = Math.min(startIndex + blogsPerPage, blogs.length);
        const blogsToDisplay = blogs.slice(startIndex, endIndex);

        if (blogsToDisplay.length === 0) {
            blogContainer.innerHTML = "<div class='no-blogs'>No Blogs found</div>";
        } else {
            blogsToDisplay.forEach(blog => {
                const cardHTML = `
                    <div class="blog-card">
                        <div class="blog-card-content">
                            <div class="blog-card-title">${blog.title}</div>
                            <div class="blog-card-summary">${blog.content.introduction.slice(0,100) + " ..."}</div>
                        </div>
                        <div class="blog-card-footer">
                            <div class="tags">
                                ${blog.tags.map(tag => `<span class='tag'>${tag}</span>`).join(" ")}
                            </div>
                            <div class="links">
                                <a href="singleblog.html?id=${blog.id}">
                                    <img src="assets/images/redirect.svg" alt="More Details">
                                </a>
                            </div>
                        </div>
                    </div>
                `;
                blogContainer.innerHTML += cardHTML;
            // Hide the loading icon after data is loaded
            loadingIcon.style.display = "none";
            });

            // Initialize Tilt.js on blog cards
            VanillaTilt.init(document.querySelectorAll(".blog-card"), {
                max: 25,
                speed: 400,
                glare: true,
                "max-glare": 0.5,
            });
        }

        // Update button states based on current page
        prevBtn.disabled = currentPage === 0;
        nextBtn.disabled = endIndex >= blogs.length;
    }

    // Search functionality
    function searchBlogs() {
        const query = searchInput.value.toLowerCase();
        const filteredBlogs = blogData.filter(blog => {
            const titleMatch = blog.title.toLowerCase().includes(query);
            const tagsMatch = blog.tags.some(tag => tag.toLowerCase().includes(query));
            return titleMatch || tagsMatch;
        });
        currentPage = 0; // Reset to the first page when performing a search
        displayBlogs(filteredBlogs);
    }

    // Event listeners for search
    searchButton.addEventListener("click", function() {
        if (searchInput.style.display === "none" || searchInput.style.display === "") {
            searchInput.style.display = "inline-block";
            searchIcon.src = "assets/images/cross.svg"; // Set icon to cross
            searchInput.focus();
        } else {
            searchInput.style.display = "none";
            searchIcon.src = "assets/images/search.svg"; // Set icon to search
            searchInput.value = ""; // Clear the search input value
            searchBlogs(); // Perform a search to update the results
        }
    });

    searchInput.addEventListener("input", searchBlogs); // Search as you type

    // Event listeners for pagination
    nextBtn.addEventListener("click", () => {
        if (currentPage * blogsPerPage + blogsPerPage < blogData.length) {
            currentPage += 1;
            displayBlogs(blogData);
        }
    });

    prevBtn.addEventListener("click", () => {
        if (currentPage > 0) {
            currentPage -= 1;
            displayBlogs(blogData);
        }
    });
});
