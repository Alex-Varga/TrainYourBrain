// scroll anchor
$(document).on('click', ' a[href^="#"]', function (event) {
  event.preventDefault();
  if ($(window).width() < 899) {
    $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top-110
    }, 500);
  } else {
    $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top-70
    }, 500);
  }
});

// header burger
const burger = document.querySelector('.header__burger'),
header = document.querySelector('.header__nav'),
body = document.body;

burger.addEventListener('click', function() {
  this.classList.toggle('active');
  header.classList.toggle('active');
  body.classList.toggle('lock');
});

header.addEventListener('click', function() {
  this.classList.remove('active');
  burger.classList.remove('active')
  body.classList.remove('lock');
});

// form
const select1 = new CustomSelect('#select-1');
const select2 = new CustomSelect('#select-2');
function clickPrice(index, type) {
  const btns = document.querySelectorAll('.package-item__btn'),
  options = document.querySelectorAll('.select__option');
  btns.forEach((btn) => {
    btn.addEventListener('click', () => {
      if(btn.classList.contains(type)) {
        options.forEach((option) => {
          option.classList.remove('select__option_selected');
        })
        options[index].click();
        options[index].classList.add('select__option_selected');
      }
    })
  })
}
clickPrice(3, 'basic');
clickPrice(4, 'smart');
clickPrice(5, 'premium');

// packages
new Swiper(".packages__package-items", {
  breakpoints: {
    0: {
      slidesPerView: 1
    },
    375: {
      slidesPerView: 'auto'
    },
    767: {
      slidesPerView: 2
    },
    1024: {
      slidesPerView: 3
    }
  }
});

const more = document.querySelectorAll('.package-item__show-more');
more.forEach((el) => {
  el.addEventListener('click', function() {
    el.classList.toggle('open');
    let content = this.nextElementSibling;

    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  })
});



// teachers
new Swiper(".teachers__items", {
  breakpoints: {
    0: {
      slidesPerView: 1
    },
    375: {
      slidesPerView: 'auto'
    },
    767: {
      slidesPerView: 2
    },
    1024: {
      slidesPerView: 3
    }
  },
  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true
  },
});


// reviews
new Swiper(".reviews__items", {
  breakpoints: {
    0: {
      slidesPerView: 1
    },
    375: {
      slidesPerView: 'auto'
    },
    767: {
      slidesPerView: 2
    },
    1024: {
      slidesPerView: 3
    }
  },
  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true
  },
});


// sending form
const forms = document.querySelectorAll('.form');
forms.forEach(function(form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
  
    // const statusMessage = document.createElement('img');
    // statusMessage.src = message.loading;
    // statusMessage.style.cssText = `
    //     display: block;
    //     margin: 0 auto;
    // `;
  
  
    // form.insertAdjacentElement('afterend', statusMessage);
  
    const formData = new FormData(form);
  
    // превращаем formData в json
    const json = JSON.stringify(Object.fromEntries(formData.entries()));
  
    console.log(Object.fromEntries(formData.entries()));
  
    form.reset();
  
    // postData(' http://localhost:3000/requests', json)
    //   .then(data => {
    //     console.log(data);
    //     showThanksModal(message.success);
    //     statusMessage.remove();
    //   }).catch(() => {
    //     showThanksModal(message.failure);
    //   }).finally(() => {
    //     form.reset();
    // });
  
    // const postData = async (url, data) => {
    //   const res = await fetch(url, {
    //       method: 'POST',
    //       headers: {
    //           'Content-type': 'application/json'
    //       },
    //       body: data
    //   });
  
    // return await res.json();
    // };
  });
})