
// toggle the active for box 
let boxs = document.querySelectorAll('section.projects > .box-wrapper .box > img')
let cover = document.querySelector('.box-wrapper > .cover')

Array.from(boxs).forEach(box => {
	box.addEventListener('click', e => {
		Array.from(boxs).forEach(b => {
			b.parentElement.classList.remove('active')
		})
		box.parentElement.classList.add('active')
		cover.classList.add('active')
	})
})

cover.addEventListener('click', e => {
	cover.classList.remove('active')
	Array.from(boxs).forEach(b => {
		b.parentElement.classList.remove('active')
	})
})

  //for the text animation 
function textAnimation(Selected_element, text){
  var words = [text],
      part,
      i = 0,
      offset = 0,
      len = words.length,
      forwards = true,
      skip_count = 0,
      skip_delay = 15,
      speed = 70;
  var wordflick = function () {
    setInterval(function () {
      if (forwards) {
        if (offset >= words[i].length) {
          ++skip_count;
          if (skip_count == skip_delay) {
            forwards = false;
            skip_count = 0;
          }
        }
      }
      else {
        if (offset == 0) {
          forwards = true;
          i++;
          offset = 0;
          if (i >= len) {
            i = 0;
          }
        }
      }
      part = words[i].substr(0, offset);
      if (skip_count == 0) {
        if (forwards) {
          offset++;
        }
        else {
          offset--;
        }
      }
      $(Selected_element).text(part);
    },speed);
  };

  $(document).ready(function () {
    wordflick();
  });
} 
textAnimation('.word', '3 years of experince.........')
textAnimation('.container > .des span.text', 'Coding for me is like a journey; each project opens up adventurous ideas, and with the best execution, it presents an endless story of creativity and coding.')
textAnimation('.sub-title span:nth-child(2)', 'Get me in touch')



// animtaion of the site header text change
let texts = document.querySelectorAll('.siteHeader > .left .title div span')
let text
setInterval(()=>{
  for (let i =0 ; i < texts.length; i+=1){
    text = texts[i]
    if(text.classList.contains('active')){
      text.classList.remove('active')
      if (text.nextElementSibling != null){
        text.nextElementSibling.classList.add('active')
        break;
      }else{
        texts[0].classList.add('active')
        break;
      }
    }
  }
},'3000')

//toggle the active on the nav
let btn = document.querySelector('.btn')
let nav = document.querySelector('nav')
let btns = document.querySelectorAll('nav.container > div:nth-child(2) > ul:nth-child(2) li a')
btn.addEventListener('click', e => {
  nav.classList.toggle('active')
})
Array.from(btns).forEach(b => {
  b.addEventListener('click',e => {
    nav.classList.remove('active')
  })
})



Array.from(boxs).forEach(b => {
  b.addEventListener('click', function () {
    var popup = b.parentElement;

    // لود تمام تصاویر با تأخیر
    var lazyImages = popup.querySelectorAll('img[loading="lazy"]');
    lazyImages.forEach(function (img) {
      img.src = img.getAttribute('data-src');
      img.removeAttribute('loading');
    });
  });
})

