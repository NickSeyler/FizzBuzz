//Display message to the user
function getValues(){
    let fizzValue = document.getElementById("fizzValue").value;
    let buzzValue = document.getElementById("buzzValue").value;

    fizzValue = parseInt(fizzValue);
    buzzValue = parseInt(buzzValue);

    
    //Validate Input
    if(Number.isInteger(fizzValue) && Number.isInteger(buzzValue)){
        displayFizzBuzz(fizzValue, buzzValue);
    }
    else {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Only integers are allowed for FizzBuzz'
        });
    }
}

//Input: Integer, Integer
//Return: none
//Displays fizzbuzz
function displayFizzBuzz(fizzValue, buzzValue){
    let templateRows = "";
    let value = "";

    for (let i = 1; i <= 100; i++){
        if (i % fizzValue == 0 && i % buzzValue == 0){
            value = "fizzbuzz";
        }
        else if (i % fizzValue == 0){
            value = "fizz";
        }
        else if (i % buzzValue == 0){
            value = "buzz";
        }
        else{
            value = i;
        }

        let row = `<tr><td>${value}</td></tr>`;
        templateRows += row;
    }
    document.getElementById("results").innerHTML = templateRows;
}
