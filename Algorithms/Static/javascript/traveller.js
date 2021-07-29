function setup() {
    var canvas = createCanvas((windowWidth*2)/3, windowHeight-100);
    canvas.parent('sketch-holder')
    canvas.style('display', 'block');
    vert = [];
    sz = 40;
    for (var i = 0; i < sz; i++) {
      v = createVector(random(40, width - 40), random(40, height - 40));
      vert.push(v);
    }
    k = 0;
    frame = 0;
}
async function abc(){
    await sleep(100000);
} 
function draw() {
    clear()
    frameRate(10);

    beginShape();
    for (var i = 0; i < sz; i++) {
        vertex(vert[i].x, vert[i].y);
        fill(218, 68, 83, 220);
        noStroke();
        ellipse(vert[i].x, vert[i].y, 8, 8);
    }
    noFill();
    stroke(93, 212, 204,200);
    strokeWeight(2);
    endShape(CLOSE);

    buf = frame;
    buf2 = k; 
    top:
    {
        for (var i = k; i < sz; i++) {
        for (var j = i + 2; j < sz; j++) {
            d1 = vert[i].dist(vert[(i + 1) % sz]) + vert[j].dist(vert[(j + 1) % sz]);
            d2 = vert[i].dist(vert[j]) + vert[(i + 1) % sz].dist(vert[(j + 1) % sz]);
            if (d2 < d1) {          
            m = vert.slice(Math.min((i + 1) % sz, (j + 1) % sz), Math.max((i + 1) % sz, (j + 1) % sz)).reverse();
            l = vert.slice(0, Math.min((i + 1) % sz, (j + 1) % sz));
            r = vert.slice(Math.max((i + 1) % sz, (j + 1) % sz), sz);
            vert = l.concat(m).concat(r);
            frame++;
            k = i; 
            break top;
            }
        }
        }
        k = 0; 
    }

    if (frame == buf && buf2 == 0) {
        noLoop();
    }

    var pathlength = 0;
    for (var i = 0; i < sz; i++) {
        var d1 = vert[i].dist(vert[(i + 1) % sz]);
        pathlength+=d1;
    }

    textSize(25);
    text(frame, 20, 20);
    text(pathlength, 160, 20);

}
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}