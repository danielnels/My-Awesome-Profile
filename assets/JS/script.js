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


function sendMail() {
    let link = "mailto:danieln@newground.net.au"
      + "?cc=danieln@newground.net.au"
      + "&subject=" + encodeURIComponent("request info")
      + "&body=" + encodeURI(document.location);
    
  
    alert("Your e-mail is ready to be sent!");
  
    window.location.href = link;
    
     
}
