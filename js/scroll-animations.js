

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

    updateNavButtons();
   

}

const isInViewport = (elem) => {
    var bounding = elem.getBoundingClientRect();
    return (
        bounding.top >= 0 &&
        bounding.left >= 0 &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};

const updateNavButtons = () => {
    let secAboutMe = document.getElementById("aboutme-caption");
    let secProjects = document.getElementById("projects-caption");
    let secAchievements = document.getElementById("achievements-caption");

    
    let navAboutMe = document.getElementById("aboutme-navbutton");
    let navProjects = document.getElementById("projects-navbutton");
    let navAchievements = document.getElementById("achievements-navbutton");

    if (isInViewport(secAboutMe)) {
        navAboutMe.classList.add("inViewport");

        navProjects.classList.remove("inViewport");
        navAchievements.classList.remove("inViewport");
        return;
    }

    if (isInViewport(secProjects)) {
        navProjects.classList.add("inViewport");

        navAboutMe.classList.remove("inViewport");
        navAchievements.classList.remove("inViewport");
        return;
    }

    if (isInViewport(secAchievements)) {
        navAchievements.classList.add("inViewport");

        navProjects.classList.remove("inViewport");
        navAboutMe.classList.remove("inViewport");
        return;
    }
}


const init = () => {
    updateNavButtons();

    /* Hide loader and show main content elements after init */
    document.getElementById("loader-container").style.display = "none";
    document.getElementById("header").style.display = "block";
    document.getElementById("root").style.display = "block";
}
