// import React, { Component } from 'react'
// import { connect } from "react-redux";
// import { actions } from "../../redux/action";

// ///images
// import productPic1 from "../../assets/products/product-pic-1.png"
// import productPic2 from "../../assets/products/product-pic-2.png"
// import productPic3 from "../../assets/products/product-pic-3.png"
// import productPic5 from "../../assets/products/product-pic-5.png"
// import productPic4 from "../../assets/products/product-pic-4.png"
// import productPic6 from "../../assets/products/product-pic-6.png"
// import productPic7 from "../../assets/products/product-pic-7.png"
// import productPic8 from "../../assets/products/product-pic-8.png"
// import { Link } from 'react-router-dom';
// function Category(props) {
//     return (
//         <div className="Category">

//             <div className="breadcrumbs">
//                 <div className="breadcrumbs__center center">
//                     <ul className="breadcrumbs__list">
//                         <li className="breadcrumbs__item"><Link className="breadcrumbs__link" to="index.html">Home Page</Link></li>
//                         <li className="breadcrumbs__item"><Link className="breadcrumbs__link" to="#">Navigation</Link></li>
//                         <li className="breadcrumbs__item">Eye Care</li>
//                     </ul>
//                 </div>
//             </div>
//             <div className="products products_full section">
//                 <div className="products__center center">
//                     <div className="products__stage stage">- Eye Care Products</div>
//                     <h2 className="products__title title title_mb-lg">Explore the Eye Care <br />Products</h2>
//                     <div className="filters js-filters">
//                         <div className="filters__sorting">
//                             <div className="filters__open js-filters-open">Filter By</div>
//                             <div className="filters__wrap js-filters-wrap">
//                                 <div className="filters__drop drop js-drop">
//                                     <div className="drop__head js-drop-head">Color</div>
//                                     <div className="drop__body js-drop-body">
//                                         <Link className="drop__link js-drop-link" to="#">Red</Link>
//                                         <Link className="drop__link js-drop-link" to="#">Blue</Link>
//                                         <Link className="drop__link js-drop-link" to="#">Green</Link>
//                                         <Link className="drop__link js-drop-link" to="#">Black</Link>
//                                     </div>
//                                 </div>
//                                 <div className="filters__drop drop js-drop">
//                                     <div className="drop__head js-drop-head">Category</div>
//                                     <div className="drop__body js-drop-body">
//                                         <Link className="drop__link js-drop-link" to="#">Treatments</Link>
//                                         <Link className="drop__link js-drop-link" to="#">Moisturizers</Link>
//                                         <Link className="drop__link js-drop-link" to="#">Featured</Link>
//                                     </div>
//                                 </div>
//                                 <div className="filters__drop drop js-drop">
//                                     <div className="drop__head js-drop-head">Price Range</div>
//                                     <div className="drop__body js-drop-body">
//                                         <Link className="drop__link js-drop-link" to="#">$0 - $10</Link>
//                                         <Link className="drop__link js-drop-link" to="#">$10 - $50</Link>
//                                         <Link className="drop__link js-drop-link" to="#">$50 +</Link>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="filters__field field">
//                                 <div className="field__wrap"><select className="field__select">
//                                     <option>Sort By</option>
//                                     <option>Sort By</option>
//                                     <option>Sort By</option>
//                                 </select></div>
//                             </div>
//                         </div>
//                         <div className="filters__tags">
//                             <div className="filters__tag">$0 - $10<button className="filters__remove"></button></div>
//                             <div className="filters__tag">Skincare<button className="filters__remove"></button></div>
//                             <div className="filters__tag">Green<button className="filters__remove"></button></div>
//                         </div>
//                     </div>
//                     <div className="products__list">
//                         {/* //צריך להביא את כל המוצרים בתוך MAP */}
//                         {/* ניסיון להביא את המוצרים בMAP */}
//                         {/* הצלחתי לשלוף מהשרת את השם של המוצר איך אשלוף את שאר הנתונים */}

//                         {/* // המוצר הבסיסי שנמצא בצוך לולאה */}
//                         <div className="product">
//                             <div className="product__view">
//                                 <Link className="product__preview" to="/0/product">
//                                     <img className="product__pic" src={productPic3} alt=""></img></Link>
//                                 <Link className="product__btn btn btn_green" to="/0/cart">Add to Cart</Link>
//                             </div>
//                             <Link className="product__name" to="/0/product">Acne Skin Gel</Link>
//                             <div className="product__details">
//                                 <div className="product__category pink">Treatments</div>
//                                 <div className="product__price">
//                                     <span className="product__actual">$20</span></div>
//                             </div>
//                         </div>


//                         {/*המוצר הבסיסי הקיים ששמתי בהערה  */}
//                         {props.products.map((item, index) => (

//                             <div className="product" onClick={() => props.changeCurrentComponent('ProductOnPageCategory')}
//                                 key={index}>
//                                 {/* // השארתי דוגמא לתצוגת משתמש כי זה אמור להיות עם לינק */}
//                                 {/* <div className="product__view">
//                                     <Link className="product__preview" to="/0/product">
//                                         <img className="product__pic" src={productPic3} alt=""></img></Link>
//                                     <Link className="product__btn btn btn_green" to="/0/cart">Add to Cart</Link>
//                                 </div>
//                                 <Link className="product__name" to="/0/product">{item.name}</Link> */}
//                                 <div className="product__view">
//                                     <div className="product__preview">
//                                         <img className="product__pic" src={productPic3} alt=""></img></div>
//                                     <div className="product__btn btn btn_green">Add to Cart</div>
//                                 </div>
//                                 <div className="product__name">{item.name}</div>
//                                 <div className="product__details">
//                                     <div className="product__category pink">{item.description}</div>
//                                     <div className="product__price">
//                                         <span className="product__actual">{item.price}</span></div>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </div>
//             <div className="newsletter section">
//                 <div className="newsletter__center center">
//                     <div className="newsletter__container">
//                         <div className="newsletter__stage stage">- Our Newsletter</div>
//                         <h2 className="newsletter__title title title_mb-md">Sign Up to our Newsletter</h2>
//                         <form className="newsletter__form">
//                             <div className="newsletter__field field">
//                                 <div className="field__wrap">
//                                     <input className="field__input" type="text" placeholder="Your Email" /></div>
//                             </div>
//                             <div className="newsletter__btns">
//                                 <button className="newsletter__btn btn btn_green btn_wide" type="submit">Sign Up</button></div>
//                         </form>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }




// const mapStateToProps = (state) => {
//     return {
//         products: state.productReducer.products[0] ? state.productReducer.products :
//             [{
//                 name: "banana", description: 'ירקות', amount: '2', category: '',
//                 price: '50',
//             },
//             {
//                 name: "melon", description: 'ירקות', amount: '2', category: '',
//                 price: '4',
//             }]

//     }
// }
// const mapDispatchToProps = (dispatch) => ({
//     changeCurrentComponent: (e) => dispatch(actions.setCurrentComponent(e)),

// })
// export default connect(mapStateToProps, mapDispatchToProps)(Category);
