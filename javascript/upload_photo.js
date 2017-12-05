function handleFormSubmit() {
	if (window.event) window.event.preventDefault();
	// Get values of inputs
	// Pass values to addNewPost()
	var username = document.getElementById("title").value;
	var caption = document.getElementById("caption").value;
	var picture = document.getElementById("picture").value;
	addNewPost(username, caption, picture);
	

function addNewPost(username, caption, picture) {
	var container = document.createElement("div");
	container.setAttribute("class","post");

	var newImage = document.createElement("img");
	newImage.src = picture;
	newImage.alt = caption;
	
	var description = document.createElement("div");
	description.innerHTML = "\n Thank you for submitting a new post! Your picture will be reviewed and posted soon."; 
	
	container.appendChild(newImage);
	container.appendChild(description);

	var list = document.getElementById("newPost");
	list.appendChild(container);
	
}
}