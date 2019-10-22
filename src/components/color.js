import React,{Component} from 'react'
class Color extends Component { 
    constructor(props){
        super(props);
        this.state={
            color1:['red','green','blue','silver']
        }}
    showcolor(coLor){
      return{
        backgroundColor : coLor
      };
    }
    mau(color){
      this.props.baccau(color)
    }
    render() 
    {
      let element=this.state.color1.map((color,index)=>{
          return <span key={index}
                       style={this.showcolor(color)} 
                       className={(this.props.color===color)?"vien":""}
                       onClick={()=>this.mau(color)}
                 ></span>

      }  )
    
      return (
        <div>
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                   
                   <div className="panel panel-primary">
                         <div className="panel-heading">
                               <h3 className="panel-title">chọn màu</h3>
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
  export default Color;