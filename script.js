const inputNumber = document.getElementById('number');
const convertBtn = document.getElementById('convert-btn');
const output = document.getElementById('output');

const convertToRoman = num => {
    const ref = [
      ['M', 1000],
      ['CM', 900],
      ['D', 500],
      ['CD', 400],
      ['C', 100],
      ['XC', 90],
      ['L', 50],
      ['XL', 40],
      ['X', 10],
      ['IX', 9],
      ['V', 5],
      ['IV', 4],
      ['I', 1]
    ];
    const res = [];
  
    ref.forEach(function (arr) {
      while (num >= arr[1]) {
        res.push(arr[0]);
        num -= arr[1];
      }
    });
  
    return res.join('');
};



convertBtn.addEventListener('click', () => {
    
    const isValid = true;
    const numberConvert = inputNumber.value;
    output.textContent = "";
    console.log(numberConvert);

    if (numberConvert == "") {
        output.style.fontSize = "2rem";
        output.textContent = "Please enter a valid number";
        isValid = false;
    } else if (numberConvert <= 0) {
        output.style.fontSize = "2rem";
        output.textContent = "Please enter a number greater than or equal to 1";
        isValid = false;
    } else if (numberConvert >= 4000) {
        output.style.fontSize = "2rem";
        output.textContent = "Please enter a number less than or equal to 3999";
        isValid = false;
    };

    if (isValid) {
        const numberOutput = convertToRoman(numberConvert);
        output.textContent = numberOutput;
    }
    
});



/*
Roman numerals	Arabic numerals
        M	    1000
        CM	    900
        D	    500
        CD	    400
        C	    100
        XC	    90
        L	    50
        XL	    40
        X	    10
        IX	    9
        V	    5
        IV	    4
        I	    1
*/ 