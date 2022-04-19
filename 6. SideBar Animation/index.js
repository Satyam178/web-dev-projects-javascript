var sidebar_btn = $(".fa-bars");

sidebar_btn.click(()=>{
    $(".sidebar").toggleClass("sidebar-display");

});

sidebar_btn.click(()=>{
    $(".left-sidebar").animate({

        width: 'toggle',

    });

});

$(".cross").click(()=>{
    $(".left-sidebar").animate(
        {
            width:'toggle'
        }
    )
    $(".cross").addClass("is-cross");
})

const mediaQuery = window.matchMedia('(min-width: 611px)');

function handleTabletChange(e)
{
    if(e.matches)
    {
    $(".left-sidebar").addClass("left-sidebar-display");
        
    }
}




mediaQuery.addListener(handleTabletChange);
handleTabletChange(mediaQuery);



function isclicked(cls)
{
    
    $(cls).addClass("is-clicked");

    setTimeout(function(){

    $(cls).removeClass("is-clicked");


    },100)

}

$(".home").click(function(){
    isclicked(".home");
})

$(".about").click(function(){
    isclicked(".about");
})

$(".projects").click(function(){
    isclicked(".projects");
})

$(".contact").click(function(){
    isclicked(".contact");
})