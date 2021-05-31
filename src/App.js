import React, {PureComponent} from 'react';
import './App.css';
import Button from './components/Button/Button';
import Modal from "./components/Modal/Modal";
//создадим ассоциативный массив свойств модальных окон:
const modalProps = new Map([
    ["m1", {
        header: "Do you want to delete this file?",
        text: "Once you delete this file, it won't be possible to undo this action.\n Are you sure you want to delete it?"
    }],
    ["m2", {
        header: "Хотите еще что ни будь?",
        text: "Задайте действие к выполнению!"
    }],
    ["closed", {
        header: "",
        text: ""
    }]
]);

class App extends PureComponent {
    state = {
        activeModal: "closed",
    };

    openModal = (modalId) => {
        this.setState({activeModal: modalId});
    };

    closeModal = () => {
        this.setState({activeModal: "closed"});
    };

    render() {
        const {activeModal} = this.state;
        const invokeHeader = modalProps.get(activeModal).header;
        const invokeText = modalProps.get(activeModal).text;

        return (

            <div className="App">
                <div className='modals-container'>

                    <Modal className='modal' header={invokeHeader} text={invokeText} modalState={activeModal}/>
                </div>
                <p>{activeModal}</p>
                <Button type='text' backgroundColor={"red"} handler={() => this.openModal("m1")}
                        btnText="Open second modal"/>
                <Button type='text' backgroundColor={"green"} handler={() => this.openModal("m2")}
                        btnText="Open first modal"/>
                <Button type='text' backgroundColor={"blue"} handler={() => this.openModal("closed")}
                        btnText="close"/>
            </div>
        );
    }

}


export default App;
