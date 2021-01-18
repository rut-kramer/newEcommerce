// import React, { useEffect } from 'react'
// import { connect } from 'react-redux';
// import { actions } from '../redux/action'
// import Pager from 'react-pager';
// import { render } from 'react-dom';


// function CrudCategory(props) {


//         useEffect(() => {
//         })

//         return (
//                 <>
//                         <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&amp;display=swap" rel="stylesheet" />
//                         <link rel="stylesheet" media="all" href="css/app.css" />
//                         <link rel="stylesheet" media="all" href="app2.css" />
//                         <link rel="apple-touch-icon" sizes="180x180" href="img/apple-touch-icon.png" />
//                         <link rel="icon" type="image/png" sizes="32x32" href="img/favicon-32x32.png" />
//                         <link rel="icon" type="image/png" sizes="16x16" href="img/favicon-16x16.png" />
//                         <link rel="manifest" href="img/site.webmanifest" />
//                         <link rel="mask-icon" href="img/safari-pinned-tab.svg" color="#5bbad5" />
//                         <div className="page">
//                                 <div className="sidebar js-sidebar">

//                                 </div>
//                                 <div >
//                                         <div className="container__head">
//                                                 <div className="container__title title title_md">Category</div>
//                                                 <div className="container__search search js-search mySearch">
//                                                         <button className="search__action action js-search-open">
//                                                                 <i className="la la-search "></i></button>
//                                                 </div>
//                                                 <div className="container__new new js-new">
//                                                         <button className="new__action action js-new-open" onClick={() => { props.setcomponnet("addCategory") }}>
//                                                                 <i className="la la-plus-circle "></i>
//                                                         </button>
//                                                        </div>
//                                         </div>
//                                         <div className="container__body">
//                                                 <div className="panel js-panel">
//                                                         <div className="panel__head panel__head_line">
//                                                                 <div className="panel__group">
//                                                                         <div className="sort js-sort">
//                                                                                 <div className="sort__dropdown js-sort-dropdown">
//                                                                                         <div className="sort__title">Sort projects by</div>
//                                                                                         <div className="sort__items">
//                                                                                                 <div className="sort__item"><label className="switch sort__switch js-sort-switch"><input className="switch__input" type="radio" name="sort" onChange={console.log("checked")} /><span className="switch__content">A-Z</span></label></div>
//                                                                                                 <div className="sort__item"><label className="switch sort__switch js-sort-switch"><input className="switch__input" type="radio" name="sort" /><span className="switch__content">Budget</span></label></div>
//                                                                                                 <div className="sort__item"><label className="switch sort__switch js-sort-switch"><input className="switch__input" type="radio" name="sort" /><span className="switch__content">Assigned Tasks</span></label></div>
//                                                                                                 <div className="sort__item"><label className="switch sort__switch js-sort-switch"><input className="switch__input" type="radio" name="sort" /><span className="switch__content">Progress</span></label></div>
//                                                                                                 <div className="sort__item"><label className="switch sort__switch js-sort-switch"><input className="switch__input" type="radio" name="sort" /><span className="switch__content">Date Created</span></label></div>
//                                                                                         </div>
//                                                                                         <div className="sort__foot"><button className="sort__btn btn btn_light js-sort-apply">Apply</button></div>
//                                                                                 </div>
//                                                                                 <div className="sort__backdrop backdrop js-sort-backdrop"></div>
//                                                                         </div>
//                                                                 </div>
//                                                         </div>
//                                                         <div className="panel__body">
//                                                                 <div className="panel__tab js-panel-tab"
//                                                                         style={{ display: 'block' }}>
//                                                                         <div className="data data_list">
//                                                                                 <div className="data__container">
//                                                                                         <div className="data__body">
//                                                                                                 {props.categoryList.map((item, index) => (
//                                                                                                         <div className="data__item">
//                                                                                                                 <div className="data__row" >
//                                                                                                                         <div className="data__cell data__cell_xl">
//                                                                                                                                 <div className="data__main">
//                                                                                                                                         <div className="data__effect mobile-hide"><label className="switch">
//                                                                                                                                                 <input className="switch__input" type="button" onClick={async () => { await props.delete(item._id); props.getCategories(); }} />
//                                                                                                                                                 {/* <i className="la la-truck-loading "></i>
//                                                 </input> */}
//                                                                                                                                                 <button>

