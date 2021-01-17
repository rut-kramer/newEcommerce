// import React, { Component } from 'react'
// // import $ from 'jquery';
// import { connect } from "react-redux";
// import { actions } from "../../../redux/action"
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


// //zoom
// import ReactImageZoom from 'react-image-zoom';

// ///images
// import cardPic1 from "../../../assets/card-pic-1.png"
// import cardPic2 from '../../../assets/card-pic-2.png'
// import cardPic3 from '../../../assets/card-pic-3.png'


// class Product extends Component {

//     componentDidMount() {
//         this.imageZoom("myimage", "myresult")
//     }
//     imageZoom = (imgID, resultID) => {

//         const moveLens = (e) => {
//             var pos, x, y;
//             /*prevent any other actions that may occur when moving over the image:*/
//             e.preventDefault();
//             /*get the cursor's x and y positions:*/
//             pos = getCursorPos(e);
//             /*calculate the position of the lens:*/
//             x = pos.x - (lens.offsetWidth / 2);
//             y = pos.y - (lens.offsetHeight / 2);
//             /*prevent the lens from being positioned outside the image:*/
//             if (x > img.width - lens.offsetWidth) { x = img.width - lens.offsetWidth; }
//             if (x < 0) { x = 0; }
//             if (y > img.height - lens.offsetHeight) { y = img.height - lens.offsetHeight; }
//             if (y < 0) { y = 0; }
//             /*set the position of the lens:*/
//             lens.style.left = x + "px";
//             lens.style.top = y + "px";
//             /*display what the lens "sees":*/
//             result.style.backgroundPosition = "-" + (x * cx) + "px -" + (y * cy) + "px";
//         }
//         const getCursorPos = (e) => {
//             var a, x = 0, y = 0;
//             e = e || window.event;
//             /*get the x and y positions of the image:*/
//             a = img.getBoundingClientRect();
//             /*calculate the cursor's x and y coordinates, relative to the image:*/
//             x = e.pageX - a.left;
//             y = e.pageY - a.top;
//             /*consider any page scrolling:*/
//             x = x - window.pageXOffset;
//             y = y - window.pageYOffset;
//             return { x: x, y: y };
//         }

//         var img, lens, result, cx, cy;
//         img = document.getElementById(imgID);
//         result = document.getElementById(resultID);
//         /*create lens:*/
//         lens = document.createElement("DIV");
//         lens.setAttribute("class", "img-zoom-lens");
//         /*insert lens:*/
//         img.parentElement.insertBefore(lens, img);
//         /*calculate the ratio between result DIV and lens:*/

//         cx = result.offsetWidth / lens.offsetWidth;
//         cy = result.offsetHeight / lens.offsetHeight;
//         /*set background properties for the result DIV:*/
//         result.style.backgroundImage = "url('" + img.src + "')";
//         result.style.backgroundSize = (img.width * cx) + "px " + (img.height * cy) + "px";
//         /*execute a function when someone moves the cursor over the image, or the lens:*/
//         lens.addEventListener("mousemove", moveLens);
//         img.addEventListener("mousemove", moveLens);
//         /*and also for touch screens:*/
//         lens.addEventListener("touchmove", moveLens);
//         img.addEventListener("touchmove", moveLens);
//     }




//     render() {
//         const propsu = { zoomWidth: 50, scale: 0.5, img: cardPic1, offset: { vertical: 112, horizontal: 112 } };

//         return (

//             <div className="Product">
//                 <div style={{ height: "400px", width: "900px" }}>
//                     <ReactImageZoom {...propsu} />
//                 </div>
//                 <div className="breadcrumbs breadcrumbs_mb-md">
//                     <div className="breadcrumbs__center center">
//                         <ul className="breadcrumbs__list">
//                             <li className="breadcrumbs__item"><Link className="breadcrumbs__link" to="/0">Home Page</Link></li>
//                             <li className="breadcrumbs__item"><Link className="breadcrumbs__link" to="/0/category">Categories</Link></li>
//                             {/* <li className="breadcrumbs__item"><a className="breadcrumbs__link" href="#">Sun Care</a></li> */}
//                             <li className="breadcrumbs__item">Sun Cream 950 ml</li>
//                         </ul>
//                     </div>
//                 </div>
//                 <div className="card section">
//                     <div className="card__center center">
//                         <div className="card__row">
//                             <div className="card__col">
//                                 <div className="card__gallery">
//                                     <div className="card__container" id="gallery">
//                                         <div className="card__slider js-slider-card">
//                                             <div className="card__slide">
//                                             </div>
//                                             {/*  */}
//                                             <div className="card__slide">




