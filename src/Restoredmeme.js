import React from "react"
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
            <div>
                <h1>{this.props.topName}</h1>
                <h1>{this.props.bottomName}</h1>
                <input placeholder="Edit Top Text" name="topName" value={this.state.topName} onChange={this.handleChange}/>
                <img src={this.state.imgUrl} alt={this.state.name} width="500px" height="500px"/>
                <input placeholder="Edit Bottom Text" name="bottomName" value={this.state.bottomName} onChange={this.handleChange}/>
                <button onClick={() => this.props.edit(this.state.id, this.state)}>Save</button>
                <br/>
                <button onClick={() => this.props.delete(this.state.id)}>Delete</button>

            </div>
        )
    }
}


export default Restoredmeme