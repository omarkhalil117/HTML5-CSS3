const bicycle = document.getElementById('bicycle');
const container = bicycle.parentElement;

let left = 0;
let sign = 1;

let ticking = false;

bicycle.style.left = `${left}px`;
bicycle.style.transform = `scaleX(${sign})`;

function translate() {
  // control speed
  left += sign * 7;
    
  if (left + bicycle.offsetWidth >= container.clientWidth)
  {
    left = container.clientWidth - bicycle.offsetWidth;
    sign *= -1;
  } 
  else if (left <= 0) 
  {
    left = 0;
    sign *= -1;
  }
    
  if (ticking) 
  {
    return;
  }
  

  requestAnimationFrame(() => 
  { 
    bicycle.style.left = `${left}px`;
    bicycle.style.transform = `scaleX(${sign})`;
    
    ticking = false;
  });
  
  ticking = true;
}

setInterval(translate, 10);


/////////////////////////////////////////////////////////////////////////////

let pic = document.getElementById("filteredPhoto");


function grayScaleEvent()
{
    pic.style.filter = "grayscale(100%)";
}

function saturateEvent()
{
    pic.style.filter = "saturate(50%)";
}

function invertEvent()
{
    pic.style.filter = "invert(100%)";
}

function sepiaEvent()
{
    pic.style.filter = "sepia(100%)";
}

function opacityEvent()
{
    pic.style.filter = "opacity(50%)";
}

