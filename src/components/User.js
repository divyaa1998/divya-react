import { useEffect, useState } from "react";
const User = ({name,location}) => {
       const [count] = useState(0);
       const [count1] = useState(1);
       useEffect(() => {
        const timer =  setInterval(() => {
            console.log('Namasthe React')
         },1000)
          console.log('in use effect');

          return () => {
            clearInterval(timer)
            console.log('in return ')
          }
       },[])
       console.log('render')
     return (
        <div className="user-card">
            <h1>Count: {count}</h1>
            <h1>Count1: {count1}</h1>
           <h2>Name : {name}</h2>
           <h3>Location : {location}</h3>
           <h4>Contact: 99633999987</h4>
        </div>
     )
}
export default User;