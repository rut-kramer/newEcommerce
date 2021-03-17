import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { actions } from '../../../redux/action'

function crudPaper(props) {

  return (
    <>
      <h1>the paper:</h1>

      <div className="data__body">
        {props.papers&&props.papers.map((item, index) => (
          <div className="data__item" key={index}>
            <div className="data__row" >
              <div className="data__cell data__cell_xl">
                <div className="data__main">
                  <div className="data__effect mobile-hide">
                  <button style={{ border: "none" }} onClick={() => {props.deletePaper(item)  }}>
                    <i className="fa fa-trash" style={{ color: "#c3c4ca", fontSize: "1rem"}}>
                      </i></button>
                   </div>
                  <div className="data__effect mobile-hide">
                    <label className="switch"></label></div>
                  <div className="data__cell mobile-hide">
                      <div className="data__content">
                        <strong>{item.name}</strong>
                      </div>
                  </div>
                  <div className="data__cell mobile-hide">
                    <Link onClick={() => {props.setQuote(item);}} to="/paper">
                      <div className="data__content">
                        <strong>עריכת הדף</strong>
                      </div></Link>
                  </div>
                  <div className="data__cell mobile-hide">
                    <Link onClick={() => {props.setQuote(item)  }} to="/showPaper">
                      <div className="data__content">
                        <strong>הצגת הדף</strong>
                      </div></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>)
}

export default connect(
  (state) => {
    return {
      papers:state.quillReducer.papers,
    }
  },
  (dispatch) => {
    return {
      deletePaper: (q) =>{dispatch(actions.deletePaper(q._id))},
        setQuote: (q) =>{dispatch(actions.setQuote(q))},
    }
  }

)(crudPaper);

