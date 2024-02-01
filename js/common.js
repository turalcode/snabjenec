document.addEventListener("DOMContentLoaded", function () {
    // ПРОВЕРКА НА ТАЧПАДЫ

    if (
        "ontouchstart" in window ||
        (window.DocumentTouch && document instanceof DocumentTouch)
    ) {
    } else {
        document.body.classList.add("no-touch");
    }

    // NAV MOBILE

    const burgerBtn = document.getElementById("burger-btn");
    const navMobile = document.getElementById("nav-m");

    burgerBtn.addEventListener("click", function () {
        navMobile.classList.toggle("open");
    });
});
