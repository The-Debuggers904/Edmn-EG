// SECTION - Global Variables
const burgerIcon = document.querySelector(".burger-icon");
const targetDate = new Date('2025-06-01T00:00:00');
const upBtn = document.querySelector(".about-up-btn");
const page = document.body.getAttribute('data-page');




// SECTION - Event Listeners
burgerIcon.addEventListener("click", () => {
    const navLinks = document.querySelector(".nav-links");
    burgerIcon.classList.toggle("clicked");
    navLinks.classList.toggle("active");
});

// *STUB - Upp Btn
window.addEventListener("scroll", () => {
    if (window.scrollY >= 900) {
       upBtn.style.display = "block";
       upBtn.style.opacity = 1;
       upBtn.onclick = () => {
           window.scrollTo({
               top: 0,
               behavior: "smooth"
           })
       }
    } else if (window.scrollY < 900) {
       upBtn.style.display = "none";
       upBtn.style.opacity = 0;
    }
 });



  //! Executed In Home Page 
    if (page === "home") {
      // SECTION - Events
    function updateCountdown() {
      const now = new Date(); 
      let difference = targetDate - now; 

      if (difference <= 0) {
        document.getElementById('countdown').textContent = "It's June!";
        clearInterval(timer); 
        return;
      }

let months = targetDate.getMonth() - now.getMonth() + (targetDate.getFullYear() - now.getFullYear()) * 12;
let tempDate = new Date(now);
tempDate.setMonth(tempDate.getMonth() + months);

if (tempDate > targetDate) {
  months--;
  tempDate.setMonth(tempDate.getMonth() - 1);
}

    const days = Math.floor((targetDate - tempDate) / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      document.querySelector(".numbers .count.months span:nth-child(1)").textContent = months < 10 ? `0${months}`: months;
      document.querySelector(".numbers .count.days span:nth-child(1)").textContent = days < 10 ? `0${days}`: days;
      document.querySelector(".numbers .count.hours span:nth-child(1)").textContent = hours < 10 ? `0${hours}`: hours;
      document.querySelector(".numbers .count.minutes span:nth-child(1)").textContent = minutes < 10 ? `0${minutes}`: minutes;
      document.querySelector(".numbers .count.seconds span:nth-child(1)").textContent = seconds < 10 ? `0${seconds}`: seconds;
}

    const timer = setInterval(updateCountdown, 1000);
    updateCountdown();

    }

    //! Executed In Why Us Page 
    if (page === "why-us") {
      
// *STUB - Animating main-section
document.addEventListener("DOMContentLoaded", () => {
  // Animating Heading
  showElement(document.querySelector(".why-us-caption h3"), "X");
  showElement(document.querySelector(".why-us-caption p"), "X");
});

function showElement(el, translateDir) {
  el.style.opacity = 1;
  el.style.transform = `translate${translateDir}(0)`;
}

// *STUB - Animating main-title before & after
let sections = document.querySelectorAll("section");
window.addEventListener("scroll", () => {
  sections.forEach((section) => {
     if (window.scrollY >= section.offsetTop - 500) {
        section.style.setProperty("--before-left", "-35px");
        section.style.setProperty("--after-right", "-35px");
     }
  });
});

// *SECTION - Animating timeline
window.addEventListener("scroll", () => {
  let timeLineEle = document.querySelector("#our-goals .goal-time-line");
  let timeLineHeight = 0;

  let elementTop = timeLineEle.getBoundingClientRect().top;
  if (elementTop <= window.innerHeight / 2) {
     timeLineHeight = Math.min(
        window.scrollY - (timeLineEle.offsetTop, timeLineEle.scrollHeight + 20)
     );
     timeLineEle.style.setProperty("--after-height", `${timeLineHeight}px`);
  }
});

// *SECTION - Animating Step core
let cores = document.querySelectorAll(".step-core");
window.addEventListener("scroll", () => {
   cores.forEach((core) => {
      const coreTop = core.getBoundingClientRect().top;
      if (coreTop < window.innerHeight - 600) {
         showElement(core, "Y");
      }
   });
});

// *SECTION - Animating download Btn
window.addEventListener("scroll", () => {
  if (window.scrollY >= document.querySelector(".get-app-caption").offsetTop) {
     showElement(document.querySelector(".get-app-playstore"), "Y");
     showElement(document.querySelector(".get-app-appstore"), "Y");
  }
});
    }

    //! Executed In About Page 
    if (page === "about") {
       
// *STUB - Animating About-main-section
document.addEventListener("DOMContentLoaded", () => {
  // Animating line
  document
     .querySelector(".about-main-section-breif")
     .style.setProperty("--before-height", "100%");

  // Animating Heading
  showElement(document.querySelector(".about-main-section-breif h3"), "X");
  showElement(document.querySelector(".about-main-section-breif h5"), "X");
  showElement(document.querySelector(".about-main-section-breif p"), "X");
});

function showElement(el, translateDir) {
  el.style.opacity = 1;
  el.style.transform = `translate${translateDir}(0)`;
}

// *STUB - Animating main-title before & after
let sections = document.querySelectorAll("section");
window.addEventListener("scroll", () => {
  sections.forEach((section) => {
     if (window.scrollY >= section.offsetTop - 500) {
        section.style.setProperty("--before-left", "-35px");
        section.style.setProperty("--after-right", "-35px");
     }
  });
});

// *STUB - Animating Probs & sol

window.addEventListener("scroll", () => {
  if (
     window.scrollY >=
     document.querySelector(".about-solution").offsetTop + 500
  ) {
     console.log("true");

     showElement(document.querySelector(".about-solution"), "X");
  }
});

    }