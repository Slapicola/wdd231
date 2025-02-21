const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('nav');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});

window.onload = () => {
	const tabs = document.querySelectorAll(".menu-tab");

    const activeTab = localStorage.getItem("activeTab");
    if (activeTab) {
        const activeElement = document.querySelector(`.menu-tab[data-tab="${activeTab}"]`);
        if (activeElement) {
            activeElement.classList.add("active");
        }
    }
    
    tabs.forEach(tab => {
        tab.addEventListener("click", function () {
            tabs.forEach(navTab => navTab.classList.remove("active"));
            this.classList.add("active");

            const tabId = this.getAttribute("data-tab");
            localStorage.setItem("activeTab", tabId);
        });
    });
};