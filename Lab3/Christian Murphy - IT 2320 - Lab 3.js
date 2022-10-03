<html>
<head>
    <title>Lab 3 - functions</title>
    <script>
        "use strict";
        var $ = function(id) {
            return document.getElementById(id);
        };
        function calcFactorial(myNum) {
            if(myNum == 0)
            return 1;
            else
            return myNum * calcFactorial(myNum-1);
        }
        function calculate() {
            // get the number entered into the text box myNum
        var num = parseInt($("myNum").value)
            // call the factorial function
        var factorial = calcFactorial(num)
            // calculate the square of the number
        var squared = num * num
            // display those values in the proper place in the HTML
                $("mySquare").value = squared
                $("myFactorial").value = factorial
        }
        window.onload = function() {
                $("goCalculate").onclick = calculate;
                $("myNum").focus();
        };
        </script>
    </head>
    <body>
        <main>
            <h2>Christian Murphy - IT 2320 - Lab 3</h2>
            <h2>Enter a Number for Calculation</h1>
            <label for="myNum">My Number Is:</label>
            <var myNum = document.getElementById('myNum').value;  // get the object and the value in one step></main>
            <!-- display the squre here -->
            <label for="mySquare">My Number Squared:</label>
            <var myNum = document.getElementById('mySquare').value = 25; 
            <!-- display the factorial here -->
            <label for="">My Factorial</label>
            <var myNum = document.getElementById('myFactorial').value;>  
            <label>&nbsp;</label>
            <input type="button" id="goCalculate" value="GO"><br>
        </main>
    </body>
    </html>