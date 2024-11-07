import React, {useState} from 'react'
export default function Calculator(){

    const [input, setInput] = useState("");
    const [result, setResult] = useState(0);

    function handleInputChange(event){
        setInput(event.target.value)
    }
    function handleClick(val){
        setInput((prevInput) => prevInput + val)
    }
    function handleOperation(op){
        const trimmedInput = input.trim()

        if (trimmedInput[trimmedInput.length - 1] === op){
            return;
        } 
        else {
            setInput((prevInput) => prevInput + op)
        }
    }
    function handleClear(){
        setInput("")
    }
    function handleEvaluation(){
        const evaluatedResult = eval(input)
        setResult(evaluatedResult)
        setInput(String(evaluatedResult))
    }
    function handleDelete(){
        setInput(() => input.slice(0, input.length - 1))
    }


    return(
        <div className="container">
            <div className="calculator">
                <form action="">
                    <div className="display">
                        <input type="text" value={input} onChange={handleInputChange}/>
                    </div>
                    <div>
                        <input type="button" value="C" onClick={handleClear}/>
                        <input type="button" value="De" onClick={handleDelete}/>
                        <input type="button" value="%" onClick={() => handleOperation("%")}/>
                        <input type="button" value="÷" onClick={() => handleOperation("÷")}/>
                    </div>
                    <div>
                        <input type="button" value="7" onClick={() => handleClick("7")}/>
                        <input type="button" value="8" onClick={() => handleClick("8")}/>
                        <input type="button" value="9" onClick={() => handleClick("9")}/>
                        <input type="button" value="x" onClick={() => handleOperation("*")}/>
                    </div>
                    <div>
                        <input type="button" value="4" onClick={() => handleClick("4")}/>
                        <input type="button" value="5" onClick={() => handleClick("5")}/>
                        <input type="button" value="6" onClick={() => handleClick("6")}/>
                        <input type="button" value="-" onClick={() => handleOperation("-")}/>
                    </div>
                    <div>
                        <input type="button" value="1" onClick={() => handleClick("1")}/>
                        <input type="button" value="2" onClick={() => handleClick("2")}/>
                        <input type="button" value="3" onClick={() => handleClick("3")}/>
                        <input type="button" value="+" onClick={() => handleOperation("+")}/>
                    </div>
                    <div>
                        <input type="button" value="00" onClick={() => handleClick("0")}/>
                        <input type="button" value="." onClick={() => handleClick(".")}/>
                        <input className="equal-button" type="button" value="=" onClick={handleEvaluation}/>
                    </div>
                </form>

            </div>
        </div>
    )
}