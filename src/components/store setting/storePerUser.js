import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { actions } from '../../redux/action'
import categoryReducer from '../../redux/reducers/data_reducer/categoryReducer';

function StorePerUser(props) {

  function funcReset(item) {
    props.setCurrentStore(item);
    props.getOrdersByStore(item._id)
    props.getCategoriesByStore(item._id)
    props.getAllAttributes(item._id)
  }

  function deleteSto(i) {
    if (window.confirm("אם אתה בטוח שברצונך למחוק את החנותן"))
      props.deleteStore(i)
    else
      alert('מזל שהתחרטת...')
  }
  useEffect(() => {
    async function fetchData() {
      await props.getStoreByUser(props.user._id);
    }
    fetchData();
  }, [])
  return (
    <>
      <h1>:בחר אחת מהחנויות שברשותך</h1>

      <div className="data__body">
        {props.stores.map((itemy, index) => (
          <div className="data__item" key={index}>
            <div className="data__row" >
              <div className="data__cell data__cell_xl">
                <div className="data__main">
                  <div className="data__effect mobile-hide"><label className="switch">
                    <input style={{ backgroundColor: 'black' }} className="switch__input" type="button" onClick={() => { deleteSto(itemy._id); }} />
                    <br></br>
                    <strong>מחק</strong>
                    <span className="switch__content">
                    </span></label></div>
                  <div className="data__effect mobile-hide">
                    <label className="switch"></label></div>
                  <div className="data__cell mobile-hide">
                    {console.log("obj", props.objectFields)}
                    <Link onClick={() => { funcReset(itemy) }} to={"/" + itemy.storeName}>
                      <div className="data__content">
                        <strong>{itemy.storeName}</strong>
                      </div></Link>
                  </div>
                  <div className="data__cell mobile-hide">
                  </div>
                  <div className="data__wrap">
                    <div className="data__content">
                      <strong>{itemy.storeDescription}</strong></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>)
}

export default connect(
  (state) => {
    return {
      stores: state.userReducer.storesOfUser,
      user: state.userReducer.user,
      categories: categoryReducer.categories,
      objectFields: state.storeReducer.objectFields

    }
  },
  (dispatch) => {
    return {
      getStoreByUser: (id) => { dispatch(actions.getStoreByUser(id)) },
      setFilteredItems: (i) => { dispatch(actions.setFilteredItems(i)) },
      setCurrentStore: (i) => { dispatch(actions.setSaveAllStoreDetails(i)) },
      deleteStore: (i) => { dispatch(actions.deleteStore(i)) },
      getCategoriesByStore: (i) => { dispatch(actions.getCategoriesByStore(i)) },
      getOrdersByStore: (i) => { dispatch(actions.getOrdersByStore(i)) },
      getAllAttributes: (y) => dispatch(actions.getAllAttributes(y))

    }
  }

)(StorePerUser);

