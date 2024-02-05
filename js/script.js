document.addEventListener("DOMContentLoaded", function() {
	const aboutBtn = document.getElementById("aboutBtn");
	const skillBtn = document.getElementById("skillBtn");
	const aboutContent = document.getElementById("aboutContent");
	const skillContent = document.getElementById("skillContent");
  
	aboutBtn.addEventListener("click", function() {
	  aboutContent.classList.add("active");
	  skillContent.classList.remove("active");
	});
  
	skillBtn.addEventListener("click", function() {
	  skillContent.classList.add("active");
	  aboutContent.classList.remove("active");
	});
  });
  
