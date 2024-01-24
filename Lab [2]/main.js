// Question [1]

let choosedColor = document.getElementById("canvasClr");
let c =document.getElementsByTagName('canvas')[0];
let ctx =c.getContext('2d');

function draw100(clr)
{
  for(let i=0 ; i<100 ; i++)
  {
    ctx.strokeStyle = clr;
    let w = Math.floor(Math.random()*c.width);
    let h = Math.floor(Math.random()*c.height);
    ctx.beginPath();
    ctx.arc(w,h,10,0,Math.PI*2);
    ctx.stroke();
  }
}

choosedColor.addEventListener('input' , function(){
  let color = choosedColor.value; 
  ctx.clearRect(0, 0, c.width, c.height); 
  draw100(color);
});

// Question [2]
////////////////////////////////////////////////////////////////////
let btnMap = document.getElementById("getMap");
let btnInfo = document.getElementById("getInfo");
let InfoDiv = document.getElementById("Info");
let longtit = document.getElementsByTagName("span")[0];
let latit = document.getElementsByTagName("span")[1];
let timestamp = document.getElementsByTagName("span")[2];
let err = document.getElementById("error");


btnMap.addEventListener("click", function () {
  // geolocation supported
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(sucess, error);
  }
  // geolocation not supported
  else {
    alert("update your browser");
  }
});

btnInfo.addEventListener('click' , function(){
  if(navigator.geolocation)
  {
     navigator.geolocation.getCurrentPosition(displayData,error);
  }
  else
  {
   console.log("Update your browser.");
  }
});

// if user permits to show location
function sucess(obj) {
  let lat = obj.coords.latitude;
  let lon = obj.coords.longitude;
  initMap(lat, lon);
}

// display data
function displayData(obj) {
  InfoDiv.style.display= "block";
  let lat = obj.coords.latitude;
  let lon = obj.coords.longitude;
  let time = obj.timestamp;
  
  longtit.innerHTML = lon;
  latit.innerHTML = lat;
  timestamp.innerHTML = Date(time);

}

// if user refuse to give permssions
function error(e) {
  switch (e.code) {
    case 1:
      err.innerHTML="you have to give me access to show your location";
      break;
  }
}

// construct map
let map;

async function initMap(x, y) {
  const { Map } = await google.maps.importLibrary("maps");

  map = new Map(document.getElementById("map"), {
    center: { lat: x, lng: y },
    zoom: 15,
  });
}




