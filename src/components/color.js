import React,{Component} from 'react'
import * as Constans from '../constans/actionTypes'
import {connect} from 'react-redux'
import * as Actions from '../actions/actions'
class Color extends Component { 
    showcolor(coLor){
      return{
        backgroundColor : coLor
      };
    }
    render() 
    {
      let element=Constans.listcolor.map((color,index)=>{
          return <span key={index}
                       style={this.showcolor(color)} 
                       className={(this.props.color===color)?"vien":""}
                       onClick={()=>this.props.on_setcolor(color)}
                 ></span>

      }  )
    
      return (
        <div>
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                   
                   <div className="panel panel-primary">
                         <div className="panel-heading">
                         <h3 className="panel-title">choose color</h3>
                         </div>
                         <div className="panel-body">
                               {element}
                         </div>
                   </div>
                   
        </div>
        </div>
      );
    }
  }
  const mapStateToProps=(state)=>{
    return {color:state.Color}
  }
  const mapDisPatchToProps=(dispatch,props)=>{
    return{
             on_setcolor:(color)=>{
                  dispatch(Actions.setColor(color))
             }
    }
  }
  export default connect(mapStateToProps,mapDisPatchToProps)(Color);