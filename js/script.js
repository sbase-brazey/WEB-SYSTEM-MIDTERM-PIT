// ==========================
// VIEW MORE FUNCTION
// ==========================
let expanded = false;

function changeText() {
    const about = document.getElementById("aboutText");
    const button = document.getElementById("viewBtn");

    if (!expanded) {
        about.textContent = "I am passionate about programming and building systems. I enjoy creating projects like inventory systems and web applications. I am eager to learn and grow in the field of web development. In my free time, I like to explore new technologies and work on personal projects to enhance my skills. I am excited to contribute to the tech community and collaborate on innovative projects.";
        button.textContent = "View Less";
        expanded = true;
    } else {
        about.textContent = "I am an aspiring web developer with a passion for creating dynamic and user-friendly websites.";
        button.textContent = "View More";
        expanded = false;
    }
}


// ==========================
// DOM CONTENT LOADED
// ==========================
document.addEventListener("DOMContentLoaded", function () {

    // PROMPT PERSONALIZATION
    let user = prompt("Enter your name:");
    if (user) {
        document.getElementById("welcome").textContent = "Welcome, " + user + "!";
    }

    // FORM VALIDATION
    document.getElementById("contactForm").addEventListener("submit", function (e) {
        e.preventDefault();

        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let message = document.getElementById("message").value;
        let msg = document.getElementById("formMsg");

        if (name === "" || email === "" || message === "") {
            msg.textContent = "Please fill all fields!";
            msg.style.color = "red";
        } else if (!email.includes("@")) {
            msg.textContent = "Invalid email!";
            msg.style.color = "red";
        } else {
            msg.textContent = "Message sent!";
            msg.style.color = "green";
            this.reset();
        }
    });

    // SEARCH FILTER
    document.getElementById("searchSkill").addEventListener("keyup", function () {
        let filter = this.value.toLowerCase();
        let items = document.querySelectorAll("#skillList li");

        items.forEach(item => {
            if (item.textContent.toLowerCase().includes(filter)) {
                item.style.display = "block";
            } else {
                item.style.display = "none";
            }
        });
    });

});


// ==========================
// JQUERY SECTION
// ==========================
$(document).ready(function () {

    // SHOW/HIDE PROJECTS
    $("#toggleProjects").on("click", function () {
        $("#projectList").toggle();

        if ($(this).text() === "Show Projects") {
            $(this).text("Hide Projects");
        } else {
            $(this).text("Show Projects");
        }
    });

    // HIGHLIGHT SKILLS
    $("#skillList li").on("click", function () {
        $(this).toggleClass("highlight");
    });

});
