import React, {PureComponent} from 'react';
import './Modal.scss';
import Button from "../Button/Button";
import modBtnCfg from '../Button/modBtnCfg';

class Modal extends PureComponent {
    // state = {};

    render() {
        const {header, text, closeButton, actions, modalState} = this.props;
        // const {} = this.state;
        if (modalState === 'closed') return null;
        return (
            <div className='modal'>
                <h2 className="modal-header">{header}</h2>
                <div className="modal-body">
                    <p className="modal-text">{text}</p>

                    <Button btnCfg ={modBtnCfg.get('b1')} handler={ ()=>{} }/>
                    <Button btnCfg ={modBtnCfg.get('b2')} handler={actions} />
                </div>
            </div>
        );
    }
}

export default Modal;