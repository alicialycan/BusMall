'use strict';
var allImages = [];

if (localStorage.getItem('storeData')) {
  allImages = [];
  allImages = JSON.parse(localStorage.getItem('storeData'));
} else {
  makeImgObj();
};

var imgContain = document.getElementById('imgContain');
var info = document.getElementById('info');
var results = document.getElementById('myList');
var startButton = document.getElementById('startButton');
var left = document.getElementById('left');
var center = document.getElementById('center');
var right = document.getElementById('right');
var clearLS = document.getElementById('clearStorage');
var leftImg;
var centerImg;
var rightImg;
var counter = 0;
var votes = [];
var imgIds = [];
var previousNumbers = [];

//constructor function for making image objects
function MakeImages (imgname, fname) {
  this.imgname = imgname;
  this.fname = fname;
  this.shown = 0;
  this.clicked = 0;
  allImages.push(this); //Push newly constructed object to productCatalog array
}

//call constructors
function makeImgObj(imgname, fname) {
  new MakeImages('R2D2 Bag', 'images/bag.jpg');
  new MakeImages('Banana Cutter', 'images/banana.jpg');
  new MakeImages('Bathroom Holder', 'images/bathroom.jpg');
  new MakeImages('Toeless Boots', 'images/boots.jpg');
  new MakeImages('Breakfast Maker', 'images/breakfast.jpg');
  new MakeImages('Meatball Bubblegum', 'images/bubblegum.jpg');
  new MakeImages('Convex Chair', 'images/chair.jpg');
  new MakeImages('Cthulhu', 'images/cthulhu.jpg');
  new MakeImages('Duck Beak', 'images/dog-duck.jpg');
  new MakeImages('Dragon Meat', 'images/dragon.jpg');
  new MakeImages('Cutlery Pens', 'images/pen.jpg');
  new MakeImages('Pet Sweep', 'images/pet-sweep.jpg');
  new MakeImages('Pizza Scissors', 'images/scissors.jpg');
  new MakeImages('Shark Sleeping Bag', 'images/shark.jpg');
  new MakeImages('Baby Sweeper', 'images/sweep.png');
  new MakeImages('Tauntaun Sleeping Bag', 'images/tauntaun.jpg');
  new MakeImages('Unicorn Meat', 'images/unicorn.jpg');
  new MakeImages('Tenticle USB', 'images/usb.gif');
  new MakeImages('Water Can', 'images/water-can.jpg');
  new MakeImages('Wine Glass', 'images/wine-glass.jpg');
};

function storeClicks() {
  console.log('click storage');
  var productStringified = JSON.stringify(allImages);
  localStorage.getItem('storeData', productStringified);
}
//pick 3 numbers at a time function
function pick3() {
  //validates unique numbers, then writes img src path to DOM
  leftImg = Math.floor(Math.random() * allImages.length);
  while (previousNumbers.includes(leftImg)) {
    leftImg = Math.floor(Math.random() * allImages.length);
  }
  centerImg = Math.floor(Math.random() * allImages.length);
  while (previousNumbers.includes(centerImg) || leftImg === centerImg) {
    centerImg = Math.floor(Math.random() * allImages.length);
  }
  rightImg = Math.floor(Math.random() * allImages.length);
  while (previousNumbers.includes(rightImg) || leftImg === rightImg || centerImg === rightImg) {
    rightImg = Math.floor(Math.random() * allImages.length);
  }
  left.src = allImages[leftImg].fname;
  center.src = allImages[centerImg].fname;
  right.src = allImages[rightImg].fname;
  allImages[leftImg].shown += 1;
  allImages[centerImg].shown += 1;
  allImages[rightImg].shown += 1;
}
pick3();

//This function is the event handler for an image click
function handleImgClick(event) {
  if (counter === 25) {
    imgContain.removeEventListener('click', handleImgClick);
    updateChartArrays();
    drawChart();
    var allImagesString = JSON.stringify(allImages);
    localStorage.storeData = allImagesString;
    return;
  }
  if (event.target.id === 'left') {
    allImages[leftImg].clicked += 1;
    console.log(allImages[leftImg].imgname + ' ' + allImages[leftImg].clicked);
    counter += 1;
    pick3();
  }
  if (event.target.id === 'center') {
    allImages[centerImg].clicked += 1;
    console.log(allImages[centerImg].imgname + ' ' + allImages[centerImg].clicked);
    counter += 1;
    pick3();
  }
  if (event.target.id === 'right') {
    allImages[rightImg].clicked += 1;
    console.log(allImages[rightImg].imgname + ' ' + allImages[rightImg].clicked);
    counter += 1;
    pick3();
  }
  if (event.target.id === 'imgContain') {
    alert('Please click on an image!');
    pick3();
  }
};

startButton.addEventListener('click', handleImgClick);

// clearLS.addEventListener('click', handleImgClick() {
//   console.log('localStorage is cleared');
//   localStorage.clear();
// });

//Chart function
function hideChart() {
  document.getElementById('barChart').hidden = true;
}

function updateChartArrays() {
  for (var i = 0; i < allImages.length; i++) {
    imgIds[i] = allImages[i].imgname;
    votes[i] = allImages[i].clicked;
  }
}

var data = {
  labels: imgIds,
  datasets: [
    {
      label: 'Your Choices',
      data: votes,
      backgroundColor: [
        'rgba(230,25,75)',
        'rgba(60,180,75)',
        'rgba(255,225,25)',
        'rgba(0,130,200)',
        'rgba(245,130,48)',
        'rgba(145,30,180)',
        'rgba(70,240,240)',
        'rgba(240,50,230)',
        'rgba(210,245,60)',
        'rgba(250,190,190)',
        'rgba(0,128,128)',
        'rgba(230,190,255)',
        'rgba(170,110,40)',
        'rgba(255,250, 200)',
        'rgba(128,0,0)',
        'rgba(170,255,195)',
        'rgba(128,128,0)',
        'rgba(255,215,180)',
        'rgba(0,0,128)',
        'rgba(128,128,128)',
        'rgba(255,255,255)',
        'rgba(0,0,0)',
      ]
    }]
};

function drawChart() {
  var ctx = document.getElementById('barChart').getContext('2d');

  var barChart = new Chart(ctx,{
    type: 'bar',
    width: 300,
    data: data,
    options: {
      responsive: false,
      scales: {
        yAxes: [{
          xAxes: [{
            ticks: {
              stepSize: 1,
              beginAtZero: true,
            }
          }]
        }]
      }
    }
  });
}
//event listener for an image clicked
imgContain.addEventListener('click', handleImgClick);
pick3();
