import React, { useState } from 'react';
import { connect } from 'react-redux';
import { actions } from '../redux/action'
import Modal from 'react-modal';




function CartModal(props) {

        const customStyles = {
                content: {
                        top: '50%',
                        left: '50%',
                        right: 'auto',
                        bottom: 'auto',
                        marginRight: '-50%',
                        transform: 'translate(-50%, -50%)'
                }
        };

        // Modal.setAppElement('#yourAppElement')

        var subtitle;
        const [modalIsOpen, setIsOpen] = useState(false);
        function openModal() {
                setIsOpen(true);
        }

        function afterOpenModal() {
                // references are now sync'd and can be accessed.
                subtitle.style.color = '#f00';
        }

        function closeModal() {
                setIsOpen(false);
        }


        return (
                <div>
                        <button onClick={openModal}>Open Modal</button>
                        <Modal
                                isOpen={modalIsOpen}
                                onAfterOpen={afterOpenModal}
                                onRequestClose={closeModal}
                                style={customStyles}
                                contentLabel="Example Modal"
                        >

                                <h2 ref={_subtitle => (subtitle = _subtitle)}>Cart</h2>
                                <button onClick={closeModal}>close</button>
                                <ul>
                                        {props.products.map((item, index) => (
                                                <li key={index}>
                                                        {item.name}
                                                </li>
                                        ))}
                                </ul>
                        </Modal>
                </div>
        );
}
export default connect(
        (state) => {
                return {
                        products: state.cartReducer.products,
                        url: state.uploadFileReducer.url
                        // uId: state.userReducer.user.uid
                }
        },
        (dispatch) => {
                return {
                        setUsername: (e) => dispatch(actions.setUsername(e)),
                        uploadImage: (x) => dispatch(actions.uploadImage(x)),
                        changeProfile: (x) => dispatch(actions.setProfilePicture(x))
                }
        }

)(CartModal);

