var inputdone=false;
var points=[];
var u=[],v=[];
var cost=0;
var visited;
var i,j,adj,counter=1,edges;
var src=0,dst=0;
function setup() {
    canvas = createCanvas((windowWidth*2)/3, windowHeight-100);
    canvas.parent('sketch-holder')
    frameRate(1);
}

function doubleClicked(){
  if(!inputdone){
    var ptr = createVector(mouseX,mouseY);
    points.push(ptr);
    loop();
  }
}
function draw() {
  if(inputdone==false){
    var sbt = createButton('Submit');
    sbt.position(width,height-20);
    sbt.mousePressed(start_algo);
    for(i=0;i<points.length;i++){
      fill(218, 68, 83, 220);
      noStroke()
      circle(points[i].x,points[i].y,15);
    }
    noLoop();
  }else{
    clear();
    var n = points.length;
    visited[src] = 1
    if(counter<n){
      var m = 999999;
      for(i=0;i<n;i++){
        for(j=0;j<n;j++){
          stroke(93, 212, 204, 200);
          strokeWeight(0.1);
          line(points[i].x,points[i].y,points[j].x,points[j].y);
          if(visited[i]==1 && visited[j]==0){
            if(adj[i][j]<m){
                m = adj[i][j];
                src = i;
                dst = j;
            }
          }
        }
      }
      cost+=m
      u.push(src)
      v.push(dst)
      visited[dst]=1
      for(i=0;i<u.length;i++){
        stroke(93, 212, 204, 200);
        strokeWeight(5);
        line(points[u[i]].x,points[u[i]].y,points[v[i]].x,points[v[i]].y);
      }
      counter+=1;
    }
    for(i=0;i<points.length;i++){
        fill(218, 68, 83, 220);
        noStroke()
        circle(points[i].x,points[i].y,15);
    }
    textSize(25)
    textAlign(CENTER)
    text("Cost: "+cost,200 ,20);
    if(counter==n)
      noLoop();
  }
}
function create_adj(){
  var n = points.length;
  visited = new Array(n);
  adj = new Array(n)
  for(i=0;i<n;i++){
    adj[i]=new Array(n);
    visited[i] = 0
    for(j=0;j<n;j++){
      adj[i][j] = round(dist(points[i].x,points[i].y,points[j].x,points[j].y));
      if(adj[i][j]==0){
        adj[i][j]=999999
      }
    }
  }
  
}
function start_algo(){
  inputdone=true;
  create_adj();
  loop();
}