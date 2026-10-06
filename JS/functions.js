
  const searchInput = document.getElementById("searchInput");
  const noResults   = document.getElementById("noResults");

  searchInput.addEventListener("keyup", (event) => {
    const searchQuery = event.target.value.toLowerCase().trim();
    const bookCards   = document.querySelectorAll(".book-card");

    let totalVisible = 0;

    bookCards.forEach((card) => {
      const titleEl = card.querySelector(".book-title");
      const subEl   = card.querySelector(".book-sub");

      const titleText = titleEl ? titleEl.textContent.toLowerCase() : "";
      const subText   = subEl   ? subEl.textContent.toLowerCase()   : "";

      if (titleText.includes(searchQuery) || subText.includes(searchQuery)) {
        card.style.display = "";
        totalVisible++;
      } else {
        card.style.display = "none";
      }
    });

    // Hide section headings/grids if they have no visible cards
    document.querySelectorAll(".section-heading").forEach((heading) => {
      const grid = heading.nextElementSibling;
      if (!grid || !grid.classList.contains("book-grid")) return;

      const visible = [...grid.querySelectorAll(".book-card")]
        .filter(c => c.style.display !== "none");

      heading.style.display = visible.length ? "" : "none";
      grid.style.display    = visible.length ? "" : "none";
    });

    // Show / hide "no results" message
    noResults.style.display = (totalVisible === 0 && searchQuery !== "") ? "block" : "none";
  });

  
