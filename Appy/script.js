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
//feature section
const featuresData = [
  {
    img: 'assets/icons/fe1.svg',
    alt: 'feature1',
    heading: 'Fermentum amet',
    text: 'Pellentesque quis tincidunt sit sed. Tortor massa sed habitant dignissim senectus purus. Consectetur integer id in et pulvinar interdum id.'
  },
  {
    img: 'assets/icons/fe2.svg',
    alt: 'feature2',
    heading: 'Dignissim quam',
    text: 'Quam sed neque vitae viverra purus venenatis ac non. Eget sed nunc, amet, nibh nulla. Morbi sed risus ullamcorper diam, elit ut non.'
  },
  {
    img: 'assets/icons/fe3.svg',
    alt: 'feature3',
    heading: 'Risus morbi',
    text: 'Euismod sed pellentesque ut elementum. Accumsan gravida turpis ac at. Ullamcorper vitae non est elit odio at augue consequat.'
  }
];

const featureHTML = featuresData.map((feature, index) => {
  return `
    <div class="col-lg-4 col-sm-12 fe">
      <img class="fe${index + 1}-img" src="${feature.img}" alt="${feature.alt}" />
      <h6 class="fe-heading">${feature.heading}</h6>
      <p class="fe-text">${feature.text}</p>
    </div>
  `;
}).join('');

document.getElementById('feature-container').innerHTML = featureHTML;

//accordian 1
const accordionData = [
  {
    title: "Sem augue tempus",
    content: "Venenatis blandit habitasse nunc, sapien enim elit in. Arcu, pharetra, et cursus sit senectus in blandit. Aliquet enim fermentum non semper nibh ut neque. Pellentesque ut tincidunt vitae arcu bibendum malesuada lorem sapien volutpat.",
    active: true,
  },
  {
    title: "Habitant integer interdum a",
    content: "Venenatis blandit habitasse nunc, sapien enim elit in. Arcu, pharetra, et cursus sit senectus in blandit. Aliquet enim fermentum non semper nibh ut neque. Pellentesque ut tincidunt vitae arcu bibendum malesuada lorem sapien volutpat.",
    active: false,
  },
  {
    title: "Tempus natoque id",
    content: "Venenatis blandit habitasse nunc, sapien enim elit in. Arcu, pharetra, et cursus sit senectus in blandit. Aliquet enim fermentum non semper nibh ut neque. Pellentesque ut tincidunt vitae arcu bibendum malesuada lorem sapien volutpat.",
    active: false,
  }
];

const accordionHTML = accordionData.map((item, index) => {
  return `
    <div class="accordion-item ${item.active ? 'active' : ''}">
      <div class="accordion-header" onclick="toggleAccordion(${index}, '.slider1-section')">
        ${item.title}
      </div>
      <div class="accordion-content ${item.active ? 'active' : ''}">
        <p>${item.content}</p>
      </div>
    </div>
  `;
}).join('');

document.getElementById("accordion-container").innerHTML = accordionHTML;

//accordian2
const accordionData2 = [
  {
    title: "Bibendum gravida dolor egestas aliquam",
    content: "Egestas tincidunt hendrerit nibh platea sit vivamus aenean rhoncus etiam. Tristique amet, sed ac ac dolor habitant. Mauris duis neque molestie venenatis nibh hendrerit pharetra. Tortor suscipit leo sit tellus ac scelerisque gravida sem.",
    active: true,
  },
  {
    title: "Egestas lorem eget",
    content: "Egestas tincidunt hendrerit nibh platea sit vivamus aenean rhoncus etiam. Tristique amet, sed ac ac dolor habitant. Mauris duis neque molestie venenatis nibh hendrerit pharetra. Tortor suscipit leo sit tellus ac scelerisque gravida sem.",
    active: false,
  },
  {
    title: "Tellus eget feugiat sit",
    content: "Egestas tincidunt hendrerit nibh platea sit vivamus aenean rhoncus etiam. Tristique amet, sed ac ac dolor habitant. Mauris duis neque molestie venenatis nibh hendrerit pharetra. Tortor suscipit leo sit tellus ac scelerisque gravida sem.",
    active: false,
  }
];

const accordionHTML2 = accordionData2.map((item, index) => {
  return `
    <div class="accordion-item ${item.active ? 'active' : ''}">
      <div class="accordion-header" onclick="toggleAccordion(${index}, '.slider2-section')">
        ${item.title}
      </div>
      <div class="accordion-content ${item.active ? 'active' : ''}">
        <p>${item.content}</p>
      </div>
    </div>
  `;
}).join('');

document.getElementById("accordion-container-2").innerHTML = accordionHTML2;


//accordian3
const accordionQuestions = [
  {
    title: "Enim sodales consequat adipiscing facilisis massa venenatis, non lorem lobortis?",
    content: "yes",
    active: true,
  },
  {
    title: "Venenatis nulla sagittis nunc, lobortis nec sollicitudin neque, dolor?",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel hic ullam accusamus, veritatis laboriosam voluptatum quibusdam quis porro rem velit consequuntur dignissimos maxime voluptatem at quia, laborum, atque tempora. Quas.",
    active: false,
  },
  {
    title: "Varius ultricies molestie tellus fermentum, viverra ipsum scelerisque etiam lorem?",
    content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi quis odit culpa odio dignissimos, blanditiis ex. Ea, quidem laboriosam. Repudiandae voluptate fugit exercitationem, odio in saepe quaerat sapiente quia dignissimos.",
    active: false,
  },
  {
    title: "Nulla etiam vitae, at sagittis, nibh ultrices mattis feugiat faucibus?",
    content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita voluptate omnis voluptatum! Obcaecati saepe neque numquam quos repellendus, a, praesentium fugiat iste labore accusamus assumenda? Praesentium necessitatibus dolores maxime eos?",
    active: false,
  },
  {
    title: "Sagittis consectetur gravida nec turpis eros, id sit et, dictum?",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos sequi perspiciatis similique recusandae eos? Error illo libero, quo aliquid quaerat reiciendis. Cum quam ut consectetur ipsa impedit rem hic dolores?",
    active: false,
  }
];

