import React from 'react'
import {Link} from 'react-router-dom'

export default class Homepage extends React.Component {
   render(){
       return (
           <div>
               <h1>A&A's Black Jack</h1>
               <Link to="/SignUp"><button>Register as a new user</button></Link>
               <br />
               <Link to="/login"><button>Log in if you have already registered</button></Link>
           </div>
       )
   }
}