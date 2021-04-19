// import React, { useEffect } from 'react';
// import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';
// import { actions } from './../redux/action'


// function StorePerUser(props) {

//     function funcReset(item) {
//         props.setCategories(item.categories ) ;
//         // props.setCategoryListMenu(item.categories)
//         props.setAllOrders(item.orders);
//         props.setCurrentStore(item);
//         props.setProducts(item.storeProducts)
//         props.setFilteredItems(item.storeProducts);
//     }


//     useEffect(() => {
//         props.getStoreByUser(props.user._id);
//     }, [])

//     return (
//         <>
//             <h1>:בחר אחת מהחנויות שברשותך</h1>

//             <div className="data__body">
//                 {props.stores.map((itemy, index) => (
//                     <Link to={"/" + props.objectFields.urlRoute} onClick={() => { funcReset(itemy) }} key={index}>
//                         <div className="data__item">
//                             <div className="data__row" >
//                                 <div className="data__cell data__cell_xl">
//                                     <div className="data__main">
//                                         <div className="data__effect mobile-hide">
//                                             <label className="switch"></label></div>
//                                         <div className="data__cell mobile-hide">
//                                             <div className="data__content">
//                                                 <strong>{itemy.storeName}</strong></div>
//                                         </div>

//                                         <div className="data__cell mobile-hide">

//                                         </div>
//                                         <div className="data__wrap">
//                                             <div className="data__content">
//                                                 <strong>{itemy.storeDescription}</strong></div>
//                                         </div>

//                                     </div>
//                                 </div>

//                             </div>
//                         </div>
//                     </Link>
//                 ))}

//             </div>
//         </>
//     )
// }

// export default connect(
//     (state) => {
//         return {
//             stores: state.userReducer.storesOfUser,
//             user: state.userReducer.user,
//             objectFields: state.storeReducer.objectFields
//         }
//     },
//     (dispatch) => {
//         return {
//             getStoreByUser: (id) => { dispatch(actions.getStoreByUser(id)) },

//             setFilteredItems: (i) => { dispatch(actions.setFilteredItems(i)) },
//             setProducts: (i) => { dispatch(actions.setProducts(i)) },
//             setCategories: (i) => { dispatch(actions.setCategories(i)) },
//             setAllOrders: (i) => { dispatch(actions.setAllOrders(i)) },
//             setCurrentStore: (i) => { dispatch(actions.setCurrentStore(i)) },
//         }
//     }


// )(StorePerUser);

