const sideBarMenuToggle = () => {
  const sideBarToggleButtonIcon = document.querySelector(
    ".dashboard-sidebar-toggle-button svg"
  );
  const dashboardSidebarContainer = document.querySelector(".dashboard-sidebar-container");
  const sidebarLogo = document.querySelector(
    ".dashboard-sidebar-logo-container h4"
  );
  const sidebarAptInfoDropdownButton = document.querySelector(
    ".dashboard-header-right-account-button"
  );
  const sidebarMenuItemTexts = document.querySelectorAll(
    ".sidebar-menu-item a"
  );
  const sidebarMenuItemHeaders = document.querySelectorAll(
    ".dashboard-sidebar-menu-item-header"
  );

  console.log(dashboardSidebarContainer)

  sideBarToggleButtonIcon.classList.toggle("fa-chevron-left");
  sideBarToggleButtonIcon.classList.toggle("fa-chevron-right");
  sidebarLogo.classList.toggle("d-none");
  sidebarLogo.classList.toggle("d-block");
  sidebarAptInfoDropdownButton.classList.toggle("d-none");
  sidebarAptInfoDropdownButton.classList.toggle("d-block");
  dashboardSidebarContainer.classList.toggle("dashboard-sidebar-container-active");


  sidebarMenuItemTexts.forEach((item) => {
    item.classList.toggle("d-none");
    item.classList.toggle("d-block");
  });

  const sidebarMenuItemOriginalHeaderTexts = [
    "Yönetim",
    "Finansal İşlemler",
    "İletişim",
  ];

  sidebarMenuItemHeaders.forEach((header, index) => {
    header.textContent = sidebarLogo.classList.contains("d-none")
      ? ""
      : sidebarMenuItemOriginalHeaderTexts[index];
  });
};

