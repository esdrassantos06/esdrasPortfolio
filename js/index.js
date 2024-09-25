function openTab(tabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tab-content");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("tab-button");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  document.getElementById(tabName).style.display = "flex";
  event.currentTarget.className += " active";
}

document.getElementById("scrollButton").addEventListener("click", function () {
  document.getElementById("about").scrollIntoView({
    behavior: "smooth",
  });
});

document.getElementById("backtoTop").addEventListener("click", function () {
  document.getElementById("home").scrollIntoView({
    behavior: "smooth",
  });
});

function checkScrollPosition() {
  const scrollPosition = window.scrollY || document.documentElement.scrollTop;
  const backtoTopButton = document.getElementById("backtoTop");

  if (scrollPosition === 0) {
    backtoTopButton.disabled = true;
  } else {
    backtoTopButton.disabled = false;
  }
}

checkScrollPosition();

window.addEventListener("scroll", checkScrollPosition);

function updateActiveLink() {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll("nav ul li a");

  let currentSection = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (window.pageYOffset >= sectionTop - sectionHeight / 3) {
      currentSection = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${currentSection}`) {
      link.classList.add("active");
    }
  });
}

window.addEventListener("scroll", updateActiveLink);

const navLinks = document.querySelectorAll("nav ul li a");
navLinks.forEach((link) => {
  link.addEventListener("click", function () {
    navLinks.forEach((link) => link.classList.remove("active"));
    this.classList.add("active");
  });
});

const divAlvo = document.querySelector(".container-botao-subir");
const botao = document.getElementById("backtoTop");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      botao.classList.add("show");
    } else {
      botao.classList.remove("show");
    }
  });
});
observer.observe(divAlvo);

const rotateBtn = document.getElementById("rotateBtn");
const mobileNav = document.getElementById("mobileNav");
const mobilecolor = document.getElementById("clr");
const mobileclr = document.getElementById("colr");
const mobileLi = document.getElementById("white");

rotateBtn.addEventListener("click", () => {
  mobileNav.classList.toggle("hidden");
  mobileNav.classList.toggle("flex");

  rotateBtn.classList.toggle("rotate-90");
  rotateBtn.classList.toggle("fill-white");
  mobileLi.classList.toggle("text-white");
  mobilecolor.classList.toggle("text-white");
  mobileclr.classList.toggle("text-white");
});
