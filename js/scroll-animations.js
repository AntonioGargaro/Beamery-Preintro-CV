function scrollProgress() {
    let root = document.getElementById("root");
    let pb = document.getElementById("progress-bar");
    let pbf = document.getElementById("progress-bar-fill");


    let winScroll = root.scrollTop;
    let height = root.scrollHeight - root.clientHeight;
    let scrolled = (winScroll / height) * 100;

    pbf.style.width = scrolled + "%";


    let FROM = "not-scrolled";
    let TO = "scrolled";

    if (scrolled === 0) {
        FROM = "scrolled";
        TO = "not-scrolled";

        
        pb.classList.add("no-height");
    } else {
        FROM = "not-scrolled";
        TO = "scrolled";

        pb.classList.remove("no-height");
    }

    var elementsToUpdate = document.getElementsByClassName(FROM);
    for (let i = 0; i < elementsToUpdate.length; i++) {
        
        elementsToUpdate[i].classList.replace(FROM, TO);
    }

}
