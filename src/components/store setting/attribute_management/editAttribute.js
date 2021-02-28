import React, { useEffect ,useState} from 'react' 
import { connect } from 'react-redux';
import { actions } from '../../../redux/action'

 function EditAttribute (props)  {

       
    const update = (event) => {        
     props.setCurrentAttribute({
            ...props.currentAttribute,       
            [event.target.name]:event.target.value
        });
    }
   
    function removeTerm(item) {
      let termsFilter=props.currentAttribute.terms;
      termsFilter= termsFilter.filter(t=>t!=item)
     props.setCurrentAttribute(
       {...props.currentAttribute ,
         terms:termsFilter
       }
     )
    }
    
    const Submit = ()=>{
      saveNewTerms()
        // props.editAttribute(props.currentAttribute);
    }
      
    function AddTerms()
    {
     return(
       <div>
     <input className="Terms" type="text" placeholder="Start typing…"/>
    </div> )
      
    }
    
async function saveNewTerms()
{ 
  let newTerms=[];
 let v=document.getElementsByClassName("Terms");
//    for (let index = 0; index < v.length; index++) 
// {
  let term={name:"",description:"",image:"",attribute:""}
  term.name=v[0].value;
 props.newTerm(term).then((p)=>{
  newTerms.push(p._id)
 //בעית סינכרון
 //פתירת הבעיה בצורה גרועה !
  newTerms=newTerms.push(props.currentAttribute.terms)
  props.setCurrentAttribute(
    {...props.currentAttribute ,
      terms:newTerms
    })

})
// }
newTerms=newTerms.push(props.currentAttribute.terms)
props.setCurrentAttribute(
  {...props.currentAttribute ,
    terms:newTerms
  })

}
    return(
            <div className="form form_create">
                <div className="form__preview"><input className="form__file" type="file" /><i className="la la-user-plus "></i></div>
                <div className="form__row">
                  <div className="form__col">
                    <div className="field form__field">
                      <div className="field__label">שם תכונה </div>
                      <div className="field__wrap">
                          <input className="field__input" type="text" onChange={update} value={props.currentAttribute.name} name="name" placeholder="Start typing…" />
                        <div className="field__icon"><i className="la la-truck-loading "></i></div>
                      </div>
                    </div>
                  </div>
                  <div className="form__col">
                    <div className="field form__field">
                      <div className="field__label">סלוג</div>
                      <div className="field__wrap">
                          <input className="field__input" type="text" onChange={update} value={props.currentAttribute.slug} name="slug" placeholder="Start typing…" />
                        <div className="field__icon"><i className="la la-truck-loading "></i></div>
                      </div>
                    </div>
                  </div>
              
                 </div>
<div className="form__col">
                    <div className="field form__field">
                      <div className="field__label">מונחי התכונה</div>
                      <br></br>
                        <div name="terms">
                      {/* {props.currentAttribute.terms.map((item, index) => (
                     <div><strong>{item.name}</strong><button onClick={()=>{removeTerm(item);props.deleteTerms(item)}}>-</button> </div>             
                        ))} */}
                      </div>
                       
                      </div>
                    </div>
                    {/* <div onClick={AddTerms}>הוספת מונח</div> */}
                    <strong>הוספת מונחים חדשים</strong>
                    <AddTerms></AddTerms>
                    {/* <AddTerms></AddTerms>
                    <AddTerms></AddTerms> */}
          <div className="form__foot">             
              <button className="form__btn btn" onClick={Submit}>edit </button>
                </div>
              </div>)}
export default connect(
  (state)=>{
          return {      
                  categoryList:state.categoriesReducer.categories,
                  currentAttribute:state.attributeReducer.currentAttribute

          } },
  (dispatch)=>{
          return {
            editAttribute:(n)=>{dispatch(actions.editAttribute(n))},
            setCurrentAttribute: (n) => dispatch(actions.setCurrentAttribute(n)),
            deleteTerms: (n) => dispatch(actions.deleteTerms(n._id)),
            newTerm: (n) => 
            {
              return new Promise((resolve, reject) => {
                dispatch(actions.newTerm(n))
              })
            }
           
          }}             
  )(EditAttribute);