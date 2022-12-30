const activate = (event, tabContentId) => {
    document.querySelectorAll(".tab").forEach(tabEl => {
        tabEl.classList.remove("tab-active");
        event.target.classList.add("tab-active");
    });

    document.querySelectorAll(".tab_content").forEach(tabContentEl => {
        tabContentEl.classList.add("hidden");
    });

    document.querySelector(tabContentId).classList.remove("hidden")
}