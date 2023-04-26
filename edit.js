const word = document.querySelector('.phraword');
 const   lao = document.querySelector('.phralao');
  const    mean = document.querySelector('.mean');
   const   exam = document.querySelector('.exam');
const btnph = document.querySelector('.phabtn');

      const randompha =()=> {
        let phasa = phrasal[Math.floor(Math.random()*phrasal.length)]
        word.innerText = phasa.word;
        lao.innerText = phasa.lao;
        mean.innerText = phasa.mean;
        exam.innerText = phasa.exam;
        console.log(phasa);



      }
      randompha();
       btnph.addEventListener('click',randompha);