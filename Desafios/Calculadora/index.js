const previousOperationText = document.querySelector("#previous-operation");
const currentOperationText = document.querySelector("#current-operation");
const buttons = document.querySelectorAll("#buttons-container button");

class Calculator{
    constructor(previousOperationText,currentOperationText){
        this.previousOperationText = previousOperationText;
        this.currentOperationText = currentOperationText;
        this.currentOperation = "";
    }
    // Adicionar digito na Tela
      addDigit(digit){
      //Impedir que o ponto seja digitado mais de uma vez
       if (digit === "." && this.currentOperationText.innerText.includes(".")){
         return;
    }

    this.currentOperation = digit;
    this.updateScreen();  
}

//Operações de Calculo
processOperation(operation){
    //Checar se é a operação e muda-la
    if(this.currentOperationText.innerText === "" && operation !== "C"){
        if(this.previousOperationText.innerText !== ""){
            this.changeOperation(operation);
        }
        return;
    }

    //Pegar Valor anterior e atual
    let operationValue;
    let previous = +this.previousOperationText.innerText.split(" ")[0];
    let current = +this.currentOperationText.innerText;

    switch (operation) {
        case "+":
            operationValue = previous + current;
            this.updateScreen(operationValue,operation,current, previous);
            break;
        case "-":
            operationValue = previous - current;
            this.updateScreen(operationValue,operation,current, previous);
            break;
        case "*":
            operationValue = previous * current;
            this.updateScreen(operationValue,operation,current, previous);
        break;
        case "/":
            operationValue = previous / current;
            this.updateScreen(operationValue,operation,current, previous);
            break;
        case "DEL":
            this.processDelOperator();
            break;
        case "AC":
            this.processClearCurrentOperation();
            break;
        case "=":
            this.processEqualOperator();
            break;
        
                           
                           
        default:
            return;
    }
}

//Tracando o valor na tela 
updateScreen(operationValue = null, operation= null, current = null, previous = null){
    
    if (operationValue === null) {
        this.currentOperationText.innerText += this.currentOperation
    } else {

        // Checar se o Valor e zero para jogar para cima
        if(previous ===0){
        operationValue = current
        }

        //adicionar valor atual pra anterior
        this.previousOperationText.innerText = `${operationValue} ${operation}`;
        this.currentOperationText.innerText = "";
    }  
}

//Mudar Operação
    changeOperation(operation){
        const mathOperation = ["*", "/", "-", "+"]
        if (!mathOperation.includes(operation)) {
            return;
        }
        this.previousOperationText.innerText = this.previousOperationText.innerText.slice(0, -1) + operation;
    }

    //Apagar Ultimo Caractere
    processDelOperator(){
        this.currentOperationText.innerText = this.currentOperationText.innerText.slice(0,-1);
    }

    //Limpar atual
    processClearCurrentOperation() {
        this.currentOperationText.innerText = "";
    }

    //Apagar Tudo
    processClearOperation(){
        this.currentOperationText.innerText = "";
        this.previousOperationText.innerText = "";
    }

    //Resultado
    processEqualOperator(){
        const operation = previousOperationText.innerText.split(" ")[1];
        this.processOperation(operation);
    }
}


const calc = new Calculator(previousOperationText,currentOperationText);

buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        const value = e.target.innerText;
        
        if (+value >= 0 || value === "."){
            calc.addDigit(value); 
        } else {
            calc.processOperation(value);
        }
    });
})