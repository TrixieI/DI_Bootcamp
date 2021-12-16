function playTheGame() {
    let play = confirm("Would you like to play the game?")
        if(play == false){
            alert("No problem, Goodbye!")
            return
        }
        let number = parseInt(prompt("Enter a number between 0 and 10"))
        if(isNaN(number) ){
            alert("Sorry Not a number, Goodbye")
        }else if(number < 0 || number > 10){
            alert("Sorry its not a good number, Goodbye")
        }else {
            let computerNumber = Math.floor(Math.random() * 11);
            console.log("computer number is ",computerNumber)
            console.log("user number is ",number)
            test(number, computerNumber)
        } 
        
    } 
    
    function test(userNumber,computerNumber){
        let counter = 0;
        while(counter < 3){
            if(userNumber == computerNumber){
                alert("WINNER!")
                break;
            }else if(userNumber < computerNumber){
                alert("Your number is smaller than the computer number, try again!")
            }else{
                alert("Your number is bigger than the computer number, try again!")
            }
            counter++
            userNumber = parseInt(prompt("Try again"))
        }
    }