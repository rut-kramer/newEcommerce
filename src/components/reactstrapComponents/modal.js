import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, Label, Form, FormGroup } from 'reactstrap';
import { connect } from 'react-redux';
import { actions } from '../../redux/action';

const ModalExample = (props) => {
        const {
                modal,
                setModal,
                asyncSearchFunction
        } = props;

        const [text, setText] = useState("");

        // const [modal, setModal] = useState(false);

        const toggle = () => setModal(!modal);

        const closeBtn = <button className="close" onClick={toggle}>&times;</button>;

        return (
                <div>
                        {/* <Form inline onSubmit={(e) => e.preventDefault()}>
                                <FormGroup>
                                        <Label for="unmountOnClose">UnmountOnClose value</Label>{' '}
                                        <Input type="select" name="unmountOnClose" id="unmountOnClose" onChange={changeUnmountOnClose}>
                                                <option value="true">true</option>
                                                <option value="false">false</option>
                                        </Input>
                                </FormGroup>
                                {' '}
                                <Button color="danger" onClick={toggle}>{buttonLabel}</Button>
                        </Form> */}
                        <Modal isOpen={modal} toggle={toggle} className="jijij">
                                <ModalHeader toggle={toggle} close={closeBtn}>Search.....</ModalHeader>
                                <ModalBody>
                                        <Input onChange={(e) => setText(e.target.value)} />
                                </ModalBody>
                                <ModalFooter>
                                        <Button color="primary" onClick={() => { toggle(); asyncSearchFunction(text); }}>Search</Button>{' '}
                                </ModalFooter>
                        </Modal>

                </div>
        );
}

export default ModalExample;