document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.getElementById('menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  menuToggle.addEventListener('click', function() {
    navLinks.classList.toggle('show');
  });
});

const aboutsection = document.getElementById('about');
const newbutton = document.createElement('button');
newbutton.innerText = 'read my fun facts';
newbutton.className = 'btn';
newbutton.style.marginTop = '1rem';
aboutsection.appendChild(newbutton);
newbutton.addEventListener('click', function() {
    const aboutparagraph = aboutsection.querySelector('p');
    if (aboutparagraph.innerText.includes('I am a software developer with a passion for creating innovative solutions.')) {
        aboutparagraph.innerText = 'I am a software developer with a passion for creating innovative solutions. I enjoy learning new technologies and applying them to real-world projects. In my free time, I like to explore the outdoors, read books, and play video games.';
    } else {
        aboutparagraph.innerText = 'I am a student at africa international university pursuing a degree in computer science. i am also passionate about web development and have experience in building responsive and user-friendly websites. I am constantly seeking opportunities to enhance my skills and contribute to meaningful projects.';
    }
});

const contactsection = document.getElementById('contact');
const form=document.getElementById('form');
form.id = 'contact-form';
form.innerHTML = `
<div style=" margin-bottom: 1rem;">
   <input type="nameInput" id="nameInput" placeholder="Your Name" style="padding: 0.5rem; width: 100%; border: 1px solid #ccc; border-radius: 5px; max-width: 300px;">
</div>
<div style=" margin-bottom: 1rem;">
   <textarea id="messageInput" placeholder="Your Message" style="padding: 0.5rem; width: 100%; border: 1px solid #ccc; border-radius: 5px; max-width: 300px;"></textarea>
</div>
<button type="submit" class="btn">Send Message</button> 
<p id="form-feedback" style="margin-top: 1rem; font-weight: bold;"></p>
`;
contactsection.insertBefore(form, contactsection.querySelector('p'));
form.addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('nameInput').value;
    const email = document.getElementById('emailInput').value;
    const message = document.getElementById('messageInput').value;
    const feedback = document.getElementById('form-feedback');

    if(name ===''){
        feedback.innerText = 'error: Please enter your name.';
        feedback.style.color = 'red';
    }
    else if(email ===''||!email.includes('@')){
        feedback.innerText = 'error: Please enter a valid email (must include @).';
        feedback.style.color = 'red';
    }
    else if(message ===''){
        feedback.innerText = 'error: Please enter your message.';
        feedback.style.color = 'red';
    }
    else {
        feedback.innerText = '!';
        feedback.style.color = 'green';
        form.reset();
    }
});