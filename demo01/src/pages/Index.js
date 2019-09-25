import React, { Component } from 'react';
import { Link, Redirect } from "react-router-dom";


class Index extends Component {
    constructor(props) {
        super(props);
        this.state = { 
                list:[
                    {cid:123,title:"list01"},
                    {cid:456,title:"list02"},
                    {cid:789,title:"list03"}
                ]
             
         }
        //  this.props.history.push("/home/");  
    }
    render() { 
      
        return ( 
            <>
           
            <ul>
                {
                    this.state.list.map((item,index)=>{
                        return (
                            <li key={index}>
                               <Link to={'/list/'+item.cid}> {item.title}</Link> 
                            </li>
                        )
                    })
                }
            </ul>
            </>
           
        )
    }
}
export default Index;