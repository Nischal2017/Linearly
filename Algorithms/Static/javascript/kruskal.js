var points=[];
var pt,frame=0;
var adj;
var parent;
var drawlines=false;
var circleCenterX, circleCenterY;
var i;
var ne=1,n,cost=0;
var start=[],end=[];

function setup() {
  canvas = createCanvas((windowWidth*2)/3, windowHeight-100);
  canvas.parent('sketch-holder')
  // canvas.style('border-style: solid; border-color: coral; border-size:1px')
}

function doubleClicked(){
  if(drawlines==false){
    for(var i=0;i<points.length;i++){
      circleCenterX = points[i].x
      circleCenterY = points[i].y
      if(dist(mouseX, mouseY,circleCenterX,circleCenterY)<15){
        return;
      }
    }
    pt = createVector(mouseX,mouseY);
    points.push(pt);
    loop();
  }
}

function draw() {
  n = points.length;
  if(drawlines == false){
    var button = createButton('Start');
    button.mousePressed(start_lines);
    button.position(width, height-10);
    for(i=0;i<points.length;i++){
      fill(218, 68, 83, 220);
      circle(points[i].x,points[i].y,15);
    }
    noLoop();
  }else{
    clear();
    frameRate(1);
    var a=0,b=0,u=0,v=0;
    if(ne<n){
      var minm = 999999;
      for(i=0;i<points.length;i++){
        for(j=0;j<points.length;j++){  
          stroke(93, 212, 204, 200);
          strokeWeight(1);
          line(points[i].x,points[i].y,points[j].x,points[j].y);  
          frame+=1
          if(adj[i][j]<minm){
            minm = adj[i][j];
            a=u=i;
            b=v=j;
          }
        }
      }
      u = find(u);
      v = find(v);
      if(u!=v){
        union(u,v);
        start.push(a);
        end.push(b);
        cost = round(cost + minm); 
        ne++;
      }
      fill(218, 68, 83, 220);
      noStroke();
      textSize(25);
      textAlign(CENTER)
      text("Comparisons: "+frame+"  Cost: "+cost,200 ,20);
      for(i=0;i<start.length;i++){
        stroke(93, 212, 204, 200);
        strokeWeight(10);
        line(points[start[i]].x,points[start[i]].y,points[end[i]].x,points[end[i]].y); 
      }
      noStroke();
      noFill();
      adj[a][b] = adj[b][a] = 999999;
      for(i=0;i<points.length;i++){
        fill(218, 68, 83, 220);
        circle(points[i].x,points[i].y,15);
      }
      if(ne==n){
        noLoop();
      }
    }
  }
}

function start_lines(){
  drawlines=true;
  compute_adj();
  loop();
}

function compute_adj(){
  n =points.length;
  adj = new Array(n);
  parent = new Array(n);
  for(i=0;i<n;i++){
    adj[i] = new Array(n);
    for(j=0;j<n;j++){
      adj[i][j]=round(dist(points[i].x,points[i].y,points[j].x,points[j].y));
      if(adj[i][j]==0){
        adj[i][j]=999999;
      }
    }
    parent[i]=-1;
  }
}

function find(ptr){
  while(parent[ptr]>-1){
    ptr = parent[ptr];
  }
  return ptr;
}

function union(ptr1,ptr2){
  parent[ptr2]=ptr1;
}