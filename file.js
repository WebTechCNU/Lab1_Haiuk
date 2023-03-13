class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement
        this.currentOperandTextElement = currentOperandTextElement
        this.clear()
    }

    clear() {
        this.currentOperand = ''
        this.previousOperand = ''
        this.operation = undefined
    }

    appendNumber(number) {
        if (number === '.' && this.currentOperand.includes('.')) return
        this.currentOperand = this.currentOperand.toString() + number.toString()
    }

    chooseOperation(operation) {
        if (this.currentOperand === '') return
        if (this.previousOperand !== '') {
            this.compute()
        }
        this.operation = operation
        this.previousOperand = this.currentOperand
        this.currentOperand = ''
    }

    compute() {
        let coputation
        const prev = parseFloat(this.previousOperand)
        const current = parseFloat(this.currentOperand)
        if (isNaN(prev) || isNaN(current)) return
        switch (this.operation) {
            case '+':
                coputation = prev + current
                break
            case '-':
                coputation = prev - current
                break
            case '*':
                coputation = prev * current
                break
            case '/':
                coputation = prev / current
                break
            default:
                return
        }
        this.currentOperand = coputation
        this.operation = undefined
        this.previousOperand = ''

    }

    //
    reverseWord() {
        let wordArray = this.currentOperand.split('');
        let reversedArray = wordArray.reverse();
        this.currentOperand = reversedArray.join('');
    }
    //

    updateDisplay() {
        this.currentOperandTextElement.innerText = this.currentOperand
        this.previousOperandTextElement.innerText = this.previousOperand
    }
}

const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const allClearButton = document.querySelector('[data-all-clear]')
const previousOperandTextElement = document.querySelector('[data-previous-operand]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')

const calculator = new Calculator(previousOperandTextElement,
    currentOperandTextElement)


numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText)
        calculator.updateDisplay()
    })

    equalsButton.addEventListener('click', button => {
        calculator.compute()
        calculator.updateDisplay()
    })


    allClearButton.addEventListener('click', button => {
        calculator.clear()
        calculator.updateDisplay()
    })    

})

//Lab2

const numberButtonslab2 = document.querySelectorAll('[data-number-lab2]')
const operationButtonslab2 = document.querySelectorAll('[data-operation-lab2]')
const equalsButtonlab2 = document.querySelector('[data-equals-lab2]')
const allClearButtonlab2 = document.querySelector('[data-all-clear-lab2]')
const previousOperandTextElementlab2 = document.querySelector('[data-previous-operandLab2]')
const currentOperandTextElementlab2 = document.querySelector('[data-current-operandLab2]')

const calculatorlab2 = new Calculator(previousOperandTextElementlab2,
    currentOperandTextElementlab2)

numberButtonslab2.forEach(button => {
    button.addEventListener('click', () => {
        calculatorlab2.appendNumber(button.innerText)
        calculatorlab2.updateDisplay()
    })
})

operationButtonslab2.forEach(button => {
    button.addEventListener('click', () => {
        calculatorlab2.chooseOperation(button.innerText)
        calculatorlab2.updateDisplay()
    })

    equalsButtonlab2.addEventListener('click', button => {
        calculatorlab2.compute()
        calculatorlab2.updateDisplay()
    })


    allClearButtonlab2.addEventListener('click', button => {
        calculatorlab2.clear()
        calculatorlab2.updateDisplay()
    })

})

// lab3

const numberButtonslab3 = document.querySelectorAll('[data-number-lab3]')
const equalsButtonlab3 = document.querySelector('[data-equals-lab3]')
const allClearButtonlab3 = document.querySelector('[data-all-clear-lab3]')
const previousOperandTextElementlab3 = document.querySelector('[data-previous-operandLab3]')
const currentOperandTextElementlab3 = document.querySelector('[data-current-operandLab3]')

const calculatorlab3 = new Calculator(previousOperandTextElementlab3,
    currentOperandTextElementlab3)

numberButtonslab3.forEach(button => {
    button.addEventListener('click', () => {
        calculatorlab3.appendNumber(button.innerText)
        calculatorlab3.updateDisplay()
    })
})

equalsButtonlab3.addEventListener('click', button => {
    calculatorlab3.reverseWord()
    calculatorlab3.compute()
    calculatorlab3.updateDisplay()
})

allClearButtonlab3.addEventListener('click', button => {
    calculatorlab3.clear()
    calculatorlab3.updateDisplay()
})


