import React, {useState} from 'react'
export default function Calculator(){

    const [] = useState();
    const [] = useState();

    return(
        <div className="container">
            <div className="calculator">
                <form action="">
                    <div>
                        <input type="text" />
                    </div>
                    <div>
                        <input type="button" value="C"/>
                        <input type="button" value="+/-"/>
                        <input type="button" value="%"/>
                        <input type="button" value="÷"/>
                    </div>
                    <div>
                        <input type="button" value="7"/>
                        <input type="button" value="8"/>
                        <input type="button" value="9"/>
                        <input type="button" value="X"/>
                    </div>
                    <div>
                        <input type="button" value="4"/>
                        <input type="button" value="5"/>
                        <input type="button" value="6"/>
                        <input type="button" value="-"/>
                    </div>
                    <div>
                        <input type="button" value="1"/>
                        <input type="button" value="2"/>
                        <input type="button" value="3"/>
                        <input type="button" value="+"/>
                    </div>
                    <div>
                        <input type="button" value="0"/>
                        <input type="button" value="."/>
                        <input type="button" value="="/>
                    </div>
                </form>

            </div>
        </div>
    )
}