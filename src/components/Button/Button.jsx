import React from 'react';
import './btnStyle.scss';

const Button = (props) => {
    const {btnCfg, handler} = props;
    const className = `btn --${btnCfg.bgCol}`;
    return (
        <>
            <button type='button' className={className} onClick={handler}> {btnCfg.btnText} </button>
        </>
    );
};

export default Button;