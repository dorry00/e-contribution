import React,{useContext} from 'react'
import { AuthContext } from '../Context/AuthContext'
import Sidebar from './Sidebar';
import "../App.css"

function AccountDetails() {
    const {user} = useContext(AuthContext);
    return (
        <>
        
        <div className="AccountDetailsWrapper">
        <Sidebar/>
        <div className="accountDetails">
        hello from account details  
        </div>
                     
        </div>
        </>
    )
}

export default AccountDetails