//                                                 {/*  */}
//                                                 <Link className="card__preview" data-image="img/card-pic-1.png" data-zoom-image="img/card-pic-big-1.png" to="#">
//                                                     <img className="card__pic" src={cardPic1} alt=""></img></Link>
//                                             </div>
//                                             <div className="card__slide">
//                                                 <Link className="card__preview" data-image="img/card-pic-2.png" data-zoom-image="img/card-pic-big-2.png" to="#">
//                                                     <img className="card__pic" src={cardPic2} alt=""></img></Link></div>
//                                             <div className="card__slide">
//                                                 <Link className="card__preview" data-image="img/card-pic-3.png" data-zoom-image="img/card-pic-big-3.png" href="#">
//                                                     <img className="card__pic" src={cardPic3} alt=""></img></Link></div>
//                                         </div>
//                                     </div>
//                                     <div className="card__wrap">
//                                         <div className="card__status card__status_sale">20% OFF</div>
//                                         <div className="img-zoom-container">
//                                             <img id="myimage" src={cardPic1} width="300" height="240"></img>
//                                         </div>
//                                         {/* <div className="card__preview"><img className="card__pic js-zoom" src={cardPic1} alt="" data-zoom-image="img/card-pic-big-1.png"></img></div> */}
//                                         <div className="card__icon"><svg className="icon icon-magnifier">
//                                             {/* <use xlink:href="img/sprite.svg#icon-magnifier"></use> */}
//                                         </svg></div>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div id="myresult" className="card__col">
//                                 {/* <div id="myresult" className="img-zoom-result"></div> */}
//                                 <div className="card__stage stage">- Selling Fast</div>
//                                 <h1 className="card__title title">Sun Cream</h1>
//                                 <div className="card__details">
//                                     <div className="card__category yellow">Sun Care</div>
//                                     <div className="card__prices">
//                                         <div className="card__old">$30</div>
//                                         <div className="card__actual">$20</div>
//                                     </div>
//                                 </div>
//                                 <div className="card__code">SKU:<span className="card__number">123456789</span></div>
//                                 <div className="card__control">
//                                     <div className="card__counter counter js-counter"><button className="counter__btn counter__btn_minus js-counter-minus" type="button"><svg className="icon icon-arrow-prev">
//                                         {/* <use xlink:href="img/sprite.svg#icon-arrow-prev"></use> */}
//                                     </svg></button><input className="counter__input js-counter-input" type="text" value="1" size="3"></input><button className="counter__btn counter__btn_plus js-counter-plus" type="button"><svg className="icon icon-arrow-next">
//                                         {/* <use xlink:href="img/sprite.svg#icon-arrow-next"></use> */}
//                                     </svg></button></div><a className="card__btn btn btn_green" href="cart.html">Add to Cart</a><button className="card__favorite"><svg className="icon icon-heart-border">
//                                         {/* <use xlink:href="img/sprite.svg#icon-heart-border"></use> */}
//                                     </svg><svg className="icon icon-heart-fill">
//                                             {/* <use xlink:href="img/sprite.svg#icon-heart-fill"></use> */}
//                                         </svg></button>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="details__stage stage">- Product Features</div>
//                 <h1 className="details__title title">Explore the Features</h1>

