import React from 'react';
import error500_1 from './error500_1.jpg';
import './errorPage.css';

const ErrorPage500=()=>{
    return(
        <div className ='error-page'>
            <h1>'An Error Happened...'</h1>
            <h3>"Something Crashed Here ..... "</h3>
            <div><img className="error-img" src={error500_1} alt="errorPic"/></div>
        </div>
    );
};

export default ErrorPage500;