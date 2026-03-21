// change theme based on user preference or system settings and save it in localStorage
const toggle = document.getElementById("theme-toggle");

if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark-mode");
  toggle.checked = true;
}

if (!localStorage.getItem("theme")) {
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    document.body.classList.add("dark-mode");
    toggle.checked = true;
  }
}

toggle.addEventListener("change", () => {
  if (toggle.checked) {
    document.body.classList.add("dark-mode");
    localStorage.setItem("theme", "dark");
  } else {
    document.body.classList.remove("dark-mode");
    localStorage.setItem("theme", "light");
  }
});

// animate skill bars when they come into view
const fills = document.querySelectorAll(".skill-fill");
const skillsSection = document.getElementById("skills");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        fills.forEach((fill) => {
          const width = fill.style.width;
          fill.style.width = "0";

          setTimeout(() => {
            fill.style.width = width;
          }, 300);
        });

        observer.unobserve(skillsSection); // run once
      }
    });
  },
  { threshold: 0.3 },
);

observer.observe(skillsSection);


// animate profile image 360 rotation when it gets clicked
const profileImage = document.querySelector(".profile-img");

profileImage.addEventListener("click", () => {
  profileImage.classList.add("spin");
});
profileImage.addEventListener("animationend", () => {
  profileImage.classList.remove("spin");
});