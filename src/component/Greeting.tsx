import React from "react";

interface Props {

}

interface State {
    message : string;
}

class Greeting extends React.Component<Props,State> {
    constructor(props:Props){
        super(props)
        this.state = {
            message : 'Hallo...!',
        } as State
    } 

    changeMessage = (greet:string):void => {
        this.setState({
            message: greet
        })
    }
    render(){
        return (
            <React.Fragment>
                <h3>Greeting</h3>
                <div className="constructor">
                    <div className="row">
                        <div className="col">
                            <div className="card">
                                <div className="card-body">
                                    <h1>{this.state.message}</h1>
                                    <div className="row">
                                        <div className="col">
                                            <button className="btn w-100 btn-sm btn-warning" onClick={()=>this.changeMessage('Selamat Pagi')}>Selamat Pagi</button>
                                        </div>
                                        <div className="col">
                                            <button className="btn w-100 btn-sm btn-success" onClick={()=>this.changeMessage('Selamat Siang')}>Selamat Siang</button>
                                        </div>
                                        <div className="col">
                                            <button className="btn w-100 btn-sm btn-primary" onClick={()=>this.changeMessage('Selamat Malam')}>Selamat Malam</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Greeting