//                                                                                                                                                         <i className="fa fa-trash" style={{ color: "#c3c4ca", fontSize: "1rem" }}>
//                                                                                                                                                         </i></button>
//                                                                                                                                                 <span className="switch__content">

//                                                                                                                                                 </span></label></div>

//                                                                                                                                         <div className="data__preview" style={{ "backgroundColor": item.color }}>
//                                                                                                                                         </div>
//                                                                                                                                         <div className="data__cell mobile-hide">

//                                                                                                                                         </div>
//                                                                                                                                         <div className="data__wrap">
//                                                                                                                                                 <div className="data__content">
//                                                                                                                                                         <strong>{item.categoryName}</strong></div>
//                                                                                                                                         </div>
//                                                                                                                                 </div>
//                                                                                                                         </div>
//                                                                                                                         <div className="data__cell mobile-hide">
//                                                                                                                                 <div className="data__content">{item.image}</div>
//                                                                                                                         </div>

//                                                                                                                         <div className="data__cell data__cell_action">

//                                                                                                                                 <button onClick={() => { props.setcomponnet("editCategory"); props.setCurrentCategory(item) }} className="action action_stroke" >
//                                                                                                                                         <i className="la la-ellipsis-h "></i>
//                                                                                                                                 </button>

//                                                                                                                         </div>
//                                                                                                                 </div>
//                                                                                                         </div>
//                                                                                                 ))}
//                                                                                         </div>
//                                                                                 </div>
//                                                                         </div>
//                                                                 </div>

//                                                                 <div className="panel__tab js-panel-tab" style={{ display: 'none' }}>
//                                                                         <div className="data data_grid">
//                                                                                 <div className="data__container">
//                                                                                         <div className="data__head">
//                                                                                                 <div className="data__row">
//                                                                                                         <div className="data__cell">
//                                                                                                                 <div className="data__filter">Names<i className="la la-sort-alpha-down "></i></div>
//                                                                                                         </div>
//                                                                                                         <div className="data__cell">
//                                                                                                                 <div className="data__filter">Sales<i className="la la-sort-alpha-down "></i></div>
//                                                                                                         </div>
//                                                                                                         <div className="data__cell">
//                                                                                                                 <div className="data__filter">Rating<i className="la la-sort-alpha-down "></i></div>
//                                                                                                         </div>
//                                                                                                         <div className="data__cell">
//                                                                                                                 <div className="data__filter">Price<i className="la la-sort-alpha-down "></i></div>
//                                                                                                         </div>
//                                                                                                 </div>
//                                                                                         </div>
//                                                                                         <div className="data__body">

//                                                                                         </div>
//                                                                                 </div>
//                                                                         </div>
//                                                                 </div>
//                                                                 <div className="panel__foot">
//                                                                         <div className="pager">
//                                                                                 <a className="pager__arrow action action_icon_before" href="#">
//                                                                                         <i className="la la-angle-left "></i>
//                                 Prev</a>
//                                                                                 <div className="pager__list">
//                                                                                         <a className="pager__link action" href="#">1</a>
//                                                                                         <a className="pager__link action" href="#">2</a>
//                                                                                         <a className="pager__link action active" href="#">3</a>
//                                                                                         <a className="pager__link action" href="#">4</a>
//                                                                                         <a className="pager__link action" href="#">5</a>
//                                                                                 </div>
//                                                                                 <a className="pager__arrow action action_icon_after" href="#">
//                                                                                         Next<i className="la la-angle-right "></i>
//                                                                                 </a>
//                                                                         </div>
//                                                                 </div>
//                                                         </div>
//                                                 </div>
//                                         </div>
//                                 </div>
//                         </div>
//                         {/* <Pager
//                 total={this.state.total}
//                 current={this.state.current}
//                 visiblePages={this.state.visiblePage}
//                 titles={{ first: '<|', last: '>|' }}
//                 className="pagination-sm pull-right"
//                 onPageChanged={this.handlePageChanged}
//             />  */}

//                 </>
//         )
// }
// export default connect(

//         (state) => {

//                 return {

//                         categoryList: state.categoriesReducer.categories
//                 }

//         },
//         (dispatch) => {
//                 return {
//                         getCategories: () => dispatch(actions.getAllCategories()),
//                         setcomponnet: (r) => dispatch(actions.setCurrentComponent(r)),
//                         setCurrentCategory: (n) => dispatch(actions.setCurrentCategory(n)),
//                         delete: (i) => { dispatch(actions.deleteCategory(i)) }
//                 }
//         }
// )(CrudCategory);

