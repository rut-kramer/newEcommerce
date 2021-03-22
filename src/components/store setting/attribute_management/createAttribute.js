import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import { actions } from '../../../redux/action'
import './attribute.css'

function createAttribute(props) {

var modal = document.getElementById('id01');
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
   
function oply1(){document.getElementById('id01').style.display='none'}
function oply2(){document.getElementById('id01').style.display='block'}

async function  SaveAttribute ()
      { 

        // e.preventDe
        let id_attr;
        let attribute={name:"",terms:[],store:props.storeCurrent,slug:""};
       
        attribute.name=document.getElementById("attributeName").value;
        attribute.slug=document.getElementById("attributeSlug").value;
       let v=document.getElementsByClassName("Terms");
         for (let index = 0; index < v.length; index++) 
      {
        let term={name:"",description:"",image:"",attribute:""}
        term.name=v[index].value;
         attribute.terms.push(term)

      }
       
     let r=props.attributesList.filter(p=>p.name==attribute.name)
     if(r.length==0)
     {
        props.newAttributes(attribute)
           
              // setTimeout(()=>{ props.addAtt(props.currentAttribute)},3000)
              //  props.addAtt()
                 //id_attr=props.currentAttribute._id;
     //props.addAtt("000")
     document.getElementById('id01').style.display='none'
      }
         else
           alert("שם התכונה קיים כבר נא החלף שם")
      }
      
function AddTerms()
{
  alert("tt");
 return(
   <div>
 <input className="Terms" type="text" placeholder="Start typing…"/>
</div> )
  
}
    return(
        <> 
      <button className="buttonA" onClick={oply2}>צור תכונה</button>

<div id="id01" className="modal">
  <span onClick={oply1} className="close" title="Close Modal">×</span>
  <div className="modal-content">
    <div className="container">
      <h1>יצירת תכונה</h1>
      <div className="form__row">
    <div className="form__col">
      <div className="field form__field">
        <div className="field__label">שם התכונה</div>
        <div className="field__wrap">
            <input id="attributeName" className="field__input" type="text" placeholder="Start typing…" />
          <div className="field__icon"><i className="la la-wallet "></i></div>
        </div>
        <div className="field__label">סלוג התכונה</div>
        <div className="field__wrap">
            <input id="attributeSlug" className="field__input" type="text" placeholder="Start typing…" />
          <div className="field__icon"><i className="la la-wallet "></i></div>
        </div>
      </div>
    </div>
    <div className="form__col">
      <div className="field form__field">
        <div className="field__label">ואריציות בתכונה</div>
        <br></br>
        <div className="field__wrap">
        <input className="Terms" id="var" type="text" placeholder="Start typing…" />
        <input className="Terms" id="var" type="text" placeholder="Start typing…" />
        <input className="Terms" id="var" type="text" placeholder="Start typing…" />
        {/* <AddTerms></AddTerms> */}
        <div onClick={AddTerms}>הוספת מונח</div>
        </div>
      </div>
       </div>
 </div>
      <div className="form__row">
      <div className="form__col">
      <button onClick={AddTerms}>+</button>
    </div>
<div className="form__col">
    </div>
  </div>    

      <div className="clearfix">
        <button type="button" onClick={SaveAttribute} className="cancelbtn buttonA">צור</button>
        <button type="button" onClick={oply1} className="deletebtn buttonA">בטל</button>
      </div>
    </div>
  </div>
</div>

        </>
    )
}
export default connect(    
  (state)=>{
          return { 
            storeCurrent:state.storeReducer.objectFields._id,
            attributesList:state.attributeReducer.attributes,
            currentAttribute:state.attributeReducer.currentAttribute,

          }
  },
  (dispatch)=>{
          return {
                  newAttributes:(a)=>dispatch(actions.addNewAttribute(a)),
          }
  }             
  )(createAttribute);


