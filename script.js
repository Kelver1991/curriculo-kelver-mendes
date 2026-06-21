const navLinks = document.querySelectorAll(".nav a");
const copyButtons = document.querySelectorAll("[data-copy]");
const copyFeedback = document.querySelector("#copyFeedback");
const printButton = document.querySelector("[data-print]");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.forEach((item) => item.removeAttribute("aria-current"));
    link.setAttribute("aria-current", "page");
  });
});

copyButtons.forEach((button) => {
  button.addEventListener("click", async () => {
    const value = button.dataset.copy;

    try {
      await navigator.clipboard.writeText(value);
      copyFeedback.textContent = "Contato copiado.";
    } catch {
      copyFeedback.textContent = value;
    }
  });
});

printButton.addEventListener("click", () => {
  window.print();
});
