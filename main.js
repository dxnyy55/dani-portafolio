/* ==========================================
   1. CÁLCULO DINÁMICO DE EDAD
   ================================---------- */
function calcularEdad() {
  // En JavaScript los meses van de 0 a 11 (11 = Diciembre)
  const nacimiento = new Date(2004, 11, 29);
  const hoy = new Date();

  let edad = hoy.getFullYear() - nacimiento.getFullYear();
  const mesActual = hoy.getMonth();
  const diaActual = hoy.getDate();

  const mesCumple = nacimiento.getMonth();
  const diaCumple = nacimiento.getDate();

  if (mesActual < mesCumple || (mesActual === mesCumple && diaActual < diaCumple)) {
    edad--;
  }

  const elementoEdad = document.getElementById("edad");
  if (elementoEdad) {
    elementoEdad.textContent = edad;
  }
}

// Ejecutar al cargar el script
calcularEdad();


/* ==========================================
   2. ANIMACIONES FLUIDAS CON GSAP
   ================================---------- */
document.addEventListener("DOMContentLoaded", () => {
  // Asegurarnos de que GSAP y ScrollTrigger están cargados
  if (typeof gsap !== "undefined" && typeof ScrollTrigger !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);

    // Animación de entrada para la sección principal (Hero)
    gsap.from(".inicio h1, .inicio p", {
      opacity: 0,
      y: 40,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out"
    });

    // Animación general para las secciones al hacer scroll
    const secciones = document.querySelectorAll("#skills, #sobre-mi, #proyectos");

    secciones.forEach((seccion) => {
      gsap.from(seccion.children, {
        scrollTrigger: {
          trigger: seccion,
          start: "top 80%", // Comienza la animación cuando el elemento está al 80% de la pantalla
          toggleActions: "play none none none"
        },
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out"
      });
    });
  }
});

/* ==========================================
   3. FONDO ANIMADO DE PARTÍCULAS (HERO)
   ================================---------- */
function initHeroCanvas() {
  const canvas = document.getElementById('hero-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let width, height;
  let particles = [];

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = canvas.parentElement.offsetHeight || window.innerHeight;
  }

  window.addEventListener('resize', resize);
  resize();

  // Configuración de partículas
  const particleCount = Math.floor(window.innerWidth / 20); // Densidad adaptable
  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.6,
      vy: (Math.random() - 0.5) * 0.6,
      radius: Math.random() * 2 + 1
    });
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);

    // Dibujar y mover partículas
    for (let i = 0; i < particles.length; i++) {
      let p = particles[i];
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0 || p.x > width) p.vx *= -1;
      if (p.y < 0 || p.y > height) p.vy *= -1;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(59, 130, 246, 0.5)';
      ctx.fill();

      // Dibujar líneas de conexión entre partículas cercanas
      for (let j = i + 1; j < particles.length; j++) {
        let p2 = particles[j];
        let dx = p.x - p2.x;
        let dy = p.y - p2.y;
        let dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 120) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.strokeStyle = `rgba(59, 130, 246, ${1 - dist / 120})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    }
    requestAnimationFrame(animate);
  }

  animate();
}

if (document.readyState === 'complete') {
  initHeroCanvas();
} else {
  window.addEventListener('load', initHeroCanvas);
}