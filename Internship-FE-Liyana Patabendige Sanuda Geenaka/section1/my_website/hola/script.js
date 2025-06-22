const icons = document.querySelectorAll('.icon');
const button = document.querySelector('button');
const contentH1 = document.querySelector('.content h1');
const contentP = document.querySelector('.content p');

// Initial animation for the main content
contentH1.style.transform = 'translateY(-30px)';
contentH1.style.opacity = '0';
contentP.style.transform = 'translateY(30px)';
contentP.style.opacity = '0';
button.style.opacity = '0';

document.addEventListener('DOMContentLoaded', () => {
  // Fade in and slide up/down the main content
  setTimeout(() => {
    contentH1.style.transition = 'transform 0.6s ease-out, opacity 0.6s ease-out';
    contentH1.style.transform = 'translateY(0)';
    contentH1.style.opacity = '1';
  }, 300);

  setTimeout(() => {
    contentP.style.transition = 'transform 0.6s ease-out, opacity 0.6s ease-out';
    contentP.style.transform = 'translateY(0)';
    contentP.style.opacity = '1';
  }, 500);

  setTimeout(() => {
    button.style.transition = 'opacity 0.6s ease-out';
    button.style.opacity = '1';
  }, 700);

  // Animate icons to float in with slight delay and random direction
  icons.forEach((icon, index) => {
    const randomDelay = Math.random() * 1000; // Random delay up to 1 second
    const randomX = (Math.random() - 0.5) * 20; // Random horizontal movement
    const randomY = (Math.random() - 0.5) * 20; // Random vertical movement

    icon.style.transform = `translate(${randomX}px, ${randomY}px) scale(0.8)`;
    icon.style.opacity = '0';
    icon.style.transition = 'transform 0.5s ease-out, opacity 0.5s ease-out';

    setTimeout(() => {
      icon.style.transform = 'translate(0, 0) scale(1)';
      icon.style.opacity = '1';
    }, 800 + index * 150 + randomDelay); // Staggered appearance with random delay
  });

  // Subtle hover effect for the button
  button.addEventListener('mouseover', () => {
    button.style.transform = 'scale(1.05)';
    button.style.transition = 'transform 0.3s ease-in-out';
  });

  button.addEventListener('mouseout', () => {
    button.style.transform = 'scale(1)';
    button.style.transition = 'transform 0.3s ease-in-out';
  });
});