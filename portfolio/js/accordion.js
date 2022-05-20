var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {

    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}



const closeNow = () => {

  var x = document.getElementById("divider");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }


}


$(document).ready(function(){
  $(".closebtn").click(function(){
    $(".panel").hide('blind');
  });
});

$('.accordion').click(function() {
  $( ".panel" ).toggle( "blind" );
});

