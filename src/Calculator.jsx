import React, {useState} from 'react'
export default function Calculator(){

    const [input, setInput] = useState("");
    const [] = useState();

    function handleClick(val){
        setInput((prevInput) => prevInput + val)
    }
    function handleOperation(){
    }
    function handleClear(){
        setInput("")
    }
    function handleEvaluation(){
    }


    return(
        <div className="container">
            <div className="calculator">
                <form action="">
                    <div className="display">
                        <input type="text" value={input}/>
                    </div>
                    <div>
                        <input type="button" value="C" onClick={handleClear}/>
                        <input type="button" value="+/-"/>
                        <input type="button" value="%"/>
                        <input type="button" value="÷"/>
                    </div>
                    <div>
                        <input type="button" value="7" onClick={() => handleClick("7")}/>
                        <input type="button" value="8" onClick={() => handleClick("8")}/>
                        <input type="button" value="9" onClick={() => handleClick("9")}/>
                        <input type="button" value="X" />
                    </div>
                    <div>
                        <input type="button" value="4" onClick={() => handleClick("4")}/>
                        <input type="button" value="5" onClick={() => handleClick("5")}/>
                        <input type="button" value="6" onClick={() => handleClick("6")}/>
                        <input type="button" value="-"/>
                    </div>
                    <div>
                        <input type="button" value="1" onClick={() => handleClick("1")}/>
                        <input type="button" value="2" onClick={() => handleClick("2")}/>
                        <input type="button" value="3" onClick={() => handleClick("3")}/>
                        <input type="button" value="+"/>
                    </div>
                    <div>
                        <input type="button" value="0" onClick={() => handleClick("0")}/>
                        <input type="button" value="."/>
                        <input type="button" value="="/>
                    </div>
                </form>

            </div>
        </div>
    )
}