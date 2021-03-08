import React from 'react'
import { connect } from 'react-redux';

function CrudOrder(props) {

        return (
                <>
                        <div className="page">
                                <div className="sidebar js-sidebar">

                                </div>
                                <div >
                                        <div className="container__head">
                                                <div className="container__title crud_title title_md">Order</div>
                                                <div className="container__search search js-search">
                                                        <button className="search__action action js-search-open">
                                                                <i className="la la-search" onClick={() => { props.setcomponnet("search") }}></i></button>
                                                        <div className="search__dropdown js-search-dropdown">
                                                                <div className="search__field"><input className="search__input js-search-input" type="search" placeholder="Start typing…" />
                                                                        <div className="search__icon"><i className="la la-search "></i></div>
                                                                </div>
                                                        </div>
                                                        <div className="search__backdrop backdrop js-search-backdrop"></div>
                                                </div>
                                        </div>
                                        <div className="container__body">
                                                <div className="panel js-panel">
                                                        <div className="panel__body">
                                                                <div className="panel__tab js-panel-tab"
                                                                        style={{ display: 'block' }}>
                                                                        <div className="data data_list">
                                                                                <div className="data__container">

                                                                                        <div className="data__head">
                                                                                                <div className="data__row">
                                                                                                        <div className="data__cell data__cell_xl" >
                                                                                                                <div className="data__filter" >שם הקונה</div>
                                                                                                        </div>

                                                                                                        <div className="data__cell">
                                                                                                                <div className="data__filter" >כתובת למשלוח </div>
                                                                                                        </div>

                                                                                                        <div className="data__cell">
                                                                                                                <div className="data__filter">סטטוס</div>
                                                                                                        </div>
                                                                                                        <div className="data__cell">
                                                                                                                <div className="data__filter"> מחיר סופי</div>
                                                                                                        </div>
                                                                                                        <div className="data__cell">
                                                                                                                <div className="data__filter">מוצרי קניה</div>
                                                                                                        </div>
                                                                                                        <div className="data__cell">
                                                                                                                <div className="data__filter"> תאריך</div>
                                                                                                        </div>
                                                                                                        <div className="data__cell data__cell_action"></div>
                                                                                                </div>
                                                                                        </div>


                                                                                        <div className="data__body">
                                                                                                {props.orders.map((item, index) => (
                                                                                                        <div className="data__item">
                                                                                                                <div className="data__row" >
                                                                                                                        <div className="data__cell data__cell_xl">
                                                                                                                                <div className="data__main">
                                                                                                                                        <div className="data__cell mobile-hide">
                                                                                                                                        </div>
                                                                                                                                        <div className="data__wrap">
                                                                                                                                                <div className="data__content">
                                                                                                                                                        <strong>{item.user.username}</strong></div>
                                                                                                                                        </div>
                                                                                                                                </div>
                                                                                                                        </div>

                                                                                                                        <div className="data__cell mobile-hide">
                                                                                                                                <div className="data__content">
                                                                                                                                        <strong>{item.userAddress}</strong></div>
                                                                                                                        </div> <div className="data__cell mobile-hide">
                                                                                                                                <div className="data__content">
                                                                                                                                        <strong>{item.status}</strong></div>
                                                                                                                        </div> <div className="data__cell mobile-hide">
                                                                                                                                <div className="data__content">
                                                                                                                                        <strong>{item.totalPrice}</strong></div>
                                                                                                                        </div>

                                                                                                                        <select className="field__select" required='true'>
                                                                                                                                {item.products.map((i, index) => (
                                                                                                                                        i.product && <option>{i.product.name}</option>
                                                                                                                                ))}

                                                                                                                        </select>
                                                                                                                        <div className="field__icon"></div>



                                                                                                                        <div className="data__cell mobile-hide">
                                                                                                                                <div className="data__content">
                                                                                                                                        <strong>{item.date}</strong></div>
                                                                                                                        </div>
                                                                                                                </div>
                                                                                                        </div>
                                                                                                ))}
                                                                                        </div>
                                                                                </div>
                                                                        </div>
                                                                </div>

                                                                <div className="panel__tab js-panel-tab" style={{ display: 'none' }}>
                                                                        <div className="data data_grid">
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
        )
}
export default connect(
        (state) => {
                return {
                        orders: state.ordersReducer.orders
                }
        },
        (dispatch) => {
                return {
                }
        }
)(CrudOrder);

