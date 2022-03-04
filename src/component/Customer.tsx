import React from "react";

interface Props{
    name?    : string;
    age?     : number;
    adress?  : string;
}

let Customer:React.FC<Props> = ({name,age,adress}) => {
   
    return(
        <React.Fragment>
                <h3 className="mt-4">Customer Component : </h3>
                <ul className="list-group ">
                    <li className="list-group-item">
                        Name : {name}
                    </li>
                    <li className="list-group-item">
                        Age : {age} yearsold
                    </li>
                    <li className="list-group-item">
                        Adress : {adress}
                    </li>
                </ul>
        </React.Fragment>
    )
}

export default Customer