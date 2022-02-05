const header = document.querySelector('.navbar');
console.log(header)
window.onscroll = function() {
    const top = window.scrollY;
    if(top >=100) {
        header.classList.add('navbarDark');
    }
    else {
        header.classList.remove('navbarDark');
    }
}
// collapse navbar after click on small devices
const navLinks = document.querySelectorAll('.nav-item')
const menuToggle = document.getElementById('navbarSupportedContent')

navLinks.forEach((l) => {
    l.addEventListener('click', () => { new bootstrap.Collapse(menuToggle).toggle() })
})

var currentDay = moment().format('MMMM Do YYYY');
document.querySelector("#currentDay").innerHTML = (`${currentDay}`);
console.log(currentDay);

var currentHr = moment().format('HH');

var currentDay = moment().format('MMMM Do YYYY');
document.querySelector("#currentDay").innerHTML = (`${currentDay}`);
console.log(currentDay);

var currentHr = moment().format('HH');
console.log(currentHr);
function showSkills() {
  let node = document.getElementById('hide')
  node.style.visibility = 'visible';


  $(document).ready(function () {
    $('.skill-box').find('#b1').each(function (i) {
      return $(this).prop('Counter', 0).animate({
        Counter: $(this).parent().data('percent')
      }, {
        duration: 2000,
        easing: 'swing',
        step(now) {
          return $(this).text(Math.ceil(now) + '%');
        }
      });
    });

    return $('.skill-box .skills-circle #first').each(function (i) {
      const _right = $(this).find('.bar-circle-right');
      const _left = $(this).find('.bar-circle-left');
      const _percent = $(this).attr('data-percent');
      let deg = 3.6 * _percent;
      if (_percent <= 50) {
        return _right.animate({
          circle_rotate: deg
        }, {
          step(deg) {
            $(this).css('transform', `rotate(${deg}deg)`);
          },
          duration: 2000
        });
      } else {
        const full_deg = 180;
        deg -= full_deg;
        let run_duration = 2000 * (50 / _percent);
        return _right.animate({
          circle_rotate: full_deg
        }, {
          step(full_deg) {
            $(this).css('transform', `rotate(${full_deg}deg)`);
          },
          duration: run_duration,
          easing: 'linear',
          complete() {
            run_duration -= 2000;
            _left.css({
              'clip': 'rect(0, 150px, 150px, 75px)',
              'background': '#1b023d'
            });
            return _left.animate({
              circle_rotate: deg
            }, {
              step(deg) {
                $(this).css('transform', `rotate(${deg}deg)`);
              },
              duration: Math.abs(run_duration),
              easing: 'linear'
            });
          }
        });
      }
    });
  });

}





function showS() {
  let node = document.getElementById('hide2')
  node.style.visibility = 'visible';



  $(document).ready(function () {
    $('.skill-box').find('#b2').each(function (i) {
      return $(this).prop('Counter', 0).animate({
        Counter: $(this).parent().data('percent')
      }, {
        duration: 2000,
        easing: 'swing',
        step(now) {
          return $(this).text(Math.ceil(now) + '%');
        }
      });
    });

    return $('.skill-box .skills-circle #second').each(function (i) {
      const _right = $(this).find('.bar-circle-right');
      const _left = $(this).find('.bar-circle-left');
      const _percent = $(this).attr('data-percent');
      let deg = 3.6 * _percent;
      if (_percent <= 50) {
        return _right.animate({
          circle_rotate: deg
        }, {
          step(deg) {
            $(this).css('transform', `rotate(${deg}deg)`);
          },
          duration: 2000
        });
      } else {
        const full_deg = 180;
        deg -= full_deg;
        let run_duration = 2000 * (50 / _percent);
        return _right.animate({
          circle_rotate: full_deg
        }, {
          step(full_deg) {
            $(this).css('transform', `rotate(${full_deg}deg)`);
          },
          duration: run_duration,
          easing: 'linear',
          complete() {
            run_duration -= 2000;
            _left.css({
              'clip': 'rect(0, 150px, 150px, 75px)',
              'background': '#1b023d'
            });
            return _left.animate({
              circle_rotate: deg
            }, {
              step(deg) {
                $(this).css('transform', `rotate(${deg}deg)`);
              },
              duration: Math.abs(run_duration),
              easing: 'linear'
            });
          }
        });
      }
    });
  });

}



function showSk() {
  let node = document.getElementById('hide3')
  node.style.visibility = 'visible';


  $(document).ready(function () {
    $('.skill-box').find('#b3').each(function (i) {
      return $(this).prop('Counter', 0).animate({
        Counter: $(this).parent().data('percent')
      }, {
        duration: 2000,
        easing: 'swing',
        step(now) {
          return $(this).text(Math.ceil(now) + '%');
        }
      });
    });

    return $('.skill-box .skills-circle #third').each(function (i) {
      const _right = $(this).find('.bar-circle-right');
      const _left = $(this).find('.bar-circle-left');
      const _percent = $(this).attr('data-percent');
      let deg = 3.6 * _percent;
      if (_percent <= 50) {
        return _right.animate({
          circle_rotate: deg
        }, {
          step(deg) {
            $(this).css('transform', `rotate(${deg}deg)`);
          },
          duration: 2000
        });
      } else {
        const full_deg = 180;
        deg -= full_deg;
        let run_duration = 2000 * (50 / _percent);
        return _right.animate({
          circle_rotate: full_deg
        }, {
          step(full_deg) {
            $(this).css('transform', `rotate(${full_deg}deg)`);
          },
          duration: run_duration,
          easing: 'linear',
          complete() {
            run_duration -= 2000;
            _left.css({
              'clip': 'rect(0, 150px, 150px, 75px)',
              'background': '#1b023d'
            });
            return _left.animate({
              circle_rotate: deg
            }, {
              step(deg) {
                $(this).css('transform', `rotate(${deg}deg)`);
              },
              duration: Math.abs(run_duration),
              easing: 'linear'
            });
          }
        });
      }
    });
  });

}

  
window.addEventListener("DOMContentLoaded", function () {
  // get the form elements defined in your form HTML above

  var form = document.getElementById("my-form");
  // var button = document.getElementById("my-form-button");
  var status = document.getElementById("status");

  // Success and Error functions for after the form is submitted

  function success() {
    form.reset();
    status.classList.add("success");
    status.innerHTML = "Thanks Your E-mail has been Sent!";
  }

  function error() {
    status.classList.add("error");
    status.innerHTML = "Oops! There was a problem.";
  }

  // handle the form submission event

  form.addEventListener("submit", function (ev) {
    ev.preventDefault();
    var data = new FormData(form);
    ajax(form.method, form.action, data, success, error);
  });
});

// helper function for sending an AJAX request

function ajax(method, url, data, success, error) {
  var xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.setRequestHeader("Accept", "application/json");
  xhr.onreadystatechange = function () {
    if (xhr.readyState !== XMLHttpRequest.DONE) return;
    if (xhr.status === 200) {
      success(xhr.response, xhr.responseType);
    } else {
      error(xhr.status, xhr.response, xhr.responseType);
    }
  };
  xhr.send(data);
}


  
  

        

