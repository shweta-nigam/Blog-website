// header 
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// 
document.addEventListener("DOMContentLoaded", () => {
   
  
    const blogPostsContainer = document.getElementById("blog-posts");
  
    posts.forEach(post => {
      const postElement = document.createElement("div");
      postElement.className = "post";
      postElement.innerHTML = `
        <img src="${post.img}" alt="${post.title}">
        <h2>${post.title}</h2>
        <p>${post.content}</p>
        <span>${post.date}</span>
      `;
      blogPostsContainer.appendChild(postElement);
    });
  
    document.getElementById("comment-form").addEventListener("submit", function(event) {
      event.preventDefault();
      const name = document.getElementById("name").value;
      const message = document.getElementById("message").value;
      const comment = document.createElement("div");
      comment.innerHTML = `<strong>${name}</strong><p>${message}</p>`;
      document.getElementById("comments").appendChild(comment);
      document.getElementById("name").value = "";
      document.getElementById("message").value = "";
    });
  
    document.getElementById("search-bar").addEventListener("input", function() {
      const query = this.value.toLowerCase();
      document.querySelectorAll(".post").forEach(post => {
        const title = post.querySelector("h2").textContent.toLowerCase();
        post.style.display = title.includes(query) ? "block" : "none";
      });
    });
  });
//   footer  // To Get the current year
const currentYear = new Date().getFullYear();
document.getElementById("copyright").innerHTML = `&copy; ${currentYear} Techynews. All rights reserved.`;
