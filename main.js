// Function to open the side menu
function openmenu() {
    document.getElementById("sidemenu").style.right = "0";
}

// Function to close the side menu
function closemenu() {
    document.getElementById("sidemenu").style.right = "-200px";
}

// Function to open a specific tab in the About section
function opentab(tabname) {
    var i;
    var tablinks = document.getElementsByClassName("tab-links");
    var tabcontents = document.getElementsByClassName("tab-contents");

    // Hide all tab contents
    for (i = 0; i < tabcontents.length; i++) {
        tabcontents[i].classList.remove("active-tab");
    }

    // Remove active class from all tab links
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active-link");
    }

    // Show the specific tab content and set the tab link as active
    document.getElementById(tabname).classList.add("active-tab");
    event.currentTarget.classList.add("active-link");
}

// Function to handle form submission
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();

    // Fetch form data
    const formData = new FormData(event.target);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    // Simulate form submission
    alert(`Thank you for reaching out, ${name}! We will respond to your message sent from ${email} soon.`);

    // Clear form after submission
    event.target.reset();
});

// Function to scroll to the top of the page smoothly
document.getElementById("scroll-to-top").addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"  // Smooth scroll behavior
    });
});
