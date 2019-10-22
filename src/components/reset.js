import React, { Component } from 'react';
class Reset extends Component {
    reset(font,color)
    { this.props.baccau3(font,color)}
    render() {
        return (
            <div>
                
             
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12" >
            <p>-----------</p>  
            <button type="button" class="btn btn-success" onClick={()=>this.reset(15,'red')}>Reset</button>
            </div>
             </div>  
             

          
    
        );
    }
}
export default Reset;