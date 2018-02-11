$(document).ready(function(){
//   var project=$('#projects').offset();
//   console.log(project);
//   $('a').on('click',function(e){
//     e.preventDefault();
//     // console.log(project.left);
//     // $('h1').scrollLeft(project.left);
//
//     $('#title').animate({
//     width: "70%",
//     opacity: 0.4,
//     fontSize: "3.6em",
//     borderWidth: "10px"
//   }, 1500 );
//
// });//emd click



$(function(){
    $(".flip").flip({
        trigger: 'hover'
    });
});

function Project(title, skills, projectImage, images) {
  this.title = title;
  this.skills = skills;
  this.projectImage = projectImage;
  this.image = images;
}

Project.prototype = {
  select: function() {
    console.log("To the storyboard!");
  }
};


var restaurantMap = {
  projectId: "restaurantMap",
  title: "Restaurant Map",
  subTitle: "Searchable map with nearby attractions",
  skills: ["JavaScript", "Knockout.js", "HTML", "CSS", "Google Maps API", "Wikimedia API", "Leaflet.js", "SweetAlert.js"],
  projectImage: "images/map.jpg",
  images: [ "images/butterIcon.svg", "images/butterSpot2.svg", "noAPI.svg" ],
  demoURL: "https://juancarlucci.github.io/map/",
  codeURL: "https://github.com/juancarlucci/map",
  feature1: "searchable",
  feature1Image:  "images/restaurantSearch.png",
  feature2: "AJAX call to nearby attractions",
  feature2Image:  "images/nearby.png"

}
var underscore = {
  projectId: "underscore",
  title: "Underscore.js Re-mixed",
  subTitle: "Re-wrote the first 10 functions",
  skills: ["Higher order functions","Execution context", "Closures", "Problem solving"],
  projectImage: "images/underscore.png",
  images: ["images/underscore.png" ],
  demoURL: "https://juancarlucci.github.io/map/",
  codeURL: "https://github.com/juancarlucci/ssp7-underbar",
  feature1: "_each function",
  feature1Image: "images/_each.png",
  feature2: "_filter function",
  feature2Image: "images/_filter.png",
}
var energySavings = {
  projectId: "energySavings",
  title: "Energy Savings in New Buiuldings",
  subTitle: "Map displaying enhancments to meeting the California energy code",
  skills: ["JavaScript","Leaflet.js", "Mapbox", "GeoJSON","D3.js"],
  projectImage: "images/code.png",
  images: [ "images/line_graph.png", "images/line_graph3.png", "noAPI.svg" ],
  demoURL: "https://juancarlucci.github.io/buildingEnergySavings/",
  codeURL: "https://github.com/juancarlucci/buildingEnergySavings",
  feature1: "d3.js graphics",
  feature1Image: "images/line_graph.png",
  feature2: "data-driven circle size",
  feature2Image: "images/proportional.png"

}

let projects = [restaurantMap, underscore, energySavings];

let projectsBoard = document.getElementById("projects-board");
let stortyboardsBoard = document.getElementById("storyboard-container");

var createProject = function(array) {
  let projectsArray = [];

  let projects = array.map((project) => {
    //map over every item in array, map returns array
  //Wes Bos inspired: https://www.youtube.com/watch?v=YL1F4dCUlLc
    var project =  `
      <div class="flex-item flip">
        <div class="front">

          <img src=${project.projectImage} alt="${project.title} image">
        </div>
        <div class="back">
          <nav id="project-nav" class="card-nav">
            <a class="card-nav-back demo-URL" href=${project.demoURL} target="_blank">live demo</a>
            <a id="createStoryboard${project.projectId}" href="#${project.projectId}Storyboard" data-projectName="#${project.projectId}" class="card-nav-back storyboard-URL">storyboard</a>
            <a class="card-nav-back code-URL" href=${project.codeURL} target="_blank">github code</a>
            </nav>
          </div>
        </div>
    `;
    projectsArray.push(project);
    // return item;
  //map returns array, but need string to feed HTML, so join
  //join converts array to string
    }).join("");

    // console.log(projectsArray);

  projectsBoard.innerHTML = projectsArray;
};//end of createProject

createProject(projects);

var createSkillsList = function(obj) {
  var skills = obj.skills;
  let skillsArray = [];
  var li;

  //from the object passed in by createStoryboard grab
  //each skill. Create an li for each skill
  for (elem of skills) {
    // console.log(elem);
    li = `
          <li>${elem}</li>
        `;
    skillsArray.push(li);
  }

  //grab the skills-list container and drop in skillsArray
  $(".skills-list").html(skillsArray);
};


var createStoryboard = function(obj) {
  let storyBoardsArray = [];
  var storyboard;


  for(prop in obj){
    // console.log(obj.feature1Image);
    storyboard =  `
      <article id="${obj.projectId}Storyboard" class="storyboard ${obj.projectId}-storyboard">
      </article>
          <section class="item storyboardTitle">
          <h1>${obj.title}</h1>
          <h3>${obj.subTitle}</h3>
          </section>

          <article class="project-skills item storyboardSkills">
              <h2>skills:</h2>
              <ul class="nested skills-list" id="skills-list">
              </ul>
            </article>

            <nav class="storyboard-nav item storyboardNav nested vertically-centered">
              <a id="butterMap" class="card-nav-back demo-URL" href="https://juancarlucci.github.io/map/" target="_blank">live demo</a>
              <a class="card-nav-back storyboard-URL" href="#projects-title">back to projects</a>
              <a class="card-nav-back code-URL" href="https://github.com/juancarlucci/map" target="_blank">github code</a>
            </nav>


            <a class="storyboardMainImage" href=${obj.demoURL} target="_blank">
              <img class="item" src=${obj.projectImage} alt="${obj.title} image"/>
              </a>

              <article class="features1 item">
                <p class="feature1  vertically-centered">${obj.feature1}</p>
                <img class="feature1Image" src=${obj.feature1Image} alt="${obj.feature1Image} image"/>
              </article>

              <article class="features2 item">
                <p class="feature2 vertically-centered">${obj.feature2}</p>
                <img class="feature2Image " src=${obj.feature2Image} alt="${obj.feature2Image} image"/>
              </article>



    `;

  }

  stortyboardsBoard.innerHTML = storyboard;

  createSkillsList(obj)
};//end of createStoryboard



$("#createStoryboardrestaurantMap").on("click", function() {


    createStoryboard(restaurantMap);
    $('#storyboard-container').show().css( "width", "100%" );

});

$("#createStoryboardunderscore").on("click", function() {


    createStoryboard(underscore);
    $('#storyboard-container').show().css( "width", "100%" );

});

$("#createStoryboardenergySavings").on("click", function() {

    createStoryboard(energySavings);
    $('#storyboard-container').show().css( "width", "100%" );

});

$('#storyboard-container').on( "click", "a", function( event ) {

    // $( "#storyboard-container" ).css( "width", "0" );
    $( "#storyboard-container" ).hide("slow");
    $('.grid-container').hide("slow");
});

//https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_eff_animate_smoothscroll
// Add smooth scrolling to all links
  // $("a").on('click', function(event) {
  //
  //   // Make sure this.hash has a value before overriding default behavior
  //   if (this.hash !== "") {
  //     // Prevent default anchor click behavior
  //     event.preventDefault();
  //
  //     // Store hash
  //     var hash = this.hash;
  //
  //     // Using jQuery's animate() method to add smooth page scroll
  //     // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
  //     $('html, body').animate({
  //       scrollTop: $(hash).offset().top
  //     }, 800, function(){
  //
  //       // Add hash (#) to URL when done scrolling (default click behavior)
  //       window.location.hash = hash;
  //     });
  //   } // End if
  // });
  // https://www.abeautifulsite.net/smoothly-scroll-to-an-element-without-a-jquery-plugin-2
  $('a[href^="#"]').on('click', function(event) {
    var target = $(this.getAttribute('href'));
    if( target.length ) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top
        }, 1000);
    }
});


