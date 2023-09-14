class Calculator {

    constructor() {

        this.validation = true
        this.validationSign = true
        this.outputValue = 0

        this.outputSpan = document.querySelector ("#output-span-id")
        this.inputSpan = document.querySelector ("#input-span-id")
        this.buttonClear = document.querySelector ("#button-clear-id")
        this.buttonBackspace = document.querySelector ("#button-backspace-id")
        this.buttonPercentage = document.querySelector ("#button-percentage-id")

        this.buttonSum = document.querySelector ("#button-sum-id")
        this.buttonMult = document.querySelector ("#button-mult-id")
        this.buttonSubt = document.querySelector ("#button-subt-id")
        this.buttonDiv = document.querySelector ("#button-div-id")
        this.buttonEqual = document.querySelector ("#button-equal-id")
        this.buttonNegative = document.querySelector ("#button-negative-id")

        this.buttonDot = document.querySelector ("#button-dot-id")
        this.button00 = document.querySelector ("#button-00-id")
        this.button01 = document.querySelector ("#button-01-id")
        this.button02 = document.querySelector ("#button-02-id")
        this.button03 = document.querySelector ("#button-03-id")
        this.button04 = document.querySelector ("#button-04-id")
        this.button05 = document.querySelector ("#button-05-id")
        this.button06 = document.querySelector ("#button-06-id")
        this.button07 = document.querySelector ("#button-07-id")
        this.button08 = document.querySelector ("#button-08-id")
        this.button09 = document.querySelector ("#button-09-id")

        this.alfaRomeoButton = document.querySelector ("#alfa-romeo-button-id")
        this.alphaTauriButton = document.querySelector ("#alpha-tauri-button-id")
        this.alpineButton = document.querySelector ("#alpine-button-id")
        this.astonMartinButton = document.querySelector ("#aston-martin-button-id")
        this.ferrariButton = document.querySelector ("#ferrari-button-id")
        this.haasButton = document.querySelector ("#haas-button-id")
        this.mclarenButton = document.querySelector ("#mclaren-button-id")
        this.mercedesButton = document.querySelector ("#mercedes-button-id")
        this.redBullButton = document.querySelector ("#red-bull-button-id")
        this.williamsButton = document.querySelector ("#williams-button-id")

        this.alfaRomeoButton.addEventListener ("click", () => {
            document.querySelector ("#container-body-calculator-id").style.backgroundColor = "#1d1c50"
            document.querySelector ("#container-screen-calculator-id").style.color = "#f8f497"
            document.querySelector ("#title-id").style.color = "#f8f497"
        })

        this.alphaTauriButton.addEventListener ("click", () => {
            document.querySelector ("#container-body-calculator-id").style.backgroundColor = "#47566b"
            document.querySelector ("#container-screen-calculator-id").style.color = "#f3f3f3"
            document.querySelector ("#title-id").style.color = "#f3f3f3"
        })

        this.alpineButton.addEventListener ("click", () => {
            document.querySelector ("#container-body-calculator-id").style.backgroundColor = "#0070bb"
            document.querySelector ("#container-screen-calculator-id").style.color = "#c6c6c6"
            document.querySelector ("#title-id").style.color = "#c6c6c6"
        })

        this.astonMartinButton.addEventListener ("click", () => {
            document.querySelector ("#container-body-calculator-id").style.backgroundColor = "#00a489"
            document.querySelector ("#container-screen-calculator-id").style.color = "white"
            document.querySelector ("#title-id").style.color = "white"
        })

        this.ferrariButton.addEventListener ("click", () => {
            document.querySelector ("#container-body-calculator-id").style.backgroundColor = "#c4151c"
            document.querySelector ("#container-screen-calculator-id").style.color = "yellow"
            document.querySelector ("#title-id").style.color = "yellow"
        })

        this.haasButton.addEventListener ("click", () => {
            document.querySelector ("#container-body-calculator-id").style.backgroundColor = "#c52b2f"
            document.querySelector ("#container-screen-calculator-id").style.color = "white"
            document.querySelector ("#title-id").style.color = "white"
        })

        this.mclarenButton.addEventListener ("click", () => {
            document.querySelector ("#container-body-calculator-id").style.backgroundColor = "#e26b01"
            document.querySelector ("#container-screen-calculator-id").style.color = "white"
            document.querySelector ("#title-id").style.color = "white"
        })
        
        this.mercedesButton.addEventListener ("click", () => {
            document.querySelector ("#container-body-calculator-id").style.backgroundColor = "#827b75"
            document.querySelector ("#container-screen-calculator-id").style.color = "#08d4c5"
            document.querySelector ("#title-id").style.color = "#08d4c5"
        })

        this.redBullButton.addEventListener ("click", () => {
            document.querySelector ("#container-body-calculator-id").style.backgroundColor = "#ffb428"
            document.querySelector ("#container-screen-calculator-id").style.color = "#ff4440"
            document.querySelector ("#title-id").style.color = "blue"
        })

        this.williamsButton.addEventListener ("click", () => {
            document.querySelector ("#container-body-calculator-id").style.backgroundColor = "#034fa7"
            document.querySelector ("#container-screen-calculator-id").style.color = "#0dfdfe"
            document.querySelector ("#title-id").style.color = "#0dfdfe"
        })

        this.buttonClear.addEventListener ("click", () => {
            this.clearFunc(this.buttonClear.value)
            this.validation = true
        })

        this.buttonNegative.addEventListener ("click", () => {
            this.negativeFunc()
        })

        this.buttonPercentage.addEventListener ("click", () => {
            this.percentagemFunc()
        })

        this.buttonEqual.addEventListener ("click", () => {
            this.equalFunc()
        })

        this.buttonSum.addEventListener ("click", () => {
            this.calcFunc(this.buttonSum.value)
        })

        this.buttonSubt.addEventListener ("click", () => {
            this.calcFunc(this.buttonSubt.value)
        })

        this.buttonMult.addEventListener ("click", () => {
            this.calcFunc(this.buttonMult.value)
        })

        this.buttonDiv.addEventListener ("click", () => {
            this.calcFunc(this.buttonDiv.value)
        })

        this.buttonBackspace.addEventListener ("click", () => {
            this.backspaceFunc()
        })

        this.buttonDot.addEventListener ("click", () => {
            this.outputFunc(this.buttonDot.value)
        })

        this.button00.addEventListener ("click", () => {
            this.outputZeroFunc(this.button00.value)
        })
        this.button01.addEventListener ("click", () => {
            this.outputFunc(this.button01.value)
        })
        this.button02.addEventListener ("click", () => {
            this.outputFunc(this.button02.value)
        })
        this.button03.addEventListener ("click", () => {
            this.outputFunc(this.button03.value)
        })
        this.button04.addEventListener ("click", () => {
            this.outputFunc(this.button04.value)
        })
        this.button05.addEventListener ("click", () => {
            this.outputFunc(this.button05.value)
        })
        this.button06.addEventListener ("click", () => {
            this.outputFunc(this.button06.value)
        })
        this.button07.addEventListener ("click", () => {
            this.outputFunc(this.button07.value)
        })
        this.button08.addEventListener ("click", () => {
            this.outputFunc(this.button08.value)
        })
        this.button09.addEventListener ("click", () => {
            this.outputFunc(this.button09.value)
        })


        // INTERATION WITH THE KEYBOARD

        document.addEventListener("keypress", (e) => {
            if(e.key === '0') {
                this.button00.click();
            }
        });

        document.addEventListener("keypress", (e) => {
            if(e.key === '1') {
                this.button01.click();
            }
        });

        document.addEventListener("keypress", (e) => {
            if(e.key === '2') {
                this.button02.click();
            }
        });

        document.addEventListener("keypress", (e) => {
            if(e.key === '3') {
                this.button03.click();
            }
        });

        document.addEventListener("keypress", (e) => {
            if(e.key === '4') {
                this.button04.click();
            }
        });

        document.addEventListener("keypress", (e) => {
            if(e.key === '5') {
                this.button05.click();
            }
        });

        document.addEventListener("keypress", (e) => {
            if(e.key === '6') {
                this.button06.click();
            }
        });

        document.addEventListener("keypress", (e) => {
            if(e.key === '7') {
                this.button07.click();
            }
        });

        document.addEventListener("keypress", (e) => {
            if(e.key === '8') {
                this.button08.click();
            }
        });

        document.addEventListener("keypress", (e) => {
            if(e.key === '9') {
                this.button09.click();
            }
        });

        document.addEventListener("keypress", (e) => {
            if(e.key === '.') {
                this.buttonDot.click();
            }
        });

        document.addEventListener("keypress", (e) => {
            if(e.key === 'c') {
                this.buttonClear.click();
            }
        });

        document.addEventListener("keypress", (e) => {
            if(e.key === '+') {
                this.buttonSum.click();
            }
        });

        document.addEventListener("keypress", (e) => {
            if(e.key === '-') {
                this.buttonSubt.click();
            }
        });

        document.addEventListener("keypress", (e) => {
            if(e.key === '*') {
                this.buttonMult.click();
            }
        });

        document.addEventListener("keypress", (e) => {
            if(e.key === '/') {
                this.buttonDiv.click();
            }
        });

        document.addEventListener("keypress", (e) => {
            if(e.key === '%') {
                this.buttonPercentage.click();
            }
        });

        document.addEventListener("keypress", (e) => {
            if(e.key === 'Enter') {
                this.buttonEqual.click();
            }
        });

        /* 
            DON'T WORKING
        */
        document.addEventListener("keypress", (e) => {
            if(e.key === 'Backspace') {
                this.buttonBackspace.click();
            }
        });
        
    }

    // CLEAR OUTPUT
    clearFunc() {
        this.outputSpan.innerHTML = ``
        this.inputSpan.innerHTML = ``
        this.outputValue = 0
        this.validation = true
        this.validationSign = true
    }


    // BACKSPACE
    backspaceFunc() {
        this.lastString = this.outputValue.substring(0, this.outputValue.length - 1)
        this.outputValue = this.lastString

        if (this.outputValue.charAt(0) === '0') {
            this.outputSpan.innerHTML = `${this.outputValue.slice(1)}`
        }

    }


    // POSITIVE OR NEGATIVE
    negativeFunc() {
        if (this.outputValue > 0) {
            this.outputValue = this.outputValue - this.outputValue - this.outputValue
            this.outputSpan.innerHTML = `${this.outputValue}`
        } else {
            this.outputValue = Math.abs(this.outputValue)
            this.outputSpan.innerHTML = `${this.outputValue}`
        }
    }


    // PERCENTAGEM
    percentagemFunc() {
        this.number02 = this.outputValue
        this.total = (Number(this.number01) * Number(this.number02)) / 100
        this.outputSpan.innerHTML = `${this.total}`
    }


    // BUTTON EQUAL
    equalFunc() {

        if (this.signValue === '+') {
            this.number02 = this.outputValue
            this.total = Number(this.number01) + Number(this.number02)
            this.outputSpan.innerHTML = `${this.total}`
        } else if (this.signValue === '-') {
            this.number02 = this.outputValue
            this.total = Number(this.number01) - Number(this.number02)
            this.outputSpan.innerHTML = `${this.total}`
        } else if (this.signValue === 'x') {
            this.number02 = this.outputValue
            this.total = Number(this.number01) * Number(this.number02)
            this.outputSpan.innerHTML = `${this.total}`
        } else if (this.signValue === '÷') {
            this.number02 = this.outputValue
            this.total = Number(this.number01) / Number(this.number02)
            this.outputSpan.innerHTML = `${this.total}`
        }

        this.number01String = this.number01.toString()
        this.number02String = this.number02.toString()
        this.totalString = this.total.toString()

        if (this.number01String.charAt(0) === '0' && this.number02String.charAt(0) === '0') {
            this.inputSpan.innerHTML = `${this.number01.slice(1)} ${this.signValue} ${this.number02.slice(1)}`
        } else if (this.number01String.charAt(0) === '0') {
            this.inputSpan.innerHTML = `${this.number01.slice(1)} ${this.signValue} ${this.number02}`
        } else if (this.number02String.charAt(0) === '0')
            this.inputSpan.innerHTML = `${this.number01} ${this.signValue} ${this.number02.slice(1)}`
        else {
            this.inputSpan.innerHTML = `${this.number01} ${this.signValue} ${this.number02}`
        }

        this.validationSign = true
        this.validation = true
        this.outputValue = this.total


    }

    // BUTTON SIGN
    calcFunc (value) {
        if (this.validationSign === true) {
            this.outputSpan.innerHTML += ` ${value} `
            this.number01 = this.outputValue
            this.signValue = value
            this.outputValue = 0
            this.validationSign = false
        }
    }

    // BUTTON NUMBER01 AND NUMBER02
    outputFunc(value) {

        if (this.outputValue.length >= 12) {
            alert ("Number full")
        } else {

            if (value === "." && this.validation === true) {
                this.outputSpan.innerHTML += `${value}`
                this.validation = false
                this.outputValue = this.outputValue + value
            }

            if (value !== ".") {
                if (this.outputValue == 0) {
                    this.outputSpan.innerHTML += `${value}`
                    this.outputValue = this.outputValue + value
                } else {
                    this.outputSpan.innerHTML += `${value}`
                    this.outputValue = this.outputValue + value
                }
            }   
        }

        //console.log (this.outputValue)

    }

    outputZeroFunc(value) {
        if (this.outputValue == 0) {
            this.outputValue = 0
        } else {
            this.outputSpan.innerHTML += `${value}`
            this.outputValue = this.outputValue + value 
        }
    }

}

const calculator = new Calculator()