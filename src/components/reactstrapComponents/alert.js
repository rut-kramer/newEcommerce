import React, { useState } from 'react';
import { Alert } from 'reactstrap';
import "./alert.css";

const AlertExample = (props) => {
        const [visible, setVisible] = useState(true);

        const onDismiss = () => setVisible(false);

        return (
                // <span className="badge badge-pill badge-secondary">Secondary</span>

                <Alert className="alert__bullcommerce mr-2 mb-0 pb-0 pt-0 d-flex justify-content-center" color="#F5F5F5" isOpen={visible} toggle={onDismiss}>
                        {props.alertContent}
                </Alert>
        );
}

export default AlertExample;