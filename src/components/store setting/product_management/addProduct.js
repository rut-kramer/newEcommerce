import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import { Input } from 'reactstrap';
import { actions } from '../../../redux/action'
import CreateAttribute from "../attribute_management/createAttribute";
//לחשוב על דרך נכונה יותר שהמערך לא יאותחל מחדש כול פעולה
let att=[];
let existAttributes={};

 function AddProduct (props)  {
        console.log(props);
    const [myValues ,setMyValues]= useState({
        name:'',
        description:'',
        SKU:'',
        amount:'', 
        category:'',
         price:'', 
         //לא עובד -צריך להביא תמונות מהשרת 
        //  images:'',
         featured:false,
         store:props.storeCurrent,
         attributes:null,
         salePrice:'',
         photoGallery:'',
         video:'',
         isStock:false,
         isDraft:false,
         weight:'',

        });

const updateCategory = (event) => {
          let k=props.categoryList.filter(p=>p.categoryName==event.target.value)
           setMyValues({
             ...myValues,
             category:k[0]._id
           });
         }
const update = (event) => {
          var u;
             if(event.target.name==="featured"||event.target.name==="isStock"||event.target.name==="isDraft")          
            u=event.target.checked;
             else
             u=event.target.value
         setMyValues({
             ...myValues,
             [event.target.name]:u
         }); }

  const Submit = async () => {
    let r = props.productsList.filter(p => p.SKU == myValues.SKU)
    if (r.length == 0) {
      if (myValues.category != "")
        props.createNewProduct(myValues);
      else
        alert("לא בחרת קטגוריה הוסף קטוגריה");
    }
    else
      alert("מספר מקט קיים כבר נא החלף מקט")
  }

function reset()
{
setMyValues({
  ...myValues,
  name:'',
  description:'',
  SKU:'',
  amount:'', 
  category:'',
   price:'', 
   //לא עובד -צריך להביא תמונות מהשרת 
  //  images:'',
   featured:false,
   store:props.storeCurrent,
   attributes:null,
   salePrice:'',
   photoGallery:'',
   video:'',
   isStock:false,
   isDraft:false,
   weight:'',
  })
  att=[];
}

useEffect(()=>{
  console.log("arrive1")
  if(props.currentAttribute.name) addAtt() 
},[props.currentAttribute])

function addAtt() {
  console.log("--"+props.currentAttribute._id)

 let attNew={attribute:{},terms:[]}
  attNew.attribute=props.currentAttribute;
  attNew.terms=props.currentAttribute.terms;
  att.push(attNew)
    setMyValues({
    ...myValues,
    attributes:att
  });
  console.log("myValues"+myValues.attributes)
  console.log(att)
}
const [flageOpen ,setFlageOpen]= useState(0)
const [currentTerms ,setcurrentTerms]= useState([])
function opemAddAttribute(params) {
  setFlageOpen(1)
}
function createCheckbox(label) {
return (
  <>
  <br></br>
  <input
  type="checkbox"
  onChange={(e)=>{
    if(e.target.checked==true)
    existAttributes.terms.push(label)
else{
  existAttributes.terms=  existAttributes.terms.filter(g=>g._id!==label._id)
  console.log(existAttributes)
}

  }}
/><label>{label.name}</label>
</>
)
}
function AddExistAttributes(event)
{   
  return(
<>
    <div className="form__row">
    <div className="form__col">
      <div className="field form__field">
        <div className="field__label">תכונה</div>
        <div className="field__wrap">
        {props.attributesList.map((item, index) => (
        <>
        <br></br>
         <input type="radio" 
         onChange={()=>{ 
           console.log(item,"PPPPPPPPPPPPP")
         setcurrentTerms(item.terms)
         existAttributes.attribute=item
         existAttributes.terms=[]
        }}
         ></input>  
        <label>{item.name}</label> 
         </>      
         ))
         }

          <div className="field__icon"><i className="la la-truck-loading "></i></div>
        </div>
      </div>
    </div>
    <div className="form__col">
      <div className="field form__field">
        <div className="field__label">מונחים</div>
        <div className="field__wrap">

           {currentTerms.map(createCheckbox)} 

          <div className="field__icon"><i className="la la-warehouse "></i></div>
        </div>
      </div>
       <button onClick={()=>{
         setFlageOpen(0)
         att.push({...existAttributes})
         setMyValues({
          ...myValues,
          attributes:att
        });
         }}>save</button>
  
    </div>
  </div>
</>

  )


}
function  removeAttr(item) {
  att=att.filter(p=>p!=item)
   setMyValues({
   ...myValues,
   attributes:att
 });
}
    return( 
            <div className="form form_create">
                <div className="form__preview"><input className="form__file" type="file" /><i className="la la-user-plus "></i></div>
                <div className="form__row">
                  <div className="form__col">
                    <div className="field form__field">
                      <div className="field__label">שם</div>
                      <div className="field__wrap">
                          <input className="field__input" type="text" onChange={update} value={myValues.name} name="name" placeholder="Start typing…" />
                        <div className="field__icon"><i className="la la-truck-loading "></i></div>
                      </div>
                    </div>
                  </div>
                  <div className="form__col">
                    <div className="field form__field">
                      <div className="field__label">תאור</div>
                      <div className="field__wrap">
                          <input className="field__input" type="text" placeholder="Start typing…" name="description" id="description-in" onChange={update} value={myValues.description}/>
                        <div className="field__icon"><i className="la la-warehouse "></i></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="form__row">
                  <div className="form__col">
                    <div className="field form__field">
                      <div className="field__label">מק"ט</div>
                      <div className="field__wrap">
                          <input className="field__input" type="text"name="SKU" id="sku-in" onChange={update} value={myValues.sku} placeholder="Start typing…" />
                        <div className="field__icon"><i className="la la-truck-loading "></i></div>
                      </div>
                    </div>
                  </div>
                  <div className="form__col">
                    <div className="field form__field">
                      <div className="field__label">כמות</div>
                      <div className="field__wrap">
                          <input className="field__input" type="number" placeholder="Start typing…" name="amount" id="amount-in" onChange={update} value={myValues.amount}/>
                        <div className="field__icon"><i className="la la-warehouse "></i></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="form__row">
                  <div className="form__col">
                    <div className="field form__field">
                      <div className="field__label">מחיר</div>
                      <div className="field__wrap">
                          <input className="field__input" type="text" placeholder="Start typing…" name="price" id="price-in" onChange={update} value={myValues.price}/>
                        <div className="field__icon"><i className="la la-wallet "></i></div>
                      </div>
                    </div>
                  </div>
                  <div className="form__col">
                    <div className="field form__field">
                      <div className="field__label">קטגוריה</div>
                      <div className="field__wrap">
                        <select onChange={updateCategory} name="category"  className="field__select" >     
                      <option>בחר</option>
                      {props.categoryList.map((item, index) => (
                        <option>{item.categoryName}</option>           
                        ))}
                      
                      </select>
                        <div className="field__icon"><i className="la la-angle-down "></i></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="form__row">
                  <div className="form__col">
                    <div className="field form__field">
                      <div className="field__label">?מוצר מקודם</div>
                    <br></br>
                      <div className="field__wrap">
                      <input type="checkbox" onClick={update}  name="featured"></input>
                        <div className="field__icon"><i className="la la-wallet "></i></div>
                      </div>
                    </div>
                  </div>
                  <div className="form__col">
                    <div className="field form__field">
                      <div className="field__label">רשימת תכונות</div>
                      <br></br>
                      {myValues.attributes&&myValues.attributes.map((item, index) => (
                     <div>
                       <button onClick={()=>removeAttr(item)} >-</button>
                       <strong>{item.attribute.name}</strong> 
                     <br></br>  
                     <strong>מונחים</strong>
                       {item.terms&&item.terms.map((i, index) => (
                       <><br></br><strong>{i.name}</strong> </>
                       ))}
                       </div>         
                        ))}
                    </div>
                  </div>
              
                  </div>
             <CreateAttribute addAtt={addAtt}></CreateAttribute>          
                     <div className="form__col">
                    <div className="field form__field">
                      <div className="field__label">הוסף תכונה</div>
                      {/* איך שולחים את כול האוביקט הנבחר ולא רק את הטקסט */}
                 <button onClick={opemAddAttribute}>Add Exist Attributes</button>
                   {flageOpen &&<AddExistAttributes></AddExistAttributes>}                 
                        <div className="field__icon"><i className="la la-angle-down "></i></div>
                      </div>
                  </div>
     
                  <div className="form__row">
                  <div className="form__col">
                    <div className="field form__field">
                      <div className="field__label">salePrice</div>
                      <div className="field__wrap">
                          <input className="field__input" type="text" onChange={update} value={myValues.salePrice} name="salePrice" placeholder="Start typing…" />
                        <div className="field__icon"><i className="la la-truck-loading "></i></div>
                      </div>
                    </div>
                  </div>
                  <div className="form__col">
                    <div className="field form__field">
                      <div className="field__label">weight</div>
                      <div className="field__wrap">
                          <input className="field__input" type="text" placeholder="Start typing…" name="weight" id="description-in" onChange={update} value={myValues.weight}/>
                        <div className="field__icon"><i className="la la-warehouse "></i></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="form__row">
                <div className="form__col">
                    <div className="field form__field">
                      <div className="field__label">isDraft</div>
                    <br></br>
                      <div className="field__wrap">
                      <input type="checkbox" onClick={update}  name="isDraft"></input>
                        <div className="field__icon"><i className="la la-wallet "></i></div>
                      </div>
                    </div>
                  </div>
                  <div className="form__col">
                    <div className="field form__field">
                      <div className="field__label">isStock</div>
                    <br></br>
                      <div className="field__wrap">
                      <input type="checkbox" onClick={update}  name="isStock"></input>
                        <div className="field__icon"><i className="la la-wallet "></i></div>
                      </div>
                    </div>
                  </div>
              
                  </div>
                  {/* צריך לבדוק */}
                 <div className="form__row">
                  <div className="form__col">
                  <div className="field__label">photoGallery</div>
                <div className="form__preview">
                  <input className="form__file" type="file" />
                  <i className="la la-user-plus "></i></div>
                  </div>
                  <div className="form__col">
                  <div className="field__label">video</div>
                <div className="form__preview">
                  <input className="form__file" type="file" />
                  <i className="la la-user-plus "></i></div>
                  </div>
             </div>
               




      <div className="form__foot">
        <button className="form__btn btn" onClick={Submit}>Add & Proceed</button>
        <button className="form__btn btn" onClick={reset}>reset</button>

      </div>

    </div>
  )
}
export default connect(
  (state) => {
    return {
      storeCurrent: state.storeReducer.objectFields._id,
      categoryList: state.categoriesReducer.categories,
      attributesList: state.attributeReducer.attributes,
      currentAttribute: state.attributeReducer.currentAttribute,
      productsList: state.productReducer.products,
      
    }
  },
  (dispatch) => {
    return {
      createNewProduct: (n) => dispatch(actions.addNewProducts(n)),
      setcomponnet: (r) => dispatch(actions.setCurrentComponent(r)),
      newAttributes: (a) => dispatch(actions.addNewAttribute(a)),
    }
  }
)(AddProduct);


