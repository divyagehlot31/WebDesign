function toggleAccordion(index, sectionClass) {
    const section = document.querySelector(sectionClass);
    const items = section.querySelectorAll('.accordion-item');
    const contents = section.querySelectorAll('.accordion-content');
    
    items.forEach(item => item.classList.remove('active'));
    contents.forEach(content => content.classList.remove('active'));
    
    items[index].classList.add('active');
    contents[index].classList.add('active');
  }