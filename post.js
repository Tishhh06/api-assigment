let loadPostsButton = document.getElementById("load-posts-btn");
loadPostsButton.addEventListener("click", onLoadPosts);

function onLoadPosts() {
    const request = new XMLHttpRequest();
    request.open("GET", "https://jsonplaceholder.typicode.com/posts", true);

    request.onprogress = function () {
        console.log("Loading posts...");
    };

    request.onload = function () {
        console.log(this.status);
        if (this.status == 200 || this.status == 201) {
            const postData = JSON.parse(this.responseText);
            console.log(postData);
            renderPosts(postData);
        } else {
            console.log("Error: Posts not found");
        }
    };

    request.send();
}

function renderPosts(postData) {
    const postsContainer = document.getElementById("posts-container");
    postData.forEach((post) => {
        const postElement = document.createElement("div");
        postElement.classList.add("post-item");
        postElement.style.margin = "10px";
        postElement.style.padding = "10px";
        postElement.style.border = "1px solid black";
        postElement.style.display = "block";
        postElement.innerHTML = `
            <h4>ID: ${post.id}</h4>
            <p>Title: ${post.title}</p>
            <p>Body: ${post.body}</p>
            <hr>
        `;
        postsContainer.appendChild(postElement);
    });
}