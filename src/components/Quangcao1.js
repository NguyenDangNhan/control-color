import React from 'react';
function thongbao(er){
     alert(er);
}
function Quangcao1(element) {
    return (
        <div>
            <a href={element.link} onClick={()=>{thongbao(element.ten)}} >
                Quảng Cáo
                <img width={element.dai} height={element.rong} src={element.noidung}  />
            </a>
        </div>
    )
}
export default Quangcao1;
