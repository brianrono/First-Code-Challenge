//GRADES calculated as: A > 79, B - 60 to 79, C -  59 to 49, D - 40 to 49, E - less 40

function calculateGrade() {
    const score = parseInt(document.getElementById("score").value);

    let grade;

    if (score < 0 && score > 100){
        console.log("Invalid Score, Try again!");
    }

    else if (score > 79 && score <= 100) {
        return "A";
    } 

    else if (score >= 60 && score <= 79) {
        return "B";
    }

     else if (score >= 50 && score <= 59) {
        return  "C";
    } 

    else if (score >= 40 && score <= 49) {
        return "D";
    } 

    else {
        return "E";
    }
 
    document.getElementById("result").innerHTML = `Student grade is: ${grade}`;
}




function checkSpeed() {
	const speedInput = document.getElementById("speed-input");
	const speed = Number(speedInput.value);
	const speedLimit = 70;
	const kmPerPoint = 5;
    

	if (speed <= speedLimit) {
		document.getElementById("output").textContent = "Ok";
	} else {
		const points = Math.floor((speed - speedLimit) / kmPerPoint);
		if (points >= 12) {
			document.getElementById("output").textContent = "License suspended";
		} else {
			document.getElementById("output").textContent = `Points: ${points}`;
		}
	}
}
