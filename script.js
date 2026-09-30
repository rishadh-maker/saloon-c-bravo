// ========================================
// SALOON C BRAVO
// Website JavaScript
// ========================================


// ========================================
// SUPABASE CONFIGURATION
// ========================================

const SUPABASE_URL =
    "https://jlezckirqlhwcaehrvfo.supabase.co";

const SUPABASE_PUBLISHABLE_KEY =
    "sb_publishable_Xrcm01E7j7oujgayh4b72A_w2b48uPn";



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
// SUPABASE + WHATSAPP
// ========================================

const bookingForm =
    document.getElementById("bookingForm");


if (bookingForm) {

    bookingForm.addEventListener(
        "submit",
        async function (event) {

            event.preventDefault();


            const name =
                document.getElementById(
                    "name"
                ).value.trim();


            const phone =
                document.getElementById(
                    "phone"
                ).value.trim();


            const service =
                document.getElementById(
                    "service"
                ).value;


            const date =
                document.getElementById(
                    "date"
                ).value;


            const time =
                document.getElementById(
                    "time"
                ).value;


            const message =
                document.getElementById(
                    "message"
                ).value.trim();



            // ========================================
            // CHECK SUPABASE KEY
            // ========================================

            if (
                !SUPABASE_PUBLISHABLE_KEY ||
                SUPABASE_PUBLISHABLE_KEY ===
                "PASTE_YOUR_PUBLISHABLE_KEY_HERE"
            ) {

                alert(
                    "Supabase Publishable Key is missing."
                );

                return;

            }



            // ========================================
            // SAVE BOOKING TO SUPABASE
            // ========================================

            try {

                const response =
                    await fetch(
                        SUPABASE_URL +
                        "/rest/v1/bookings",
                        {

                            method: "POST",

                            headers: {

                                "Content-Type":
                                    "application/json",

                                "apikey":
                                    SUPABASE_PUBLISHABLE_KEY,

                                "Authorization":
                                    "Bearer " +
                                    SUPABASE_PUBLISHABLE_KEY,

                                "Prefer":
                                    "return=minimal"

                            },

                            body: JSON.stringify({

                                customer_name:
                                    name,

                                customer_phone:
                                    phone,

                                service:
                                    service,

                                appointment_date:
                                    date,

                                appointment_time:
                                    time,

                                message:
                                    message,

                                status:
                                    "Pending"

                            })

                        }
                    );



                // ========================================
                // CHECK DATABASE RESPONSE
                // ========================================

                if (!response.ok) {

                    const errorText =
                        await response.text();

                    console.error(
                        "Supabase Error:",
                        errorText
                    );


                    alert(
                        "Booking could not be saved. Please try again."
                    );

                    return;

                }



                // ========================================
                // WHATSAPP
                // ========================================

                const adminWhatsApp =
                    "94701130050";


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

                    "Status: Pending\n\n" +

                    "Please confirm this appointment.";



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



                // ========================================
                // SUCCESS MESSAGE
                // ========================================

                alert(
                    "Booking saved successfully!\n\n" +
                    "Please send the WhatsApp message to confirm your appointment."
                );



                // ========================================
                // RESET FORM
                // ========================================

                bookingForm.reset();


            }

            catch (error) {

                console.error(
                    "Booking Error:",
                    error
                );


                alert(
                    "Something went wrong. Please try again."
                );

            }

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
// ADMIN PAGE SECURITY
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
