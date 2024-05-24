document.addEventListener("DOMContentLoaded", function() {
	// Obtener referencias a los botones
	const aboutBtn = document.getElementById("aboutBtn");
	const skillBtn = document.getElementById("skillBtn");
	const aboutContent = document.getElementById("aboutContent");
	const skillContent = document.getElementById("skillContent");

   // Agregar event listener para el clic en el botón "About Me"
	aboutBtn.addEventListener("click", function() {
	  aboutContent.classList.add("active");
	  skillContent.classList.remove("active");
	  aboutBtn.classList.add('active');
  	  skillBtn.classList.remove('active');
	});
   // Agregar event listener para el clic en el botón "Skills"
	skillBtn.addEventListener("click", function() {
	  skillContent.classList.add("active");
	  aboutContent.classList.remove("active");
	  skillBtn.classList.add('active');
 	  aboutBtn.classList.remove('active');
	});
  });


// Obtener los elementos de idioma
const spain = document.getElementById("spain");
const england = document.getElementById("england");

// Establecer el evento de clic para cambiar el estado activo
spain.addEventListener("click", function() {
	spain.classList.add("active");
	england.classList.remove("active");
});

england.addEventListener("click", function() {
	england.classList.add("active");
	spain.classList.remove("active");
});

//Idiomas

const texts = {
	'en': {
	  'about': 'About Me',
	  'projects': 'Projects',
	  'contact': 'Contact',
	  'saludo': 'Hello, I am',
	  'download': 'Download CV',
	  'contactinfo': 'Contact Info',
	  'section1': 'Get To Know More',
	  'section1title1': 'About Me',
	  'section1title2': 'Skills',
	  'descriptiontitle': '🖐¡Hi! I am Analista Programador Universitario from Jujuy, Argentina.',
	  'descriptionaboutme': 'With knowledge in developing web applications and desktop applications and data organization. My skill as a developer is reflected in the implementation of practical and efficient solutions. through coding in different languages ​​such as Java, C# and frameworks such as Spring Boot, .Net. I am responsible, organized and enjoy work as a team to achieve project objectives. As a passionate software developer, I am excited to contribute to the world of technology.',
	  'setion2': 'Browse My Recent',
	  'setion2title': 'Projects',
	  'card1title': 'Parking Management',
	  
	  // Agrega más texto en inglés según sea necesario
	},
	'es': {
	  'about': 'Sobre Mí',
	  'projects': 'Proyectos',
	  'contact': 'Contacto',
	  'saludo': 'Hola, Yo Soy',
	  'download': 'Descargar CV',
	  'contactinfo': 'Contactar',
	  'section1': 'Conozca más',
	  'section1title1': 'Sobre Mi',
	  'section1title2': 'Habilidades',
	  'descriptiontitle': '🖐¡Hola! Soy Analista Programador Universitario de Jujuy, Argentina.',
	  'descriptionaboutme': 'Con conocimiento en desarrollo de aplicaciones web y aplicaciones desktop y organización de datos. Mi destreza como desarrollador se refleja en la implementación desoluciones prácticas y eficientes a través de la codificación en diferentes lenguajes como Java, C# y frameworks como Spring Boot, .Net. Soy responsable, organizado y disfruto trabajar en equipo para lograr los objetivos del proyecto. Como apasionado desarrollador de software, me entusiasma contribuir al mundo de la tecnología.',
	  'setion2': 'Explorar mis recientes',
	  'setion2title': 'Proyectos',
	  'card1title': 'Gestion de Estacionamiento',
	 
	  // Agrega más texto en español según sea necesario
	}
  };

  function changeLanguage(lang) {
	const elements = document.querySelectorAll('[data-i18n]');
	elements.forEach(element => {
	  const key = element.getAttribute('data-i18n');
	  element.textContent = texts[lang][key];
	});
  }
	