//                 {/* <div className="details section">
//                     <div className="details__center center">
//                         <div className="details__row"> */}
//                 {/* <div className="details__col">
//                                 <div className="details__stage stage">- Product Features</div>
//                                 <h1 className="details__title title">Explore the Features</h1>
//                             </div> */}
//                 {/* <div className="details__col"> */}
//                 {/* <div className="details__item">
//                                     <div className="details__icon"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none">
//                                         <path d="M15.993 2l7.783 8.203c1.54 1.62 2.587 3.687 3.012 5.937a12.18 12.18 0 0 1-.625 6.7c-.832 2.12-2.242 3.93-4.05 5.205S18.176 30 16 30s-4.303-.68-6.112-1.955-3.22-3.086-4.05-5.205a12.18 12.18 0 0 1-.625-6.7c.425-2.25 1.473-4.315 3.012-5.937L15.993 2z" stroke="#000" stroke-width="2.5" stroke-linejoin="round"></path>
//                                     </svg></div>
//                                     <div className="details__box">
//                                         <div className="details__category">Natural</div>
//                                         <div className="details__text">We are using natural ingredients only when creating our products.</div>
//                                     </div>
//                                 </div> */}
//                 {/* <div className="details__item"> */}
//                 {/* <div className="details__icon"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none">
//                                         <path d="M16 30s11-5.6 11-14V6.2L16 2 5 6.2V16c0 8.4 11 14 11 14z" stroke="#000" stroke-width="2.5" stroke-linejoin="round"></path>
//                                     </svg></div> */}
//                 {/* <div className="details__box">
//                                         <div className="details__category">Full Protection</div>
//                                         <div className="details__text">This product provides broad spectrum SPF 50 and blue light protection.</div>
//                                     </div> */}
//                 {/* </div> */}
//                 {/* <div className="details__item"> */}
//                 {/* <div className="details__icon"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" stroke="#000" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
//                                         <path d="M30 9L17.91 20.875l-6.364-6.25L2 24"></path>
//                                         <path d="M22 9h8v8"></path>
//                                     </svg></div> */}
//                 {/* <div className="details__box">
//                                         <div className="details__category">Trending</div>
//                                         <div className="details__text">It is one of our most popular products that we have on offer.</div>
//                                     </div> */}
//                 {/* </div> */}
//                 {/* </div> */}
//                 {/* </div>
//                     </div>
//                 </div> */}
//                 {/* <div className="review section"> */}
//                 {/* <div className="review__center center"> */}
//                 {/* <div className="review__container"> */}
//                 {/* <div className="review__box">
//                                 <div className="review__stage stage">- Product Reviews</div>
//                                 <h2 className="review__title title">What our Customers are Saying</h2>
//                             </div> */}
//                 {/* <div className="review__wrap"> */}
//                 {/* <div className="review__slider js-slider-review"> */}
//                 {/* <div className="review__item">
//                                         <div className="review__ava"><img className="review__pic" src={ava1} alt="" /></div>
//                                         <div className="review__author">Amy Smith</div>
//                                         <div className="review__text">This is the best website I have ordered something from. I highly recommend.</div>
//                                     </div> */}
//                 {/* <div className="review__item">
//                                         <div className="review__ava"><img className="review__pic" src={ava1} alt="" /></div>
//                                         <div className="review__author">Amy Smith</div>
//                                         <div className="review__text">This is the best website I have ordered something from. I highly recommend. I highly recommend.</div>
//                                     </div> */}
//                 {/* <div className="review__item">
//                                         <div className="review__ava"><img className="review__pic" src={ava1} alt="" /></div>
//                                         <div className="review__author">Amy Smith</div>
//                                         <div className="review__text">This is the best website I have ordered something from. I highly recommend.</div>
//                                     </div> */}
//                 {/* </div> */}
//                 {/* </div> */}
//                 {/* </div> */}
//                 {/* </div> */}
//                 {/* </div> */}
//                 <div className="slider__stage stage">- Explore More</div>
//                 <h2 className="slider__title title title_mb-lg">Related Products</h2>

