// short formula
// const [current,imgs]=[document.querySelector('#current'),document.querySelectorAll('.imgs img')];
// imgs.forEach(img=>img.addEventListener('click',e=>(current.src=e.target.src)))

// large formula
const current=document.querySelector('#current');
const imgs=document.querySelectorAll('.imgs img');

// default opacity
const opacity=0.4;
// set first image opacity
imgs[0].style.opacity=opacity;
// imgs[0].style.opacity='0.4';

imgs.forEach(function(img){
  img.addEventListener('click',function(e){
    // reset opacity
    imgs.forEach(img=>(img.style.opacity=1));
    // current image src change
    current.src=e.target.src;
    // change current opacity
    e.target.style.opacity=opacity;
    // add fade in class
    current.classList.add('fade-in');
    // remove fade in after 0.5 sec
    setTimeout(function(){
      current.classList.remove('fade-in');
    },500)
  })
})