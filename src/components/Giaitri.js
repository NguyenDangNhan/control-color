import React from 'react';
function Giaitri(){
return(
        
        <div id="carousel-id" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
                <li data-target="#carousel-id" data-slide-to="0" class=""></li>
                <li data-target="#carousel-id" data-slide-to="1" class=""></li>
                <li data-target="#carousel-id" data-slide-to="2" class="active"></li>
            </ol>
            <div class="carousel-inner">
                <div class="item">
                    <img src="https://vcdn-giaitri.vnecdn.net/2019/09/16/dan-thi-sinh-miss-universe-vietnam-trinh-dien-voi-bikini-1568653071_1200x0.jpg" width="670" />
                    <div class="container">
                        <div class="carousel-caption">
                            <p><h2>Dàn thí sinh Miss Universe Vietnam trình diễn bikini</h2></p>                            
                            <p><a class="btn btn-lg btn-primary" href="https://vnexpress.net/giai-tri/dan-thi-sinh-miss-universe-vietnam-trinh-dien-bikini-3983039.html" role="button">Đọc Bài</a></p>
                        </div>
                    </div>
                </div>
                <div class="item">
                    <img src="https://vcdn-vnexpress.vnecdn.net/2019/09/14/phao-9172-1568264558-2190-1568427215.jpg" width="670" />
                    <div class="container">
                        <div class="carousel-caption">
                            <p><h2 color="black" >Vụ đốt pháo sáng bị khởi tố</h2></p>
                            <p><a class="btn btn-lg btn-primary" href="https://vnexpress.net/phap-luat/khoi-to-vu-dot-phao-sang-o-san-hang-day-3982030.html" role="button">Đọc Bài</a></p>
                        </div>
                    </div>
                </div>
                <div class="item active">
                    <img data-src="holder.js/900x500/auto/#555:#5a5a5a/text:Third slide" alt="Third slide" src="https://i-giaitri.vnecdn.net/2019/09/17/amv1566719710-1568659188-5701-1568659369_660x0.jpg" width="670"/>
                    <div class="container">
                        <div class="carousel-caption">
                            <p><h3>Taylor Swift làm cố vấn The Voice US</h3></p>
                            <p><a class="btn btn-lg btn-primary" href="https://vnexpress.net/giai-tri/taylor-swift-lam-co-van-the-voice-us-3983049.html" role="button">Đọc Bài</a></p>
                        </div>
                    </div>
                </div>
            </div>
            <a class="left carousel-control" href="#carousel-id" data-slide="prev"><span class="glyphicon glyphicon-chevron-left"></span></a>
            <a class="right carousel-control" href="#carousel-id" data-slide="next"><span class="glyphicon glyphicon-chevron-right"></span></a>
        </div>
        
)}
export default Giaitri;