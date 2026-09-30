// ========================================
// SALOON C BRAVO
// Website JavaScript
// ========================================


// ========================================
// MOBILE MENU
// ========================================

const menuToggle =
    document.getElementById("menuToggle");

const navLinks =
    document.getElementById("navLinks");


if (menuToggle && navLinks) {

    menuToggle.addEventListener(
        "click",
        function () {

            navLinks.classList.toggle("active");

        }
    );


    const menuItems =
        navLinks.querySelectorAll("a");


    menuItems.forEach(
        function (link) {

            link.addEventListener(
                "click",
                function () {

                    navLinks.classList.remove(
                        "active"
                    );

                }
            );

        }
    );

}



// ========================================
// BOOKING FORM
// ========================================

const bookingForm =
    document.getElementById("bookingForm");


if (bookingForm) {

    bookingForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            const name =
                document.getElementById("name").value;

            const phone =
                document.getElementById("phone").value;

            const service =
                document.getElementById("service").value;

            const date =
                document.getElementById("date").value;

            const time =
                document.getElementById("time").value;


            alert(

                "Thank you, " +
                name +
                "!\n\n" +

                "Your booking request has been received.\n\n" +

                "Service: " +
                service +
                "\n" +

                "Date: " +
                date +
                "\n" +

                "Time: " +
                time +
                "\n\n" +

                "We will contact you on " +
                phone +
                "."

            );


            bookingForm.reset();

        }
    );

}



// ========================================
// CONTACT FORM
// ========================================

const contactForm =
    document.getElementById("contactForm");


if (contactForm) {

    contactForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            const name =
                document.getElementById(
                    "contactName"
                ).value;


            alert(

                "Thank you, " +
                name +
                "!\n\n" +

                "Your message has been received.\n" +

                "SALOON C BRAVO will contact you soon."

            );


            contactForm.reset();

        }
    );

}



// ========================================
// ADMIN LOGIN
// ========================================

const adminLoginForm =
    document.getElementById(
        "adminLoginForm"
    );


if (adminLoginForm) {

    adminLoginForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            const username =
                document.getElementById(
                    "adminUsername"
                ).value;


            const password =
                document.getElementById(
                    "adminPassword"
                ).value;


            if (
                username === "admin" &&
                password === "admin123"
            ) {

                sessionStorage.setItem(
                    "adminLoggedIn",
                    "true"
                );


                window.location.href =
                    "admin-dashboard.html";

            }

            else {

                const loginMessage =
                    document.getElementById(
                        "loginMessage"
                    );


                loginMessage.textContent =
                    "Invalid username or password.";

                loginMessage.style.color =
                    "#ff5555";

            }

        }
    );

}



// ========================================
// ADMIN DASHBOARD SECURITY
// ========================================

const isDashboard =
    window.location.pathname.includes(
        "admin-dashboard.html"
    );


if (isDashboard) {

    const adminLoggedIn =
        sessionStorage.getItem(
            "adminLoggedIn"
        );


    if (adminLoggedIn !== "true") {

        window.location.href =
            "admin-login.html";

    }

}



// ========================================
// ADMIN LOGOUT
// ========================================

const logoutButton =
    document.getElementById(
        "logoutButton"
    );


if (logoutButton) {

    logoutButton.addEventListener(
        "click",
        function (event) {

            event.preventDefault();


            sessionStorage.removeItem(
                "adminLoggedIn"
            );


            window.location.href =
                "admin-login.html";

        }
    );

}
