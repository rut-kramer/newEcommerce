// import React from 'react'
// import { connect } from "react-redux";
// import { actions } from "../../redux/action";
// import productPic1 from "../../assets/products/product-pic-1.png"
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


// //בתוכ הסוגריים של הפונקציה מקבלים את הפרופס
// function FitureProduct(props) {




//     return (
//         <>
//             {
//                 props.products.map((item, index) => (

//                     <div className="product" key={index}>
//                         <div className="product__sale">20% OFF</div>
//                         <div className="product__view">
//                             <Link className="product__preview" to="/0/product">
//                                 {/* //כאן צריך לשלוף את התמונה של כל מוצר ספציפי */}
//                                 <img className="product__pic" src={productPic1} alt=""></img>
//                             </Link>
//                             <Link className="product__btn btn btn_green" onClick={()=>{props.addProductToCrat(item)}} to="/0/cart">Add to Cart</Link>
//                         </div>
//                         <Link className="product__name" to="/0/product">{item.name}</Link>
//                         <div className="product__details">
//                             {/* תנאי שאם לא קיים במוצר קטגוריה שלא יציג */}
//                             {item.category &&
//                                 <div className="product__category "
//                                     style={{
//                                         // color: item.category.color,
//                                         backgroundColor: item.category.color,
//                                         opacity: 0.1
//                                     }}>
//                                     <p style={{ color: item.category.color }}>{item.category.categoryName}</p>
//                                     {/* {item.category.categoryName} */}
//                                 </div>
//                             }
//                             <div className="product__price">
//                                 <span className="product__old">20$</span>
//                                 <span className="product__actual">{item.price}</span>
//                             </div>
//                         </div>
//                     </div>
//                 ))
//             }
//         </>
//     )
// }
// const mapStateToProps = (state) => {
//     return {
//         //אפשר לקרוא שם אחר לאוביקט
//         products: state.productReducer.products,
//         //האם בשביל לקבל את צבע הקטגוריה אני מביאה את המערך של הקטגוריות?
//         // categories: state.categoriesReducer.categories

//     }
// }
// const mapDispatchToProps = (dispatch) => ({

//     addProductToCrat:(n)=>dispatch(actions.addToCart({product:n,amount:1}))
// })
// export default connect(mapStateToProps, mapDispatchToProps)(FitureProduct);


// /////////////////////////////


