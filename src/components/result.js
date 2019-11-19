import React, { Component } from 'react';
import { connect } from 'react-redux';


class Result extends Component {

  bodercolor(color, font) {
    return {
      borderColor: color,
      fontSize: font
    }
  }

  render() {
    return (
      <div>


        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <p>color: {this.props.color} - font size {this.props.font}px</p>
          <div id="content" style={this.bodercolor(this.props.color, this.props.font)}>thong tin</div>



        </div>
      </div>
    );
  }
}
let mapStateToProps = (state) => {
  return {
    font: state.font,
    color: state.Color
  };
}
export default connect(mapStateToProps, null)(Result);
