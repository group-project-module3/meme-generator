import React from "react"


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
            <div>
                <h1>{this.state.topName}</h1>
                <img src={this.state.imgUrl} alt={this.state.imgUrl} width="500px" height="500px"/>
                <h1>{this.state.bottomName}</h1>
                <form>
                    <input
                    type ="text"
                    name="topName"
                    value={this.state.topName}
                    placeholder = "Top Text"
                    onChange={this.handleChange}
                    />
    
                    <br/>
    
                    <input
                    type ="text"
                    name="bottomName"
                    value={this.state.bottomName}
                    placeholder = "bottom Text"
                    onChange={this.handleChange}
                    />
    
                <br/>
                </form>
                 <button onClick={() => {this.props.save(this.state)}}>Save Me</button>
                
    
            </div>
        )
    }
}

export default Meme