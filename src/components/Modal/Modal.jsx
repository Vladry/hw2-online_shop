import React, {PureComponent} from 'react';
import './Modal.scss';
import Button from "../Button/Button";

class Modal extends PureComponent {

    render() {
        const {header, text, closeButton, closeModal, modalState, actions} = this.props;
        if (modalState === 'closed') return null;
        return (
            <div className='modal'>
                <h2 className="modal-header">{header}</h2>
                <p>{closeButton && "//TODO: Допилить крестик закрытия окна!"}</p>
                <div className="modal-body">
                    <p className="modal-text">{text}</p>

                    <Button btnCfg ={actions.get('b1')} handler={ ()=>{} }/>
                    <Button btnCfg ={actions.get('b2')} handler={closeModal} />
                </div>
            </div>
        );
    }
}

export default Modal;