// Author: Akash Shakya
// Copyright: Polyup Inc.
var canvasheight;
var canvasWidth;
var x = 1;
var t = 1;
var num;
var textLocX = ["250", "350", "450", "550", "650", "750", "850", "950", "1050"];
var textLocY = ["75", "125", "175", "225", "275", "325", "375", "425", "475"];
var randX;
var randY;
var textX = [];
var textY = [];
var numArr = [];
var triggerColor = false;
var textDisplay = false;
var count1 = 1;
var count2;
var operator;
var valueEnt;
var statementExp;
var canvas;
var resetTrigger = 0;
var valOfSlider;
var play;
var checkRepeat = 0;
var colorNumArr = [];

// P5 Setup Method
function setup() {
    canvasheight = windowHeight;
    canvasWidth = windowWidth;
    canvas = createCanvas(canvasWidth, canvasheight);
}

// P5 Draw Function
// function draw() {
//     // triggerColor = true;
//     if (triggerColor) {
//         getColor();
//     }
// }

// Method to evoke on Onload Event
function getFirst() {
    getText();
    displayText();
}

// Method to Display text or Number
function displayText() {
    background(255);
    for (var i = 200; i <= 1000;) {
        for (var j = 50; j <= 450;) {
            if (textDisplay) {
                stroke(0);
                textSize(20);
                text(numArr[count1], textX[count1], textY[count1]);
                count1++;
                if (count1 === 10) {
                    count1 = 0;
                }
            }
            rect(i, j, 100, 50);
            // fill(255);

            j = j + 50;
        }
        i = i + 100;
    }
}


// function keyPressed(){
// 	triggerColor = true;
// }


//  Method to Display Color
function getColor() {
    triggerColor = true;
    for (var i = 200; i <= 1000;) {
        // console.log(count2);
        for (var j = 50; j <= 450;) {
            for (count2 = 0; count2 <= 9;) {
                if ((textX[count2] - 50) == i && (textY[count2] - 25) == j) {
                    // fill(numArr[count2]);
                    fill(colorNumArr[count2]);
                }
                count2++;
            }
            rect(i, j, 100, 50);
            fill(255);
            j = j + 50;
        }
        i = i + 100;
    }
}

// function keyPressed(){
// 	console.log(numArr);
// }

// Method to Reset the values and tables
function startTriggerToZero() {
    document.getElementById('resetTrigger').value = 0;
    getText();
};

// Method to be initialise By Play Button
function startPlay() {
    checkRepeat++;
    if (checkRepeat === 1) {
        play = setInterval(myForm, 1000);
        // checkRepeat = 0;
    }
}

// Method to get the Numbers and Store them into Array
function getText() {
    triggerColor = false;
    noFill();
    checkRepeat = 0;
    clearInterval(play);
    document.getElementById('resetTrigger').value = 0;
    resetTrigger = 0;
    // console.log(document.getElementById('resetTrigger').value );

    textDisplay = true;
    for (var i = 0; i <= 9; i++) {
        num = floor(random(0, 255));resetTrigger                  
        numArr[i] = num;
        colorNumArr[i] = numArr[i];
        textX = shuffle(textLocX);
        textY = shuffle(textLocY);
        // randX = textLocX[Math.floor(Math.random() * textLocX.length)];
        // randY = textLocY[Math.floor(Math.random() * textLocY.length)];
        // textX[i] = (randX);
        // textY[i] = (randY);
    }
    displayText();
}

// Method to collect expression from input textBox 
// and evalulate it for futher number/text to be display
function myForm() {
    noFill();
    // console.log('Play');
    // console.log(resetTrigger);
    if (resetTrigger !== 100) {

        // For Slider
        resetTrigger = resetTrigger + 10;
        document.getElementById('resetTrigger').value = resetTrigger;

        var x = document.getElementById("form1");
        var text = "";
        var i;

        var express = x.elements[1].value;
        statementExp = express.slice(7, express.length);
        operator = express.slice(5, 6);
        valueEnt = (eval(statementExp)).toFixed(2);

        // Switch Method to Perform Arithmetic Operation
        switch (operator) {
            case "*":
                for (var i = 0; i <= 9; i++) {
                    if ((+numArr[i] >= 9999)) {
                        numArr[i] = "";
                        numArr[i] = 9999;

                    } else {
                        numArr[i] = numArr[i] * valueEnt;
                        colorNumArr[i] = numArr[i];
                        if (!triggerColor) {
                            displayText();
                        } else {
                            getColor();
                        }
                    }
                }
                break;
            case "+":
                for (var i = 0; i <= 9; i++) {
                    if ((+numArr[i] >= 9999)) {
                        numArr[i] = 9999;
                    } else {
                        numArr[i] = (+numArr[i]) + +valueEnt;
                        colorNumArr[i] = numArr[i];
                        if (!triggerColor) {
                            displayText();
                        } else {
                            getColor();
                        }
                    }
                }
                break;
            case "-":
                for (var i = 0; i <= 9; i++) {
                    if ((+numArr[i] >= 9999)) {
                        numArr[i] = 9999;
                    } else {
                        numArr[i] = numArr[i] - valueEnt;
                         colorNumArr[i] = numArr[i];
                      if (!triggerColor) {
                            displayText();
                        } else {
                            getColor();
                        }
                    }
                }
                break;
            case "^":
                for (var i = 0; i <= 9; i++) {
                    if ((+numArr[i] >= 9999)) {
                        numArr[i] = 9999;
                    } else {
                        numArr[i] = Math.pow(+numArr[i], +valueEnt);
                        colorNumArr[i] = numArr[i];
                        if (!triggerColor) {
                            displayText();
                        } else {
                            getColor();
                        }
                    }
                }
                break;
            case "/":
                for (var i = 0; i <= 9; i++) {
                    if ((+numArr[i] >= 9999)) {
                        colorNumArr[i] = numArr[i];
                        numArr[i] = 9999;
                    }
                    numArr[i] = ((numArr[i]) / valueEnt).toFixed(2);
                    if (!triggerColor) {
                            displayText();
                        } else {
                            getColor();
                        }
                }
                break;
        }
    }
}

// shuffle algorithm to uniquely randomise the location array
// To avoid overlapping 
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
