alert("This Website is under development for Mobiles and tablets ");	


let hamberger = document.querySelector('.hamberger');
let times =document.querySelector('.times');
let mobileNav =document.querySelector('.mobile-nav');


hamberger.addEventListener('click',function(){
    mobileNav.classList.add('open');
});




times.addEventListener('click',function(){
     mobileNav.classList.remove('open');
});



window.onload = function() {
  var elements = document.getElementsByClassName('txt-rotate');
  for (var i=0; i<elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-rotate');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtRotate(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
  document.body.appendChild(css);
};




