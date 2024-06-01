document.addEventListener("DOMContentLoaded", () => {
  const terms = document.querySelectorAll(".term");
  const definitions = document.querySelectorAll(".definition");
  const message = document.getElementById("message");

  let draggedTerm = null;

  terms.forEach((term) => {
    term.addEventListener("dragstart", () => {
      draggedTerm = term;
    });
  });

  definitions.forEach((definition) => {
    definition.addEventListener("dragover", (e) => {
      e.preventDefault();
    });

    definition.addEventListener("drop", () => {
      if (definition.dataset.term === draggedTerm.textContent) {
        definition.style.backgroundColor = "lightgreen";
        draggedTerm.style.display = "none";
        message.textContent = "Correct!";
      } else {
        message.textContent = "Try Again!";
      }
    });
  });
});
