function check(){
    document.body.style.background= "#ffffff";
  }

var data = new Date();
var hour = data.getHours();
if(hour=>6 && hour<14)
{
  console.log("It is Day time")
}

else if(hour>=14 && hour<22)
{
  console.log("It is Aftenoon")
}
else
{
  console.log("It is Night time")
}
