/* Home-page typing effect */

const typedTextSpan = document.querySelector(".home-content-span");
const cursorSpan = document.querySelector(".home-content-cursor");
const textArray = ["HTML5", "CSS3", "MySQL", "JavaScript", "JSON", "Git"];
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 2000;

let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if (!cursorSpan.classList.contains("typing"))
      cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } else {
    cursorSpan.classList.remove("typing");
    setTimeout(erase, newTextDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    if (!cursorSpan.classList.contains("typing"))
      cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(
      0,
      charIndex - 1
    );
    charIndex--;
    setTimeout(erase, erasingDelay);
  } else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if (textArrayIndex >= textArray.length) textArrayIndex = 0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  if (textArray.length) setTimeout(type, newTextDelay + 250);
});

/* Nav Ham Btn Effect */

const hamBtn = document.querySelector(".nav-ham");
const navWrapper = document.querySelector(".nav-wrapper");

hamBtn.addEventListener("click", function () {
  if (navWrapper.classList.contains("inactive")) {
    navWrapper.classList.remove("inactive");
    navWrapper.classList.add("active");
    hamBtn.classList.add("active");
    document.body.classList.add("navActive");
  } else {
    navWrapper.classList.remove("active");
    navWrapper.classList.add("inactive");
    hamBtn.classList.remove("active");
    document.body.classList.remove("navActive");
  }
});

/* Remove nav active when nav-li selected */
function removeNavActive() {
  navWrapper.classList.remove("active");
  navWrapper.classList.add("inactive");
  hamBtn.classList.remove("active");
  document.body.classList.remove("navActive");
}

/* Project banner slider Effect */

var counter = 1;
setInterval(function () {
  document.getElementById("radio" + counter).checked = true;
  counter++;
  if (counter > 4) {
    counter = 1;
  }
}, 5000);

/* Add animation to project-cards */
window.addEventListener("scroll", showProject);
const projectCards = document.querySelectorAll(".project-card");

function showProject() {
  projectCards.forEach(function showCard(projectCard) {
    const screenPosition = window.innerHeight / 1.3;
    const cardPosition = projectCard.getBoundingClientRect().top;
    if (cardPosition < screenPosition) {
      projectCard.classList.add("show-project");
    }
  });
}

/* Verify email address and send email to user */
const contactForm = document.querySelector(".contact-form");
contactForm.addEventListener("submit", contactMe);

function contactMe(e) {
  e.preventDefault();

  let name = document.querySelector(".input-name").value;
  let email = document.querySelector(".input-email").value;
  let message = document.querySelector(".input-message").value;
  const emailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const emailSpan = document.querySelector('.contact-email');
  const emailError = document.querySelector('.email-error')

  if(email.match(emailFormat)){
    emailToMe(name, email, message);
    emailToSender(name, email, message);
    emailError.classList.remove('email-error-active');
  }else{
    emailError.classList.add('email-error-active');
  }
}

function emailToMe(name, email, message) {
  Email.send({
    Host: "smtp.hotmail.com",
    Username: "allenzhang59299@hotmail.com",
    Password: "ovpybhoqhlocaluu",
    To: "allenzhang59299@hotmail.com",
    From: "allenzhang59299@hotmail.com",
    Subject: `${name} from Archer Web Portfoilo`,
    Body: `Name: ${name} </br>
    Email: ${email} </br>
    Message: ${message}`,
  }).then((message) => alert(message));
}

function emailToSender(name, email, message) {
  Email.send({
    Host: "smtp.hotmail.com",
    Username: "allenzhang59299@hotmail.com",
    Password: "ovpybhoqhlocaluu",
    To: email,
    From: "allenzhang59299@hotmail.com",
    Subject: `Your Message to Archer has been received`,
    Body: `Hi, ${name} </br></br>
    Thank you for your message! I will contact you as soon as possible. </br></br>
    Wish you have a wonderful day. </br></br>
    Archer (Lin) Zhang`,
  }).then((message) => alert(message));
}