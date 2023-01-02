const dday_span = document.getElementById("dday");

const loveday = new Date("2022-05-21").getTime();
const now = new Date().getTime();
const distance = now - loveday;

const day = Math.floor(distance / (1000 * 60 * 60 * 24));
dday_span.innerHTML = Number(day) + 3;

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));