const accordionHTMLQuestions = accordionQuestions.map((item, index) => {
  return `
    <div class="accordion-item qacc-item ${item.active ? 'active' : ''}">
      <h2 class="accordion-header qacc-header">
        <button class="accordion-button qacc-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${index + 1}" aria-expanded="${item.active ? 'true' : 'false'}" aria-controls="collapse${index + 1}">
          ${item.title}
        </button>
      </h2>
      <div id="collapse${index + 1}" class="accordion-collapse collapse ${item.active ? 'show' : ''}" data-bs-parent="#que-accordion">
        <div class="accordion-body qacc-body">
          <strong>${item.content}</strong>
        </div>
      </div>
    </div>
  `;
}).join('');

document.getElementById("que-accordion").innerHTML = accordionHTMLQuestions;


//footer
const footerData = [
  {
    title: "Categories",
    links: [
      "User Interface",
      "User Experience",
      "Digital Media",
      "Development",
      "Programming",
      "Animation"
    ]
  },
  {
    title: "Product",
    links: [
      "Pricing",
      "Overview",
      "Browse",
      "Accessibility",
      "Five",
      "Changelog"
    ]
  },
  {
    title: "Solutions",
    links: [
      "Brainstorming",
      "Ideation",
      "Wireframing",
      "Research",
      "Design",
      "Concept"
    ]
  },
  {
    title: "Resources",
    links: [
      "Help Center",
      "Blog",
      "Tutorials",
      "FAQs",
      "Community",
      "Events"
    ]
  },
  {
    title: "Support",
    links: [
      "Contact Us",
      "Developers",
      "Documentation",
      "Integrations",
      "Reports",
      "Webinar"
    ]
  },
  {
    title: "Company",
    links: [
      "About",
      "Press",
      "Events",
      "Careers",
      "Customers",
      "Partners"
    ]
  }
];

const footerHTML = footerData.map((category) => {
  const linksHTML = category.links.map(link => {
    return `<li><a href="#">${link}</a></li>`;
  }).join('');

  return `
    <div class="col-lg-2 col-md-4 col-sm-6 col-12 footer-category">
      <h4 class="footer-title">${category.title}</h4>
      <ul class="footer-points">
        ${linksHTML}
      </ul>
    </div>
  `;
}).join('');

document.querySelector('.footer-links .row').innerHTML = footerHTML;

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
//     heading: "Success Stories2",
//     description:
//       " Id urna, nisl, ut quam. Diam suspendisse fringilla quam arcu mattis est velit in. Nibh in purus sit convallis phasellus ut. At vel erat ultricies commodo. Neque suspendisse a habitasse commodo. ",
//     titile: "Marie Poirot,",
//     subtitle: "Bigapp",
//     image: "./assets/images/slick-img1.png",
//   },
//   {
//     heading: "Success Stories3",
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
//   <h5>${slider3.subtitle}</h5>
// </div>
// </div>
//   `
//   )
//   .join("");

const slider3Data = [
  {
    imgSrc: "assets/images/slick-img1.png",
    heading: "Success Stories",
    text: "Id urna, nisl, ut quam. Diam suspendisse fringilla quam arcu mattis est velit in. Nibh in purus sit convallis phasellus ut. At vel erat ultricies commodo. Neque suspendisse a habitasse commodo.",
    author: "Marie Poirot",
    company: "Bigapp"
  },
  {
    imgSrc: "assets/images/slick-img1.png",
    heading: "Success Stories1",
    text: "Id urna, nisl, ut quam. Diam suspendisse fringilla quam arcu mattis est velit in. Nibh in purus sit convallis phasellus ut. At vel erat ultricies commodo. Neque suspendisse a habitasse commodo.",
    author: "Marie Poirot1",
    company: "Bigapp1"
   
  },
  {
    imgSrc: "assets/images/slick-img1.png",
    heading: "Success Stories2",
    text: "Id urna, nisl, ut quam. Diam suspendisse fringilla quam arcu mattis est velit in. Nibh in purus sit convallis phasellus ut. At vel erat ultricies commodo. Neque suspendisse a habitasse commodo.",
    author: "Marie Poirot2",
    company: "Bigapp2"
  }
];

const carouselInnerHTML = slider3Data.map((item, index) => {
  return `
    <div class="carousel-item ${index === 0 ? 'active' : ''}">
      <div class="row carousel-rows">
        <div class="col-lg-6 col-md-12 carousel-item1">
          <img src="${item.imgSrc}" class="carousel-img" alt="carousel-img" />
        </div>
        <div class="col-lg-6 col-md-12 carousel-item2">
          <div class="carousel-content">
            <div>
              <h1 class="carousel-heading">${item.heading}</h1>
              <p class="carousel-text">
                <span class="highlight-start">“</span>
                ${item.text}
                <span class="highlight-end">”</span>
              </p>
            </div>
            <div class="carousel-heads">
              ${item.author},<br>
              <span class="name">${item.company}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}).join('');
document.querySelector('#slider3-container .carousel-inner').innerHTML = carouselInnerHTML;


