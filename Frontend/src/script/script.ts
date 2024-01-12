document.addEventListener('DOMContentLoaded', () => {
    const navbarToggler = document.querySelector('.navbar-toggler') as HTMLElement;
    const navbarCollapse = document.querySelector('.navbar-collapse') as HTMLElement;
  
    navbarToggler.addEventListener('click', () => {
      navbarCollapse.classList.toggle('show');
    });
  });