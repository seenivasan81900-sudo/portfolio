// ===== Full Navbar JS =====

// Select the existing <nav> inside header
const nav = document.getElementById("navbar");

// Add classes
nav.className = "navbar px-1 navbar-expand-md";

// Container
const container = document.createElement("div");
container.className =
  "container rounded-pill d-flex justify-content-between align-items-center p-4 bg-dark";
container.style.boxShadow =
  "0px 1px 3px 1px #00000026, 0px 1px 2px 0px #0000004D, 0px 4px 23px 0px #FFFFFF40 inset, 0px -4px 2px 0px #FFFFFF40 inset";

// ===== Brand =====
const brandLink = document.createElement("a");
brandLink.className = "navbar-brand fw-bold";
brandLink.href = "index.html";

const brandH4 = document.createElement("h4");
brandH4.className = "text-white m-0";
brandH4.style.fontFamily = "'Allura', cursive";
brandH4.innerText = "Seeni vasan";

brandLink.appendChild(brandH4);
container.appendChild(brandLink);

// ===== Toggler =====
const toggler = document.createElement("button");
toggler.className = "navbar-toggler custom-toggler";
toggler.type = "button";
toggler.setAttribute("data-bs-toggle", "offcanvas");
toggler.setAttribute("data-bs-target", "#offcanvasNavbar");
toggler.setAttribute("aria-controls", "offcanvasNavbar");
toggler.setAttribute("aria-label", "Toggle navigation");

for (let i = 0; i < 3; i++) {
  const span = document.createElement("span");
  if (i === 0) span.className = "mt-0";
  toggler.appendChild(span);
}
container.appendChild(toggler);

// ===== Offcanvas =====
const offcanvas = document.createElement("div");
offcanvas.className = "offcanvas offcanvas-end bg-dark text-white";
offcanvas.tabIndex = -1;
offcanvas.id = "offcanvasNavbar";
offcanvas.setAttribute("aria-labelledby", "offcanvasNavbarLabel");

// --- Offcanvas Header ---
const offcanvasHeader = document.createElement("div");
offcanvasHeader.className = "offcanvas-header border-bottom border-secondary";

const offBrandLink = document.createElement("a");
offBrandLink.className = "navbar-brand fw-bold d-flex align-items-center";
offBrandLink.href = "index.html";

const offBrandH4 = document.createElement("h4");
offBrandH4.className = "text-white m-0";
offBrandH4.style.fontFamily = "'Lucida Handwriting', cursive";
offBrandH4.innerText = "Seeni vasan";

offBrandLink.appendChild(offBrandH4);
offcanvasHeader.appendChild(offBrandLink);

// Close button
const closeBtn = document.createElement("button");
closeBtn.type = "button";
closeBtn.className = "btn-close btn-close-white me-3";
closeBtn.setAttribute("data-bs-dismiss", "offcanvas");
closeBtn.setAttribute("aria-label", "Close");

offcanvasHeader.appendChild(closeBtn);
offcanvas.appendChild(offcanvasHeader);

// --- Offcanvas Body ---
const offBody = document.createElement("div");
offBody.className =
  "offcanvas-body d-flex flex-column flex-md-row align-items-md-center justify-content-md-between";

// Center Links
const ul = document.createElement("ul");
ul.className = "navbar-nav mx-md-auto text-center";

const links = [
  { text: "About", href: "about.html" },
  { text: "Projects", href: "index.html" },
  { text: "Resume", href: "https://drive.google.com/drive/u/5/home" },
];

links.forEach((link) => {
  const li = document.createElement("li");
  li.className = "nav-item mx-lg-3";

  const a = document.createElement("a");
  a.className = "nav-link";
  a.href = link.href;
  a.innerText = link.text;

  li.appendChild(a);
  ul.appendChild(li);
});

offBody.appendChild(ul);

// Right side: Available for Work
const statusContainer = document.createElement("div");
statusContainer.className = "d-flex flex-row align-items-center my-2";

// Green dot
const dotDiv = document.createElement("div");
dotDiv.className = "status-dot me-3";
dotDiv.innerHTML = "<span></span>";
statusContainer.appendChild(dotDiv);

// Text
const statusText = document.createElement("span");
statusText.innerText = "Available For Work";
statusContainer.appendChild(statusText);

offBody.appendChild(statusContainer);

// Append body to offcanvas
offcanvas.appendChild(offBody);

// Append offcanvas to container
container.appendChild(offcanvas);

// Append container to nav
nav.appendChild(container);

// ===== Set Active Link =====
const currentPage = window.location.pathname.split("/").pop(); 
const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

navLinks.forEach((link) => {
  const linkPage = link.getAttribute("href");
  if (linkPage === currentPage) {
    link.classList.add("active");
  } else {
    link.classList.remove("active");
  }
});
