$(".mainMenu>li").mouseenter(function(){
    $(this).children(".subMenu").show();
})
$(".mainMenu").mouseleave(function(){
    $(".subMenu").hide();
})
$(".gallery").hide();
$(".btn-gallery").click(function(){
    $(".gallery").show();
    $(".news").hide();
    $(".btn-gallery").css("background-color","#3337AB");
    $(".btn-news").css("background-color","#6667AB")
})
$(".btn-news").click(function(){
    $(".news").show();
    $(".gallery").hide();
    $(".btn-news").css("background-color","#3337AB");
    $(".btn-gallery").css("background-color","#6667AB")
})

$(".openModal").click(function(){
    $(".modal").css("display","block");
})
$(".closeModal").click(function(){
    $(".modal").css("display","none");
})