/*
 * pixelBeat - Web Etude No. 2
 * The aim of this sketch is to pixellize the video. From this we use the pixel array to look at the brightness
 * of individual arrays - then this is turned into music
 *
 *
 *
 */

//Video File Pointers & Canvas
var video;
var vidDisplay;
var canvas;
var vscale = 40;
var rects = [];

//SAMPLER///
var sampler;
var sampler2;
var sampler3;

//UI ---------------------

var toggle;


//CircularSlider
var slider;
var slider2;
var slider3;
var buttonVid;
var isPlaying = false;

//DIV Elements
var sliderDiv;
var sliderDiv2;
var sliderDiv3;

var sliderRad = 230;
var sliderRad2  = 300;
var sliderRad3 = 370;
var margin = 30;
var orbitWidth = 10;



var notes = ["A.1", "A.2", "A.3", "A.4", "A.5", "A.6",
    "B.1", "B.2", "B.3", "B.4", "B.5", "B.6",
    "C.1", "C.2", "C.3", "C.4", "C.5", "C.6",
    "D.1", "D.2", "D.3", "D.4", "D.5", "D.6"
];


//var synthNotes = ["Bb2", "Db3", "Eb3", "Gb3", "Ab3", "Bb3", "Db4", "Eb4", "Gb4", "Ab4", "Bb4", "Db5", "Eb5", "Gb5", "Ab5", "Bb5"];

function Rectangle(_x, _y, _width, _height, _sample) {
    this.x = _x;
    this.y = _y;
    this.theta = (atan2((_y - 2 * _height), (_x - 3 * _width)) * (180 / PI)) + 180;
    this.isOn = true;
    this.ring1 = true;
    this.ring2 = true;
    this.ring3 = true;
    this.width = _width;
    this.height = _height;
    this.sample = _sample;
    // this.note = _note;
    this.counter = 10;
    this.display = function() {
      //  noFill();
        if (this.ring1) {
            fill(255, 0, 0);
            rect(this.x, this.y, this.width, this.height);
        } else {
            fill(0);
            rect(this.x, this.y, this.width, this.height);
        }

    };
    this.displayTrigger = function() {
        fill(255, 0, 0, 200);
        stroke(255, 0, 0);
        rect(this.x + vscale / 2, this.y + vscale / 2, this.width, this.height);

    };

}

nx.onload = function() {

  nx.colorize("border", "#999999");
  nx.colorize("accent", "#999999");
  //nx.labelColor = "white";

  nx.colorize("fill", "#000000");

  toggle1.colors.accent = "#17BEBB";
  toggle1.val.value = 1;
  toggle1.draw();
  toggle2.colors.accent = "#B0DB43";
    toggle2.val.value = 0;
      toggle2.draw();
  toggle3.colors.accent = "#D62246";
  toggle3.val.value = 0;
  toggle3.draw();

  toggle1.on('*', function(data){

  //  console.log(data.value);
    if(data.value === 1) {
      arcToggle1 = true;
$("#slider").roundSlider("enable");

    } else if(data.value === 0){
      arcToggle1 = false;
$("#slider").roundSlider("disable");
    }
  })
  toggle2.on('*', function(data){

  //  console.log(data.value);
    if(data.value === 1) {
      arcToggle2 = true;
      $("#slider2").roundSlider("enable");

    } else if(data.value === 0){
      arcToggle2 = false;
      $("#slider2").roundSlider("disable");

    }
  })
  toggle3.on('*', function(data){

    // console.log(data.value);
    if(data.value === 1) {
      arcToggle3 = true;
      $("#slider3").roundSlider("enable");

    } else if(data.value === 0){
      arcToggle3 = false;
      $("#slider3").roundSlider("disable");

    }
  })


}



//TONE.JS EFFECTS
var pingPong = new Tone.PingPongDelay("4n", 0.3).toMaster();
pingPong.wet.value = 0.1;




