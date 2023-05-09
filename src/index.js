import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const cssStyle= {};


var curDate= new Date();
curDate= curDate.getHours();
var curTime= new Date().toLocaleString();
var greet='good';
if(curDate>=1&&curDate<=11){
      greet= 'Good Morning';
      cssStyle.color= 'green';
}else if(curDate>=12&&curDate<=19){
      greet= 'Good Afternoon';
      cssStyle.color= 'orange';
}else{
      greet='Good night';
}

ReactDOM.render( <>   
     <h2  className="td"> {curTime} </h2>
     <div className="container">
     <h1 >Hello sir, <span style={cssStyle}>{greet}</span> </h1>
     </div>
     </>
      ,document.getElementById('root')
      );

