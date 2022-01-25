//Get user input
function getValues(){
    let fizzValue = document.getElementById("fizzValue").value;
    let buzzValue = document.getElementById("buzzValue").value;

    fizzValue = parseInt(fizzValue);
    buzzValue = parseInt(buzzValue);

    
    //Validate Input
    if(Number.isInteger(fizzValue) && Number.isInteger(buzzValue)){

        let dataArr = generateData(fizzValue, buzzValue);
        displayFizzBuzz(dataArr);
    }
    else {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Only integers are allowed'
        });
    }
}

//Input: Integer, Integer
//Return: Array of Integers
//Populates and returns an array of fizzbuzz values
function generateData(fizzValue, buzzValue){
    dataArr = [];
    for (let i = 1; i <= 100; i++) {
        if (i % fizzValue == 0 && i % buzzValue == 0) {
            dataArr.push("fizzbuzz");
        } else if (i % fizzValue == 0) {
            dataArr.push("fizz");
        } else if (i % buzzValue == 0) {
            dataArr.push("buzz");
        } else {
            dataArr.push(i);
        }
    }
    return dataArr;
}

//Input: Array of Integers
//Return: none
//Displays fizzbuzz
function displayFizzBuzz(dataArr){
    let contentDiv = document.getElementById("results");
    let content="";

    //clear data
    contentDiv.innerHTML = "";

    for (let i = 0; i < dataArr.length; i++){
        let dataValue = dataArr[i];
        let dataElement = `<div class="${dataValue} col">${dataValue}</div>`;
        content += dataElement;
    }

    //write to page
    contentDiv.innerHTML = content;
}
