// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//  require turbolinks
// require_tree .

$(function(){
	//$("#img1").click(function(){
		$("#innerdiv").hide(1000,function(){$("#img1").animate({width:1200},1000).animate({width:500,height:500},1000,function(){$("#innerdiv").show(500);});});
	//});
	$("button").click(function(){
		$(".newclass").toggle("slow");
		$(".newclass1").toggle("slow");
	});
	$("#submit").click(
		function(){
			var emailreg=/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
			var phonereg=/^\+(?:[0-9] ?){6,14}[0-9]$/;
			var errors=false;
			var abspath=$("myImage").attr('src');
			$(".errors").remove();
			if($("#name").val()=="")
			{
				$("#name").after('<span class="errors">Misssing Name</span>');
				///$("#fade").fadeIn(1000);
				$("#name").hide(500);
				$("#name").show(500);
				errors=true;
			}
			if($("#comment").val()=="")
			{
				$("#comment").after('<span class="errors">Misssing Comment</span>');
				$("#comment").hide(500);
				$("#comment").show(500);
				errors=true;
			}
			if($("#email").val()=="")
			{
				$("#email").after('<span class="errors">Misssing email</span>');
				$("#email").hide(500);
				$("#email").show(500);
				errors=true;
			}
			else if(!emailreg.test($("#email").val())){
				$("#email").after('<span class="errors">Not a valid email</span>');
				$("#email").hide(500);
				$("#email").show(500);
				errors=true;
			}
			if($("#phone").val()=="")
			{
				$("#phone").after('<span id="fade" class="errors">Misssing Phone</span>');
				$("#phone").hide(500);
				$("#phone").show(500);
				errors=true;
			}else if(!phonereg.test($("#phone").val())){
				$("#phone").after('<span class="errors">Not a valid phone</span>');
				$("#phone").hide(500);
				$("#phone").show(500);
				errors=true;
			}
			if(errors==true){
				
				$(".body").hide(1000,function() {$(".body").show(1000)});
				//$("#body").after('<img class="imagec" src="http://www.pageresource.//com/wallpapers/wallpaper/cracked-lcd-screen.jpg">');
				
				
				return false;
			}else{alert("Entered values are:"+$("#name").val()+"and"+$("#phone").text());
				return true;
			}
		}
		);
});
