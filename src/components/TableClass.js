import React from "react";
class TableClass extends React.Component{
    constructor(props){
        super(props);
        console.log('table sub child constructor')
    }
    componentDidMount(){
        console.log('table sub child component did mount') 
    }
   render(){
    console.log('table sub child render')
    return (
        <div>
            <h1>Table class</h1>
        </div>
    )
   }
}
export default TableClass