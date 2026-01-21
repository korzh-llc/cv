const cards = document.querySelectorAll('.card');
const modal = document.getElementById('modal');
const frame = document.getElementById('modalFrame');
const close = document.querySelector('.close');

cards.forEach(card => {
    card.addEventListener('click', () => {
        const url = card.dataset.url;
        modal.style.display = 'flex';
        frame.src = url;
    });
});

close.addEventListener('click', () => {
    modal.style.display = 'none';
    frame.src = '';
});

modal.addEventListener('click', e => {
    if (e.target === modal) {
        modal.style.display = 'none';
        frame.src = '';
    }
});




const header = document.querySelector('header')
const headerText = document.querySelectorAll('.navigation')

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.classList.add('scrolled')
  } else {
    header.classList.remove('scrolled')
  }
})


