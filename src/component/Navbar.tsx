import React from "react";
import {Link} from "react-router-dom"
interface State {}
interface Props {}

let Navbar:React.FC<Props> = () => {
    
        return (
            <React.Fragment>
               <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
                    <div className="container">
                        <Link to={'/'} className="navbar-brand">React Router</Link>
                        <div className="collapse navbar-collapse">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link className="nav-link" to={'/'}>User List</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to={'/about'}>About</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
               </nav>
            </React.Fragment>
        ) 
}

export default Navbar
