var values=[];
var scaled_values=[];
var scaled_value;
var n;
var bar_width;
var start = 0;
var end ;
var rn;
var value,middle=0,found=false;
function loadJson(selector) {
  return JSON.parse(document.querySelector(selector).getAttribute('data-json'));
}
function preload(){
  jsonData = loadJson('#jsonData');
  if (jsonData.type == "r") {
    rn = true;
    n = jsonData.size;
    values = jsonData.array;
    value = jsonData.value;
    scaled_values = values;
    scaled_value = value;
  }
  if (jsonData.type == "c") {
    rn = false;
    values = jsonData.array;
    scaled_values = jsonData.scaled_values;
    value = jsonData.value;
    scaled_value = jsonData.scaled_value;
    n = values.length;
  }
  found = false;
  middle = 0;
  start = 0;
  end = n - 1;
}

function setup() {
  createCanvas(windowWidth, 600);
  bar_width = width/n;
  frameRate(10);
}

function draw() 
{
  clear()
  for(var i=0;i<n;i++)
  {
      stroke(93, 212, 204);
      fill(93, 212, 204,120);
      rect(bar_width*i,0,bar_width,scaled_values[i]);
  }
  binary(scaled_values)
  textSize(20);
  textAlign(CENTER);
  
  if (found==true)
  {
      stroke(119, 221, 119);
      fill(119, 221, 119,120);
      rect(bar_width*middle,0,bar_width,scaled_values[middle]);
      var txt = "Element "+value+" found";
      text(txt,0,400,width,20)
      noLoop();
  }
  else
  {
    stroke(255, 209, 220);
    fill(255, 209, 220,120);
    rect(bar_width*middle,0,bar_width,scaled_values[middle]);
    for(var i=start;i<=end;i++)
    {
      stroke(218, 68, 83);
      fill(218, 68, 83,120);
      rect(bar_width*i,0,bar_width,scaled_values[i]);
    }
    if(start<=end){
      var txt = "Searching " + value ;
      text(txt, 0, 370, width, 20)
    }
  }
  if (start > end) {
    stroke(256, 0, 0);
    fill(256, 0, 0);
    var txt = "Search Failed";
    text(txt, 0, 370, width, 20);
    noLoop();
  }
}    

function binary(arr)
{
  while (found == false && start <= end) 
  {
      middle = Math.floor((start + end) / 2);
      if (arr[middle] == scaled_value) 
      {
        found=true
        return found;
      } 
      else if (arr[middle] < scaled_value) 
      {
        start = middle + 1;
        return found;
      } 
      else
      {
        end = middle - 1;
        return found;
      }
  }
}
