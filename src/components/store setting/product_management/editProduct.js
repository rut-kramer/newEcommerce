import React from 'react'
import { connect } from 'react-redux';
import { actions } from '../../../redux/action'

function EditProduct(props) {

  const update = (event) => {
    var u;
    if (event.target.name === "featured")
      u = event.target.checked;
    else
      u = event.target.value
    props.setCurrentProduct({
      ...props.currentProduct,
      [event.target.name]: u
    });
  }

  const updateCategory = (event) => {
    // let k = props.categoryList.filter(p => p.categoryName == event.target.value)
    //  setMyValues({
    //   ...props.currentProduct,
    //    category:k[0]._id
    //  });
  }

  const Submit = () => {
    props.editproduct(props.currentProduct);
  }
  return (
    <div className="form form_create">
      <div className="form__preview"><input className="form__file" type="file" /><i className="la la-user-plus "></i></div>
      <div className="form__row">
        <div className="form__col">
          <div className="field form__field">
            <div className="field__label">שם</div>
            <div className="field__wrap">
              <input className="field__input" type="text" onChange={update} value={props.currentProduct.name} name="name" placeholder="Start typing…" />
              <div className="field__icon"><i className="la la-truck-loading "></i></div>
            </div>
          </div>
        </div>
        <div className="form__col">
          <div className="field form__field">
            <div className="field__label">תאור</div>
            <div className="field__wrap">
              <input className="field__input" type="text" placeholder="Start typing…" name="description" id="description-in" onChange={update} value={props.currentProduct.description} />
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
              <input className="field__input" type="text" name="sku" id="sku-in" onChange={update} value={props.currentProduct.sku} placeholder="Start typing…" />
              <div className="field__icon"><i className="la la-truck-loading "></i></div>
            </div>
          </div>
        </div>
        <div className="form__col">
          <div className="field form__field">
            <div className="field__label">כמות</div>
            <div className="field__wrap">
              <input className="field__input" type="number" placeholder="Start typing…" name="amount" id="amount-in" onChange={update} value={props.currentProduct.amount} />
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
              <input className="field__input" type="text" placeholder="Start typing…" name="price" id="price-in" onChange={update} value={props.currentProduct.price} />
              <div className="field__icon"><i className="la la-wallet "></i></div>
            </div>
          </div>
        </div>
        <div className="form__col">
          <div className="field form__field">
            <div className="field__label">קטגוריה</div>
            <div className="field__wrap">
              <select value={props.currentProduct.category} onChange={updateCategory} name="category" className="field__select" >
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
              <input type="checkbox" onClick={update} name="featured"></input>
              <div className="field__icon"><i className="la la-wallet "></i></div>
            </div>
          </div>
        </div>
      </div>

      <div className="form__foot">
        <button className="form__btn btn" onClick={Submit}>edit</button>
      </div>
    </div>)
}
export default connect(
  (state) => {
    return {
      categoryList: state.categoriesReducer.categories,
      currentProduct: state.productReducer.currentProduct
    }
  },
  (dispatch) => {
    return {
      editproduct: (v) => dispatch(actions.editProduct(v)),
      setCurrentProduct: (e) => dispatch(actions.setCurrentProduct(e))
    }
  }
)(EditProduct);

