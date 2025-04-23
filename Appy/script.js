//accordian
function toggleAccordion(index, sectionClass) {
  const section = document.querySelector(sectionClass);
  const items = section.querySelectorAll(".accordion-item");
  const contents = section.querySelectorAll(".accordion-content");

  items.forEach((item) => item.classList.remove("active"));
  contents.forEach((content) => content.classList.remove("active"));

  items[index].classList.add("active");
  contents[index].classList.add("active");
}

//slider 3
// const slider3Data = [
//   {
//     heading: "Success Stories",
//     description:
//       " Id urna, nisl, ut quam. Diam suspendisse fringilla quam arcu mattis est velit in. Nibh in purus sit convallis phasellus ut. At vel erat ultricies commodo. Neque suspendisse a habitasse commodo. ",
//     titile: "Marie Poirot,",
//     subtitle: "Bigapp",
//     image: "./assets/images/slick-img1.png",
//   },
//   {
//     heading: "Success Stories",
//     description:
//       " Id urna, nisl, ut quam. Diam suspendisse fringilla quam arcu mattis est velit in. Nibh in purus sit convallis phasellus ut. At vel erat ultricies commodo. Neque suspendisse a habitasse commodo. ",
//     titile: "Marie Poirot,",
//     subtitle: "Bigapp",
//     image: "./assets/images/slick-img1.png",
//   },
//   {
//     heading: "Success Stories",
//     description:
//       " Id urna, nisl, ut quam. Diam suspendisse fringilla quam arcu mattis est velit in. Nibh in purus sit convallis phasellus ut. At vel erat ultricies commodo. Neque suspendisse a habitasse commodo. ",
//     titile: "Marie Poirot,",
//     subtitle: "Bigapp",
//     image: "./assets/images/slick-img1.png",
//   },
// ];

// const slider3Container = document.getElementById("slider3-inner");
// slider3Container.innerHTML = slider3Data
//   .map(
//     (slider3) => `

//  <div class="row align-items-center">
//         <div class="col-md-6 slider3-item">
//   <img src="${slider3.image || "./assets/images/default.png"}" alt="${
//       slider3.heading
//     }"/>
//   </div>
//   <div class="col-md-6 slider3-content">
//   <h1>${slider3.heading}</h1>
//   <p>${slider3.description}</p>
//   <h4>${slider3.titile}</h4>
//   <h5>${slider3.titile}</h5>
// </div>
// </div>
//   `
//   )
//   .join("");