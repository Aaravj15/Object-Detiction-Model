img = "";
function setup()
{
    canvas = createCanvas(620, 420);
    canvas.center();
}

function preload()
{
    img = loadImage("dog_cat.jpg");
}

function draw()
{
    image(img, 0, 0, 620, 420);
    fill('#ffbf00');
    text("dog", 45, 70);
    noFill();
    stroke('#ffbf00');
    rect(30, 60, 450, 350);
}