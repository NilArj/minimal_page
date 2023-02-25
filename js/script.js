const primaryNav = document.getElementById("primary__navigation");
const mobileNavToggle = document.querySelector(".mobile__nav-toggle");
const galleryBtns = document.querySelectorAll("[data-btn]");
const year = document.querySelector(".year")

// mobile menu mavigation

mobileNavToggle.addEventListener("click", () => {
    const visibility = primaryNav.getAttribute("data-visible");

    if (visibility === "false") {
        primaryNav.setAttribute("data-visible", true);
        mobileNavToggle.setAttribute("aria-expanded", true);
    } else {
        primaryNav.setAttribute("data-visible", false);
        mobileNavToggle.setAttribute("aria-expanded", false);
    }
});

// gallery slides

galleryBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        const offset = btn.dataset.galleryBtns === "right" ? 1 : -1;
        const slides = btn.closest("[data-gallery]").querySelector("[data-slides]");

        const activeSlide = slides.querySelector("[data-active]")
        let newIndex = [...slides.children].indexOf(activeSlide) + offset
        if (newIndex < 0) newIndex = slides.children.length - 1
        if (newIndex >= slides.children.length) newIndex = 0

        slides.children[newIndex].dataset.active = true
        delete activeSlide.dataset.active
    });
});

// year 

const getYear = new Date().getFullYear();
console.log(getYear)

year.innerText = getYear