//PRELOAD - SAMPLERS
function preload() {

    //ACOUSTIC SAMPLER
    sampler = new Tone.Sampler({
        A: {
            1: "./audio/piano/piano1.wav",
            2: "./audio/piano/piano2.wav",
            3: "./audio/piano/piano3.wav",
            4: "./audio/piano/piano4.wav",
            5: "./audio/piano/piano5.wav",
            6: "./audio/piano/piano6.wav",



        },

        B: {
            1: "./audio/cello/cello1.wav",
            2: "./audio/cello/cello2.wav",
            3: "./audio/cello/cello3.wav",
            4: "./audio/cello/cello4.wav",
            5: "./audio/cello/cello5.wav",
            6: "./audio/cello/cello6.wav",



        },
        C: {
            1: "./audio/hang/hang1.wav",
            2: "./audio/hang/hang2.wav",
            3: "./audio/hang/hang3.wav",
            4: "./audio/hang/hang4.wav",
            5: "./audio/hang/hang5.wav",
            6: "./audio/hang/hang6.wav",



        },
        D: {
            1: "./audio/violin/violin1.wav",
            2: "./audio/violin/violin2.wav",
            3: "./audio/violin/violin3.wav",
            4: "./audio/violin/violin4.wav",
            5: "./audio/violin/violin5.wav",
            6: "./audio/violin/violin6.wav",



        }
    }).connect(pingPong);

    //ELECTRONIC SAMPLER
    sampler2 = new Tone.Sampler({
        A: {
            1: "./audio/beatz/beat_1.wav",
            2: "./audio/beatz/beat_2.wav",
            3: "./audio/beatz/beat_3.wav",
            4: "./audio/beatz/beat_4.wav",
            5: "./audio/beatz/beat_5.wav",
            6: "./audio/beatz/beat_6.wav",



        },
        B: {
            1: "./audio/synth/synth_1.wav",
            2: "./audio/synth/synth_2.wav",
            3: "./audio/synth/synth_3.wav",
            4: "./audio/synth/synth_4.wav",
            5: "./audio/synth/synth_5.wav",
            6: "./audio/synth/synth_6.wav",



        },
        // D: {
        //   1: "./audio/synthBass/bass_1.wav",
        //   2: "./audio/synthBass/bass_2.wav",
        //   3: "./audio/synthBass/bass_3.wav",
        //   4: "./audio/synthBass/bass_4.wav",
        //   5: "./audio/synthBass/bass_5.wav",
        //   6: "./audio/synthBass/bass_6.wav",




        C: {
            1: "./audio/space/space1.wav",
            2: "./audio/space/space2.wav",
            3: "./audio/space/space3.wav",
            4: "./audio/space/space4.wav",
            5: "./audio/space/space5.wav",
            6: "./audio/space/space6.wav",



        },
        D: {
            1: "./audio/choirElec/choir_1.wav",
            2: "./audio/choirElec/choir_2.wav",
            3: "./audio/choirElec/choir_3.wav",
            4: "./audio/choirElec/choir_4.wav",
            5: "./audio/choirElec/choir_5.wav",
            6: "./audio/choirElec/choir_6.wav",



        }
    }).connect(pingPong);


    // sampler.reverse = true;
    sampler2.reverse = true;

    // GUITAR SAMPLER
    sampler3 = new Tone.Sampler({
        // A: {
        //   1: "./audio/drum/drum1.wav",
        //   2: "./audio/drum/drum2.wav",
        //   3: "./audio/drum/drum3.wav",
        //   4: "./audio/drum/drum4.wav",
        //   5: "./audio/drum/drum5.wav",
        //   6: "./audio/drum/drum6.wav",



        // },
        D: {
            1: "./audio/guitar1/guitar1.wav",
            2: "./audio/guitar1/guitar2.wav",
            3: "./audio/guitar1/guitar3.wav",
            4: "./audio/guitar1/guitar4.wav",
            5: "./audio/guitar1/guitar5.wav",
            6: "./audio/guitar1/guitar6.wav",



        },
        B: {
            1: "./audio/guitar2/guitar1.wav",
            2: "./audio/guitar2/guitar2.wav",
            3: "./audio/guitar2/guitar3.wav",
            4: "./audio/guitar2/guitar4.wav",
            5: "./audio/guitar2/guitar5.wav",
            6: "./audio/guitar2/guitar6.wav",



        },
        C: {
            1: "./audio/Bass/bass1.wav",
            2: "./audio/Bass/bass2.wav",
            3: "./audio/Bass/bass3.wav",
            4: "./audio/Bass/bass4.wav",
            5: "./audio/Bass/bass5.wav",
            6: "./audio/Bass/bass6.wav",



        },
        A: {
            1: "./audio/Strat/strat1.wav",
            2: "./audio/Strat/strat2.wav",
            3: "./audio/Strat/strat3.wav",
            4: "./audio/Strat/strat4.wav",
            5: "./audio/Strat/strat5.wav",
            6: "./audio/Strat/strat6.wav",



        }
        // C: {
        //   1: "./audio/space/space1.wav",
        //   2: "./audio/space/space2.wav",
        //   3: "./audio/space/space3.wav",
        //   4: "./audio/space/space4.wav",
        //   5: "./audio/space/space5.wav",
        //   6: "./audio/space/space6.wav",



        // }
    }).connect(pingPong);

    //TURN DOWN THE VOLUME
    sampler.volume.value = -10;
    sampler2.volume.value = -20;
    sampler3.volume.value = -16;

    sampler.envelope.attack = 0.8;
    sampler2.envelope.attack = 0.8;
    sampler3.envelope.attack = 0.8;
    sampler.envelope.release = 0.5;
    sampler2.envelope.release = 0.5;
    sampler3.envelope.release = 0.5;
}

