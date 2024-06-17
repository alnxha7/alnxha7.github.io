/*!
=========================================================
* Meyawo Landing page
=========================================================

* Copyright: 2019 DevCRUD (https://devcrud.com)
* Licensed: (https://devcrud.com/licenses)
* Coded by www.devcrud.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// smooth scroll
$(document).ready(function(){
    $(".navbar .nav-link").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function(){
                window.location.hash = hash;
            });
        } 
    });
});

// navbar toggle
$('#nav-toggle').click(function(){
    $(this).toggleClass('is-active')
    $('ul.nav').toggleClass('show');
});

document.getElementById('cv-download-btn').addEventListener('click', function() {
    const link = document.createElement('a');
    link.href = "public_html/doc/ALANSHA_RESUME.pdf";
    link.download = 'ALANSHA_RESUME.pdf'; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});

document.getElementById('github-btn').addEventListener('click', function() {
    window.open('https://github.com/alnxha7', '_blank');
});

document.getElementById('email-btn').addEventListener('click', function() {
    const recipient = 'alansha71011@gmail.com';
    const subject = 'Invitation to Interview for';
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${recipient}&su=${encodeURIComponent(subject)}`, '_blank');
});
