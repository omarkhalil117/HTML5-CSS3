// Question [2]


// text to change
let textToChange = document.getElementById("textToChange");
// ranges 
let RedClr = document.getElementById("RedClr");
let GreenClr = document.getElementById("GreenClr");
let BlueClr = document.getElementById("BlueClr");

// change color function
function ChangeColor()
{
    const red = parseInt(RedClr.value);
    const green = parseInt(GreenClr.value);
    const blue = parseInt(BlueClr.value);

    textToChange.style.color=`rgb(${red},${green},${blue})`
}

// Red
RedClr.addEventListener("input",ChangeColor)

// Green
GreenClr.addEventListener("input",ChangeColor)

// Blue
BlueClr.addEventListener("input",ChangeColor)

/////////////////////////////////////////////////////////////////////

// Qustion [3]

// select Elements
let audio = document.getElementsByTagName('audio')[0];
let btnPlay = document.getElementById('play');
let btnPause = document.getElementById('pause');
let btnStop = document.getElementById('stop');
let btnMute = document.getElementById('mute');
let volumeRange = document.getElementById('volume');
let durationRange = document.getElementById('duration');
let speed = document.getElementById('rate');

// play button
btnPlay.addEventListener('click',function(){
    audio.play();
})

// pause button
btnPause.addEventListener('click',function(){
    audio.pause();
})

// stop button
btnStop.addEventListener('click',function(){
    audio.load();
    audio.pause();
})

// mute button
btnMute.addEventListener('click',function(){
    audio.muted=!audio.muted;
})

// volume
volumeRange.addEventListener('input',function(){
    audio.volume=volumeRange.value;

})

// get duration of audio when loading
window.addEventListener('load',function(){
    durationRange.max=audio.duration;
})

// set the duration of audio
durationRange.addEventListener('input',function(){
    audio.currentTime=durationRange.value;
})

// set the speed of the audio
speed.addEventListener('input',function(){
    audio.playbackRate=speed.value;
})

// set duration range input with the duration of the audio
audio.addEventListener('timeupdate',function(){
    durationRange.value = audio.currentTime;
})


/////////////////////////////////////////////////////////////////////////

// Question [4]

// numbers
let firstNum = document.getElementById("numInput");
let SecondNum = document.getElementById("rangeInput");

// result
let result = document.getElementById("result");

// update value of result
function addResult()
{
    let fNum = parseInt(firstNum.value);
    let sNum = parseInt(SecondNum.value);

    let res = fNum + sNum ;

    result.innerHTML=res;

    console.log(SecondNum.value)
    console.log(firstNum.value)
}

// call addResult on input
firstNum.addEventListener("input", addResult);
SecondNum.addEventListener("input", addResult);




