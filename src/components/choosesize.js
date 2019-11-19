import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as Actions from '../actions/actions'
class Choose extends Component {
    render() {
        let fonts = this.props.font;
        return (
            <div>


                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">

                    <div className="panel panel-warning">
                        <div className="panel-heading">
                            <h3 className="panel-title">control</h3>
                        </div>
                        <div className="panel-body">


                            <button type="button" className="btn btn-primary" onClick={() => this.props.on_addsize(fonts)}>tăng</button>
                            <button type="button" className="btn btn-primary" onClick={() => this.props.on_subsize(fonts)}>giảm</button>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
let mapStateToProps = (state) => {
    return { font: state.font };
}
const mapDisPatchToProps = (dispatch, props) => {
    return {
        on_addsize: (color) => {
            dispatch(Actions.setsize(color))
        },
        on_subsize: (color) => {
            dispatch(Actions.subsize(color))
        }
    }


}
export default connect(mapStateToProps, mapDisPatchToProps)(Choose);