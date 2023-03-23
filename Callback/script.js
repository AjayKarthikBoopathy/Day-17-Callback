
setTimeout(()=>{
  document.getElementById("main").innerHTML=10;
  setTimeout(()=>{
    document.getElementById("main").innerHTML=9;
    setTimeout(()=>{
      document.getElementById("main").innerHTML=8;
      setTimeout(()=>{
        document.getElementById("main").innerHTML=7;
        setTimeout(()=>{
          document.getElementById("main").innerHTML=6;
          setTimeout(()=>{
            document.getElementById("main").innerHTML=5;
            setTimeout(()=>{
              document.getElementById("main").innerHTML=4;
              setTimeout(()=>{
                document.getElementById("main").innerHTML=3;
                setTimeout(()=>{
                  document.getElementById("main").innerHTML=2;
                  setTimeout(()=>{
                    document.getElementById("main").innerHTML=1;
                    setTimeout(()=>{
                      document.getElementById("main").innerHTML="Happy Independence Day";
}, 1000)
}, 1000)
}, 1000)
}, 1000)
}, 1000)
}, 1000)
}, 1000)
}, 1000)
}, 1000)
}, 1000)
}, 1000);



// function countdown(secs){
//     var element = document.getElementById("status");
//     element.innerHTML = secs;
//     if(secs < 1){
//       clearTimeout(timer);
//       element.innerHTML = "<h4>Happy Independence Day</h4>";
//     }
//     secs--;
//     var timer = setTimeout('countdown('+secs+')', 1000);
//   }
  
//   countdown(10);