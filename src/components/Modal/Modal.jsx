import React, {PureComponent} from 'react';
import './Modal.scss';
import Button from "../Button/Button";
import PropTypes from 'prop-types';
import {Link, animateScroll as scroll} from "react-scroll";

class Modal extends PureComponent {

    render() {
        const {header, text, closeButton, closeModal, modalState, actions, close, addingPermitted} = this.props;
        if (modalState === 'closed') return null;
        let oKbtn;
        if (modalState === "cart") { oKbtn = <Button btnCfg={actions.get('Ok')} handler={addingPermitted}/> }
        else if (modalState === "wishList") { oKbtn = <Button btnCfg={actions.get('Ok')} handler={addingPermitted}/> }
        return (

            <div className='modal'
                 onClick={e => {
                     // do not close modal if anything inside modal content is clicked
                     e.stopPropagation();
                 }}>
                <Link  // стр.20 - 28 => встраивание маркера Link для скроллинга
                    activeClass="active"
                    to="modal"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >
                <div className={closeButton ? " modal-burger" : "--invisible"}
                     onClick={close}>{closeButton ? "" : null}</div>
                <h2 className="modal-header">{header}</h2>
                <div className="modal-body">
                    <p className="modal-text">{text}</p>
                    {oKbtn}
                    <Button btnCfg={actions.get('Cancel')} handler={closeModal}/>
                </div>
                </Link>
            </div>

        );
    }
}

Modal.propTypes = {
    header: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    closeButton: PropTypes.bool,
    closeModal: PropTypes.func,
    modalState: PropTypes.string.isRequired,
    actions: PropTypes.object.isRequired,
    close: PropTypes.func
};
Modal.defaultProps = {};

export default Modal;