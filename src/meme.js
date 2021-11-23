import React from "react"

function Meme(props) {
    return (
        <div>
            <form onSubmit = {(e) => {
                e.preventDefault()
            }}>
            <input
            type ="text"
            className="input1"
            name={props.topName}
            value={props.topValue}
            onChange={props.change}
            />

            <br/>

            <input
            type ="text"
            className="input2"
            name={props.bottomName}
            value={props.bottomValue}
            onChange={props.change}
            />

        <br/>

            <button style={{top:"200px"}}>Submit</button>
            </form>
            <div className="container">
            <h1>{props.topValue}</h1>
            <img className="imgs" src={props.random} alt={"Memes"}/>
            <h1>{props.bottomValue}</h1>
            </div>

        </div>
    )
}

export default Meme