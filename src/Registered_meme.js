import React from "react"
class Registered_meme extends React.Component{
    constructor(props){
        super()
        this.state = {
            topInput:"",
            bottomInput:"",
            imgUrl:props.img

        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(e){
        const {name , value} = e.target
        this.setState({[name]:value})
    }


    render(){
        return(
            <div>

            </div>
        )
    }


}

export default Registered_meme