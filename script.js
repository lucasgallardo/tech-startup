// Contador regresivo
const launchDate = new Date("2025-09-01T00:00:00").getTime();

const countdown = setInterval(() => {
  const now = new Date().getTime();
  const distance = launchDate - now;

  if (distance < 0) {
    clearInterval(countdown);
    document.getElementById("timer").innerHTML = "¡Ya lanzamos!";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((distance / (1000 * 60)) % 60);
  const seconds = Math.floor((distance / 1000) % 60);

  document.getElementById("days").textContent = String(days).padStart(2, '0');
  document.getElementById("hours").textContent = String(hours).padStart(2, '0');
  document.getElementById("minutes").textContent = String(minutes).padStart(2, '0');
  document.getElementById("seconds").textContent = String(seconds).padStart(2, '0');
}, 1000);

// Formulario
document.getElementById('signup-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const email = document.getElementById('email').value;
  if (email) {
    alert(`Gracias por registrarte, ${email}`);
    document.getElementById('email').value = '';
  }
});

// Compartir
document.getElementById('share-btn').addEventListener('click', function() {
  const shareText = "¡Únete a Tech Startup! 🚀 Pre-regístrate y gana acceso anticipado.";
  const shareUrl = window.location.href;
  window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`, '_blank');
});
