import React from 'react';
import './btnStyle.scss';
import PropTypes from 'prop-types';

const Button = (props) => {
    const {btnCfg, handler} = props;
    const className = `btn --${btnCfg.bgCol}`;
    return (
        <>
            <button type='button' className={className} onClick={handler}>
                {btnCfg.btnText}
            </button>
        </>
    );
};
Button.propTypes = {
    btnCfg: PropTypes.exact({
        bgCol: PropTypes.string.isRequired,
        btnText: PropTypes.string.isRequired
    }).isRequired,
    handler: PropTypes.func.isRequired
};
Button.defaultProps = {
    bgCol: "darkred",
    btnText: "button"
};


export default Button;