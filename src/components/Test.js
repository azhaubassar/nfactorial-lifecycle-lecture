import React from 'react';

class Test extends React.Component {
    constructor(props){
        super(props);
        console.log('constructor', props)
        this.state = {
            count: props.args,
            status: 'increment'
        }
    }

    // static getDerivedStateFromProps(props){
    //     console.log('get derived state')

    //     return {"count": props.args};
    // }

    componentDidMount(){
        console.log('did mount', this.props)
    }

    componentDidUpdate(prevProps){
        if(prevProps!=this.props && prevProps.args > this.props.args){
            this.setState({
                status: 'decrement'
            })
        }
    }

    componentWillUnmount(){
        console.log('COMPONENT WILL UNMOUNT')
    }

    render(){
        console.log('render 1')
        return(
            <>
                {console.log('render 2 - return ')}
                <p>{this.props.args}</p>
                <p>{this.state.status}</p>
            </>
        )
    }
}

export default Test;