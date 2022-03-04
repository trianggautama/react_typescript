import React from "react";

interface Props{
    name    : string;
    age     : number;
    adress  : string;
}

interface State{

}

class CustomerClass extends React.Component<Props,State>{

    constructor(props:Props){
        super(props)
    }

    render(){
        let {name,age,adress} = this.props
        return(
            <React.Fragment>
                <h3 className="mt-4">Customer Class Compnent</h3>
                <ul className="list-group">
                    <li className="list-group-item">
                        Name : {name}
                    </li>
                    <li className="list-group-item">
                        Age : {age}
                    </li>
                    <li className="list-group-item">
                        Adress : {adress}
                    </li>
                </ul>
            </React.Fragment>
        )
    }
}

export default CustomerClass