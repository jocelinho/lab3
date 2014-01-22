'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#testjs").click(function(e) {
		$('.jumbotron h1').text("Javascript is connected");
	});

	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);
	$("a.thumbnail").click(projectClick);
	$("#testjs").click(buttonClick);
	$("#submitBtn").click(buttonClick2);
}
function projectClick(e) { 
	console.log("Project clicked");
    // prevent the page from reloading      
    e.preventDefault();
    // In an event handler, $(this) refers to      
    // the object that triggered the event      
    $(this).css("background-color", "#7fff00");
    
    var projectTitle = $(this).find("p").text();
    var jumbotronHeader = $(".jumbotron h1");
    jumbotronHeader.text(projectTitle);
	
	var containingProject = $(this).closest(".project"); 
    var description = $(containingProject).find(".project-description");
    if (description.length == 0) { 
       $(containingProject).append("<div class='project-description'><p>Description of the project.</p></div>"); 
    } else { 
       // description.html("<p>Stop clicking on me! You just did it at " + (new Date()) + "</p>");
       //description.fadeOut();
       description.remove();
    }
}

function buttonClick(e){
	var jbutton = $(this);
	jbutton.text("Don't click");
	// $(".jumbotron p").addClass("active");
	$(".jumbotron p").toggleClass("active");

}

function buttonClick2(e){
	var item = $($("#project").val());
	//var w = $("#width").val();
	//var des = $("#description").val();
	// console.log(w);
	item.animate({
		width : $("#width").val()
	}, 1000);

	var item_des = $(item).find(".project-description p");
	item_des.text($("#description").val());

}