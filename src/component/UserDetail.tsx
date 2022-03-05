import React, { useEffect, useState } from "react";
import {useParams,Link} from "react-router-dom"
import { UserListModel } from "../Models/UserListModel";
import { UserService } from "../Services/UserService";
interface URLParams {
    id  : string
}
interface State {
    loading         :   boolean;
    user            :   UserListModel;
    errorMessage    :   string
}
interface Props {}

let UserDetail:React.FC<Props> = () => {
        let {id}    = useParams<URLParams | any>()

        let [state,setState]      = useState<State>({
            loading         : false,
            user            : {} as UserListModel,
            errorMessage    : ''
        })

        useEffect(()=>{
           if(id){
            setState({
                ...state,
                loading     :true,
            })

            UserService.getUser(id).then((response)=>{
                setState({
                    ...state,
                    loading     :false,
                    user        :response.data
                })
            }).catch((error)=>{
                setState({
                    ...state,
                    loading         :false,
                    errorMessage    :error.message
                })
            })
           }
        },[id])

        let {loading,user,errorMessage} = state
        return (
            <React.Fragment>
                <div className="container mt-3">
                    <div className="row">
                        <div className="col">
                            <h1 className="text-success fw-bold">User Detail</h1>
                            <p className="fst-italic">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit deserunt odit explicabo vel distinctio blanditiis laudantium, cumque expedita ipsum ex ipsa modi aliquam illo et sapiente placeat soluta nemo consequatur.</p>
                            <div className="card">
                                <div className="card-header">
                                    <div className="row">
                                        <div className="col">
                                            <h4>Data</h4>
                                        </div>
                                        <div className="col text-end">
                                            <Link className="btn btn-secondary btn-sm" to={'/'}> <i className="fas fa-arrow-left"></i> Kembali</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body">
                                {
                                Object.keys(user).length > 0 &&
                                <ul className="list-group">
                                    <li className="list-group-item">Name : <span className="text-success">{user.name}</span></li>
                                    <li className="list-group-item">Email : <span className="text-success">{user.email}</span></li>
                                    <li className="list-group-item">Address : <span className="text-success">{user.address.street},{user.address.city}</span></li>
                                    <li className="list-group-item">Phone : <span className="text-success">{user.phone}</span></li>
                                    <li className="list-group-item">Website : <span className="text-success">{user.website}</span></li>
                                    <li className="list-group-item">Company : <span className="text-success">{user.company.name}</span></li>
                                </ul>
                            }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        ) 
}

export default UserDetail
