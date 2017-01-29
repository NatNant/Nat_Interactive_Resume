var main = function() {
	setDynamicTopPadding();
	
	//everytime window resize will change body padding dynamically
	$( window ).resize(function() {
  		setDynamicTopPadding();
	});

	//for collapse nav
 	collapseNav();

 	//INCLUDE .HTML from another file
 	$.get("pages/summary.html", function(data) {
    $(".summary").html(data);
  	});



  	//to set the long scrolling effect
  	$('a[href*="#"]:not([href="#"])').on('click', function() {
  	 	var target = $(this.hash);
   		$('html, body').animate({
        	scrollTop: target.offset().top
      	}, 1500, function(){ });
   	});

	
    $('#aboutME_cell').click(function(){
    	$(this).effect( "slide", 1000 ,getScroll());
    });

    $('#project_cell').click(function(){
    	$(this).slideUp(1000).slideDown(1000);
    });

    $('#skills_cell').click(function(){
    	$(this).fadeOut(1000).fadeIn(1000);
    });
    return false;
};  


function setDynamicTopPadding(){	
	var $topNav_Container = $('div#topNav_Container');
	var topNav_Container_h = $topNav_Container.height();

		
	//$("body").css("padding-top", topNav_Container_h+'px');
	$("#topNav").css("height", topNav_Container_h+'px');
	$('.page2').css("height", topNav_Container_h+'px');
	$('.page3').css("height", topNav_Container_h+'px');
	
	//$("#page2_inner").css("margin-top", topNav_Container_h+'px');
	//$("#page3_inner").css("margin-top", topNav_Container_h+'px');

	var windowHeight = $(window).height();
	//var windowWidth = $(window).width();
  

  var page1_inner_h = windowHeight - topNav_Container_h;
  $('.row.page1_row1').css("height", page1_inner_h*0.7+'px');
  var page1_row1_h = $('.row.page1_row1').height();
   $('.row.page1_row2').css("height", page1_inner_h*0.3+'px');
  //alert(page1_row1_h);
	//for page 1
  $("#page1_inner").css("margin-top", topNav_Container_h+'px');
	$('#page1_inner').css("height", page1_inner_h+'px');

  $('#aboutME_cell').prev().css("height", page1_row1_h*0.3+'px');
  $('#aboutME_cell').css("height", page1_row1_h*0.7+'px');
  $('#project_cell').next().css("height", page1_row1_h*0.3+'px');
  $('#project_cell').css("height", page1_row1_h*0.7+'px');
	
  
	//for page 2
	$('#page2_inner').css("height", windowHeight - topNav_Container_h+'px');
	$('#page3_inner').css("height", windowHeight - topNav_Container_h+'px');
}

function getScroll(param1, callback){

    $(param1).click(function(){
    	$(this).effect( "slide", 1000);
    });

     if (callback && typeof(callback) === "function") {
        callback();
    }
};

function collapseNav(){
	var navbarButton_li = $('#navbarButton_li');
 	navbarButton_li.css('list-style', 'none');
  	navbarButton_li.click(function(){
    	$(this).find("ul").css('display', 'block');
  	});
	navbarButton_li.mouseleave(function(){
     	$(this).find("ul").css('display', 'none');
   	});
}


$(document).ready(main);