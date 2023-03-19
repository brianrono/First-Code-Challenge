//GRADES calculated as: A > 79, B - 60 to 79, C -  59 to 49, D - 40 to 49, E - less than 40

function calculateGrade() {
    const score = parseInt(document.getElementById("score").value);

    let grade;

    if (score < 0 || score > 100){
        console.log("Invalid Score, Try again!");
    }
   
    
    else if (score > 79) {
        grade = "A";
    } 

    else if (score >= 60 && score <= 79) {
        grade = "B";
    }

     else if (score >= 50 && score <= 59) {
        grade = "C";
    } 

    else if (score >= 40 && score <= 49) {
        grade = "D";
    } 

    else {
        grade = "E";
    }
    
    document.getElementById("result").innerHTML = `Student grade is: ${grade}`;
}


function checkSpeed() {
	const speedInput = document.getElementById("speed-input");
	const speed = Number(speedInput.value);
	const speedLimit = 70;//it checks if the value of speed is less than or equal to speedLimit. If it is, it sets the "output" to "Ok".
	const kmPerPoint = 5;//this constant variable represents the number of points charged per km exceeding the speed limit
    

	if (speed <= speedLimit) {//user expects the speed to be less or equal the speed limit
		document.getElementById("output").textContent = "Ok";
	} else {
		const points = Math.floor((speed - speedLimit) / kmPerPoint);//for every 5kmperhour exceeding the speed limit, user is charged 1 point for it
		if (points >= 12) {//if the points exceeds 12, the license of the user is suspended
			document.getElementById("output").textContent = "License suspended";
		} else {
			document.getElementById("output").textContent = `Points: ${points}`;
		}
	}
}


  
function toAchieveNetSalary(personalRelief, netSalary, totalDeductions, contribitionBenefit, NHIFDeductions, NSSFDeductions, grossSalary, taxableIncome){
    let paye;

    personalRelief = 2400;

    grossSalary = ("Enter your salary amount: ")

    contributionBenefit = ("Your contribution Benefit: ")

    NHIFDeductions = ("Enter your NHIFDeduction: ")

    NSSFDeductions = ("Enter your NSSFDeduction: ")  

    // deductions and taxable incomes

    totalDeductions = (NHIFDeductions + NSSFDeductions + personalRelief + contribitionBenefit);
    taxableIncome = grossSalary - totalDeductions;

    console.log(`your taxableIncome is ksh: ${taxableIncome}`)
    console.log(`your totalDeductions is ksh: ${totalDeductions}`)

    //PAYE calculations

    switch(true){
        case (taxableIncome <= 24000):
            paye = taxableIncome * 0.01;
            break;

        case (taxableIncome >= 24001 && taxableIncome <= 32333):
            paye = taxableIncome * 0.25;
            break;

        case (taxableIncome > 32333):
            paye = taxableIncome * 0.30;
            break;  

    }
    //achieving the net salary  after all dedutions
    netSalary = (parseInt (taxableIncome - paye));
    console.log(`your netSalary is ksh: ${netSalary}`)
    

}
toAchieveNetSalary();