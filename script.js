console.log("gallery.js loaded");
function upDate(previewPic){
  console.log("upDate called with:", previewPic);
  var imageDiv=document.getElementById("image");
  imageDiv.style.backgroundImage = "url('" + previewPic.src +"')";
  imageDiv.textContent=previewPic.alt;
	}

	function unDo(){
    console.log("unDo called");
		var imageDiv=document.getElementById("image");
    imageDiv.style.backgroundImage = "url('')";
    imageDiv.textContent="Hover over an image below to display here.";
	}

function initGallery(){
  console.log("initGallery called - initializing gallery");
  addTabFocus();
}

function addTabFocus(){
  console.log("addTabFocus triggered - adding tabindex to images");
  const images =document.querySelectorAll("img.preview");
  for (let i = 0; i < images.length; i++) {
    images[i].setAttribute("tabindex", "0");
  }
}
