import React,{useState,useContext} from 'react'
import {Link} from "react-router-dom"
import { AuthContext } from '../../Context/AuthContext';
import "./UserDropDown.css"

function UserDropDown() {
  const {user} = useContext(AuthContext)
    const[UserDropdown, setUserDropdown]=useState(false);
    return (
        <div>
              <div className="dropdown">
            <h4 className="adminHeader">{user.name}</h4>
            <i className=" dropdownIcon fas fa-caret-down" onClick={()=>{setUserDropdown(!UserDropdown)}}></i>
          </div>
          {
            UserDropdown && (
              <div className="dropDownLinks">
                <ul>
                  <Link className="link" to="/createContribution">
                  <li> Create Contributions</li>
                  </Link>
                  <Link className= "link" to="/transactions">
                  <li>My Donations</li>
                  </Link>
                  <Link className="link" to="/userpendingtransactions">
                  <li>Pending Donations</li>
                  </Link>
                  <Link></Link>
                  <Link className="link" to ="/my fundraisers">
                  <li>My Fundraisers</li>
                  </Link>

                </ul>
              </div>
            )
          }
            
        </div>
    )
}

export default UserDropDown