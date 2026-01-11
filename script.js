// Toggle experience details
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
