
window.addEventListener("load", () =>{
	const loader = document.querySelector(".loader");

	loader.classList.add("loader-hidden");

	loader.addEventListener("transitionend", () => {
		document.body.removeChild("loader");
	})
})
document.getElementById("loading").style.display = "block";
setTimeout( () => {
	document.getElementById("loading").style.display = "none";
}, 3000);


