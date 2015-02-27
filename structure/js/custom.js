
 $(document).ready(function(){


}) // end Document Ready

//  1.)   For get text and change on click
function textDisplay(){
      document.getElementById("demo").innerHTML = "Hello JavaScript!";
	}
	
//     2.)  Change image on click	

function changeImage(){
  var img=document.getElementById("myImage");
  if(img.src.match("bulbon")){
  	img.src="pic_bulboff.gif";
  	img.style.border="0";
  }
  else{
  	img.src="pic_bulbon.gif";
  	img.style.border="2px solid red";
  }
  
}
//     2.)  Change image on click	




