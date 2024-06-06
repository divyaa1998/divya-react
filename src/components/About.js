import User from "./User";
import UserClass from "./UserClass";
import React from "react";
import TableClass from "./TableClass";
class About extends React.Component{
    constructor(props){
        super(props);
        // console.log('parent constructor');
    }
    componentDidMount(){
        // console.log('parent component didmount')
     }
    render(){
        // console.log('parent render');
        return (
            <div>
              <h1>About Us</h1>
        <User />
              {/* <UserClass  /> */}
              {/* <UserClass name={"second"} location={"Hyd (class)"} />
              <UserClass name={"third"} location={"Hyd (class)"} /> */}
        
            </div>
          );
    }
  
}


export default About;
