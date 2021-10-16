import React from 'react'
import { Link } from 'react-router-dom'
function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarContainer">
                <div className="sidebarOptions">
                    <h2 className="sidebarUsername">Dorry Elmah</h2>
                <ul className="sidebarList">
                    <Link to ="/contributions" className="link">
                    <li className="sidebarListItem">Contributions</li>
                    </Link>
                    <Link to ="/createContribution" className="link">
                    <li className="sidebarListItem">Create Contribution</li>
                    </Link>
                    <li className="sidebarListItem">create Contributions</li>
                    <Link to = "/accountDetails" className="link">
                    <li className="sidebarListItem">Account Details</li>
                    </Link>
                    <li className="sidebarListItem">Updata Account</li>
                    <li className="sidebarListItem">Delete Account</li>
                    <li className="sidebarListItem">Home</li>
                    <li className="sidebarListItem">Logout</li>
                </ul>
            </div>
            </div>
            
        </div>
    )
}

export default Sidebar
