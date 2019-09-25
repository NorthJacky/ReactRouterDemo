import React, { Component } from 'react';


class List extends Component {
    constructor(props) {
        super(props);
        this.state={}
    }
    render() { 
        return(<h2>list page--->{this.state.id}</h2>)
        
    }
    componentDidMount(){
        
        let tempID=this.props.match.params.id
        this.setState({id:tempID})
    }
}
 
export default List;