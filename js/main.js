var main = function() {
  //initail setting the screen height
  setDynamicTopPadding();
  
  //everytime window resize will change body padding dynamically
  $( window ).resize(function() {
      setDynamicTopPadding();
  });

  //for collapse nav
  collapseNav();
  //INCLUDE .HTML from another file
  /*
  $.get("pages/summary.html", function(data) {
    $(".summary").html(data);
    });
  */
   $(".summary").load("pages/summary.html", function(responseTxt, statusTxt, jqXHR){
            if(statusTxt == "success"){
                //alert("New content loaded successfully!");
            }
            if(statusTxt == "error"){
               // alert("Error: " + jqXHR.status + " " + jqXHR.statusText);
            }
    });

    $('#summary_panel').hide();
    $('#linkTo').hide();
    $('#linkTo').slideDown(2000,function(){
      $('#summary_panel').show('blind',2000);
    });
   
    
    


    //to set the long scrolling effect
    $('a[href*="#"]:not([href="#"])').on('click', function() {
      var target = $(this.hash);
      $('html, body').animate({
          scrollTop: target.offset().top
        }, 1500, function(){ });
    });

    setDialog('#pro_ex_dialog');
    setDialog('#edu_dialog');
    setDialog('#pro_dev_dialog');
    setDialog('#other_info_dialog');
    setDialog('#projects_dialog');
    setDialog('#skills_dialog');
    setDialog('#credits_dialog');

    //to set the effect when clicking on the icon
    $('#pro_ex').click(function(){
      $(this).effect( "slide", 1000 ,function(){
        openDialog("#pro_ex_dialog");
      });
    });
    $('#edu').click(function(){
      $(this).slideUp(1000).slideDown(1000, function(){
          openDialog("#edu_dialog");
      });
    });
    $('#pro_dev').click(function(){
      $(this).fadeOut(1000).fadeIn(1000, function(){
        openDialog('#pro_dev_dialog');
      });
    });
    $('#other_info').click(function(){
      $(this).effect("slide", { direction: "right" }, 1000, function(){
        openDialog('#other_info_dialog');
      });
    });
    $('#projects').click(function(){
      $(this).hide( "fold", {horizFirst: true }, 1000 );
      $(this).show( "fold", {horizFirst: true }, 1000 , function(){
        openDialog('#projects_dialog');
      });
    });
    $('#skills').click(function(){
      $(this).hide( "clip", {horizFirst: true }, 1000 );
      $(this).show( "clip", {horizFirst: true }, 1000, function(){
        openDialog('#skills_dialog');
      });
    });

    return false;
};  


function setDynamicTopPadding(){  
  var $topNav_Container = $('div#topNav_Container');
  var topNav_Container_h = $topNav_Container.height();

  $("#topNav").css("height", topNav_Container_h+'px');
  $('.page2').css("height", topNav_Container_h+'px');
  $('.page3').css("height", topNav_Container_h+'px');
  $("#page1_inner").css("margin-top", topNav_Container_h+'px');

  var windowHeight = $(window).height();
  //var windowWidth = $(window).width();

  //for page 1
  var page1_inner_h = windowHeight - topNav_Container_h;
  $('#page1_inner').css("height", page1_inner_h+'px');
  
  //for page 2
  $('#page2_inner').css("height", windowHeight - topNav_Container_h+'px');

  //for page _
  $('#page3_inner').css("height", windowHeight - topNav_Container_h+'px');
}

//for callback scrolling  after effect 
function getScroll(param1, callback){
    $(param1).click(function(){
      $(this).effect( "slide", 1000);
    });
     if (callback && typeof(callback) === "function") {
        callback();
    }
};

//to create a collapse navigation effect
function collapseNav(){
  var navbarButton_li = $('#navbarButton_li');
  navbarButton_li.css('list-style', 'none');
    navbarButton_li.click(function(){
      $(this).find("ul").css('display', 'block');
    });
  navbarButton_li.mouseleave(function(){
      $(this).find("ul").css('display', 'none');
    });
};

function setDialog(dialogID){
  $(dialogID).dialog({
               autoOpen: false, 
               hide: "puff",
               show : "slide",
               width: 'auto'             
  });
};

function openDialog(dialogID_param){ 
//if($(dialogID).dialog("isOpen") === false){
//  alert('open'); 
//}
//else{
  var dialogID = dialogID_param ;
  var pageToLoad = '';
  switch (dialogID) { 
  case '#pro_ex_dialog': 
    pageToLoad = 'pages/professional_experience.html';
    break;
  case '#edu_dialog': 
     pageToLoad = 'pages/education.html';
    break;
  case '#pro_dev_dialog': 
     pageToLoad = 'pages/pro_development.html';
    break;    
  case '#other_info_dialog': 
      pageToLoad = 'pages/other_info.html';
    break;
    case '#projects_dialog': 
      pageToLoad = 'pages/projects.html';
    break;
    case '#skills_dialog': 
      pageToLoad = 'pages/skills.html';
    break;
  default:
      pageToLoad = 'pages/credits.html';
}

  $(dialogID).load(pageToLoad, function() {
        $(dialogID).dialog("open");
  });
//}
};



$(document).ready(main);
