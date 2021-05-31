import React from 'react';
import './btnStyle.scss';

const Button = (props) => {
    const {backgroundColor, handler, btnText} = props;
    const className = `btn --${backgroundColor}`;
    return (
        <>
            <button type='button' className={className} onClick={handler}> {btnText}</button>
        </>
    );
};

export default Button;