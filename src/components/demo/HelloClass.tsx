import React, {Component} from 'react'

interface Greeting {
    name : string;
    firstName? : string;
    lastName? : string;
}
interface State {
    count : number
}

class HelloClass extends Component<Greeting,State>{
    state : State = {
        count : 0
    }
    static defaultProps ={
        firstName : '',
        lastName : '',
    }
    render(){
        return (
            <>
                <p>你点击了 {this.state.count} 次</p>
                <div onClick={()=>{this.setState({count:this.state.count+1})}}>hello {this.props.name}</div>
            </>
        )
    }
}

export default HelloClass