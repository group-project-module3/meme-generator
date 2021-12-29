import React from "react"
<<<<<<< HEAD
import "./App.css"
=======
>>>>>>> main
class Restoredmeme extends React.Component{
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
    }
    handleChange(e){
        //Generates preview when taping inside of inputs
        const {name , value} = e.target
        this.setState({[name]:value})
    }
     render(){
        return(
<<<<<<< HEAD
            <div className="body-2">
            <div className="restored-container">
                <div className="res-container">
                <h1 className="restoredEditInputs" >{this.props.topName}</h1>
                <img className="restoredCenterImage" src={this.state.imgUrl} alt={this.state.name}/>
                <h1 className="restoredEditInputs" >{this.props.bottomName}</h1>
                </div>
                <div className="res-inputs">
                <input  placeholder="Edit Top Text" name="topName" value={this.state.topName} onChange={this.handleChange} style={{margin: "0 auto"}}/>
                <br/>
                <input  placeholder="Edit Bottom Text" name="bottomName" value={this.state.bottomName} onChange={this.handleChange} style={{margin: "0 auto"}}/>
                </div>
                <br/>
                <br/>
                <button className="res-SaveButton" onClick={() => this.props.edit(this.state.id, this.state)}>Save</button>
                <br/>
                <br/>
                <button className="res-DeleteButton" onClick={() => this.props.delete(this.state.id)}>Delete</button>

            </div>
            </div>
=======
            <div>
                <h1>{this.props.topName}</h1>
                <input placeholder="Edit Top Text" name="topName" value={this.state.topName} onChange={this.handleChange}/>
                <img src={this.state.imgUrl} alt={this.state.name} width="500px" height="500px"/>
                <h1>{this.props.bottomName}</h1>
                <input placeholder="Edit Bottom Text" name="bottomName" value={this.state.bottomName} onChange={this.handleChange}/>
                <button onClick={() => this.props.edit(this.state.id, this.state)}>Save</button>
                <br/>
                <button onClick={() => this.props.delete(this.state.id)}>Delete</button>

            </div>
>>>>>>> main
        )
    }
}


export default Restoredmeme