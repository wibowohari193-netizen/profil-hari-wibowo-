window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  setTimeout(() => loader.classList.add("hide"), 600);
});

const links = document.querySelectorAll(".nav-link");
const sections = Array.from(links).map(link =>
  document.querySelector(link.getAttribute("href"))
);

const setActive = () => {
  const scrollPos = window.scrollY + window.innerHeight * 0.3;
  let activeIndex = 0;
  sections.forEach((section, i) => {
    if (section && section.offsetTop <= scrollPos) activeIndex = i;
  });
  links.forEach(link => link.classList.remove("is-active"));
  links[activeIndex].classList.add("is-active");
};

window.addEventListener("scroll", setActive, { passive: true });
setActive();