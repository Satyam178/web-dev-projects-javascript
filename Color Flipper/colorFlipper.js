  let arr = ["green","red","#140941","yellow","#181818"];
  let size = arr.length;
  var index = Math.floor(Math.random()*size);
 
  $("button").click(function()
  {
   
     var prevIndex = index;
     var color = arr[index];
     $("body").css({"background-color":color});
     $(".colorName").text("Background Color : "+ color);

     index = Math.floor(Math.random()*size);
     if(prevIndex === index)
     {
         if(index!=0)
         {
             index--;
         }
         else if(index!=arr.size-1)
         {
             index++;
         }
     }
  
    
  });























// const express = require("express");
// const bodyParser = require("body-parser");

// const app = express();
// app.use(bodyParser.urlencoded({extended:true}));


// app.get("/colorflipper",(req,res)=>{

//     res.sendFile(__dirname + "/colorFlipper.html");

// });

// app.put("/colorflipper",(req,res)=>{

  

// });

// app.listen(3000,()=>{
//     console.log("server started on port 3000");
// })