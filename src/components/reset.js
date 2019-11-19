import React, { Component } from 'react';
import * as Actions from '../actions/actions';
import { connect } from 'react-redux'
class Reset extends Component {
    render() {
        return (
            <div>


                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12" >
                    <p>-----------</p>
                    <button type="button" class="btn btn-success" onClick={() => this.props.reset(14, 'red')}>Reset</button>
                </div>
            </div>
        );
    }
}
const mapDisPatchToProps = (dispatch, props) => {
    return {
        reset: (font, color) => {
            dispatch(Actions.setsize(font));
            dispatch(Actions.setColor(color))
        }
    }
}
export default connect(null, mapDisPatchToProps)(Reset);