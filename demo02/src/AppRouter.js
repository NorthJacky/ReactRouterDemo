import React from 'react';
import { BrowserRouter as Router, Route, Link  } from "react-router-dom";
import Index from './pages/Index'
import './Index.css'
import Video from './pages/Video'
import WorkPlace from './pages/WorkPlace'



function AppRouter(){
    let routeConfig =[
        {path:'/',title:'博客首页',exact:true,component:Index},
        {path:'/video/',title:'视频教程',exact:false,component:Video},
        {path:'/WorkPlace/',title:'职场技能',exact:false,component:WorkPlace}
    ]
    return(
        
        <Router>
            <div className="mainDiv">
                <div className="leftNav">
                    <h3>The first navigation </h3>
                    <ul>
                        {
                            routeConfig.map((item,index)=>{
                                return (
                                <li key={index}>
                                     <Link to={item.path}>
                                     {item.title}
                                     </Link>
                                 </li>)
                       })
                       }
                       
                    </ul>
                </div>
                <div className="rightMain">
                 {
                      routeConfig.map((item,index)=>{
                          return (<Route key={index} exact={item.exact} path={item.path}  component={item.component} />)
                      })
                    }
                </div>
            </div>
        </Router>
    );
}
export default AppRouter;