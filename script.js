let imageElement = document.getElementById("image");

let originalImageWidth = "200px";

imageElement.style.width = originalImageWidth;

let maxImage = 300;
let minImage = 100;

let imageWidthElement = document.getElementById("imageWidth");

let warning = document.getElementById("warningMessage")
let maxWidthWarningMessage = "Too big. Decrease the size of the Image.";
let minWidthWarningMessage = "Can't Visible. Increase the size of the Image.";

function increment() {
    if (originalImageWidth >= maxImage) {
        warning.textContent = minWidthWarningMessage;
    } else {
        originalImageWidth = parseInt(originalImageWidth) + 5;
        let updatedImageWidth = originalImageWidth + "px";

        warning.textContent = "";
        imageElement.style.width = updatedImageWidth;
        imageWidthElement.textContent = updatedImageWidth;
    }
}

function decrement() {
    if (originalImageWidth <= minImage) {
        warning.textContent = maxWidthWarningMessage;
    } else {
        originalImageWidth = parseInt(originalImageWidth) - 5;
        let updatedImageWidth = originalImageWidth + "px";

        warning.textContent = "";
        imageElement.style.width = updatedImageWidth;
        imageWidthElement.textContent = updatedImageWidth;
    }
}
