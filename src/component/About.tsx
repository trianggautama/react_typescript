import React from "react";
import {Link} from 'react-router-dom'

interface State {}
interface Props {}

let About:React.FC<Props> = () => {
        return (
            <React.Fragment>
                <div className="container mt-3">
                    <div className="row">
                        <div className="col">
                            <h1 className="text-success fw-bold">About page</h1>
                            <p className="fst-italic">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit deserunt odit explicabo vel distinctio blanditiis laudantium, cumque expedita ipsum ex ipsa modi aliquam illo et sapiente placeat soluta nemo consequatur.</p>
                            <div className="card">
                                <div className="card-header">
                                    <div className="row">
                                        <div className="col">
                                            <h4>About</h4>
                                        </div>
                                        <div className="col text-end">
                                            <Link className="btn btn-secondary btn-sm" to={'/'}> <i className="fas fa-arrow-left"></i> Kembali</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        ) 
}

export default About
