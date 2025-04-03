function toggleImage() {
    const img = document.getElementById("showImage");

    if (img.style.display === "none" || img.style.display === "") {
        img.style.display = "block";
    } else {
        img.style.display = "none";
    }
}
