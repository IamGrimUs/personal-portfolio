function renderHome() {
  const renderString = `<div>
  <h1>Hello, I'm Russell. A fullstack developer & social media avoider</h1>
  <p>I am a web developer and recent graduate of the Front End Web Development Career Path bootcamp at Thinkful. I love
  coding because solving problems and seeing ideas come to life on the page is supremely satisfying. I geek out on
  higher order functions, finding and learning awesome libraries or frameworks, and getting front and back ends to
  play nicely. When I'm not coding, I'm often found on Skype working with clients, curled up in a cozy chair reading,
  hiking in a canyon, or upside down doing a headstand. I am a lifelong learner and my current learning projects
  (beyond code!) include piano and writing my first book.</p>
</div>`;
  $('.contentBlock').html(renderString);
}
function renderAbout() {
  const renderString = `<div>
  <h1>Hello, I'm Russell. A fullstack developer & social media avoider</h1>
  <p>I am a web developer and recent graduate of the Front End Web Development Career Path bootcamp at Thinkful. I love
  coding because solving problems and seeing ideas come to life on the page is supremely satisfying. I geek out on
  higher order functions, finding and learning awesome libraries or frameworks, and getting front and back ends to
  play nicely. When I'm not coding, I'm often found on Skype working with clients, curled up in a cozy chair reading,
  hiking in a canyon, or upside down doing a headstand. I am a lifelong learner and my current learning projects
  (beyond code!) include piano and writing my first book.</p>
</div>`;
  $('.aboutRender').click(function() {
    $('.contentBlock').html(renderString);
    $('.hamburger').toggleClass('open');
    $('.menu-overlay').toggleClass('open');
  });
}
function renderProjects() {
  const renderString = `<div><div class="two-col col-row clearfix">
  <div class="col col-1-2">
      <figure>
          <img src="img/1-blubber-brothers.jpg" alt="">
          <figcaption>
              <h3>Blubber Brothers</h3>
              <span>Burnt Toast Creative</span>
              <a href="#" class="close-caption hidden">x</a>
          </figcaption>
      </figure>
  </div>
  <div class="col col-2-2">
      <figure>
          <img src="img/2-tits-and-wieners.jpg" alt="">
          <figcaption>
              <h3>Tits and Wieners</h3>
              <span>Burnt Toast Creative</span>
              <a href="#" class="close-caption hidden">x</a>
          </figcaption>
      </figure>
  </div>
</div>
</div>`;
  $('.projectRender').click(function() {
    $('.contentBlock').html(renderString);
    $('.hamburger').toggleClass('open');
    $('.menu-overlay').toggleClass('open');
  });
}
function renderContactInfo() {
  const renderString = `<div>
  <h1>Incase you want to reach&nbsp;out</h1>
  <p>Please don't hesitate to contact me. I am open to any and all opertunities. My goal is to never stop learning from others, and to teach everything I know to anyone interested in learning.
  </p>
  <ul class="social-icons">
  <li><a href="https://twitter.com/IamGrimus"><i class="fa fa-twitter fa-3x" aria-hidden="true"></i></a></li>
  <li><a href="https://www.linkedin.com/in/russell-thomas-34596411/"><i class="fa fa-linkedin fa-3x" aria-hidden="true"></i></a></li>
  <li><a href="https://github.com/IamGrimUs"><i class="fa fa-github fa-3x" aria-hidden="true"></i></a></li>
  <li><a href="mailto:iamgrimus@gmail.com?Subject=Good afternoon sir."><i class="fa fa-envelope-o fa-3x" aria-hidden="true"></i></a></li>
  </ul>
</div>`;
  $('.contactRender').click(function() {
    $('.contentBlock').html(renderString);
    $('.hamburger').toggleClass('open');
    $('.menu-overlay').toggleClass('open');
  });
}
$(document).ready(function() {
  $('.hamburger').click(function() {
    $(this).toggleClass('open');
    $('.menu-overlay').toggleClass('open');
  });
  renderHome();
  renderAbout();
  renderProjects();
  renderContactInfo();
});
