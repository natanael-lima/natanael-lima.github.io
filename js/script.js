// Espera a que el contenido de la página esté completamente cargado navegador
document.addEventListener('DOMContentLoaded', function() {
	const header = document.getElementById('main-header');
  
	window.addEventListener('scroll', function() {
	  if (window.scrollY > 50) {
		header.classList.add('scrolled');
	  } else {
		header.classList.remove('scrolled');
	  }
	});
  });
  
// Boton para cambiar de sobre mi/habilidades
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

//Idiomas
const texts = {
	'en': {
	  'icon-src': 'https://img.icons8.com/color/48/great-britain-circular.png', // Cambia a la URL del ícono del idioma
	  'about': 'About Me',
	  'projects': 'Projects',
	  'contact': 'Contact',
	  'saludo': '¡Hi! I Am',
	  'section1': 'Get To Know More',
	  'section1title1': 'About Me',
	  'section1title2': 'Skills',
	  'descriptiontitle': '🖐¡Hi! I am Programmer Analyst from Jujuy, Argentina.',
	  'descriptionaboutme': '🖐 Hello! I am a <strong class="highlight">Programmer Analyst/Software Developer</strong> from <strong class="highlight">Jujuy, Argentina</strong>. I have experience in <strong class="highlight">web application development</strong> and <strong class="highlight">desktop applications</strong>, as well as in <strong class="highlight">data organization</strong>.<br><br> My experience as a developer is reflected in the <strong class="highlight">implementation of practical and efficient solutions</strong> using various languages and frameworks. My focus is on <strong class="highlight">creating functional and adaptable software</strong>, collaborating in all stages of the development lifecycle, from analysis to implementation.<br><br> I consider myself a <strong class="highlight">responsible</strong> and <strong class="highlight">organized</strong> person who enjoys <strong class="highlight">working in a team</strong> to achieve project goals. As a <strong class="highlight">passionate software developer</strong>, I am excited to contribute to the advancement of technology.',
	  'setion2': 'Browse My Recent',
	  'setion2title': 'Projects',
	  'desktopapp': 'Desktop Development',
	  'webapp': 'Web Development',
	  'infocard': 'Information',
	  'card1title': 'Parking System Management',
	  'card2title': 'Clinical Shift Management',
	  'card3title': 'Optical System Management',
	  'card4title': 'Postulants System Management',
	  'card5title': 'Comprehensive Sales System',
	  'card6title': 'Event Management System',
	  'card7title': 'Lovely Dating App',
	  'card8title': 'Griiin E-commerce Platform',
	  'descriptioncard': 'Description',
	  'tecnocard': 'Technologies',
	  'card1content': 'Management system for a parking lot that has multiple zones and sectors. The system allows for vehicle entry and exit registration, ticket generation, customer management, vehicle types and users. In addition, it allows you to view occupied and free sectors, generate sales reports and perform various administrative operations.',
	  'card2content': 'Shift management system for an ophthalmological clinic. Allows you to register patients, doctors and social works. Manages the assignment of appointments to patients with a specific doctor, validating that schedules do not overlap. Send email notifications in HTML format to the doctor and patient with the details of the assigned appointment. Implements a REST API for CRUD operations on patients, doctors and shifts. Developed following good practices with design patterns such as Service Layer, DTO and DI, as well as unit testing.',
	  'card3content': 'Sales management system developed in Windows Forms for an optician. It allows complete administration of clients, products, social works, users and sales. It has modules for registration, cancellation, modification and queries of clients, products and users. Manages sales issuance, recording details of products sold, prices, quantities and totals. It provides additional functionalities such as sales lists by client or date range, lists of products sold by client or date range, and list of clients by social work.',
	  'card4content': 'Web system for self-management of applications for job offers in a company. Allows the publication of job offers associated with different sectors. Visiting users can register and apply for available offers, uploading a personal data sheet and required digital documentation. Registered applicants can track the status of their applications. It has an administrative module where recruiting staff can view the applications received and accept or reject candidates.',
	  'card5content': 'This comprehensive sales and product management system is designed specifically for businesses that sell scale models of classic cars. Using the `classicmodels` database, the system offers functionalities to manage customers, products and sales orders. Users have the ability to register new customers, add products to the catalog, place sales orders, and track all transactions in detail. Additionally, the system includes differentiated user roles: employees can perform sales operations and manage inventory, while administrators have full access to manage users, products, and system settings.',
	  'card6content': 'Web system for the comprehensive management of business meetings. It allows administrator users to schedule and manage meetings, track participant attendance, and generate detailed reports. Participants can view their meeting agenda, access meeting details, and perform advanced searches. The application provides an intuitive and friendly interface for an optimal user experience.',
	  'card7content': 'Project LovelyApp dating app, similar to Tinder, allows users to register and create detailed profiles. With a built-in search engine, users can find matches based on configured preferences. Once paired, they can chat in real time using WebSocket. The mutual match feature sparks meaningful conversations. Additionally, users can edit profiles, change preferences, and access security options in the profile section. LovelyApp provides an intuitive and secure platform.',
	  'card8content': 'Project Griiin is an e-commerce platform with an admin panel for managing users, categories, and featured products. It offers a search feature for finding popular items and filters for sorting products by category or price, providing a seamless shopping experience.', 
	  'setion3': 'Get in Touch',
	  'setion3title': 'Contact Me',
	  'contactname': 'Full Name',
	  'contactmjs': 'Message',
	  'contactsend': 'Send',
	  'available':'Available to work',
	  // Agrega más texto en inglés según sea necesario
	},
	'es': {
	  'icon-src': 'https://img.icons8.com/color/48/argentina-circular.png', // Cambia a la URL del ícono del idioma
	  'about': 'Sobre Mí',
	  'projects': 'Proyectos',
	  'contact': 'Contacto',
	  'saludo': '¡Hola! Soy',
	  'section1': 'Conozca más',
	  'section1title1': 'Sobre Mí',
	  'section1title2': 'Habilidades',
	  'descriptiontitle': '🖐¡Hola! Soy Analista Programador Universitario de Jujuy, Argentina.',
	  'descriptionaboutme':'🖐 ¡Hola! Soy <strong class="highlight">Analista Programador Universitario</strong> de <strong class="highlight">Jujuy, Argentina</strong>. Tengo experiencia en el <strong class="highlight">desarrollo de aplicaciones web</strong> y <strong class="highlight">desktop</strong>, así como en la <strong class="highlight">organización de datos</strong>.<br><br> Mi experiencia como desarrollador se refleja en la <strong class="highlight">implementación de soluciones prácticas y eficientes</strong> utilizando diversos lenguajes y frameworks. Mi enfoque se centra en la <strong class="highlight">creación de software funcional y adaptable</strong>, colaborando en todas las etapas del ciclo de vida del desarrollo, desde el análisis hasta la implementación.<br><br> Me considero una persona <strong class="highlight">responsable</strong>, <strong class="highlight">organizada</strong> y disfruto <strong class="highlight">trabajar en equipo</strong> para alcanzar los objetivos del proyecto. Como <strong class="highlight">apasionado desarrollador de software</strong>, me entusiasma contribuir al avance del mundo tecnológico.',
	  'setion2': 'Explorar mis recientes',
	  'setion2title': 'Proyectos',
	  'desktopapp': 'Desarrollo de Escritorio',
	  'webapp': 'Desarrollo Web',
	  'infocard': 'Información',
	  'card1title': 'Sistema de Gestión de Estacionamiento',
	  'card2title': 'Sistema de Gestión de Turnos Clínicos',
	  'card3title': 'Sistema de Gestión Óptico',
	  'card4title': 'Sistema de Gestión de Postulaciones',
	  'card5title': 'Sistema Integral de Venta',
	  'card6title': 'Sistema Gestor de Eventos',
	  'card7title': 'Aplicación de Citas Lovely',
	  'card8title': 'Plataforma E-Commerce Griiin',
	  'descriptioncard': 'Descripción',
	  'tecnocard': 'Tecnologías',
	  'card1content': 'Sistema de gestión para una playa de estacionamiento que cuenta con múltiples zonas y sectores. El sistema permite el registro de entrada y salida de vehículos, generación de tickets, gestión de clientes, tipos de vehículos y usuarios. Además, permite visualizar sectores ocupados y libres, generar reportes de ventas y realizar diversas operaciones administrativas.',
	  'card2content': 'Sistema de gestión de turnos para una clínica oftalmológica. Permite registrar pacientes, médicos y obras sociales. Gestiona la asignación de turnos a pacientes con un médico determinado, validando que no se superpongan horarios. Envía notificaciones por correo electrónico en formato HTML al médico y paciente con los detalles del turno asignado. Implementa una API REST para operaciones CRUD sobre pacientes, médicos y turnos. Desarrollado siguiendo buenas prácticas con patrones de diseño como Service Layer, DTO y DI, además de pruebas unitarias.',
	  'card3content': 'Sistema de gestión de ventas desarrollado en Windows Forms para una óptica. Permite la administración completa de clientes, productos, obras sociales, usuarios y ventas. Cuenta con módulos para el alta, baja, modificación y consultas de clientes, productos y usuarios. Gestiona la emisión de ventas, registrando los detalles de productos vendidos, precios, cantidades y totales. Brinda funcionalidades adicionales como listados de ventas por cliente o rango de fechas, listados de productos vendidos por cliente o rango de fechas, y listado de clientes por obra social.',
	  'card4content': 'Sistema web para la autogestión de postulaciones a ofertas laborales en una empresa. Permite la publicación de ofertas laborales asociadas a diferentes sectores. Los usuarios visitantes pueden  registrarse y postularse a las ofertas disponibles, cargando una ficha de datos personales y documentación digital requerida. Los postulantesregistrados pueden ver el seguimiento del estado de sus postulaciones. Cuenta con unmódulo administrativo donde el personal de reclutamiento puede visualizar las postulacionesrecibidas y aceptar o rechazar candidatos.',
	  'card5content': 'Este sistema integral de venta y administración de productos está diseñado específicamente para negocios que se dedican a la venta de modelos a escala de coches clásicos. Utilizando la base de datos `classicmodels`, el sistemaofrece funcionalidades para gestionar clientes, productos y pedidos de venta. Los usuarios tienen la capacidad de registrar nuevos clientes, agregar productos al catálogo, realizar pedidos de venta y realizarun seguimiento detallado de todas las transacciones. Además, el sistema incluye roles de usuario diferenciados: los empleados pueden realizar operacionesde venta y gestionar el inventario, mientras que los administradores tienen acceso completo para administrar usuarios, productos y configuraciones del sistema.',
	  'card6content': 'Sistema web para la gestión integral de reuniones empresariales. Permite a los usuarios administradores programar y gestionar reuniones, controlar la asistencia de participantes, y generar informes detallados. Los participantes pueden visualizarsu agenda de reuniones, acceder a detalles de las mismas, y realizar búsquedas avanzadas.La aplicación proporciona una interfaz intuitiva y amigable para una experiencia de usuario óptima.',
	  'card7content': 'Proyecto LovelyApp aplicación de citas, similar a Tinder, permite a los usuarios registrarse y crear perfiles detallados. Con un buscador integrado, los usuariospueden encontrar coincidencias basadas en preferencias configuradas. Una vez emparejados, pueden chatear en tiempo real utilizando WebSocket. La función de match mutuo desencadena conversaciones significativas. Además, los usuarios pueden editar perfiles, cambiar preferencias y acceder a opciones de seguridad en la sección de perfil. LovelyApp proporciona una plataforma intuitiva y segura.',
	  'card8content': 'Proyecto Griiin es una plataforma de comercio electrónico con un panel de control para gestionar usuarios, categorías y productos destacados. Ofrece una función de búsqueda para encontrar artículos populares y filtros para ordenar productos por categoría o precio, brindando una experiencia de compra fluida.', 
	  'setion3': 'Ponerse en contacto',
	  'setion3title': 'Contáctame',
	  'contactname': 'Nombre Completo',
	  'contactmjs': 'Mensaje',
	  'contactsend': 'Enviar',
	  'available':'Disponible para trabajar',
	  
	  
	  // Agrega más texto en español según sea necesario
	}
  };

  
  //Nuevo change language ingles/español
  function changeLanguage(lang) {
	const languageIcon = document.getElementById('languageIcon');
    const languageSwitch = document.getElementById('languageSwitch');

	if (lang === 'en') {
        languageIcon.src = "https://img.icons8.com/color/48/great-britain-circular.png";
        languageSwitch.checked = true; // Mueve el switch a "Inglés"
    } else if (lang === 'es') {
        languageIcon.src = "https://img.icons8.com/color/48/argentina-circular.png";
        languageSwitch.checked = false; // Mueve el switch a "Español"
    }
  
	// Lógica para cambiar el idioma del contenido
	const elements = document.querySelectorAll('[data-i18n]');
	elements.forEach(element => {
	  const key = element.getAttribute('data-i18n');
	  element.innerHTML = texts[lang][key];
	});
  	// Lógica para descargar cv
	const downloadButton = document.getElementById('downloadButton'); // Asegúrate de que el botón está disponible
	if (lang === 'en') {
		downloadButton.setAttribute('onclick', "window.open('./img/CV-EN.pdf')");
	} else if (lang === 'es') {
		downloadButton.setAttribute('onclick', "window.open('./img/CV-ES.pdf')");
	}
  }

  function toggleLanguage() {
	const languageSwitch = document.getElementById('languageSwitch');
	
	if (languageSwitch.checked) {
	  changeLanguage('en');
	} else {
	  changeLanguage('es');
	}
  }
  // Inicializa por defecto en español al cargar la página
  changeLanguage('es');

