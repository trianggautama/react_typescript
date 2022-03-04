import React, {useState} from "react";

interface State {
    name    : string;
    age     : number;
    adress  : string;
}

let Employe:React.FC = () =>{
    let [state] = useState<State>({
        name    : 'angga',
        age     : 24,
        adress  : 'Guntung Manggis'
    })

    return (
        <React.Fragment>
            <h4>Employe Componnet with State</h4>
            <ul className="list-group">
                <li className="list-group-item">
                    Name : {state.name}
                </li>
                <li className="list-group-item">
                    Age : {state.age}
                </li>
                <li className="list-group-item">
                    Adress : {state.adress}
                </li>
            </ul>
        </React.Fragment>
    )
}

export default Employe