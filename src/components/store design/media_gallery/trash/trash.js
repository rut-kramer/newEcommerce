import React from 'react'
import './trash.css'
import trashImg from '../../../../assets/trash.svg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function Trash(props) {
    return (
        <>
            <div className="trash">
                <p className="trash-word">Your trash is empty</p>
                <img className="trash-img" src={trashImg} alt="trashImg" />
            </div>
            <div className="trash-button-div">
                <button className="trash-button">
                    <FontAwesomeIcon className="icon-trash-button"
                        icon={['fas', 'trash-alt']}>
                    </FontAwesomeIcon>
                    <p className="trash-button-word">Empty Trash</p>
                </button>
            </div>
        </>
    )
}
