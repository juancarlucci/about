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
  skills: ["JavaScript", "Knockout.js", "HTML", "CSS", "Google Maps API", "Leaflet.js", "SweetAlert.js"],
  projectImage: "images/map.jpg",
  images: [ "images/butterIcon.svg", "images/butterSpot2.svg", "noAPI.svg" ],
  demoURL: "https://juancarlucci.github.io/map/",
  codeURL: "https://github.com/juancarlucci/map"
}
var underscore = {
  projectId: "underscore",
  title: "Underscore.js Re-mixed",
  subTitle: "Re-wrote the first 10 functions",
  skills: ["Deeper understanding of higher order functions (HOFs)","Execution context", "Closures", "Ability to solve problems"],
  projectImage: "images/underscore.png",
  images: ["images/underscore.png" ],
  demoURL: "https://juancarlucci.github.io/map/",
  codeURL: "https://github.com/juancarlucci/map"
}
var energySavings = {
  projectId: "energySavings",
  title: "Energy Savings in New Buiuldings",
  subTitle: "Map displaying enhancments to meeting the California energy code",
  skills: ["JavaScript","Leaflet.js", "Mapbox", "GeoJSON","D3.js"],
  projectImage: "images/code.png",
  images: [ "images/line_graph.png", "images/line_graph3.png", "noAPI.svg" ],
  demoURL: "https://juancarlucci.github.io/map/",
  codeURL: "https://github.com/juancarlucci/map"
}

let projects = [restaurantMap, underscore, energySavings];

let projectsBoard = document.getElementById("projects-board");
// let stortyboardsBoard = document.getElementById("storyboards");
let stortyboardsBoard = document.getElementById("storyboard-container");
// let fruitsCategory = document.getElementById("fruits");
// let basicsCategory = document.getElementById("basics");

// veggiesCategory.onclick = function() {
//   createProject(veggies);
// };
// fruitsCategory.onclick = function() {
//   createProject(fruits);
// };
// basicsCategory.onclick = function() {
//   createProject(basics);
// };

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
          <nav class="card-nav">
            <a class="card-nav-back demo-URL" href=${project.demoURL} target="_blank">live demo</a>
            <a id="createStoryboard${project.projectId}" href="#${project.projectId}" data-projectName="#${project.projectId}" class="card-nav-back storyboard-URL">storyboard</a>
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

// Add to storyboard  Button
// document.addEventListener("click", function(e) {
//   // $('')
//   // e.preventDefault();
//   if (e.target && e.target.id == "createStoryboard") {
//
//     let projectName = e.target.getAttribute("data-projectName");
//     console.log(projectName);
//     let projectId = e.target.getAttribute("id");
//
//     var projects = [restaurantMap, underscore, energySavings];
//     let index = projects.indexOf(projectName);
//
//     projects.forEach(function(item){
//       console.log(item.projectId);
//       let name = item.projectId;
//       if(name === projectName){
//         console.log(projectName);
//
//         createStoryboard(projectName);
//       }
//     });
//
//   }
// });

let restaurantProjectStory = $("#createStoryboardrestaurantMap");
console.log("restaurantProjectStory");
restaurantProjectStory.mouseover(function() {
  restaurantProjectStory.on("click", function() {
  console.log("restaurantProjectStory");
  createStoryboard(restaurantMap);
  });
});

var createSkillsList = function(obj) {
  var skills = obj.skills;
  let skillsArray = [];
  var li;

  //from the object passed in by createStoryboard grab
  //each skill. Create an li for each skill
  for (elem of skills) {
    console.log(elem);
    li = `
          <li>${elem}</li>
        `;
    skillsArray.push(li);
  }

  // skillsArray.join("");

  // let skillsA = $('.skills-list');
  // let skillsB = document.getElementById('skills-list');
  $(".skills-list").html(skillsArray);

  // console.log(skillsB, skillsA);
};


var createStoryboard = function(obj) {
  let storyBoardsArray = [];
  var storyboard;


  for(prop in obj){
    // console.log(obj.projectId);
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



            <nav class="storyboard-nav item storyboardNav nested">
              <a id="butterMap" class="card-nav-back demo-URL" href="https://juancarlucci.github.io/map/" target="_blank">live demo</a>
              <a class="card-nav-back storyboard-URL" href="#projects-title">back to projects</a>
              <a class="card-nav-back code-URL" href="https://github.com/juancarlucci/map" target="_blank">github code</a>
            </nav>


              <img src="images/map.jpg" alt="" class="item storyboardMainImage"/>





    `;
    // storyBoardsArray.push(storyboard);
  }

  // <article class="project-skills item storyboardSkills">
  //     <h2>skills:</h2>
  //     <ul class="nested">
  //       <li>JavaScript</li>
  //       <li>HTML</li>
  //       <li>Google Maps API</li>
  //       <li>CSS</li>
  //       <li>Leaflet.js</li>
  //     </ul>
  //   </article>


  // let storyBoards = array.map((project) => {

  //   map over every item in array, map returns array
  // Wes Bos inspired: https://www.youtube.com/watch?v=YL1F4dCUlLc
    // var storyboard =  `
    //   <article id="${project.projectId}Storyboard" class="storyboard ${project.projectId}-storyboard"> -->
    //     <section class="project-header">
    //       <h1>${project.title}</h1>
    //         <nav class="storyboard-nav">
    //           <a id="butterMap" class="card-nav-back demo-URL" href="https://juancarlucci.github.io/map/" target="_blank">live demo</a>
    //           <a class="card-nav-back storyboard-URL" href="#projects-title">back to projeccts</a>
    //           <a class="card-nav-back code-URL" href="https://github.com/juancarlucci/map" target="_blank">github code</a>
    //         </nav>
    //   <div class="flex-item flip">
    //     <div class="front">
    //       <h2 class="itemName">${project.title}</h2>
    //       <img src="${project.projectImage}" alt="${project.title} image">
    //     </div>
    //     <div class="back">
    //       <nav class="card-nav">
    //         <a class="card-nav-back demo-URL" href=${project.demoURL} target="_blank">live demo</a>
    //         <a class="card-nav-back code-URL" href=${project.codeURL} target="_blank">github code</a>
    //         </nav>
    //       </div>
    //     </div>
    // `;
    // storyBoardsArray.push(storyboard);
    // return item;
  //map returns array, but need string to feed HTML, so join
  //join converts array to string
    // }).join("");

    // console.log(storyBoardsArray);
//     var skills = obj.skills;
//     let skillsArray = [];
//     var li;
//     for(elem of skills) {
//       console.log(elem);
//       li = `
//         <li>${elem}</li>
//       `;
//       skillsArray.push(li);
//
//      }
//      skillsArray.join("");
//      let skillsA = $('.skills-list');
//     let skillsB = document.getElementById('skills-list');
//      $('.skills-list').html(skillsArray);
//
// console.log(skillsB);

  stortyboardsBoard.innerHTML = storyboard;

  createSkillsList(obj)
};//end of createStoryboard
createStoryboard(restaurantMap);




}); //end doc ready
