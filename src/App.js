import React, {PureComponent} from 'react';
import './App.css';
import Button from './components/Button/Button';
import Modal from "./components/Modal/Modal";
import modalConfig from './components/Modal/modalConfig';
import appBtnCfg from './components/Button/appBtnCfg';
import modBtnCfg from './components/Button/modBtnCfg';

class App extends PureComponent {
    state = {
        activeModal: "closed",
    };

    openModal(modalId) {
        this.setState({
            activeModal: modalId,
            closeButton: true
        });
    }

    closeModal = () => {
        this.setState({activeModal: "closed"});
    };
    closeModAtSideClick = ({target}) => {
        if (   target.classList.contains("btn")
            || target.classList.contains('modal')
          ) return;
        else {
            this.setState({activeModal: "closed"});
        }
    };

    render() {
        const {activeModal, closeButton} = this.state;
        const invokeHeader = modalConfig.get(activeModal).header;
        const invokeText = modalConfig.get(activeModal).text;

        return (
            <div className={(activeModal === "closed") ? 'wrapper' : 'wrapper  --darkened'}
                 onClick={this.closeModAtSideClick}>
                <div className={'modals-container'}>
                    <Modal className='modal' header={invokeHeader} text={invokeText}
                           modalState={activeModal} closeModal={this.closeModal}
                           closeButton={closeButton} actions={modBtnCfg} close={this.closeModal}/>

                    <div className={(activeModal === "closed") ? 'btn-section btn-inactive' : 'btn-section'}>
                        <Button btnCfg={appBtnCfg.get('b1')}
                                handler={() => this.openModal("m1")}/>
                        <Button btnCfg={appBtnCfg.get('b2')}
                                handler={() => this.openModal("m2")}/>
                        {/*<Button btnCfg={appBtnCfg.get('b3')}*/}
                        {/*        handler={() => this.openModal("closed")}/>*/}
                    </div>
                </div>
            </div>
        );
    }

}


export default App;
