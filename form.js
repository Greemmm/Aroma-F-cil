document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevents form from submitting and page from scrolling to bottom
});

function sendMail() {
    // Collect form data
    let parms = {
        to_name: "Luis Chua", // Replace with the recipient's name or leave static
        name: document.getElementById("user_name").value, // Matches {{name}} in template
        email: document.getElementById("user_email").value, // Matches {{email}} in template
        message: document.getElementById("message").value, // Matches {{message}} in template
    };

    // Send email using EmailJS
    emailjs.send("service_kgs2moh", "template_h3vofbb", parms)
        .then(function(response) {
            alert("Message Sent Successfully!");
            console.log("Success:", response);
        })
        .catch(function(error) {
            alert("Failed to send message. Please try again later.");
            console.error("Error sending email:", error);
        });
}