// function init() {
//   var elt = document.getElementById('loader-wrapper');
//   elt.style.display = 'none';
// }
// window.addEventListener('load', init);

function setup() {
    canvas = createCanvas(480, 320);
    canvas.position(windowWidth / 2 - canvas.width / 2, windowHeight/2-canvas.width/2);

    var toggle = document.getElementById('nexusControls');
    toggle.style.display = 'block';


        //SLIDER DIV 1
    sliderDiv = createDiv("");
    sliderDiv.id("slider");
    sliderDiv.class("rslider");
    sliderDiv.position(windowWidth / 2 - sliderRad, windowHeight / 2 - sliderRad);

    slider = $('#slider').roundSlider({
      radius: sliderRad,
      width: orbitWidth,
      handleSize: "+20",
      sliderType: "range",
      max: "360",
      value: "0,180",
      showTooltip: "false",
      change: "onValueChange1"
    });

//SLIDER DIV 2
sliderDiv2 = createDiv("");
sliderDiv2.id("slider2");
sliderDiv2.class("rslider");
sliderDiv2.position(windowWidth / 2 - sliderRad2, windowHeight / 2 - sliderRad2);

slider2 = $('#slider2').roundSlider({
  radius: sliderRad2,
  width: orbitWidth,
  handleSize: "+20",
  sliderType: "range",
  max: "362",
  //startAngle: "90",
  value: "180, 270",
  showTooltip: "false",
  change: "onValueChange2"
});
$("#slider2").roundSlider("disable");


//Slider Div 3
sliderDiv3 = createDiv("");
sliderDiv3.id("slider3");
sliderDiv3.class("rslider");
sliderDiv3.position(windowWidth / 2 - sliderRad3, windowHeight / 2 - sliderRad3);

slider3 = $('#slider3').roundSlider({
  radius: sliderRad3,
  width: orbitWidth,
  handleSize: "+20",
  sliderType: "range",
  max: "360",
  value: "270,360",
  showTooltip: "false",
  change: "onValueChange3"
});
$("#slider3").roundSlider("disable");


    // specify multiple formats for different browsers
    // video = createVideo(['assets/subtractedFootageForWeb.mp4']);
    // vidDisplay = createVideo(['assets/FullWebFootage.mp4']);
    video = createVideo(['assets/cloud25forweb.mp4']);
    vidDisplay = createVideo(['assets/cloud25.mp4']);
    var elt = document.getElementById('loader-wrapper');
    elt.style.display = 'none';
    vidDisplay.id("vidDisplay");
    video.loop();
    vidDisplay.loop();
  //  vidDisplay.hide();
    video.size(480 / vscale, 320 / vscale);
    vidDisplay.size(640, 400);
    vidDisplay.position(windowWidth / 2 - vidDisplay.width / 2, windowHeight / 2 - vidDisplay.height / 2);


    //video.position(0,0);
    video.hide();
    pixelDensity(1);
    noStroke();
    fill(0);
    frameRate(1);

    for (var y = 0; y < video.height; y++) {
        for (var x = 0; x < video.width; x++) {
            var index = (x + (y * video.width));
            //console.log(index);
            rects[index] = new Rectangle(x * vscale*2, y * vscale*2, vscale*2, vscale*2, notes[index % 24]);
            //rects[index].display();
            //print("Theta = " + rects[index].theta);
        }
    }
}

