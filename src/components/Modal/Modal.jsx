import React, {PureComponent} from 'react';
import './Modal.scss';
import Button from "../Button/Button";
import PropTypes from 'prop-types';

class Modal extends PureComponent {

    render() {
        const {header, text, closeButton, closeModal, modalState, actions, close, permitAddToCart} = this.props;
        if (modalState === 'closed') return null;
        return (
            <div className='modal'
                 onClick={e => {
                     // do not close modal if anything inside modal content is clicked
                     e.stopPropagation();
                 }}>
                <div className={ closeButton ? " modal-burger" : "--invisible"}
                     onClick={close}>{closeButton ? "" : null}</div>
                <h2 className="modal-header">{header}</h2>
                <div className="modal-body">
                    <p className="modal-text">{text}</p>

                    <Button btnCfg={actions.get('b1')} handler={permitAddToCart}/>
                    <Button btnCfg={actions.get('b2')} handler={closeModal}/>
                </div>
            </div>
        );
    }
}

Modal.propTypes= {
    header:      PropTypes.string.isRequired,
    text:        PropTypes.string.isRequired,
    closeButton: PropTypes.bool,
    closeModal:  PropTypes.func,
    modalState:  PropTypes.string.isRequired,
    actions:     PropTypes.object.isRequired,
    close:       PropTypes.func
};
Modal.defaultProps = { };

export default Modal;