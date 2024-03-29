import inquirer from "inquirer";
let myBalance = 10000;
let myPin = 5555;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "enter your pin code:",
        type: "number"
    }
]);
if (pinAnswer.pin === myPin) {
    console.log("pin is correct, login Successfully!");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "select an operation:",
            type: "list",
            choices: ["Withdraw Amount", "Check Balance", "Fast Cash"]
        }
    ]);
    if (operationAns.operation === "Withdraw Amount") {
        let amountAns = await inquirer.prompt([
            { name: "amount",
                message: "Enter the amount to withdraw:",
                type: "number"
            }
        ]);
        if (amountAns.amount > myBalance) {
            console.log("Insufficient Balance");
        }
        else {
            myBalance -= amountAns.amount;
            console.log(`${amountAns.amount} Withdraw Successfully`);
            console.log(`your Remaining Balance is: ${myBalance}`);
        }
    }
    else if (operationAns.operation === "Check Balance") {
        console.log(`your Account balance is: ${myBalance}`);
    }
    else if (operationAns.operation === "Fast Cash") {
        let selectamount = await inquirer.prompt([
            {
                name: "fastcashamount",
                message: "select your amount what you want",
                type: "list",
                choices: [2000, 5000, 8000]
            }
        ]);
        myBalance -= selectamount.fastcashamount;
        console.log(`${selectamount.fastcashamount} withdraw successfully`);
        console.log(`your Remaining Balance is: ${myBalance}`);
    }
}
else {
    console.log("pin is incorrect, try again");
}
;
