import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import { actions } from '../../../redux/action'
import FormLabel from '@material-ui/core/FormLabel';
import Box from '@material-ui/core/Box';
import { HuePicker } from 'react-color';

function AddCategory(props) {
  const [Master_category ,setMaster_category]= useState(props.categoryList)
  useEffect(() => {
   let list=Master_category.filter(c=>c.masterCategory==null)
setMaster_category(list)
  },[])

  console.log(props);
  const [myValues, setMyValues] = useState({
    categoryName: '',
    color: '',
    //  image:'',
    //TODO
   //   store:props.storeCurrent._id
   store: '600d6765d2f87ce3d1a8a662'
  });

  const updateColor = (event) => {     
    setMyValues({
      ...myValues,
    color:event.hex
 });
  }
  const updateCategory = (event) => {
   let k=props.categoryList.filter(p=>p.categoryName==event.target.value)
    setMyValues({
      ...myValues,
      masterCategory:k[0]._id
    });
  }
  const update = (event) => {
    setMyValues({
      ...myValues,
      [event.target.name]: event.target.value
    });
  }

  const Submit = () => {
    props.createNewCategory(myValues);
  }
  return (
    <div className="form form_create">
      <div className="form__preview"><input className="form__file" type="file" /><i className="la la-user-plus "></i></div>
      <div className="form__row">
        <div className="form__col">
          <div className="field form__field">
            <div className="field__label">שם קטגוריה </div>
            <div className="field__wrap">
              <input className="field__input" type="text" onChange={update} value={myValues.categoryName} name="categoryName" placeholder="Start typing…" />
              <div className="field__icon"><i className="la la-truck-loading "></i></div>
            </div>
          </div>
        </div>
        <div className="form__col">
          <div className="field form__field">
            <div className="field__label">צבע</div>
            <div className="field__wrap">
              <input className="field__input" type="text" placeholder="Start typing…" name="color" id="description-in" onChange={update} value={myValues.color} />
              <div className="field__icon"><i className="la la-warehouse "></i></div>
            </div>
          </div>
        </div>
   </div>
        <div className="form__row">
        <div className="form__col">
                    <div className="field form__field">
                      <div className="field__label">קטגוריה אב</div>
                        <select onChange={updateCategory} name="categoryName"  className="field__select">
                      {Master_category.map((item, index) => (
                        <option>{item.categoryName}</option>           
                        ))}
                      </select>
                        <div className="field__icon"><i className="la la-angle-down "></i></div>
                      </div>
                    </div>
                  </div>
      <FormLabel>Color text</FormLabel>
      <Box flexDirection="row"
        display="flex"
        justifyContent="space-between">
        <Box name="color"
          width={'100%'}
          alignSelf="center">
          <HuePicker
            color={myValues.color}
            onChangeComplete={updateColor}
            width={200}
            height={6}
          />
        </Box>
        <Box justifyContent="flex-end">
        <div className="data__preview" style={{"backgroundColor":myValues.color}}>
                </div>
        </Box>
      </Box>
      <div className="form__foot">
        <button className="form__btn btn" onClick={Submit}>Add & Proceed</button>
      </div>
    </div>
  )
}
export default connect(
  (state) => {
    return {
      categoryList: state.categoriesReducer.categories,
      //storeCurrent:state.storeByUser.currentStore,
    }
  },
  (dispatch) => {
    return {
      createNewCategory: (n) =>{ dispatch(actions.createNewCategory(n));},
    }
  }
)(AddCategory);

