let fetchButton = document.getElementById("get-albums-btn");
fetchButton.addEventListener("click", handleFetchClick);

function handleFetchClick() {
    const request = new XMLHttpRequest();
    request.open("GET", "https://jsonplaceholder.typicode.com/albums", true);

    request.onprogress = function () {
        console.log("Fetching albums...");
    };

    request.onload = function () {
        console.log(this.status);
        if (this.status == 200 || this.status == 201) {
            const albumData = JSON.parse(this.responseText);
            console.log(albumData);
            renderAlbums(albumData);
        } else {
            console.log("Albums not found");
        }
    };

    request.send();
}

function renderAlbums(albumData) {
    const albumsDiv = document.getElementById("albums-container");
    for (let i = 0; i < albumData.length; i++) {
        const albumItem = document.createElement("li");
        albumItem.classList.add("album-item");
        albumItem.style.margin = "10px";
        albumItem.style.padding = "10px";
        albumItem.style.border = "1px solid black";
        albumItem.style.width = "200px";
        albumItem.style.display = "block";
        albumItem.innerText = albumData[i].title;
        albumsDiv.appendChild(albumItem);
    }
}