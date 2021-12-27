import React from "react"
import "./App.css"

class Meme extends React.Component{
    constructor(props){
        super()
        this.state = {
            id:props.id,
            name:props.name,
            imgUrl:props.img,
            topName:"",
            bottomName:""
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }
    handleChange(e){
        //Generates preview when taping inside of inputs
        const {name , value} = e.target
        this.setState({[name]:value})
    }
   handleClick(e){
       this.setState({})
   }
    render(){
        return (
            <div className="body">
                <h1 className="header">Dooo Da Meme </h1>
                <h1 className="centerInputs" >{this.state.topName}</h1>
                <img className="centerImages" src={this.state.imgUrl} alt={this.state.imgUrl}/>
                <h1 className="centerInputs">{this.state.bottomName}</h1>

                <br/>

                <form>
                    <input
                    className="meme-input"
                    type ="text"
                    name="topName"
                    value={this.state.topName}
                    placeholder = "Top Text"
                    onChange={this.handleChange}
                    />
    
                    <br/>
    
                    <input
                    className="meme-input"
                    type ="text"
                    name="bottomName"
                    value={this.state.bottomName}
                    placeholder = "bottom Text"
                    onChange={this.handleChange}
                    />
    
                <br/>
                </form>
                 <button className="centerSaveButton" onClick={() => {this.props.save(this.state)}}>Save</button>
                
    
            </div>
        )
    }
}

export default Meme