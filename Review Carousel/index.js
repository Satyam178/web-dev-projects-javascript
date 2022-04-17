var arr =
[
{
    image: "photo1.jpg",
    name: "Susan Smith",
    designation: "Web Developer",
    review: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of Ipsum is that it has a more-or-less normal distribution of letters, then I saw him on the road walking alone down the street in the amidst darkness."
},
{
    image: "photo2.png",
    name: "Saul Goodman",
    designation: "Lawyer",
    review: "Don't Drink And Drive, But When You Do, Call Saul."
},
{
    image: "photo3.webp",
    name: "Jesse",
    designation: "Meth Addict",
    review: "Yeah! Science"
},
{
    image: "photo4.webp",
    name: "Walter White Jr.",
    designation: "Bacon Addict",
    review: "Mom! Where's my dinner !"
},

{
    image: "photo5.webp",
    name: "Walter White",
    designation: "Meth Lord",
    review: "I am not in danger skyler, I am the danger"
},

]


let size = arr.length;

$("img").attr("src","photos/"+arr[0].image);

$(".name").html(arr[0].name);

$(".designation").text(arr[0].designation);

$(".review").text(arr[0].review);

let index = Math.floor(Math.random()*size);

$("button").click(()=>
{
    let prevIndex = index;

   $("img").attr("src","photos/"+arr[index].image);

   $(".name").html(arr[index].name);

   $(".designation").text(arr[index].designation);

   $(".review").text(arr[index].review);

   index = Math.floor(Math.random()*size);
   if(index === prevIndex)
   {
       if(index!=0)
       {
           index--;
       }
       else if(index!=size-1)
       {
           index++;
       }
   }

});


function isClicked(btn)
{
    $(btn).addClass("is-clicked");

    setTimeout(function(){
    $(btn).removeClass("is-clicked");

    },100);
}


$(".fa-less-than").click(()=>
{
   if(index === 0) index = size - 1;
   else index--;
   $("img").attr("src","photos/"+arr[index].image);

   $(".name").html(arr[index].name);

   $(".designation").text(arr[index].designation);

   $(".review").text(arr[index].review);

   isClicked(".fa-less-than");

})

$(".fa-greater-than").click(()=>
{
   if(index === size-1) index = 0;
   else index++;
   $("img").attr("src","photos/"+arr[index].image);

   $(".name").html(arr[index].name);

   $(".designation").text(arr[index].designation);

   $(".review").text(arr[index].review);

   isClicked(".fa-greater-than");


})