let loadPhotosButton = document.getElementById("load-photos-btn");
loadPhotosButton.addEventListener("click", onLoadPhotos);

function onLoadPhotos() {
    const request = new XMLHttpRequest();
    request.open("GET", "https://jsonplaceholder.typicode.com/photos", true);

    request.onprogress = function () {
        console.log("Loading photos...");
    };

    request.onload = function () {
        console.log(this.status);
        if (this.status == 200 || this.status == 201) {
            const photoData = JSON.parse(this.responseText);
            console.log(photoData);
            renderPhotos(photoData);
        } else {
            console.log("Error: Photos not found");
        }
    };

    request.send();
}

function renderPhotos(photoData) {
    const photosDiv = document.getElementById("photos-container");
    photoData.forEach((photo) => {
        let photoElement = document.createElement("img");
        photoElement.classList.add("photo-item");
        photoElement.style.margin = "10px";
        photoElement.style.padding = "10px";
        photoElement.style.border = "1px solid black";
        photoElement.style.width = "200px";
        photoElement.style.display = "block";
        photoElement.src = photo.url;
        photosDiv.appendChild(photoElement);
    });
}