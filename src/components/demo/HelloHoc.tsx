import React,{Component} from 'react';

import HelloClass from './HelloClass';

interface loading{
    loading : boolean
}


function HelloHoc<P>(WappedComponent: React.ComponentType<P>){
    return class extends Component<P & loading>{
        render(){
            const {loading, ...props} = this.props;
            return loading ? <div>loading...</div> : <WappedComponent {...props as P} />
        }
    }
}

export default  HelloHoc(HelloClass);