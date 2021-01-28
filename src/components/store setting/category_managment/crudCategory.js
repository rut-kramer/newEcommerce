import React from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { actions } from '../../../redux/action'
import '../product_management/crudProducts'


function CrudCategory(props) {

        return (
                <>
                        <div className="page">
                                <div >
                                        <div className="container__head">
                                                <div className="container__title title title_md">Category</div>
                                                <div className="container__search search js-search mySearch">
                                                        <button className="search__action action js-search-open">
                                                                <i className="la la-search "></i></button>
                                                </div>
                                                <div className="container__new new js-new">
                                                        <Link to="/admin/category/add">הוספה</Link>
                                                        <button className="new__action action js-new-open" onClick={() => { props.setcomponnet("addCategory") }}>
                                                                <i className="la la-plus-circle "></i>
                                                        </button>
                                                </div>
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
                                                                                        <div className="data__body">
                                                                                                {props.categoryList.map((item, index) => (
                                                                                                        <div className="data__item" key={index}>
                                                                                                                <div className="data__row" >
                                                                                                                        <div className="data__cell data__cell_xl">
                                                                                                                                <div className="data__main">
                                                                                                                                        <div className="data__effect mobile-hide"><label className="switch">
                                                                                                                                                <input className="switch__input" type="button" onClick={async () => {
                                                                                                                                                        await props.deleteCategory(item._id);
                                                                                                                                                }} />
                                                                                                                                                <button>
                                                                                                                                                        <i className="fa fa-trash" style={{ color: "#c3c4ca", fontSize: "1rem" }}>
                                                                                                                                                        </i></button>
                                                                                                                                                <span className="switch__content">
                                                                                                                                                </span></label></div>
                                                                                                                                        <div className="data__preview" style={{ "backgroundColor": item.color }}>
                                                                                                                                        </div>
                                                                                                                                        <div className="data__cell mobile-hide">
                                                                                                                                        </div>
                                                                                                                                        <div className="data__wrap">
                                                                                                                                                <div className="data__content">
                                                                                                                                                        <strong>{item.categoryName}</strong></div>
                                                                                                                                        </div>
                                                                                                                                        <div className="data__wrap">
                                                                                                                                                <div className="data__content">
                                                                                                                                                        <strong>{item.masterCategory}</strong></div>
                                                                                                                                        </div>
                                                                                                                                </div>
                                                                                                                        </div>
                                                                                                                        <div className="data__cell mobile-hide">
                                                                                                                                <div className="data__content">{item.image}</div>
                                                                                                                        </div>
                                                                                                                        <div className="data__cell data__cell_action">
                                                                                                                                <button onClick={() => { props.setcomponnet("editCategory"); props.setCurrentCategory(item) }} className="action action_stroke" >
                                                                                                                                        <i className="la la-ellipsis-h "></i>
                                                                                                                                </button>
                                                                                                                        </div>
                                                                                                                </div>
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
                                                                                        <a className="pager__link action active" href="#">3</a>
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
        )
}
export default connect(
        (state) => {
                return {
                        categoryList: state.categoriesReducer.categories
                }
        },
        (dispatch) => {
                return {
                        setcomponnet: (r) => dispatch(actions.setCurrentComponent(r)),
                        setCurrentCategory: (n) => dispatch(actions.setCurrentCategory(n)),
                        deleteCategory: (i) => { dispatch(actions.deleteCategory(i)) }
                }
        }
)(CrudCategory);

