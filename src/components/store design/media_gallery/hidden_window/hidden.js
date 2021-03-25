import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './hidden.css'
export default function Hidden(props) {
    const { imgA, name } = props;
    return (
        <>
            <div className="hidden-win">
                <div className="frame-hidden-win">
                    <img className="upload-my-file-div" src={imgA} />
                    <div className="hidden-win-p-div">
                        <p className="hidden-win-p" style={{ fontWeight: "bold", marginBottom: "5%" }}>{name.split('.').slice(0, -1).join('.')}</p>
                        <p className="hidden-win-p">type: <a style={{ color: 'rgb(151, 150, 150)' }}>{name.split('.').pop()}</a></p>
                        <p className="hidden-win-p">size: <a style={{ color: 'rgb(151, 150, 150)' }}>1.8 kb</a></p>
                    </div>
                </div>
                <div className="icons-hidden-win">
                    <a className="icon-hidden-win-download" href="../../../../assets/text.odt"
                    // <a className="icon-hidden-win-download" href="../../../../assets/media-gallery/interior-with-white-sofa.png"
                        download>
                        <FontAwesomeIcon className="icon-hidden-win"
                            icon={['fas', 'download']}
                        >
                        </FontAwesomeIcon>
                    </a>
                    <FontAwesomeIcon className="icon-hidden-win"
                        icon={['fas', 'trash-alt']}>
                    </FontAwesomeIcon>
                </div>
            </div>
        </>
    )
}