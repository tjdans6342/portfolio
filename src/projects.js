"use strict";
// 프로젝트 필터링 로직 구현
const categories = document.querySelector(".categories");
const projects = document.querySelectorAll(".project");
const projectsContainer = document.querySelector(".projects");

// 페이지 로딩시 이벤트
document.addEventListener("DOMContentLoaded", function () {
  filterProjects("university");
});

// 프로젝트 카테고리 클릭시 이벤트
categories.addEventListener("click", (event) => {
  const filter = event.target.dataset.category;
  console.log(filter);
  if (filter == null) return;

  handleActiveSelection(event.target);
  filterProjects(filter);
});

function handleActiveSelection(target) {
  // Active 메뉴를 재설정
  const active = document.querySelector(".category--selected");
  active.classList.remove("category--selected");
  target.classList.add("category--selected");
}

function filterProjects(filter) {
  // 프로젝트 필터링
  projectsContainer.classList.add("anim-out");
  projects.forEach((project) => {
    if (filter === "all" || filter === project.dataset.type) {
      project.style.display = "block";
    } else {
      project.style.display = "none";
    }
  });
  setTimeout(() => {
    projectsContainer.classList.remove("anim-out");
  }, 250);
}
