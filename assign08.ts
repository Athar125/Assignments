import inquirer from "inquirer";
interface CalculatorInput {
    num1 : number;
    num2 : number;
    operator : string;
}

async function getCalculatorInput(): Promise<CalculatorInput> {
    const input = await inquirer.prompt([
        {
            type : 'number',
            name : 'num1',
            message : 'Enter the first number',
        },
        {
            type : 'number',
            name : 'num2',
            message : 'Enter the second number',  
        },
        {
            type: 'list',
            name: 'operator',
            message: 'Select an operator:',
            choices: ['+', '-', '*', '/', '%', '^'],
        },
    ])
    return input;
}

 function calculate(input: CalculatorInput): number {
    switch (input.operator){
        case '+':
            return input.num1 + input.num2;
        case '-':
            return input.num1 - input.num2; 
        case '*':
            return input.num1 * input.num2;
        case '/':
            return input.num1 / input.num2;
        case '%':
            return input.num1 % input.num2;
        case '^':
            return input.num1 ^ input.num2;
        default:
            throw new Error('invalid operator');   
    }
 }

 async function startCalculator() {
    const input = await getCalculatorInput();
    const result = calculate(input);
    
    console.log(`The result is ${result}`);
 }

 startCalculator();