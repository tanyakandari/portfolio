
// ==========================
// WAIT FOR DOM TO LOAD
// ==========================
document.addEventListener("DOMContentLoaded", () => {

  // ==========================
  // TYPING ANIMATION
  // ==========================
  const nameText = "Tanya Kandari";
  const target = document.getElementById("typed-name");
  const nameContainer = document.querySelector(".name");
  let index = 0;

  function typeLetter() {
    if (index < nameText.length) {
      target.textContent += nameText.charAt(index++);
      setTimeout(typeLetter, 120);
    } else {
      nameContainer.classList.add("underline-active");
    }
  }
  setTimeout(typeLetter, 300);

  // ==========================
  // TABS LOGIC
  // ==========================
  const tabs = document.querySelectorAll(".tab");
  const sections = document.querySelectorAll("section");

  function showTab(tabName) {
    tabs.forEach(t => t.classList.remove("active"));
    sections.forEach(s => s.classList.remove("active"));

    const activeTab = document.querySelector(`.tab[data-tab="${tabName}"]`);
    const activeSection = document.getElementById(tabName);

    if (activeTab && activeSection) {
      activeTab.classList.add("active");
      activeSection.classList.add("active");
    }

    localStorage.setItem("activeTab", tabName);
  }

  tabs.forEach(tab => {
    tab.addEventListener("click", e => {
      e.preventDefault();
      showTab(tab.dataset.tab);
    });
  });

  // Load last active tab
  const savedTab = localStorage.getItem("activeTab") || "home";
  showTab(savedTab);

  // ==========================
  // EXPERIENCE DETAILS TOGGLE
  // ==========================
  document.querySelectorAll(".experience-item").forEach(item => {
    item.addEventListener("click", () => {
      const details = item.querySelector(".experience-details");
      if(details.style.display === "block") {
        details.style.display = "none";
      } else {
        details.style.display = "block";
      }
    });
  });

});
