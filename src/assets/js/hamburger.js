let isHamburgerOpen = false;

const openHamburger = () => {
    let hamburgerNavContainer = document.getElementById("hamburger-item");

    if (isHamburgerOpen) {
        hamburgerNavContainer.style.display = "none";
        isHamburgerOpen = false;
    } else {
        hamburgerNavContainer.style.display = "block";
        hamburgerNavContainer.style.width = "100%";
        isHamburgerOpen = true;
    }
}