import React, { Component } from "react"
// import { render } from "react-dom"
import Meme from "./Meme"
import axios from "axios"
import Restoredmeme from "./Restoredmeme"
import "./App.js"



class App extends Component {
    constructor() {
        super() //used to call the constructor of its parent class - required to access variables of parent class
        this.state = {
            memes: [],
            savedMeme: []
        }
        this.restoredMeme= this.restoredMeme.bind(this)
        this.deleteMeme = this.deleteMeme.bind(this)
        this.editMeme = this.editMeme.bind(this)
    }

    componentDidMount() {
        //Get Meme API
        axios.get("https://api.imgflip.com/get_memes")
            .then(res => res.data)
            .then(res => {
                // console.log(res.data.memes) 
                this.setState({
                    memes: [...res.data.memes],
                })
            })
    }

    restoredMeme(newMeme) {
        // Function passed to Save button inside Meme component, pushes Memes state into saveMeme arr
        this.setState(prevState => {
            return {
                savedMeme: [...prevState.savedMeme, newMeme]
            }
        })
    }

    deleteMeme(id) {
        // Deletes saved meme by id
        const deletedMeme = this.state.savedMeme.filter(meme => meme.id !== id)
        this.setState(prevState => {
            return {
                savedMeme: prevState.savedMeme = [...deletedMeme]
            }
        })
    }

    editMeme(id, editedMeme) {
        const edits = this.state.savedMeme.map(meme => {
            if (meme.id === id) {
                meme.topName = editedMeme.topName
                meme.bottomName = editedMeme.bottomName
                return meme
            }
            return meme
        })
        // console.log(edits)
        this.setState(prevState => {
            return {
                savedMeme: prevState.savedMeme = [...edits]
            }
        })
    }
render() {
    const memeArr = this.state.memes.map(meme =><Meme
    key = {Number(Math.floor(Math.random() * 1000000))}
    id = {meme.id}
    name = {meme.name}
    img = {meme.url} 
    save = {this.restoredMeme}
    />)
    const restoredMemes = this.state.savedMeme.map(meme => <Restoredmeme
    key ={Number(Math.floor(Math.random() * 1000000))}
    id = {meme.id}
    name = {meme.name}
    img={meme.imgUrl}
    topName = {meme.topName}
    bottomName = {meme.bottomName}
    delete = {this.deleteMeme}
    edit = {this.editMeme}
    />)
    const randomMeme = memeArr[Math.floor(Math.random() * memeArr.length)]
        return (
            <main>

                <div>
                    {randomMeme}
                    <button className="centerRefreshButton" onClick={() => this.componentDidMount()}>Refresh</button>
                    
                </div>
                <div>
                    {restoredMemes}
                </div>
            </main>
        )
    }
}


export default App