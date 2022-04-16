var decrease = $('.decrease');
var increase = $('.increase');
var reset = $('.reset');
var num = $('.num');

var number = num.text();



decrease.click(function()
{

    if(number!=0)
    {
        number = num.text();
        number--;
        num.text(number);
    }
    isclicked(decrease);

});

increase.click(function(){
    number = num.text()
    number++;
    num.text(number);
    isclicked(increase);
})

reset.click(function(){
    number = 0;
    num.text(number);
    isclicked(reset);

})

function isclicked(btn)
{
    $(btn).addClass("is-clicked");

    setTimeout(function(){
        $(btn).removeClass("is-clicked");
    },100)
}