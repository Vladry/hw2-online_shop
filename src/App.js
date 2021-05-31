import React, {PureComponent} from 'react';
import './App.css';
import Button from './components/Button/Button';
import Modal from "./components/Modal/Modal";
import modalConfig from './components/Modal/modalConfig';
import appBtnCfg from './components/Button/appBtnCfg';

class App extends PureComponent {
    state = {
        activeModal: "closed",
    };

    openModal(modalId) {
        this.setState({activeModal: modalId});
    }

    closeModal(){
        this.setState({activeModal: "closed"});
        console.log('activeModal= ', this.state.activeModal);
    }

    render() {
        const {activeModal} = this.state;
        const invokeHeader = modalConfig.get(activeModal).header;
        const invokeText = modalConfig.get(activeModal).text;

        return (

            <div className="App">
                <div className='modals-container'>
                    <Modal className='modal' header={invokeHeader} text={invokeText} modalState={activeModal} actions={()=>this.closeModal()} />
                </div>
                <Button btnCfg={appBtnCfg.get('b1')}
                        handler={() => this.openModal("m1")}/>
                <Button btnCfg={appBtnCfg.get('b2')}
                        handler={() => this.openModal("m2")}/>
                {/*<Button btnCfg={appBtnCfg.get('b3')}*/}
                {/*        handler={() => this.openModal("closed")}/>*/}
            </div>
        );
    }

}


export default App;
