//using selectors inside the element
const questions = document.querySelectorAll('.question');
questions.forEach((question, i) => {
  const btn = question.querySelector('.question-btn');
  // console.log(btn);
  btn.addEventListener('click', ()=>{
    question.classList.toggle('show-text');

    questions.forEach((item, i) => {
      if(item !== question){
        item.classList.remove('show-text')
      }
    });


  })
});






// traversing the dom
// questBtns =  document.querySelectorAll('.question-btn');
// questBtns.forEach((btn, i) => {
//   btn.addEventListener('click', (e)=>{
//     const question = (e.currentTarget.parentElement.parentElement);
//     question.classList.toggle('show-text')
//   })
// });
