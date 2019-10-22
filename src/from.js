import React, { Component } from 'react';
import './tranning/Demo'
import './demo.css';
class From extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            name_save: "",
            pass_save: ""
        }

    }
    savename = (event) => {
        this.setState(
            {
                username: event.target.value
            }
        );
    }
    savepass = (event) => {
        this.setState(
            {
                password: event.target.value
            }
        );
    }
    unreset = (event) => {
        event.preventDefault();
        console.log(this.state);
    }
    delete = () => {
        document.getElementById('h1').value = "";
        document.getElementById('h2').value = "";


    }
    save = () => {
        this.setState(
            {
                name_save: this.state.username,
                pass_save: this.state.password
            }
        )
    }

    render() {
        return (
            <div>

                <div className="panel panel-primary">
                    <div className="panel-heading">
                        <h3 className="panel-title">From</h3>
                    </div>
                    <div className="panel-body">

                        <form onSubmit={this.unreset}>
                            <div className="form-group">
                                <label>username:</label>
                                <input
                                    id="h1"
                                    type="text"
                                    className="form-control"
                                    name="txtname"
                                    onChange={this.savename}/>
                            </div>
                            <input
                                id="h2"
                                type="password"
                                name="passname"
                                className="form-control"
                                onChange={this.savepass} />
                            <br />
                            <button type="submit" className="btn btn-primary" onClick={() => this.save()}>save</button>
                             &nbsp;
                            <button type="button" className="btn btn-primary" onClick={() => this.delete()}>delete</button>
                        </form>
                    </div>
                </div>
                <p className="compo">
                    username: {this.state.name_save}
                    <br />
                    password: {this.state.pass_save}
                </p>
            </div>


        )
    }
}
export default From;