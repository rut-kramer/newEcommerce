// import React, { useEffect } from 'react';
// import { actions } from '../redux/action';
// import { connect } from 'react-redux';
// import cartReduser from '../redux/reducers/cartReduser';
// import { useCookies } from "react-cookie";
// import { Link } from 'react-router-dom';
//    var y=1

// function Cart(props) {
//         const [cookies, setCookie] = useCookies(["order"]);

//         useEffect(()=>{
//                 props.setUser(props.user._id);
//              var t=cookies.order;
//                if(y==1){
//              props.setCart(t)
//             y=2
//         }  
//         },[]) 
//                window.addEventListener("beforeunload", (ev) => 
//         {
//                ev.preventDefault();
//             setCookie("order", props.cart, {
//                 path: "/"
//               });
//         });

//            const funcSubmit = () => {
//             props.newOrder(props.cart)
//         }

// function callcTotalPrice()
// {
//   var call=0;
//   props.cart.product.forEach(element => {
//     for (let index = 0; index < element.amount; index++) {

//        call+=element.product.price
//     }
//  } )
//     props.setTotalPrice(call);
// }

//   return (
//   <>
//   <h1>!!!!ברוך הבא לעגלתך</h1>

//   <div className="data__body">
//  { props.cart.product.map((item, index) => (
//                                    <div className="data__item">
//                    <div className="data__row" >
//                           <div className="data__cell data__cell_xl">
//                       <div className="data__main">
//          <div className="data__effect mobile-hide"><label className="switch">
//                                         </label></div>

//                        <button onClick={async()=>{await props.pluseAmount(index) ;callcTotalPrice()}}>+</button>
//                        <div className="data__cell mobile-hide">
//                         <div className="data__content">
//                           <strong>{item.product.name}</strong></div>
//                            </div>

//                          <div className="data__cell mobile-hide">

//                                  </div>
//                            <div className="data__wrap">
//                                 <div className="data__content">
//                  <strong>{item.amount}</strong></div>
//                     </div>

//                      </div>
//                   </div>
//                   <div className="data__cell mobile-hide">
//                       <div className="data__content">
//                       <strong>{item.product.price}</strong></div>
//                                         </div>

//                       <div className="data__cell data__cell_action">
//                          <button onClick={async()=>{await props.minuseAmount(index);callcTotalPrice()}}>-</button>
//                 </div>

//                    <div className="data__cell data__cell_action">
//                 <button onClick={async()=>{await props.remove(item);callcTotalPrice()}} >הסר</button>
//                     </div>
//                             </div>
//                </div>
//           ))}

//           </div>

//                     <br/>   <br/> <br/>
//                     <span style={{fontSize:"40px"}}> {props.cart.totalPrice}</span>
//                     <button onClick={async()=>{await props.clear();callcTotalPrice()}}>מחק הכול</button>
//                     <h1>welcome to form to create order!!!!!</h1><br></br>
//                 <label> enter your Address</label>
//                 <input name="address" value={props.cart.address} onChange={props.updateSetOrder}></input>
//                 <br></br><br></br>            
//                 <button onClick={funcSubmit}>שלח</button>
//                 <Link to="/0/">חזרה לחנות</Link>
// </>
//   )
// }

// export default connect(              
//     (state)=>{      
//             return { 
//                      cart:state.cartReduser.cart,
//                      user:state.userReducer.user,
//                      // store:state.???.store
//             }
//     },
//     (dispatch)=>{
//             return {
//                     pluseAmount:(i)=>{ dispatch(actions.pluseAmount(i))},
//                     clear:()=>{ dispatch(actions.clear())},
//                     minuseAmount:(i)=>{ ; dispatch(actions.minuseAmount(i))},
//                     remove:(i)=>{ ; dispatch(actions.remove(i))},
//                     setCart:(e) =>{ dispatch(actions.setOrder(e))},
//                     newOrder: (e) =>{ dispatch(actions.newOrder(e))},
//                     updateSetOrder: (e) =>{ dispatch(actions.updateSetOrder(e))},
//                     setTotalPrice:(e) =>{ dispatch(actions.setTotalPrice(e))},
//                     setUser:(e) =>{ dispatch(actions.setUserOrder(e))},
//                 }
//     }             
//     )(Cart);


