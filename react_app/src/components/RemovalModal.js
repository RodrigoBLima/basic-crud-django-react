import React, { Component, Fragment } from "react";
import { Modal, ModalHeader, Button, ModalFooter } from "reactstrap";

import axios from "axios";

import { API_URL } from "../constants/index";

class ConfirmRemovalModal extends Component {
    state = {
        modal: false
    };

    toggle = () => {
        this.setState(previous => ({
            modal: !previous.modal
        }));
    };

    deleteStudent = pk => {
        axios.delete(API_URL + pk).then(() => {
            this.props.resetState();
            this.toggle();
        });
    };

    render() {
        return (
            <Fragment>
                <Button color="danger" onClick={() => this.toggle()}>
                    Remover
                </Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>
                       Realmente deseja exluir este aluno?
                    </ModalHeader>

                    <ModalFooter>
                        <Button type="button" onClick={() => this.toggle()}>
                            Cancelar
                        </Button>
                        <Button
                            type="button"
                            color="primary"
                            onClick={() => this.deleteStudent(this.props.pk)}
                        >
                            Sim
                        </Button>
                    </ModalFooter>
                </Modal>
            </Fragment>
        );
    }
}

export default ConfirmRemovalModal;
