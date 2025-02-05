

const imageUrls = [
'photo1.jpg',
'photo2.jpg',
'photo3.jpg',
'photo4.jpg',
'photo5.jpg',
'photo6.jpg',
'photo7.jpg',
'photo8.jpg',
'photo9.jpg',
'photo10.jpg',
'photo11.jpg',
'photo12.jpg',
'photo13.jpg',
'photo14.jpg',
'photo15.jpg',
'photo16.jpg',
'photo17.jpg',
'photo18.jpg',
'photo19.jpg',
'photo20.jpg',
'photo21.jpg',
'photo22.jpg',
'photo23.jpg',
'photo24.jpg',
'photo25.jpg',
'photo26.jpg',
'photo27.jpg',
'photo28.jpg',
'photo29.jpg',
'photo30.jpg',







];

const rows = document.querySelectorAll('.row');

// Function to shuffle an array
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; // Swap elements
  }
  return array;
}

rows.forEach(row => {
  // Shuffle the image URLs for each row
  const shuffledImages = shuffleArray([...imageUrls]);

  // Add images twice to ensure seamless looping
  for (let i = 0; i < 2; i++) {
    shuffledImages.forEach(url => {
      const img = document.createElement('img');
      img.src = url;
      row.appendChild(img);
    });
  }
});
// scripts.js
// Toggle mobile menu
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');
const header = document.querySelector('header');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close menu when a link is clicked (optional)
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Sticky Header Fade Effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) { // Adjust the scroll threshold as needed
        header.classList.add('faded');
    } else {
        header.classList.remove('faded');
    }
});
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'linear-gradient(90deg, #6a11cb, #2575fc)';
    } else {
        navbar.style.background = 'linear-gradient(90deg, #ff7e5f, #feb47b)';
    }
});
