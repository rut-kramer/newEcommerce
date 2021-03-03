import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { actions } from '../../../redux/action'
import createAttribute from './createAttribute';
import '../product_management/crudProducts'


function CrudAttributes(props) {

        function askDeleteAttributes(i) {
                if (window.confirm("אם אתה בטוח שברצונך למחוק את התכונה"))
                        props.deleteAttributes(i)
        }
        return (
                <>
                        <div className="page">
                                <div >
                                        <div className="container__head">
                                                <div className="container__title crud_title title_md">Attribute</div>
                                                <div className="container__search search js-search mySearch">
                                                        <button className="search__action action js-search-open">
                                                                <i className="la la-search "></i></button>
                                                </div>
                                                {/* <div className="container__new new js-new">
                                                     
                                                        <button className="new__action action js-new-open" onClick={() => { props.setcomponnet("AddCategory") }}>
                                                                <i className="la la-plus-circle "></i>
                                                        </button>
                                                </div> */}
                                        </div>
                                        <div className="container__body">
                                                <div className="panel js-panel">
                                                        <div className="panel__head panel__head_line">
                                                                <div className="panel__group">
                                                                </div>
                                                        </div>
                                                        <div className="panel__body">
                                                                <div className="panel__tab js-panel-tab"
                                                                        style={{ display: 'block' }}>
                                                                        <div className="data data_list">
                                                                                <div className="data__container">

                                                                                        <div className="data__head">
                                                                                                <div className="data__row">
                                                                                                        <div className="data__cell data__cell_xl" >
                                                                                                                <div className="data__filter" >מחיקה</div>
                                                                                                        </div>
                                                                                                        <div className="data__cell">
                                                                                                                <div className="data__filter">שם תכונה</div>
                                                                                                        </div>
                                                                                                        <div className="data__cell">
                                                                                                                <div className="data__filter" >סלוג </div>
                                                                                                        </div>

                                                                                                        <div className="data__cell">
                                                                                                                <div className="data__filter"> מונחים</div>
                                                                                                        </div>

                                                                                                        <div className="data__cell data__cell_action"></div>
                                                                                                </div>
                                                                                        </div>


                                                                                        <div className="data__body">
                                                                                                {props.attributesList && props.attributesList.map((item, index) => (

                                                                                                        <div className="data__item" key={index}>
                                                                                                                <button className="accordion">

                                                                                                                        <div className="data__row" >
                                                                                                                                <div className="data__cell data__cell_xl">
                                                                                                                                        <div className="data__main">
                                                                                                                                                <div className="data__effect mobile-hide"><label className="switch">
                                                                                                                                                        <input className="switch__input" type="button" onClick={() => { askDeleteAttributes(item._id); }} />
                                                                                                                                                        <button style={{ border: "none" }}>
                                                                                                                                                                <i className="fa fa-trash" style={{ color: "#c3c4ca", fontSize: "1rem"}}>
                                                                                                                                                                </i></button>
                                                                                                                                                        {/* <span className="switch__content"></span> */}
                                                                                                                                                </label></div>

                                                                                                                                                <div className="data__cell mobile-hide">
                                                                                                                                                        <div className="data__wrap">
                                                                                                                                                                <div className="data__content">
                                                                                                                                                                        <strong>{item.name}</strong></div>
                                                                                                                                                        </div>
                                                                                                                                                </div>
                                                                                                                                        </div>
                                                                                                                                </div>
                                                                                                                                <div className="data__cell mobile-hide">
                                                                                                                                        <div className="data__content">{item.slug}</div>
                                                                                                                                </div>
                                                                                                                                <div className="data__cell data__cell_action">
                                                                                                                                        <button onClick={() => { props.setcomponnet("EditAttribute"); props.setCurrentAttribute(item) }} className="action action_stroke" >
                                                                                                                                                <i className="la la-ellipsis-h "></i>
                                                                                                                                        </button>
                                                                                                                                </div>
                                                                                                                        </div>
                                                                                                                </button>
                                                                                                                <div className="panel1">
                                                                                                                        <div>
                                                                                                                                <div className="data__content">
                                                                                                                                        <h5>:מונחים</h5>

                                                                                                                                        {item.terms && item.terms.map((term, index) => (
                                                                                                                                                <div>
                                                                                                                                                        {/* <strong>{term&&term._id}</strong> 
                                                                                <strong>{term&&term}</strong>  */}
                                                                                                                                                        <strong>{term && term.name}</strong>
                                                                                                                                                </div>
                                                                                                                                        ))}


                                                                                                                                </div>  </div> </div>

                                                                                                        </div>
                                                                                                ))}
                                                                                        </div>
                                                                                </div>


                                                                        </div>
                                                                </div>
                                                                <div className="panel__foot">
                                                                        <div className="pager">
                                                                                <a className="pager__arrow action action_icon_before" href="#">
                                                                                        <i className="la la-angle-left "></i>
                                                                                                             Prev</a>
                                                                                <div className="pager__list">
                                                                                        <a className="pager__link action" href="#">1</a>
                                                                                        <a className="pager__link action" href="#">2</a>
                                                                                        <a className="pager__link action crud_active" href="#">3</a>
                                                                                        <a className="pager__link action" href="#">4</a>
                                                                                        <a className="pager__link action" href="#">5</a>
                                                                                </div>
                                                                                <a className="pager__arrow action action_icon_after" href="#">
                                                                                        Next<i className="la la-angle-right "></i>
                                                                                </a>
                                                                        </div>
                                                                </div>
                                                        </div>
                                                </div>
                                        </div>
                                </div>
                        </div>
                </>
                //       <div></div>
        )
}
export default connect(
        (state) => {
                return {
                        attributesList: state.attributeReducer.attributes,
                }
        },
        (dispatch) => {
                return {
                        setcomponnet: (r) => dispatch(actions.setCurrentComponent(r)),
                        setCurrentAttribute: (n) => dispatch(actions.setCurrentAttribute(n)),
                        deleteAttributes: (p) => dispatch(actions.deleteAttributes(p)),
                }
        }
)(CrudAttributes);

