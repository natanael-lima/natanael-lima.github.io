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
  
