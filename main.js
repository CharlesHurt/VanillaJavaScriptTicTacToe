'use strict'
function showClick() {alert(1)}
// Start w/vars
// TODO factor this out
// TODO factor our the style sheet
var row1Array = ['','','']
var row2Array = row1Array.concat() // Using Cades array copy strategy
var row2Array = row1Array.concat()
var curState = 'Left'

var R1C1_Ref
var R1C2_Ref
var R1C3_Ref

var R2C1_Ref
var R2C2_Ref
var R2C3_Ref

var R3C1_Ref
var R3C2_Ref
var R3C3_Ref

var isX = false
var nextX = 1
var nextO = 1

var countR1 = 0
var countR2 = 0
var countR3 = 0
var runningClasses = ''
var theCell = ''
var rawData =[]
var clickCount = 0
var somebodyWon = false

document.addEventListener('DOMContentLoaded', init)

function init() {
  R1C1_Ref = g('IdR1C1')
  R1C2_Ref = g('IdR1C2')
  R1C3_Ref = g('IdR1C3')

  R2C1_Ref = g('IdR2C1')
  R2C2_Ref = g('IdR2C2')
  R2C3_Ref = g('IdR2C3')

  R3C1_Ref = g('IdR3C1')
  R3C2_Ref = g('IdR3C2')
  R3C3_Ref = g('IdR3C3')

  rawData[0] = [999,999,999]
  rawData[1] = [999,999,999]
  rawData[2] = [999,999,999]
/*
  g('IdR1C1').addEventListenter('mouseover', function() {

  })
  R1C1_Ref.addEventListener('click', doClick)
*/
  //document.querySelectorAll(".cCell").addEventListener('click', doClick)
  var elementList = document.querySelectorAll(".cCell")
  for (var i = 0; i < elementList.length; ++i) {

    elementList[i].addEventListener('click', doClick)
    //elementList[i].style.visibility = 'hidden' // v.s. visible
  }
  //.addEventListener('mouseover', function() {})
  //document.querySelectorAll(".cCell").addEventListener('mouseout', doMouseOut)
}

function doMouseOver() {
  console.log('MouseOver')
}

function doMouseOut() {
  console.log('MouseOut')
}

function doClick(e) {
  if (e.target.src.indexOf('Clear') !== -1) { // Disable further clicks
    clickCount++
    var targetClass = e.target.classList[0]
    var row = targetClass.charAt(2) - 1
    var col = targetClass.charAt(4) - 1
    //debugger
    //console.log('r/c:' + row + '/' + col)
//debugger
    if (isX) {
      e.target.src='X' + nextX + '.png'
      rawData[row][col] = 10
      nextX++
    } else {
      e.target.src='O' + nextO + '.png'
      rawData[row][col] = 1
      nextO++
    }

    updateStatus(row, col)
  }

  isX = ! isX
}

function updateStatus(row, col) {
//console.log('row  0=' + rawData[0][0] + '/' + rawData[0][1] + '/' + rawData[0][2])
//console.log('row  1=' + rawData[1][0] + '/' + rawData[1][1] + '/' + rawData[1][2])
//console.log('row  2=' + rawData[2][0] + '/' + rawData[2][1] + '/' + rawData[2][2])

//console.log('diag 1=' + rawData[0][0] + '/' + rawData[1][1] + '/' + rawData[2][2])
//console.log('diag 2=' + rawData[0][2] + '/' + rawData[1][1] + '/' + rawData[2][0])


  if (   ((rawData[0][0] + rawData[0][1] + rawData[0][2]) === 3)
      || ((rawData[1][0] + rawData[1][1] + rawData[1][2]) === 3)
      || ((rawData[2][0] + rawData[2][1] + rawData[2][2]) === 3)

      || ((rawData[0][0] + rawData[1][0] + rawData[2][0]) === 3)
      || ((rawData[0][1] + rawData[1][1] + rawData[2][1]) === 3)
      || ((rawData[0][2] + rawData[1][2] + rawData[2][2]) === 3)

      || ((rawData[0][0] + rawData[1][1] + rawData[2][2]) === 3)
      || ((rawData[0][2] + rawData[1][1] + rawData[2][0]) === 3)) {
    alert('O won')
    somebodyWon = true
  }

  if (   ((rawData[0][0] + rawData[0][1] + rawData[0][2]) === 30)
      || ((rawData[1][0] + rawData[1][1] + rawData[1][2]) === 30)
      || ((rawData[2][0] + rawData[2][1] + rawData[2][2]) === 30)

      || ((rawData[0][0] + rawData[1][0] + rawData[2][0]) === 30)
      || ((rawData[0][1] + rawData[1][1] + rawData[2][1]) === 30)
      || ((rawData[0][2] + rawData[1][2] + rawData[2][2]) === 30)

      || ((rawData[0][0] + rawData[1][1] + rawData[2][2]) === 30)
      || ((rawData[0][2] + rawData[1][1] + rawData[2][0]) === 30)) {
    alert('X won')
    somebodyWon = true
  }
  if (!somebodyWon) {
    if (clickCount === 9) {
      alert('It a ddraw')
    }
  }
}

function x(e) {
  //var boxes = document.getElementsByClassName('cBox')
}

function g() {
  return document.getElementById(arguments[0])
}

function setBorder() {
  arguments[0].classList.add('cBlueBorder')
}

function removeBorder() {
  arguments[0].classList.remove('cBlueBorder')
}
