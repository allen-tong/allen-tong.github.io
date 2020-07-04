(function (window, document) {

  document.write(`
    <nav class="navbar">
      <span class="navbar-start">
        <a href="index.html"><img src="images/circled-star.png" alt=""> Allen Tong</a>
      </span>
      <span id="menu" class="navbar-end">
        <span class="navbar-hamburger">
          <a id="hamburger" href="#menu"><span class="hamburger"></span></a>
        </span>
        <span class="navbar-menu">
          <a href="index.html#about">About</a>
          <a href="projects.html">Projects</a>
          <a href="teaching.html">Teaching</a>
          <a href="contact.html">Contact</a>
        </span>
      </span>
    </nav>
    <link rel="stylesheet" href="styles/navbar.css">
  `);

  const hamburger = document.getElementById('hamburger');
  const menu = document.getElementById('menu');

  /* Click hamburger icon to open/close menu */
  hamburger.onclick = function (event) {
    event.preventDefault();
    menu.classList.toggle('active');
  };

  /* Click anywhere else to close menu */
  window.addEventListener('click', function (event) {
    if (!(event.target.matches('.navbar-hamburger *') || event.target.matches('.navbar-menu *'))) {
      if (menu.classList.contains('active')) {
        menu.classList.remove('active');
      }
    }
  });

})(this, this.document);
