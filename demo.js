
$('body').append('<div class="chat-box"><div class="chat-closed btn mdlbtn" data-toggle="modal" data-target="#exampleModalCenter"><div class="contents"><p class="description">test animation</p></div><div class="sms"><i class="fa fa-star" aria-hidden="true"></i></div></div></div><div class="modal" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true"><div class="modal-dialog modal-dialog-centered" role="document"><div class="modal-content"><div class="modal-header"><button type="button" class="close modal-title" data-dismiss="modal" style=" outline: none; "aria-label="Close"><span aria-hidden="true">&times;</span></button></div><div class="modal-body"><div class="data-slick "><div class="data_start"><div class="row"><div class="col-sm-12"><p class="welcome_txt"></p><button class="btn user_info_btn" id="welcome_start">Start</button></div></div></div></div></div><footer class="footer grey"><div class="container-fluid"><div class="row"><div class="col-3 "><button  class="arr-left grey"style=" outline: none;"><i class="fa fa-angle-left grey"></i></button></div><div class="col"></div><div class="col-3"><button class="arr-right grey"style=" outline: none;" ><i class="fa fa-angle-right grey"></i></button></div></div></div><div class="progress" style="height:6px;background-color:grey;"><div id="sm-percent" class="progress-bar bg-success" role="progressbar"   aria-valuemin="0" aria-valuemax="100"></div></div></footer></div></div></div>');
$(function(){ 
$slideshow1=$('.data-slick').slick({
    prevArrow: $('.arr-left'),
    nextArrow: $('.arr-right'),
    infinite: false,
});
$('head').append('<link rel="stylesheet" href="http://192.168.0.30/aspin/public/css/app.css" type="text/css" />');
$('.data-slick').show();
  var $dataSlider = $('.data-slick');
  var $progressBar = $('.bg-success');
  $progressBar.css('width', 1 + '%');
  $dataSlider.on('beforeChange', function(event, slick, currentSlide, nextSlide) {
  var calc = ( (nextSlide) / (slick.slideCount-1) ) * 100;
  $progressBar.css('width', calc + '%');
  })
$.each(question_details, function(index,value){
  var cat=value['category_name'];
  var qstn=value['question'];
  var options=value['option'];
   $('.data-slick').slick('slickAdd','<div class="quest"><div class="row slickHide" style="display:none;"><div class="col-sm-12"><h3 class="h3" style="text-align:center;padding-bottom:5px;padding-top:-5px;margin:0px;">'+cat+'</h3><h4 class="h4" style="text-align:center;padding-bottom:5px;padding-top:-5px;margin:0px;">'+qstn+'</h4></div><div class="row text-center my-3"><div class="col-sm-12 col-lg-6 offset-lg-3"><div class="btn-group-toggle" data-toggle="buttons"><label class="btn chatradiobtn btn-outline-secondary w-100 my-1" id="label"><input type="radio" class="radio" value=1 id='+options[0]+qstn+' autocomplete=off>'+options[0]+'</label><label class="btn chatradiobtn btn-outline-secondary w-100 my-1" id="label"><input type="radio" class="radio" value=2 id='+options[1]+qstn+' autocomplete=off>'+options[1]+'</label><label class="btn chatradiobtn btn-outline-secondary w-100 my-1" id="label"><input type="radio" class="radio" value=3 id='+options[2]+qstn+' autocomplete=off>'+options[2]+'</label><label class="btn chatradiobtn btn-outline-secondary w-100 my-1" id="label"><input type="radio" class="radio" value=4 id='+options[3]+qstn+' autocomplete=off>'+options[3]+'</label><label class="btn chatradiobtn btn-outline-secondary w-100 my-1" id="label"><input type="radio" class="radio" value=5 id='+options[4]+qstn+' autocomplete=off>'+options[4]+'</label></div></div></div></div></div>');
});
 $('.chatradiobtn').click(function() {
    $slideshow1.slick('slickNext');   
  });
 $('#welcome_start').click(function() {
  $('.data-slick').css('display', 'block'); 
    $('.data-slick').get(0).slick.setPosition()
  $slideshow1.slick('slickNext');
   $('.slickHide').show();
   $('.final_div').show();
  });
 $.each(messages, function(index,value){
var bye_msg=value['bye_msg'];
var welcome_msg=value['welcome_msg'];
 $(".welcome_txt").append( welcome_msg );
    $('.data-slick').slick('slickAdd','<div class="second"><div class="final_div" style="display:none;"><p class="bye_msg">'+bye_msg+'</p><br><button class="btn user_info_btn" id="byebtn">Close</button></div></div>');
});
 $('#byebtn').click(function(){
   $(".modal").modal("hide");
 })
 $('.chat-closed').click(function(){
  $('.modal').show();
 })
$('.chatradiobtn').click(function(){
  var response=new Array();
 response[i]['question']="qw";
 response[i]['option']="1";
  console.log(response);
})
});
