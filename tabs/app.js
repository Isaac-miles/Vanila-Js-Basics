const btns = document.querySelectorAll('.tab-btn');
const about = document.querySelector('.about');
const articles = document.querySelectorAll('.content');

about.addEventListener('click', function(e){
  const id = (e.target.dataset.id);

  if(id){
    //remove selected from other buttons
    btns.forEach((btn, i) => {
      btn.classList.remove('active')
    });
  e.target.classList.add('active')
//hide other article
articles.forEach((article, i) => {
  article.classList.remove('active')
});
  const element = document.getElementById(id);
 element.classList.add('active')
  }
});
