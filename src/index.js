
window.onscroll = function () {
    myFunction();
};

const header = document.getElementById("header-fixed");
const sticky = header.offsetTop;

function myFunction() {
    if (window.pageYOffset > sticky) {
        header.classList.add("header-sticky");
    } else {
        header.classList.remove("header-sticky");
    }
}

// CountDown
const countDownE = document.querySelector(".countdown");
let time = countDownE.getAttribute("data-time");
const countDownDate = new Date(time).getTime();

// Update the count down every 1 second
const x = setInterval(function () {
    // Get today's date and time
    const now = new Date().getTime();

    // Find the distance between now and the count down date
    const distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
    document.getElementById("countdown").innerHTML =
        days + " :  " + hours + " : " + minutes + " :  " + seconds + "  ";

    // If the count down is finished, write some text
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "EXPIRED";
    }
}, 1000);

//Show Modal
const quickView = document.querySelectorAll(".Quickview");
const modal = document.getElementById("modal");
const closeModal = document.getElementById("closeModal");
quickView.forEach((item) => {
    item.onclick = (e) => {
        if (item.closest(".img-block")) {
            modal
                .querySelector(".thumbnail")
                .setAttribute(
                    "src",
                    item.closest(".img-block").querySelector(".link-img img").getAttribute("src")
                );
        }
        modal.classList.remove("hidden");
    };
});
function hiddenModal() {
    modal.classList.add("hidden");
}
closeModal.addEventListener("click", hiddenModal);
document.getElementById("overlay").addEventListener("click", hiddenModal);

// Mobile Menu

const mobileBtn = document.querySelector(".mobile-btn");
const mobileMenu = document.querySelector(".mobile-menu");
const closeMenu = document.querySelector(".close-menu");

const showMobileMenu = (e) => {
    e.classList.add("active");
    e.classList.remove("invisible");
};
const hiddenMobileMenu = (e) => {
    e.classList.remove("active");
    e.classList.add("invisible");
};

const menuItem = document.querySelectorAll(".menu-item");
const subMenu = document.querySelectorAll(".sub-menu");

menuItem.forEach((item, i) => {
    item.onclick = () => {
        subMenu[i].classList.toggle("active");
        subMenu[i].classList.toggle("invisible");
    };
});
mobileBtn.addEventListener("click", () => showMobileMenu(mobileMenu));
closeMenu.addEventListener("click", () => hiddenMobileMenu(mobileMenu));
document
    .querySelector(".overlay-mobile")
    .addEventListener("click", () => hiddenMobileMenu(mobileMenu));

// Switch Tabs
const tab = (tab, tabItem, slide) => {
    const tabCate = document.querySelectorAll(tab);
    const slider = document.querySelector(slide);
    const tabCateItem = document.querySelectorAll(tabItem);
    tabCate.forEach((item, i) => {
        if (item.classList.contains("cate--active")) {
            slider.style.width = item.offsetWidth + "px";
        }
        item.onclick = () => {
            tabCateItem.forEach((item, i) => {
                tabCate[i].classList.remove("cate--active");
                item.classList.add("hidden");
            });
            item.classList.add("cate--active");
            slider.style.width = item.offsetWidth + "px";
            slider.style.left = item.offsetLeft - tabCate[0].offsetLeft + "px";
            tabCateItem[i].classList.remove("hidden");
            tabCateItem[i].classList.add("grid");
        };
    });
};

tab(".tabCate", ".tabCate-item", ".slider");
tab(".tabCate--bottom", ".tabCate-item--bottom", ".slider--bottom");
tab(".tabCate--last", ".tabCate-item--last", ".slider--last");
