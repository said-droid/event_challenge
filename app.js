
//carousel
let slideIndex = 0;

carousel(slideIndex);

// Arrows on the carousel
const plusSlides = (element) => carousel(slideIndex += element);

function carousel(element) {
    let i;
    let slides = document.getElementsByClassName("mySlides")

    if (element > slides.length) slideIndex = 1;
    if (element < 1) slideIndex = slides.length;

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex-1].style.display = 'block';

}

//tabs
function openTabs(e, tabs) {
    let i, tabContent, tabLinks;

    tabContent = document.getElementsByClassName('tab-content');

    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }
    tabLinks = document.getElementsByClassName('tablinks');
    for (i = 0; i < tabLinks.length; i++) {
        tabLinks[i].className = tabLinks[i].className.replace(" active", "");
    }
    document.getElementById(tabs).style.display = 'block';
    e.currentTarget.className += ' active';
}

document.getElementById('defaultOpen').click();

//tickets
let start;
const elementNeeded = document.getElementById('count');
const final = parseInt(elementNeeded.textContent, 10); // parse out the final number
const duration = 100000;

const step = ts => {
    if (!start) {
        start = ts;
    }

    // get the time passed as a fraction of total duration
    let progress = (ts - start) / duration

    elementNeeded.textContent = Math.floor(progress * final) // set the text
    if (progress < 1) {
        requestAnimationFrame(step)
    }
}

requestAnimationFrame(step);