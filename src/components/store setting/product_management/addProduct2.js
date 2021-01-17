// import React, { useEffect ,useState} from 'react'
// import { connect } from 'react-redux';
// import { actions } from '../../redux/action'
// // import aService from '../services/product.service'
//  function AddProduct (props)  {

//   useEffect(()=>{


// })

//         console.log(props);
//     const [myValues ,setMyValues]= useState({
//         name:'',
//         description:'',
//         sku:'',
//         amount:'', 
//         category:'',
//          price:'', 
//          //לא עובד -צריך להביא תמונות מהשרת 
//         //  images:'',
//          featuredProducts:'',
//          //צריך להיות סטטי שם החנות
//         //  store:''
//         });

//         // : { type: mongoose.Schema.Types.ObjectId, ref: "Store" },



//     const update = (event) => {

//          var u;
//         //  if(event.target.name=="category")          
//         //    u=item._id;
//         //      else
//             u=
//         setMyValues({
//             ...myValues,

//                    // if(event.target.name==="category")          
//             // [event.target.name]:event.target.value.id;
//             // else
//             [event.target.name]:event.target.value


//         });
//     }

//     const Submit = ()=>{

//         // event.preventDefault();
//        if(myValues.category!="")
//        {
//         props.createNewProduct(myValues); 
//        props.getProducts();
//       } 
//         else
//         {
//           alert("לא בחרת קטגוריה הוסף קטוגריה");
//         // props.setcomponnet("addCategory")
//         }

//     }

//     return( 
//             <div className="form form_create">
//                 <div className="form__preview"><input className="form__file" type="file" /><i className="la la-user-plus "></i></div>
//                 <div className="form__row">
//                   <div className="form__col">
//                     <div className="field form__field">
//                       <div className="field__label">שם</div>
//                       <div className="field__wrap">
//                           <input className="field__input" type="text" onChange={update} value={myValues.name} name="name" placeholder="Start typing…" />
//                         <div className="field__icon"><i className="la la-truck-loading "></i></div>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="form__col">
//                     <div className="field form__field">
//                       <div className="field__label">תאור</div>
//                       <div className="field__wrap">
//                           <input className="field__input" type="text" placeholder="Start typing…" name="description" id="description-in" onChange={update} value={myValues.description}/>
//                         <div className="field__icon"><i className="la la-warehouse "></i></div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
// {/* 
//         color: [{ type: String }],    
//         featuredProducts: { type: mongoose.Schema.Types.ObjectId, ref: "FeaturedProducts" }, 
//  */}
//                 <div className="form__row">
//                   <div className="form__col">
//                     <div className="field form__field">
//                       <div className="field__label">מק"ט</div>
//                       <div className="field__wrap">
//                           <input className="field__input" type="text"name="sku" id="sku-in" onChange={update} value={myValues.sku} placeholder="Start typing…" />
//                         <div className="field__icon"><i className="la la-truck-loading "></i></div>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="form__col">
//                     <div className="field form__field">
//                       <div className="field__label">כמות</div>
//                       <div className="field__wrap">
//                           <input className="field__input" type="number" placeholder="Start typing…" name="amount" id="amount-in" onChange={update} value={myValues.amount}/>
//                         <div className="field__icon"><i className="la la-warehouse "></i></div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="form__row">
//                   <div className="form__col">
//                     <div className="field form__field">
//                       <div className="field__label">מחיר</div>
//                       <div className="field__wrap">
//                           <input className="field__input" type="text" placeholder="Start typing…" name="price" id="price-in" onChange={update} value={myValues.price}/>
//                         <div className="field__icon"><i className="la la-wallet "></i></div>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="form__col">
//                     <div className="field form__field">
//                       <div className="field__label">קטגוריה</div>
//                       <div className="field__wrap">
//                         <select onChange={update} name="category"  className="field__select" required='true' >
//                         <option> </option>     
//                       {props.categoryList.map((item, index) => (
//                         <option>{item._id}</option>           
//                         ))}

//                       </select>
//                         <div className="field__icon"><i className="la la-angle-down "></i></div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="form__foot">

//                 <button className="form__btn btn" onClick={Submit}>Add & Proceed</button>
//                 </div>

//               </div>
//     )
// }
// export default connect(

//   (state)=>{

//           return { 

//                   categoryList:state.categoriesReducer.categories
//           }

//   },
//   (dispatch)=>{
//           return {
//                   getCategories:()=>dispatch(actions.getAllCategories()),
//                   getProducts:()=>dispatch(actions.getAllProducts()),
//                   createNewProduct:(n)=>dispatch(actions.addNewProducts(n)),
//                   setcomponnet:(r)=>dispatch(actions.setCurrentComponent(r)),
//           }
//   }             
//   )(AddProduct);

