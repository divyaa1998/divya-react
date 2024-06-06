import React from 'react';
import TableClass from './TableClass';
class UserClass extends React.Component{
     constructor(props){
       super(props);
      this.state = {
        userinfo:{
            name:'dummy',
            id:1234
        }
      }
       console.log('child constructor')
     }
   async   componentDidMount(){
      this.timer = setInterval(() => {
         console.log('namasthe react')
      },1000)
      const data = await fetch('https://api.github.com/users/divya1998');
      const json = await data.json();
  
   this.setState({
    userinfo:json
   })
        console.log('child component didmount')
     }
     componentDidUpdate(){
        console.log('component updated');
     }
     componentWillUnmount(){
      clearInterval(this.timer)
        console.log('component unmounted');
     }
    render(){
        console.log(this.props.name+'child render')
        const {login,id} = this.state.userinfo;
     
        return (
            <div className="user-card">
               
      
               <h2>Name : {login}</h2>
               <h3>id : {id}</h3>
               <h4>Contact: 99633999987</h4>
         
            </div>
         )
    }
}
export default UserClass;