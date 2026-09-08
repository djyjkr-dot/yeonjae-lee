// JS가 동작할 때만 등장 애니메이션을 켠다 (JS 미지원 시 콘텐츠는 그대로 보임)
document.documentElement.classList.add("js");

document.addEventListener("DOMContentLoaded", () => {
  // 올해 연도
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  // 스크롤 등장
  const targets = document.querySelectorAll(".reveal");

  if (!("IntersectionObserver" in window)) {
    targets.forEach((el) => el.classList.add("in"));
  } else {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    targets.forEach((el) => io.observe(el));
  }

  // 상단 바 경계선
  const topbar = document.querySelector(".topbar");
  if (topbar) {
    const onScroll = () => {
      topbar.classList.toggle("scrolled", window.scrollY > 8);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }
});
