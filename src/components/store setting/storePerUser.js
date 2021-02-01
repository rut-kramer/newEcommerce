import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { actions } from '../../redux/action'
import categoryReducer from '../../redux/reducers/data_reducer/categoryReducer';

function StorePerUser(props) {

function funcReset(item)
{
  props.setSoreCurrent(item);
  props.getOrdersByStore(item._id)
  props.getCategoriesByStore(item._id)
}

function deleteSto(i)
{
  confirmAlert({
        title: 'מחיקת חנות',
        message: '?האם אתה בטוח שברצונך למחוק את החנות',
        buttons: [
          {
            label: 'Yes',
            onClick: () => props.deleteStore(i)
          },
          {
            label: 'No',
            onClick: () => alert('מזל שהתחרטת...')
          }
        ]
      });}
    useEffect(async() => {
      await props.getStoreByUser(props.user._id);
    },[])
    return (
<>
<h1>:בחר אחת מהחנויות שברשותך</h1>
 <div className="data__body">
{ props.stores.map((itemy, index) => (
            <div className="data__item">
                 <div className="data__row" >
                        <div className="data__cell data__cell_xl">
                               <div className="data__main">
                               <div className="data__effect mobile-hide"><label className="switch">
                            <input className="switch__input" type="button"  onClick={ () => { deleteSto(itemy._id);}} />
                                <br></br>
                                   <strong>מחק</strong>                                                                                                                                                                                                                                                                                                                                                                                                
                                     <span className="switch__content">
                                        </span></label></div>
       <div className="data__effect mobile-hide">
           <label className="switch"></label></div>        
 <div className="data__cell mobile-hide">
     <Link onClick={()=>{funcReset(itemy)}} to="/0">
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
        </> )}  

export default connect(
    (state)=>{
        return {
      stores: state.storeByUserReducer.stores,
        user:state.userReducer.user,
        categories:categoryReducer.categories
        }
    },
    (dispatch)=>{
        return {
             getStoreByUser:(id)=>{ dispatch(actions.getStoreByUser(id))},
             setFilteredItems:(i)=>{ dispatch(actions.setFilteredItems(i))},
             setSoreCurrent:(i)=>{ dispatch(actions.setSoreCurrent(i))},
             deleteStore:(i)=>{ dispatch(actions.deleteStore(i))},
             getCategoriesByStore:(i)=>{ dispatch(actions.getCategoriesByStore(i))},
             getOrdersByStore:(i)=>{ dispatch(actions.getOrdersByStore(i))},
        }
    }

)(StorePerUser);
