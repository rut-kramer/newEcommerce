import React, { useEffect ,useState} from 'react' 
import { connect } from 'react-redux';
import { actions } from '../../../redux/action'

 function EditCategory (props)  {

  const [Master_category ,setMaster_category]= useState(props.categoryList)
  useEffect(() => {
   let list=Master_category.filter(c=>c.masterCategory==null)
setMaster_category(list)
  },[])


        const updateCategory = (event) => {
          let k;
         if(event.target.value==="ללא קטגורית אב")
         k=null
         else
         {
            k=props.categoryList.filter(p=>p.categoryName==event.target.value)
            k=k[0]._id
           }
           props.setCurrentCategory({
             ...props.currentCategory,
             masterCategory:k           });
         }

    const update = (event) => {        
      props.setCurrentCategory({
        ...props.currentCategory,   
            [event.target.name]:event.target.value
        });
    }
    
    const Submit = ()=>{
        props.editCategory(props.currentCategory);
    }

    return(
            <div className="form form_create">
                <div className="form__preview"><input className="form__file" type="file" /><i className="la la-user-plus "></i></div>
                <div className="form__row">
                  <div className="form__col">
                    <div className="field form__field">
                      <div className="field__label">שם קטגוריה </div>
                      <div className="field__wrap">
                          <input className="field__input" type="text" onChange={update} value={props.currentCategory.categoryName} name="categoryName" placeholder="Start typing…" />
                        <div className="field__icon"><i className="la la-truck-loading "></i></div>
                      </div>
                    </div>
                  </div>
                  <div className="form__col">
                    <div className="field form__field">
                      <div className="field__label">צבע</div>
                      <div className="field__wrap">
                          <input className="field__input" type="text" placeholder="Start typing…" name="color" id="description-in" onChange={update} value={props.currentCategory.color}/>
                        <div className="field__icon"><i className="la la-warehouse "></i></div>
                      </div>
                    </div>
                  </div>
                </div>
                <label>בחר צבע לקטגוריה</label><br></br>
                <input type={"color"} name="color" value={props.currentCategory.color}  onChange={update}></input><br></br>
               

<div className="form__col">
                    <div className="field form__field">
                      <div className="field__label">קטגוריה אב</div>
                        <select onChange={updateCategory} name="categoryName"  className="field__select"  >
                   <option>ללא קטגורית אב</option>
                      {Master_category.map((item, index) => (
                        <option>{item.categoryName}</option>           
                        ))}
                      </select>
                        <div className="field__icon"><i className="la la-angle-down "></i></div>
                      </div>
                    </div>
      
          <div className="form__foot">             
              <button className="form__btn btn" onClick={Submit}>edit </button>
                </div>
              </div>)}
export default connect(
  (state)=>{
          return {      
                  categoryList:state.categoriesReducer.categories,
                  currentCategory:state.categoriesReducer.currentCategory
          } },
  (dispatch)=>{
          return {
                  editCategory:(n)=>{ ;dispatch(actions.editCategory(n))},
                  setCurrentCategory: (n) => dispatch(actions.setCurrentCategory(n)),

          }}             
  )(EditCategory);