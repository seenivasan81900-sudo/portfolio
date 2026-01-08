document.querySelector("footer").innerHTML = `
<button id="backToTop">↑</button>
     <div class="container py-5">
            <div class="d-flex flex-wrap flex-lg-row flex-column justify-content-between">
                <div class="col-lg-6">
                    <div class="border-bottom border-dark py-3">
                        <h3 class="fw-bold h1">Interested in what you see?</h3>
                        <h4 class="fw-bold h3">Take a look at my <a href="https://drive.google.com/file/d/19HdtnQjybnGU24VJeNkugujJMsLoDi2A/view?usp=sharing" class="text-primary fw-bold text-decoration-none">résumé </a> and let’s connect 👇</h4>
                    </div>

                    <div class="my-3">
                        <ul class="list-unstyled row py-3">
                            <li class="col-sm my-2">
                                <a href="https://www.behance.net/seenivasan8/projects" class="text-decoration-none" target="_blank">
                                    <i class="fa-brands fa-behance me-2"></i>Behance
                                </a>
                            </li>
                            <li class="col-sm my-2">
                                <a href="https://www.linkedin.com/in/seenivasan-v-005aa3193/" class="text-decoration-none" target="_blank">
                                    <i class="fa-brands fa-linkedin me-2"></i>Linkedin
                                </a>
                            </li>
                            <li class="col-sm my-2">
                                <a href="https://dribbble.com/seenivasan81900" class="text-decoration-none" target="_blank">
                                    <i class="fa-brands fa-dribbble me-2"></i>Dribbble
                                </a>
                            </li>
                            <li class="col-sm my-2">
                                <a href="https://www.instagram.com" class="text-decoration-none" target="_blank">
                                    <i class="fa-brands fa-instagram me-2"></i>Instagram
                                </a>
                            </li>
                            <li class="my-4">
                                <a href="mailto:seenivasan81900@gmail.com"
                                    class="border-bottom py-2 border-dark text-decoration-none"
                                    style="width: fit-content;">
                                    <i class="fa-solid fa-envelope me-2"></i>seenivasan81900@gmail.com <i
                                        class="fa-solid fa-arrow-right me-2"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="col-1">
                    <div class="py-3"> <h6 class="fw-bold">Navigation</h6>
                    <ul class="list-unstyled">
                        <li class="my-2"><a href="about.html" class="text-decoration-none" target="_blank">About</a>
                        </li>
                        <li class="my-2"><a href="index.html" class="text-decoration-none" target="_blank">Projects</a></li>
                        <li class="my-2"><a href="https://drive.google.com/file/d/19HdtnQjybnGU24VJeNkugujJMsLoDi2A/view?usp=sharing" class="text-decoration-none" target="_blank">Resume</a>
                        </li>
                    </ul></div>
                   
                </div>
            </div>

            <div class="d-flex flex-wrap justify-content-between">
                <div class="align-self-end">
                    // <p>Designed & Developed by</p>
                </div>
                <div>
                     <h3 class="h1 style_font" style="font-family: 'Allura', cursive; opacity: .3;">Seeni Vasan</h3>
                </div>
            </div>
        </div>
`;
// -------------------
const btn = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    btn.classList.add("show");
  } else {
    btn.classList.remove("show");
  }
});

btn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});