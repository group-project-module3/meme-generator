import React, { Component } from "react"
import { render } from "react-dom"
import Meme from "./meme"
import axios from "axios"

class App extends Component {
    constructor() {
        super() //used to call the constructor of its parent class - required to access variables of parent class
        this.state = {
            dataArr: [],
            inputs:[],
            topInput:"",
            bottomInput:""
        }
        this.inputChange = this.inputChange.bind(this)
        this.input = this.input.bind(this)
        // this.preventReload = this.preventReload.bind(this)
    }

    componentDidMount() {
        axios.get("https://api.imgflip.com/get_memes")
            .then(res => {
                // console.log(res) 
                this.setState({
                    dataArr: res.data.data.memes
                })
            })
    }

inputChange(event){
    event.preventDefault()
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
        const random = Math.floor(Math.random() * this.state.dataArr.length)
        const select = this.state.dataArr.map(image => image.url)
        const all = select[random]
        // console.log(select)
        // console.log(all)
        return (
            <div>
              
                <Meme 
                random={all} 
                topName={"topInput"}
                bottomName={"bottomInput"}
                topValue={this.state.topInput} 
                bottomValue={this.state.bottomInput} 
                change={this.inputChange}
                input={this.input}
                prevent={this.preventReload}
                />
             
            </div>
        )
    }
}

export default App