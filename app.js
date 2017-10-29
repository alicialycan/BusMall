'use strict';

//variables to store the objects
var results = document.getElementById('results'); //Access results for listEl
var imagesDisplayed = document.getElementById('images_displayed'); //Access images displayed for listEl
var imgLeft = document.getElementById('left');
var imgCenter = document.getElementById('center');
var imgRight = document.getElementById('right');
var imgVote = 0;
var productCatalog = [];
var previousNumbers = []; //stores previous randomly generated numbers

//make an object
var Product = function(image, filePath) {
  this.image = image;
  this.filePath = filePath;
  this.totalDisplayed = 0; //Set total images displayed to zero
  this.totalClicks = 0; //Set total image clicks to zero
  productCatalog.push(this); //Push newly constructed object to productCatalog array
};

//New image instances - use constructor function
new Product('Bag', 'images/bag.jpg');
new Product('Banana', 'images/banana.jpg');
new Product('Bathroom', 'images/bathroom.jpg');
new Product('Boots', 'images/boots.jpg');
new Product('Breakfast', 'images/breakfast.jpg');
new Product('Bubble Gum', 'images/bubblegum.jpg');
new Product('Chair', 'images/chair.jpg');
new Product('Cthulhu', 'images/cthulhu.jpg');
new Product('Dog Duck', 'images/dog-duck.jpg');
new Product('Dragon', 'images/dragon.jpg');
new Product('Pen', 'images/pen.jpg');
new Product('Pet Sweep', 'images/pet-sweep.jpg');
new Product('Scissors', 'images/scissors.jpg');
new Product('Shark', 'images/shark.jpg');
new Product('Sweep', 'images/sweep.png');
new Product('Tauntaun', 'images/tauntaun.jpg');
new Product('Unicorn', 'images/unicorn.jpg');
new Product('USB', 'images/usb.gif');
new Product('Water Can', 'images/water-can.jpg');
new Product('Wine Glass', 'images/wine-glass.jpg');

var indexOne;
var indexTwo;
var indexThree;

function rando() {
  return Math.floor(Math.random() * productCatalog.length);
}

//Randomly display one image for each image index
function randomImages() {
  indexOne = rando();
  while (indexOne === indexTwo || indexOne === indexThree || previousNumbers.includes(indexOne)) {
    indexOne = rando();
  }
  indexTwo = rando();
  while (indexTwo === indexOne || indexTwo === indexThree || previousNumbers.includes(indexTwo)) {
    indexTwo = rando();
  }
  indexThree = rando();
  while (indexThree === indexTwo || indexThree === indexOne || previousNumbers.includes(indexThree)) {
    indexThree = rando();
  }
}
randomImages();

// console.log(indexOne, indexTwo, indexThree);
console.log(indexOne, productCatalog[indexOne]);
imgLeft.src = productCatalog[indexOne].filePath;
imgLeft.alt = productCatalog[indexOne].image;
imgCenter.src = productCatalog[indexTwo].filePath;
imgCenter.alt = productCatalog[indexTwo].image;
imgRight.src = productCatalog[indexThree].filePath;
imgRight.alt = productCatalog[indexThree].image;

productCatalog[indexOne].totalDisplayed ++;
productCatalog[indexTwo].totalDisplayed ++;
productCatalog[indexThree].totalDisplayed ++;

function imgVote() {
  for (var i = 0; i < productCatalog.length; i ++) {
    var listEl = document.createElement('li');
    listEl.textContent = productCatalog[i].image + ' appeared on screen ' + productCatalog[i].totalDisplayed + ' times, and was clicked ' + productCatalog[i].totalClicks + ' times.';
    results.appendChild(listEl);
  }
}

function userChoices(event) {
  var userSelect = event.target.id;
  console.log(userSelect);
  if (userSelect === 'left') {
    console.log('User chose the left image');
    imgVote ++;
    console.log('On round: ' + (parseInt(imgVote) + 1));
    productCatalog[indexOne].totalClicks += 1;
    console.log(productCatalog[indexOne].image + ' selected ' + productCatalog[indexOne].totalClicks + ' times');
  }
  else if (userSelect === 'center') {
    console.log('User chose the center image');
    imgVote ++;
    console.log('On round: ' + (parseInt(imgVote) + 1));
    productCatalog[indexTwo].totalClicks += 1;
    console.log(productCatalog[indexTwo].image + ' selected ' + productCatalog[indexTwo].totalClicks + ' times');
  }
  else if (userSelect === 'right') {
    console.log('User chose the right image');
    imgVote ++;
    console.log('On round: ' + (parseInt(imgVote) + 1));
    productCatalog[indexThree].totalClicks += 1;
    console.log(productCatalog[indexThree].image + ' selected ' + productCatalog[indexThree].totalClicks + ' times');
  }
  else {
    alert('Please select one of the three images');
  }
  if (imgVote < 25){
    console.log(imgVote, 'total votes');
  }
}
randomImages();

//Clear previous images from screen display
function clearWindow() {
  document.getElementById('images_displayed').innerHTML = '';
};

imagesDisplayed.addEventListener('click', clearWindow);
imagesDisplayed.addEventListener('click', userChoices);
