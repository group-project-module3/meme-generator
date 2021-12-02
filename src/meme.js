import React from "react"

class Meme extends React.Component{
    constructor(props){
        super()
        this.state = {
            name:props.name,
            imgUrl:props.img,
            topName:"",
            bottomName:"",


        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(e){
        const {name , value} = e.target
        this.setState({[name]:value})
    }
    render(){
        return (
            <div>
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
                 <button>Save Me</button>
                <div className="container">
                <h1>{this.state.topName}</h1>
                <h1>{this.state.bottomName}</h1>
                <img src={this.state.imgUrl} alt={this.state.name} width="500px" height="500px"/>
                </div>
    
            </div>
        )
    }
}

export default Meme