//Cambiar modo dark/light, por defecto esta en light
document.addEventListener('DOMContentLoaded', function () {
	const toggleButton = document.getElementById('toggleButton');
	const darkIcon = document.getElementById('dark-icon');
	const lightIcon = document.getElementById('light-icon');
	
	// Referencia al contenedor de la navbar
	const nav = document.querySelector('nav');
  
	// Inicializar el estado
	let isLightMode = true;

	// Función para cambiar entre modos
	function switchMode() {
	  if (isLightMode) {
		darkIcon.style.display = 'none';
		lightIcon.style.display = 'block';
		document.body.classList.add('light-mode');
		document.body.classList.remove('dark-mode');
		nav.classList.add('nav-underline'); // Agregar clase para modo claro
		nav.classList.remove('nav-underline-dark'); // Eliminar clase para modo oscuro
	  } else {
		darkIcon.style.display = 'block';
		lightIcon.style.display = 'none';
		document.body.classList.add('dark-mode');
		document.body.classList.remove('light-mode');
		nav.classList.add('nav-underline-dark'); // Agregar clase para modo oscuro
      	nav.classList.remove('nav-underline'); // Eliminar clase para modo claro
	  }
	  isLightMode = !isLightMode;
	}
  
	// Event listener para el botón de alternancia
	toggleButton.addEventListener('click', switchMode);

	// Inicializar en modo claro
	switchMode();
  });
  

