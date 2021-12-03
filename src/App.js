import React, { Component } from "react"
import { render } from "react-dom"
import Meme from "./meme"
import axios from "axios"

class App extends Component {
    constructor() {
        super() //used to call the constructor of its parent class - required to access variables of parent class
        this.state = {
            inputs:[],
            dataArr: [],
            topInput:"",
            bottomInput:"",
            currentMeme: {},
            previewMeme:{
                top:"",
                meme:{},
                bottom:""
            }

        }
        
        this.handleClick = this.handleClick.bind(this)
        this.inputChange = this.inputChange.bind(this)
        this.input = this.input.bind(this)
        this.handleEdit = this.handleEdit(this)
        this.handleSubmit = this.handleSubmit(this)
    }

    componentDidMount() {
        axios.get("https://api.imgflip.com/get_memes")
            .then(res => {
                // console.log(res.data.data.memes) 
                this.setState((prevState)=> {
                    return { 
                        dataArr: res.data.data.memes, 
                        random: Math.floor(Math.random() * res.data.data.memes.length),
                        currentMeme: res.data.data.memes[Math.floor(Math.random() * res.data.data.memes.length)]
                    }
                })
            })
    }
handleClick(){
    this.setState(prevState =>{
        let random = Math.floor(Math.random() * prevState.dataArr.length)
        return{
            
            currentMeme: prevState.dataArr[random]
        }
    })

}

handleEdit(){
    this.setState(prevState => {
        return{
            previewMeme:{
                top: prevState.topInput,
                meme: prevState.currentMeme,
                bottom: prevState.bottomInput
            }
        }
    })
}

// handleSubmit(){
//     this.setState(prevState => {
//         return{
//             previewMeme:{
//                 top: prevState.topInput,
//                 meme: prevState.currentMeme,
//                 bottom: prevState.bottomInput
//             }
//         }
//     })
// }

inputChange(event){
    // event.preventDefault()
    const { name, value } = event.target
    this.setState({
        [ name ] : value
    })
}
input(event){
event.preventDefault()
this.setState(prevState => ({
inputs:[...prevState.inputs, `${prevState.topInput} ${prevState.bottomInput}`]
}))
}

render() {
        return (
            <div>
              
                <Meme 
                submit={this.handleSubmit}
                random={this.state.currentMeme.url} 
                topName={"topInput"}
                bottomName={"bottomInput"}
                topValue={this.state.topInput} 
                bottomValue={this.state.bottomInput} 
                change={this.inputChange}
                input={this.input}
                />
                <button onClick={this.handleClick}>Refresh</button>
                <button onClick={this.handlePreview}>Preview</button>
             
            </div>
        )
    }
}

export default App