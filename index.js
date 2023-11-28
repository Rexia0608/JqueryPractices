
// Element           class      value
// adding style in css
// $("h1").addClass("big-title margin-50");
// adding text inside the element
// $("button").text("<div>asddasd</div>");
// $("a").attr("href", "https://google.com")




// example using event in javascript
// for(let i= 0; i < 5; i++){
//     document.querySelectorAll("button")[i].addEventListener("click", function(){
//         document.querySelector("h1").style.color = "purple";
//     });
// }

// example using event in Jquery
// $("button").click(function(){
//     $("h1").css("color", "purple");
// })

// listining on the event and set directly to the h1 element
// $("input").keypress(function(event){
//   $("h1").text(event.key);
//   console.log(event.key);
// })

// // flexible events listening for mouse event
// $("h1").on("mouseover", function(){
//     $("h1").css("color", "black");
// })


// $("button").on("click", function(){
//     // hide and show when the event click the button 
//     // $("h1").toggle();
//     // permantnently not showing after the click evernt 
//     // $("h1").hide();
//     // fadeout event reduce first the opacity before hidning the element 
//     // $("h1").fadeOut();
//     // fadeout event reduce first the opacity before hiding the element with a toggle effect 
//     // $("h1").fadeToggle();
//     // animate using emplementation of animated css you want after hitting the button 
//                         // css value, this is only run on the css numerate css value not for other properties
//     // $("h1").animate({opacity: 0.5});
//     // chaining all the css with other method of css  
//     $("h1").slideUp().slideDown().animate({opacity: 0.5});

// });
