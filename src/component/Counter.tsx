import React, { useState } from "react";

interface State {
    count : number;
}

interface Props {

}

let Counter:React.FC<Props> = () => {
        
        let [state,setState] = useState<State>({
            count : 0,
        })

        const increment = () => {
            setState({
                count : state.count + 1
            })
        }

        const decrement = () => {
            if(state.count > 0){
                setState({
                    count : state.count - 1
                })
            }
        }

        return (
            <React.Fragment>
                <h4>Counter Event Example</h4>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="card">
                                <div className="card-body">
                                    <h1>{state.count}</h1>
                                    <button className="btn btn-danger m-1" onClick={decrement}> -</button>
                                    <button className="btn btn-primary m-1" onClick={increment}> +</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        ) 
}

export default Counter