//                 {/* <div className="slider section">
//                     <div className="slider__center center">
//                         <div className="slider__stage stage">- Explore More</div>
//                         <h2 className="slider__title title title_mb-lg">Related Products</h2> */}
//                 {/* <div className="slider__container">
//                             <div className="slider__list js-slider-products">
//                                 <div className="slider__slide">
//                                     <div className="product">
//                                         <div className="product__sale">20% OFF</div>
//                                         <div className="product__view"><a className="product__preview" href="product.html"><img className="product__pic" src={productPic1} alt="" /></a><a className="product__btn btn btn_green" href="cart.html">Add to Cart</a></div><a className="product__name" href="product.html">Damaged Repair</a>
//                                         <div className="product__details">
//                                             <div className="product__category yellow">Sun Care</div>
//                                             <div className="product__price"><span className="product__old">$30</span><span className="product__actual">$20</span></div>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div className="slider__slide">
//                                     <div className="product">
//                                         <div className="product__view"><a className="product__preview" href="product.html"><img className="product__pic" src={productPic3} alt="" /></a><a className="product__btn btn btn_green" href="cart.html">Add to Cart</a></div><a className="product__name" href="product.html">Acne Skin Gel</a>
//                                         <div className="product__details">
//                                             <div className="product__category pink">Treatments</div>
//                                             <div className="product__price"><span className="product__actual">$20</span></div>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div className="slider__slide">
//                                     <div className="product">
//                                         <div className="product__sale">20% OFF</div>
//                                         <div className="product__view"><a className="product__preview" href="product.html"><img className="product__pic" src={productPic2} alt="" /></a><a className="product__btn btn btn_green" href="cart.html">Add to Cart</a></div><a className="product__name" href="product.html">Night Eye Cream</a>
//                                         <div className="product__details">
//                                             <div className="product__category blue">EYE CARE</div>
//                                             <div className="product__price"><span className="product__old">$30</span><span className="product__actual">$20</span></div>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div className="slider__slide">
//                                     <div className="product">
//                                         <div className="product__view"><a className="product__preview" href="product.html"><img className="product__pic" src={productPic4} alt="" /></a><a className="product__btn btn btn_green" href="cart.html">Add to Cart</a></div><a className="product__name" href="product.html">Dry Skin Rescue</a>
//                                         <div className="product__details">
//                                             <div className="product__category green">Moisturizers</div>
//                                             <div className="product__price"><span className="product__actual">$20</span></div>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div className="slider__slide">
//                                     <div className="product">
//                                         <div className="product__view"><a className="product__preview" href="product.html"><img className="product__pic" src={productPic5} alt="" /></a><a className="product__btn btn btn_green" href="cart.html">Add to Cart</a></div><a className="product__name" href="product.html">Damaged Repair</a>
//                                         <div className="product__details">
//                                             <div className="product__category yellow">Sun Care</div>
//                                             <div className="product__price"><span className="product__actual">$20</span></div>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div className="slider__slide">
//                                     <div className="product">
//                                         <div className="product__view"><a className="product__preview" href="product.html"><img className="product__pic" src={productPic6} alt="" /></a><a className="product__btn btn btn_green" href="cart.html">Add to Cart</a></div><a className="product__name" href="product.html">All In One Gel</a>
//                                         <div className="product__details">
//                                             <div className="product__category blue">FEATURED</div>
//                                             <div className="product__price"><span className="product__actual">$20</span></div>
//                                         </div>
//                                     </div>
//                                 </div> */}
//                 {/* </div> */}
//                 {/* </div> */}
//                 {/* </div>
//                 </div> */}
//                 <div className="newsletter section">
//                     <div className="newsletter__center center">
//                         <div className="newsletter__container">
//                             <div className="newsletter__stage stage">- Our Newsletter</div>
//                             <h2 className="newsletter__title title title_mb-md">Sign Up to our Newsletter</h2>
//                             <form className="newsletter__form">
//                                 <div className="newsletter__field field">
//                                     <div className="field__wrap"><input className="field__input" type="text" placeholder="Your Email" /></div>
//                                 </div>
//                                 <div className="newsletter__btns"><button className="newsletter__btn btn btn_green btn_wide" type="submit">Sign Up</button></div>
//                             </form>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         )
//     }
// }
// // const mapStateToProps = (state) => {
// //     return {
// //         //אפשר לקרוא שם אחר לאוביקט
// //         homeStoreDesign: state.editHomeStoreReducer.homeStoreDesign
// //     }
// // }
// // const mapDispatchToProps = (dispatch) => ({

// //     changeCurrentComponent: (e) => dispatch(actions.setCurrentComponent(e)),
// //     changeLogoYOrN: () => dispatch(actions.setLogoYOrN())

// // })
// export default Product;
// //  connect(mapStateToProps, mapDispatchToProps)(Product);
