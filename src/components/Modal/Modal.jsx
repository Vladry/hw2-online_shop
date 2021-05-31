import React, {PureComponent} from 'react';
import './Modal.scss';
import Button from "../Button/Button";

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
                    <Button type='text' backgroundColor={"darkred"} onClick={()=>{}}
                            btnText="Ok"/>
                    <Button type='text' backgroundColor={"darkred"} onClick={()=>{}}
                            btnText="Cancel"/>
                </div>
            </div>
        );
    }
}

export default Modal;