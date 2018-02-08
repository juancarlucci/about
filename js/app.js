$(document).ready(function(){
  var project=$('#projects').offset();
  console.log(project);
  $('a').on('click',function(e){
    e.preventDefault();
    // console.log(project.left);
    // $('h1').scrollLeft(project.left);

    $('#title').animate({
    width: "70%",
    opacity: 0.4,
    offset.left: "0.6in",
    fontSize: "3.6em",
    borderWidth: "10px"
  }, 1500 );

});//emd click
});
