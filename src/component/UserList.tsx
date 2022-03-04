import React, { useEffect, useState } from "react";
import { UserListModel } from "../Models/UserListModel";
import { UserService } from "../Services/UserService";

interface Props{ }
interface State{
    loading          : boolean;
    users            : UserListModel[];
    errorMessage    : string;
}

let UserList:React.FC<Props> = () => {

   let [state,setState] = useState<State>({
       loading          : false,
       users            : [] as UserListModel[],
       errorMessage     : '' 
   })

   useEffect(()=>{
    setState({
        ...state,
        loading :true
    })

       UserService.getAllUsers().then((response)=>{
        setState({
            ...state,
            loading     : false,
            users       : response.data
        })

       }).catch((error)=>{
        setState({
            ...state,
            loading         : false,
            errorMessage    : error.message
        })
       })
   },[])

    return( 
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h1>Get data from server with axios</h1>
                        <div className="table-responsive">
                            <table className="table table-striped table-bordered table-hover shadow-lg text-center">
                                <thead className="bg-dark text-white">
                                    <tr>
                                        <th>serial number</th>
                                        <th>name</th>
                                        <th>email</th>
                                        <th>address</th>
                                        <th>phone</th>
                                        <th>website</th>
                                        <th>company</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        state.users.length > 0 && state.users.map(user => {
                                            return (
                                                <tr key={user.id}>
                                                    <td>{user.id}</td>
                                                    <td>{user.name}</td>
                                                    <td>{user.email}</td>
                                                    <td>{user.address.street}, {user.address.city}</td>
                                                    <td>{user.phone}</td>
                                                    <td>{user.website}</td>
                                                    <td>{user.company.name}</td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}


export default UserList