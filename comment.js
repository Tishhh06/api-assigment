let loadButton = document.getElementById("load-comments-btn");
loadButton.addEventListener("click", onLoadComments);

function onLoadComments() {
    const request = new XMLHttpRequest();
    request.open("GET", "https://jsonplaceholder.typicode.com/comments", true);

    request.onprogress = function () {
        console.log("Loading comments...");
    };

    request.onload = function () {
        console.log(this.status);
        if (this.status == 200 || this.status == 201) {
            const commentData = JSON.parse(this.responseText);
            console.log(commentData);
            renderComments(commentData);
        } else {
            console.log("Error: Comments not found");
        }
    };

    request.send();
}

function renderComments(commentData) {
    const commentsContainer = document.getElementById("comments-display");
    commentData.forEach((comment) => {
        const commentElement = document.createElement("div");
        commentElement.innerHTML = `
            <h4>NAME: ${comment.name}</h4>
            <p>EMAIL: ${comment.email}</p>
            <p>COMMENT: ${comment.body}</p>
            <hr>
        `;
        commentsContainer.appendChild(commentElement);
    });
}