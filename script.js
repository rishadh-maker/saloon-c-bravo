// ========================================
// SALOON C BRAVO
// Website JavaScript
// ========================================


// ========================================
// BOOKING FORM
// ========================================

const bookingForm = document.getElementById("bookingForm");

if (bookingForm) {

    bookingForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const name = document.getElementById("name").value;
        const phone = document.getElementById("phone").value;
        const service = document.getElementById("service").value;
        const date = document.getElementById("date").value;
        const time = document.getElementById("time").value;

        alert(
            "Thank you, " + name + "!\n\n" +
            "Your booking request has been received.\n\n" +
            "Service: " + service + "\n" +
            "Date: " + date + "\n" +
            "Time: " + time + "\n\n" +
            "We will contact you on " + phone + "."
        );

        bookingForm.reset();

    });

}


// ========================================
// CONTACT FORM
// ========================================

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const name = document.getElementById("contactName").value;

        alert(
            "Thank you, " + name + "!\n\n" +
            "Your message has been received.\n" +
            "SALOON C BRAVO will contact you soon."
        );

        contactForm.reset();

    });

}