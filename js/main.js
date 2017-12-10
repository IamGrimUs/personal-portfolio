const aboutRenderString = `<div>
<h1>Hello, I'm Russell.</h1>
<p>A lifelong learner, a full stack JavaScript and email developer, and graduate of the Full stack JavaScript Boot camp from Thinkful.</p>
<p>I love the challenges of this industry and the constant learning it requires to stay relevant. At times it feels as if there is a theme guiding my career that continuously brings me back to the path of education. I enjoy learning new things and know the importance of constant personal and professional growth.</p>
<p>On the weekends you can find me fighting my way through a book on JS, geeking out over higher order functions or gaming with friends. When I do step away from the computer, I attempt to leave the grid behind, exploring the forests of WA with my wife and pup, reconnecting with the natural world or biking with my dad until my legs cry&nbsp;uncle.</p>
</div>`;

const projectRenderString = `<div>
  <section>
    <figure>
    <a href="https://battle-scratch.netlify.com/"><img src="img/battle-lg_680x462.png" alt="Battle Skratch: React app for DJs"></a>
      <figcaption>
        <p class="tech-stack">React, Redux, JavaScript, HTML5, CSS3, Node, Express, Mocha, Chai, MongoDB</p>
      </figcaption>
    </figure>
    <div class="project-description">
      <h2 class="battle-skratch">Battle Skratch</h2>
      <p>Battle Skratch is a web app for turntablists of all skill levels. The goal is to promote the art of turntablism and the community of DJs through monthly friendly and informal video battles.</p>
      <ul class="project-icons">
      <li><a href="https://github.com/IamGrimUs/battle-skratch-client"><i class="fa fa-github fa-2x" aria-hidden="true"></i> APP</a></li>
      <li><a href="https://github.com/IamGrimUs/battle-skratch-server"><i class="fa fa-github fa-2x" aria-hidden="true"></i> API</a></li>
      <li><a href="https://battle-scratch.netlify.com/"><i class="fa  fa-external-link-square fa-2x" aria-hidden="true"></i> Netlify</a></li>
      </ul>
    <div>
  </section>
  <section class="project-container">
    <figure>
    <a href="https://agglomeration.herokuapp.com/login.html"><img src="img/agglomeration-lg_680x462.png" alt="Agglomeration: a contact organizer"></a>
      <figcaption>
        <p class="tech-stack">JavaScript, jQuery, HTML5, CSS3, Node, Express, Mocha, Chai, MongoDB</p>
      </figcaption>
    </figure>
    <div class="project-description">
      <h2 class="agglomeration">Agglomeration</h2>
      <p>Agglomeration was created to combat the feeling of isolation when your new to an existing team or part of remote team. It provides easy access to search out team members for contact or learning a little bit about them.</p>
      <ul class="project-icons">
      <li><a href="https://github.com/IamGrimUs/agglomeration"><i class="fa fa-github fa-2x" aria-hidden="true"></i> APP & API</a></li>
      <li><a href="https://agglomeration.herokuapp.com/login.html"><i class="fa  fa-external-link-square fa-2x" aria-hidden="true"></i> Heroku</a></li>
      </ul>
    <div>
  </section>
  <section class="project-container">
    <figure>
    <a href="https://iamgrimus.github.io/ataraxia/"><img src="img/ataraxia-lg_680x462.png" alt="Ataraxia: a javascript slideshow created with the unsplash api."></a>
      <figcaption>
        <p class="tech-stack">JavaScript, jQuery, HTML5, CSS3</p>
      </figcaption>
    </figure>
    <div class="project-description">
      <h2 class="ataraxia">Ataraxia</h2>
      <p>A small corner of cyberspace that was built to help you rest your mind. Take some time to breathe deep. Do some light stretching. Reclaim a small part of your day, and get lost in the beauty of the world through photography. Be inspired to embark on adventures waiting for you just beyond the glass.</p>
      <p>The project was built by accessing the unsplash API to display a random set of beautiful imagery.</p>
      <ul class="project-icons">
        <li><a href="https://github.com/IamGrimUs/ataraxia"><i class="fa fa-github fa-2x" aria-hidden="true"></i> APP</a></li>
        <li><a href="https://iamgrimus.github.io/ataraxia/"><i class="fa  fa-external-link-square fa-2x" aria-hidden="true"></i> GitHub pages</a></li>
      </ul>
    <div>
  </section>
</div>`;

const contactRenderString = `<div>
  <h1>Let's talk</h1>
  <p>Please don't hesitate to contact me. I am open to any and all opportunities. My goal is to be a better person everyday. How do I achomplish the goal? By constantly learning from those around me, and by teach everything I know to those interested in learning.
  </p>
  <ul class="social-icons">
  <li><a href="https://twitter.com/IamGrimus"><i class="fa fa-twitter fa-3x" aria-hidden="true"></i></a></li>
  <li><a href="https://www.linkedin.com/in/russell-thomas-34596411/"><i class="fa fa-linkedin fa-3x" aria-hidden="true"></i></a></li>
  <li><a href="https://github.com/IamGrimUs"><i class="fa fa-github fa-3x" aria-hidden="true"></i></a></li>
  <li><a href="mailto:iamgrimus@gmail.com?Subject=Good afternoon sir."><i class="fa fa-envelope-o fa-3x" aria-hidden="true"></i></a></li>
  </ul>
</div>`;

function homePageLoadAbout() {
  $('.contentBlock').html(aboutRenderString);
}
function menuActions() {
  $('.aboutRender').click(function() {
    $('.contentBlock').html(aboutRenderString);
    $('.hamburger').toggleClass('open');
    $('.menu-overlay').toggleClass('open');
    $('.closedAction').toggleClass('closed-menu');
    $('.closedAction').toggleClass('open-menu');
  });

  $('.projectRender').click(function() {
    $('.contentBlock').html(projectRenderString);
    $('.hamburger').toggleClass('open');
    $('.menu-overlay').toggleClass('open');
    $('.closedAction').toggleClass('closed-menu');
    $('.closedAction').toggleClass('open-menu');
  });

  $('.contactRender').click(function() {
    $('.contentBlock').html(contactRenderString);
    $('.hamburger').toggleClass('open');
    $('.menu-overlay').toggleClass('open');
    $('.closedAction').toggleClass('closed-menu');
    $('.closedAction').toggleClass('open-menu');
  });
}

$(document).ready(function() {
  homePageLoadAbout();
  $('.hamburger').click(function() {
    $(this).toggleClass('open');
    $('.menu-overlay').toggleClass('open');
    $('.closedAction').toggleClass('closed-menu');
    $('.closedAction').toggleClass('open-menu');
  });
  menuActions();
});
