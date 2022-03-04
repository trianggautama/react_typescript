import React from "react";
import { UserListModel } from "../Models/UserListModel";
import { UserService } from "../Services/UserService";

interface Props{ }
interface State{
    user    : UserListModel[]
}

class UserList extends React.Component<Props,State>{
    
    constructor(props:Props){
        super(props)
        this.state = {
            user :UserService.getAllUsers()
        }
    }
    render() {
        return(
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h1>User List Example</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <table className=" table table-striped table-hover text-center shadow-lg">
                                <thead className="bg-dark text-white">
                                    <tr>
                                        <td>Serial Number</td>
                                        <td>name</td>
                                        <td>Age</td>
                                        <td>Designation</td>
                                        <td>Company</td>
                                        <td>Action</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.user.length > 0 &&
                                        this.state.user.map(user => {
                                            return (
                                                <tr key={user.serial_number}>
                                                    <td>{user.serial_number}</td>
                                                    <td>{user.name}</td>
                                                    <td>{user.age}</td>
                                                    <td>{user.designation}</td>
                                                    <td>{user.company}</td>
                                                    <td>-</td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default UserList