//TESTIMONIALS


// let randomNumber = Math.floor(Math.random()* array.length);

const testimoniasArray = [
   {
    author: "~Roland Berrill, co-founder of MENSA",
    testimonial: "when I think of Juan Carlos my mind goes blank"
  },
  {
    author: "~Eva, kindergarten teacher",
    testimonial: "Compared to my current students, Juan Carlos is at least in the top 10 percent."
  },
  {
    author: "~Marcel Marceau, mime",
    testimonial: "I can't say enough about Juan Carlos. I am speechless."
  },
  {
    author: "~Justin, GA",
    testimonial: "Talking about clean code, he is a pro at it. So clean, he does not have a sigle line of code."
  },
  {
    author:"~Tyson Wang, Abacus -Bringing you yesterdays technology, today",
    testimonial: "Juan Carlos is an innovator. He can do more with a new Mac than most people can with a matchstick and bubble gum."
  },
  {
    author: "~Federico, former boss",
    testimonial: "He is independent, capable and thoughtful. For example, he can tie his own shoe laces."
  },
  {
    author: "~Kay, GA",
    testimonial: "Juan Carlos is a super efficient coder. What takes most student a week, he does in a month."
  },
  {
    author: "~Christopher A. Wray, director of FBI",
    testimonial: "We are looking for that touble maker. $500,000 reward for his whereabouts."
  },
  {
    author: "~Stephanie, GA",
    testimonial: "He is a rock star! If he only knew how to code..."
  }

     ];


function randomTestimonialFromArray(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function displayTestimonialCycle() {
  let randomTestimonial = randomTestimonialFromArray(testimoniasArray);
  let testimonial = `
    <p>${randomTestimonial.testimonial}</p>
    <p>${randomTestimonial.author}</p>
    `;
  $("#testimonials-board").html(testimonial);
}

displayTestimonialCycle();

setInterval(function() {
  displayTestimonialCycle();
}, 3700);


}); //end doc ready
