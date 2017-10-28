'use strict';
//variables to store the objects
var results = document.getElementById('results');
var imagesDisplayed = document.getElementById('images_displayed');
var imgLeft = document.getElementById('left');
var imgCenter = document.getElementById('center');
var imgRight = document.getElementById('right');
var indexOne = 0;
var indexTwo = 0;
var indexThree = 0;
var imgVote = 0;
var productCatalog = []; //array to store all products
var previousNumbers = []; //stores previousNumbers passed through array

//make an object
var Product = function(image, filePath) {
  this.image = image;
  this.filePath = filePath;
  this.totalDisplayed = 0;
  this.totalClicks = 0;
  productCatalog.push(this);
};

//make new image instances - use constructor function (make object first, then instances of using the constructor)
new Product('Bag', 'img/bag.jpg');
new Product('Banana', 'img/banana.jpg');
new Product('Bathroom', 'img/bathroom.jpg');
new Product('Boots', 'img/boots.jpg');
new Product('Breakfast', 'img/breakfast.jpg');
new Product('Bubble Gum', 'img/bubblegum.jpg');
new Product('Chair', 'img/chair.jpg');
new Product('Cthulhu', 'img/cthulhu.jpg');
new Product('Dog Duck', 'img/dog-duck.jpg');
new Product('Dragon', 'img/dragon.jpg');
new Product('Pen', 'img/pen.jpg');
new Product('Pet Sweep', 'img/pet-sweep.jpg');
new Product('Scissors', 'img/scissors.jpg');
new Product('Shark', 'img/shark.jpg');
new Product('Sweep', 'img/sweep.png');
new Product('Tauntaun', 'img/tauntaun.jpg');
new Product('Unicorn', 'img/unicorn.jpg');
new Product('USB', 'img/usb.gif');
new Product('Water Can', 'img/water-can.jpg');
new Product('Wine Glass', 'img/wine-glass.jpg');

//randomly display one of the images for each image index
function randomImage() {
  indexOne = Math.floor(Math.random() * productCatalog.length);
  while (indexOne === indexTwo || indexOne === indexThree || previousNumbers.includes(indexOne) {
  indexTwo = Math.floor(Math.random() * productCatalog.length);
    }
  while (indexTwo === indexOne || indexTwo === indexThree || previousNumbers.includes(indexTwo) {
  indexTwo = Math.floor(Math.random() * productCatalog.length);
    }
  indexThree = Math.floor(Math.random() * productCatalog.length);
  while (indexThree === indexTwo || indexThree === indexOne || previousNumbers.includes(indexThree) {
  indexThree = Math.floor(Math.random() * productCatalog.length);
    }
  console.log(indexOne, indexTwo, indexThree);

  imgLeft.src = productCatalog[indexOne].filePath;
  imgLeft.alt = productCatalog[indexOne].image;
  imgCenter.src = productCatalog[indexTwo].filePath;
  imgCenter.src = productCatalog[indexTwo].image;
  imgRight.src = productCatalog[indexThree].filePath;
  imgRight.src = productCatalog[indexThree].filePath;

  productCatalog[indexOne].totalDisplayed += productCatalog[indexOne].totalDisplayed;
  productCatalog[indexTwo].totalDisplayed += productCatalog[indexTwo].totalDisplayed;
  productCatalog[indexThree].totalDisplayed += productCatalog[indexThree].totalDisplayed;
  });

function imgVotes() {
  for (var i = 0; i < productCatalog.length; i ++) {
    var listEl = document.createElement('li');
    listEl.textContent = productCatalog[i].image + ' appeared on screen ' + productCatalog[i].totalDisplayed + ' times, and was clicked ' + productCatalog[i].totalClicks + ' times.';
    results.appendChild(listEl);
  }
}

function userChoices() {
  var userSelect = event.target.id;
  console.log(userSelect);
  if (userSelect === 'left') {
    console.log('User chose left image');
    imgVote += 1;
    console.log('On round: ' + (parseInt(imgVote) + 1));
    productCatalog[indexOne].totalClicks += 1;
    console.log(productCatalog[indexOne].image + ' selected ' + productCatalog[indexOne].totalClicks + ' times');
  }
  else if (userSelect === 'center') {
    console.log('User chose center image');
    imgVote += 1;
    console.log('On round: ' + (parseInt(imgVote) + 1));
    productCatalog[indexTwo].totalClicks += 1;
    console.log(productCatalog[indexTwo].image + ' selected ' + productCatalog[indexTwo].totalClicks + ' times');
  }
  else if (userSelect === 'right') {
    console.log('User chose right image');
    imgVote += 1;
    console.log('On round: ' + (parseInt(imgVote) + 1));
    productCatalog[indexThree].totalClicks += 1;
    console.log(productCatalog[indexThree].image + ' selected ' + productCatalog[indexThree].totalClicks + ' times');
  }
}


        //
        // //listener, something to be clicked...events!
        // var imgEl = document.getElementById('Product-img');
        // 
        // imgEl.addEventListener('click', randomImage);
