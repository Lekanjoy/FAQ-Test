let faqBox = document.getElementsByClassName('faq');

for (let i = 0; i < faqBox.length; i++) {
  faqBox[i].addEventListener("click",() => {
      faqBox[i].classList.toggle("show");
    });

};