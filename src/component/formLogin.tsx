import React from "react";
import { UserModel } from "../Models/UserModels";

interface Props {}
interface State{
    user : UserModel
} 

class FormLogin extends React.Component<Props,State> {
    constructor(props:Props){
        super(props)
        this.state = {
            user : {
                'username' : '',
                'password' : ''
            }
        } as State
    } 

    updateForm = (event:React.ChangeEvent<HTMLInputElement>):void => {
        this.setState({
            user : {
                ...this.state.user,
                [event.target.name] : event.target.value
            }
        })
    }

    handleFormSubmit = (event:React.FormEvent):void => {
        event.preventDefault()
        console.log(this.state.user)
    }

    render(){
        return (
            <React.Fragment>
                <h3>Form Handling</h3>
               <pre>{JSON.stringify(this.state.user)}</pre>
                <div className="row">
                    <div className="col">
                        <div className="card">
                            <div className="card-header bg-succes">
                                <p>Form Login</p>
                            </div>
                            <form onSubmit={this.handleFormSubmit}>
                            <div className="card-body">
                                <div className="form-group">
                                    <label htmlFor="username">Username</label>
                                    <input type="text" id="" name="username" onChange={this.updateForm} value={this.state.user.username} required={true}  className="form-control"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password">Password</label>
                                    <input type="text" id="" name="password" onChange={this.updateForm} value={this.state.user.password} required={true}  className="form-control"/>
                                </div>
                            </div>
                            <div className="card-footer text-end">
                                <button className="btn btn-success">Login</button>
                            </div>
                            </form>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default FormLogin