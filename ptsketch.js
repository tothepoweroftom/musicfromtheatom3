//Glow color #F2DD6E
//GLOBAL VARIABLES
//0,1 Ring 1 - 2,3 Ring 2 - 4,5 Ring 3
var points = [];
var spaceSize;
var space = new CanvasSpace("pt").setup( {bgcolor: "#000000"} );

var helpToggle = true;

var arcToggle1 = true;
var arcToggle2 = false;
var arcToggle3 = false;

//
// //var ringTrigger = false;
//
//
//
// //// 1. Define Space and Form
// var colors = {
//   a1: "#ff2d5d", a2: "#42dc8e", a3: "#2e43eb", a4: "#000000",
//   b1: "#96bfed", b2: "#f5ead6", b3: "#f1f3f7", b4: "#e2e6ef"
// };
//

//a=range, b=path, c= handle, d= greyout
var arcColors = {
  a1: '#17BEBB', a2: '#B0DB43', a3: '#D62246',
  b1: '#1B3030', b2: '#2F3A12', b3: '#2D070F',
  c1: '#17BEBB', c2: '#B0DB43', c3: '#D62246',
  d1: '#303040', d2: '#304030', d3: '#403030'
};
var form = new Form( space );

spaceSize = space.size.$divide(2);

//// 2. Create Elements
// var mouse = new Circle( space.size.$divide(2) ).setRadius(  250 );
// var mouse2 = new Circle( space.size.$divide(2) ).setRadius( 250 );
// var mouse3 = new Circle( space.size.$divide(2) ).setRadius( 250 );
//
// var circle = new Circle( space.size.$divide(2) ).setRadius( 200 );
// var circle2 = new Circle( space.size.$divide(2) ).setRadius( 250 );
// var circle3 = new Circle( space.size.$divide(2) ).setRadius( 300 );
//
//
// var origin = new Point(space.size.$divide(2) );
//
// var arc1 = new Arc(arcColors.a1);
// var arc2 = new Arc(arcColors.a2);
// var arc3 = new Arc(arcColors.a3);

//// 2. Create Elements
// var mouse = new Circle( space.size.$divide(2) ).setRadius(200);
// var pts = [];
// for (var i=0; i<500; i++) {
//   pts.push( space.size.$multiply( Math.random(), Math.random()) );
// }
//
//
// form.stroke( false );
// var fonts = ["Helvetica, sans-serif", "Georgia", "monospace"];
// var scaleFont = 20;
//
//     //// 3. Visualize, Animate, Interact
// space.add({
//   animate: function(time, fps, context) {
//
//     // change mouse radius
//     mouse.setRadius( mouse.y/space.size.y * 200 + 70 );
//     form.stroke(false);
//
//     // go through each point
//     for (var i=0; i<pts.length; i++) {
//
//       var size = 0.5;
//       var _p = pts[i].clone();
//
//       // if intersecting with mouse circle, change its size and scale from mouse anchor point
//       if (mouse.intersectPoint( pts[i]) ) {
//         var dist =  (mouse.radius - pts[i].distance( mouse )) / mouse.radius;
//         size = dist * 20;
//         form.fill( colors["a"+(i%4+1)] );
//         _p.scale2D( 1+dist, 1+dist, mouse );
//
//       } else {
//         form.fill( "#fff" );
//       }
//
//       // draw points
//       form.point( _p, size, true );
//     }
//   },
//   onMouseAction: function(type, x, y, evt) {
//     if (type=="move") {
//       mouse.set(x,y);
//     }
//   }
// });
// //     // if(help){
//
// // // 4. Start playing
// space.bindMouse();
 space.play();
