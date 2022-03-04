import React from "react";

interface Props {

}

interface State {
    name    : string;
    age     : number;
    adress  : string;
}

class EmployeClass extends React.Component <Props,State>{

    constructor (props:Props){
        super(props)
        this.state = {
            name    : 'tri angga tu',
            age     :24,
            adress  :'Komplek Chandra Utama'
        } as State
    }

    render(){

        return(
            <React.Fragment>
                <h4>Employe Class with State</h4>
                <ul className="list-group">
                <li className="list-group-item">
                    Name : {this.state.name}
                </li>
                <li className="list-group-item">
                    Age : {this.state.age}
                </li>
                <li className="list-group-item">
                    Adress : {this.state.adress}
                </li>
            </ul>
            </React.Fragment>
        )
    }
}

export default EmployeClass