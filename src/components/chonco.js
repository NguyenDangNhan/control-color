import React, { Component } from 'react';
class Choose extends Component {
    upfont(font)
    { this.props.baccau2(font)}
    render() {
        let fonts=this.props.font;
        return (
            <div>


                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">

                    <div className="panel panel-warning">
                        <div className="panel-heading">
                            <h3 className="panel-title">control</h3>
                        </div>
                        <div className="panel-body">
                           
                          
                          <button type="button" className="btn btn-primary" onClick={()=>this.upfont(fonts+1)}>tăng</button>
                          <button type="button" className="btn btn-primary" onClick={()=>this.upfont(fonts-1)}>giảm</button>
                          
                    </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Choose;