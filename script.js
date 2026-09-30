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
// BOOKING FORM → WHATSAPP
// ========================================

const bookingForm =
    document.getElementById("bookingForm");


if (bookingForm) {

    bookingForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            const name =
                document.getElementById("name").value.trim();


            const phone =
                document.getElementById("phone").value.trim();


            const service =
                document.getElementById("service").value;


            const date =
                document.getElementById("date").value;


            const time =
                document.getElementById("time").value;


            const message =
                document.getElementById("message").value.trim();



            // ========================================
            // MAIN ADMIN WHATSAPP NUMBER
            // ========================================

            const adminWhatsApp =
                "947XXXXXXXXX";



            // ========================================
            // CREATE WHATSAPP MESSAGE
            // ========================================

            const whatsappMessage =

                "🔔 NEW BOOKING - SALOON C BRAVO\n\n" +

                "👤 Customer Name: " +
                name +
                "\n" +

                "📞 Phone: " +
                phone +
                "\n" +

                "💇 Service: " +
                service +
                "\n" +

                "📅 Date: " +
                date +
                "\n" +

                "⏰ Time: " +
                time +
                "\n" +

                "📝 Message: " +
                (
                    message ||
                    "No additional message"
                ) +

                "\n\n" +

                "Please confirm this appointment.";



            // ========================================
            // OPEN WHATSAPP
            // ========================================

            const whatsappURL =

                "https://wa.me/" +
                adminWhatsApp +
                "?text=" +
                encodeURIComponent(
                    whatsappMessage
                );



            window.open(
                whatsappURL,
                "_blank"
            );

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

const isAdminPage =

    window.location.pathname.includes(
        "admin-dashboard.html"
    ) ||

    window.location.pathname.includes(
        "admin-bookings.html"
    );


if (isAdminPage) {

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
