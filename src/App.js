import React, { Component } from "react"
import { render } from "react-dom"
import Meme from "./Meme"
import axios from "axios"
import Restoredmeme from "./Restoredmeme"


class App extends Component {
    constructor() {
        super() //used to call the constructor of its parent class - required to access variables of parent class
        this.state = {
            memes: [],
            savedMeme:[]
        }
        
        this.restoredMeme= this.restoredMeme.bind(this)
    }

    componentDidMount() {
        //Get Meme API
        axios.get("https://api.imgflip.com/get_memes")
            .then(res => res.data)
            .then(res => {
                // console.log(res.data.memes) 
                this.setState ({
                    memes :[... res.data.memes],
                })
            })
    }
restoredMeme(newMeme){
    this.setState(prevState =>{
        return{
            savedMeme: [...prevState.savedMeme, newMeme]
        }
    })

}


render() {
    const memeArr = this.state.memes.map(meme =><Meme
    key = {Number(Math.floor(Math.random() * 1000000))}
    id = {meme.id}
    name = {meme.name}
    img = {meme.url} 
    save = {this.currentMeme}
    />)
    const restoredMemes = this.state.savedMeme.map(meme => <Restoredmeme
    key ={Number(Math.floor(Math.random() * 1000000))}
    id = {meme.id}
    name = {meme.name}
    img={meme.imgUrl}
    topName = {meme.topName}
    bottommName = {meme.bottomName}
    delete = {this.deleteMeme}
    edit = {this.editMeme}
    />)
    const randomMeme = memeArr[Math.floor(Math.random() * memeArr.length)]
        return (
            <main>

                <div>
                    {randomMeme}
                    <button onClick={() => this.componentDidMount()}>Refresh Meme</button>
                </div>
                <div>
                    {restoredMemes}
                </div>
            </main>
        )
    }
}

export default App