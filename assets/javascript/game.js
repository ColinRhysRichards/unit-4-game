$(document).ready(function () {


    var randomNumber = Math.floor(Math.random() * 100) + 5;
    $("#number").append(randomNumber);
    console.log(randomNumber);

    var num1 = Math.floor(Math.random() * 11 + 1);
    console.log(num1);
    var num2 = Math.floor(Math.random() * 11 + 1);
    console.log(num2);
    var num3 = Math.floor(Math.random() * 11 + 1);
    console.log(num3);
    var num4 = Math.floor(Math.random() * 11 + 1);
    console.log(num4);

    var totalNumber = 0;
    var wins = 0;
    var losses = 0;

    $("#wins").text(wins);
    $("#losses").text(losses);
    $("#currentNumber").text(totalNumber);

    $("#crystalImage1").click(function () {
        totalNumber = totalNumber + num1;
        $("#currentNumber").text(totalNumber);

        if (totalNumber === randomNumber) {
            youWin();
        }
        else if (totalNumber > randomNumber) {
            youLose();
        }
    })

    $("#crystalImage2").click(function () {
        totalNumber = totalNumber + num2;
        $("#currentNumber").text(totalNumber);

        if (totalNumber === randomNumber) {
            youWin();
        }
        else if (totalNumber > randomNumber) {
            youLose();
        }
    })

    $("#crystalImage3").click(function () {
        totalNumber = totalNumber + num3;
        $("#currentNumber").text(totalNumber);

        if (totalNumber === randomNumber) {
            youWin();
        }
        else if (totalNumber > randomNumber) {
            youLose();
        }
    })

    $("#crystalImage4").click(function () {
        totalNumber = totalNumber + num4;
        $("#currentNumber").text(totalNumber);

        if (totalNumber === randomNumber) {
            youWin();
        }
        else if (totalNumber > randomNumber) {
            youLose();
        }
    })

    function youWin() {
        alert("You Won!");
        wins++;
        $("#wins").text(wins);
        reset();
    }

    function youLose() {
        alert("You Lose!");
        losses++;
        $("#losses").text(losses);
        reset()
    }

    function reset() {
        randomNumber = Math.floor(Math.random() * 100) + 5;
        console.log(randomNumber)
        $("#number").text(randomNumber);
        num1 = Math.floor(Math.random() * 11 + 1);
        num2 = Math.floor(Math.random() * 11 + 1);
        num3 = Math.floor(Math.random() * 11 + 1);
        num4 = Math.floor(Math.random() * 11 + 1);
        totalNumber = 0;
        $("#currentNumber").text(totalNumber);
    }

});