function windowResized() {
    //resizeCanvas(windowWidth/4, windowHeight/4);
    // canvas.position(windowWidth / 2 - vidDisplay.width/2, windowHeight / 4);
    //vidDisplay.position(windowWidth / 4+vidDisplay.width/2, windowHeight / 4);


}

function draw() {
    //background(255);
    video.loadPixels();
    //updateAngles();

    //loadPixels();
    for (var y = 0; y < video.height; y++) {
        for (var x = 0; x < video.width; x++) {
            var index = (x + (y * video.width)) * 4;
            var r = video.pixels[index + 0];
            var g = video.pixels[index + 1];
            var b = video.pixels[index + 2];

            var bright = (r + g + b) / 3;


              //  rects[index/4].display();

            if (bright > 200 && rects[index / 4].ring1 === true && arcToggle1) {

                sampler.triggerAttack(rects[index / 4].sample);
              //  slider.animate({ backgroundColor: '#FF69B4' }, 1000);





            }
            if (bright > 200 && rects[index / 4].ring2 === true && arcToggle2) {

                sampler2.triggerAttack(rects[index / 4].sample);


            }
            if (bright > 200 && rects[index / 4].ring3 === true && arcToggle3) {

                sampler3.triggerAttack(rects[index / 4].sample);


            }




          //  rects[index/4].display();

        }
    }


}

function videoPlay() {
    if (!isPlaying) {
        video.loop();
        isPlaying = true;
        buttonVid.label = "Stop";

    } else {
        video.pause();
        isPlaying = false;
        buttonVid.label = "Play";

    }


}

function onValueChange1(e){


  var array = e.value.split(',');
  var max = parseInt(array[1]);
  var min = parseInt(array[0]);
  points[0] = min;
  points[1] = max;

//  console.log("max = " + max + " min = " + min);

  for (var y = 0; y < 8; y++) {
    for (var x = 0; x < 12; x++) {
      var index = (x + (y * 12));
      if(rects[index].theta <= max && rects[index].theta >= min){
        rects[index].ring1 = true;
      } else {
        rects[index].ring1 = false;
      }
    }
  }


}
function onValueChange2(e){


  var array = e.value.split(',');
  var max = parseInt(array[1]);
  var min = parseInt(array[0]);
  points[2] = min;
  points[3] = max;

//  console.log("max = " + max + " min = " + min);

  for (var y = 0; y < 8; y++) {
    for (var x = 0; x < 12; x++) {
      var index = (x + (y * 12));
      if(rects[index].theta <= max && rects[index].theta >= min){
        rects[index].ring2 = true;
      } else {
        rects[index].ring2 = false;
      }
    }
  }


}
function onValueChange3(e){


  var array = e.value.split(',');
  var max = parseInt(array[1]);
  var min = parseInt(array[0]);
  points[4] = min;
  points[5] = max;

//  console.log("max = " + max + " min = " + min);

  for (var y = 0; y < 8; y++) {
    for (var x = 0; x < 12; x++) {
      var index = (x + (y * 12));
      if(rects[index].theta <= max && rects[index].theta >= min){
        rects[index].ring3 = true;
      } else {
        rects[index].ring3 = false;
      }
    }
  }


}
function changeColor(id){
var targetDiv = document.getElementById(id).getElementsByClassName("slider rs-range-color");
targetDiv.style.backgroundColor = 'white';
}
