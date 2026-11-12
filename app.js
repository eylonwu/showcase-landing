(function () {
  "use strict";

  /* 移动端菜单 */
  var burger = document.getElementById("burger");
  var linksWrap = document.querySelector(".nav__links");
  if (burger && linksWrap) {
    burger.addEventListener("click", function () {
      var open = linksWrap.classList.toggle("is-open");
      burger.setAttribute("aria-expanded", open ? "true" : "false");
      if (open) {
        linksWrap.style.display = "flex";
        linksWrap.style.flexDirection = "column";
        linksWrap.style.position = "absolute";
        linksWrap.style.top = "68px";
        linksWrap.style.left = "0";
        linksWrap.style.right = "0";
        linksWrap.style.background = "rgba(21,16,12,.97)";
        linksWrap.style.padding = "18px 24px";
        linksWrap.style.gap = "16px";
      } else {
        linksWrap.removeAttribute("style");
      }
    });
  }

  /* 滚动显现动画 */
  var reveals = document.querySelectorAll(".showcard-wrap, .feature, .step, .review, .show-card, .stat");
  if ("IntersectionObserver" in window && reveals.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    reveals.forEach(function (el) { el.classList.add("reveal"); io.observe(el); });
  }

  /* 平滑滚动（锚点） */
  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener("click", function (e) {
      var id = a.getAttribute("href");
      if (id.length > 1) {
        var target = document.querySelector(id);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    });
  });
})();