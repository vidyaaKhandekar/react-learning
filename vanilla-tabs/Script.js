//configaritions for the tabs data
const tabData = [
  { id: "tab1", title: "Tab1", content: "This is tab1 content" },
  { id: "tab2", title: "Tab2", content: "This is tab2 content" },
  { id: "tab3", title: "Tab3", content: "This is tab3 content" },
];

document.addEventListener("DOMContentLoaded", function () {
  let activeTab = tabData[0].id;

  //reder tabs
  function renderTabs() {
    const tabContainer = document.querySelector("#tabContainer");
    const tabContentContainer = document.querySelector("#tabContentContainer");
    //create tab buttons
    tabData.forEach((tab) => {
      const tabButton = document.createElement("button");
      tabButton.className = "tabLinks";
      tabButton.textContent = tab.title;
      tabButton.setAttribute("data-tab", tab.id);
      tabContainer.appendChild(tabButton);
      //create tab content
      const tabContent = document.createElement("div");
      tabContent.id = tab.id;
      tabContent.className = "tabContent";
      tabContent.innerHTML = `<h3>${tab.id}</h3> <p> ${tab.content}</p>`;
      tabContentContainer.appendChild(tabContent);
    });
    //on clincking tab events
    tabContainer.addEventListener("click", function (event) {
      if (event.target.matches(".tabLinks")) {
        const tabId = event.target.getAttribute("data-tab");

        if (tabId !== activeTab) {
          openTab(tabId, activeTab);
          activeTab = tabId;
        }
      }
    });

    //if clicked on new tab link then
    function openTab(tabId, activeTab) {
      //   const tabContents = document.querySelectorAll(".tabContent");
      //   const tabLinks = document.querySelectorAll(".tabLinks");
      //   tabContents.forEach((tabContent) => {
      //     tabContent.classList.remove("active");
      //   });
      //   tabLinks.forEach((tabLink) => {
      //     tabLink.classList.remove("active");

      //   });
      document.getElementById(activeTab).classList.remove("active");
      document
        .querySelector(`button[data-tab="${activeTab}"]`)
        .classList.remove("active");
      document.getElementById(tabId).classList.add("active");
      document
        .querySelector(`button[data-tab="${tabId}"]`)
        .classList.add("active");
    }
  }

  renderTabs();
  document.getElementById(`${activeTab}`).classList.add("active");
  document
    .querySelector(`button[data-tab="${activeTab}"]`)
    .classList.add("active");
});
