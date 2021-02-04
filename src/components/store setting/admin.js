import React, { useEffect, useState } from 'react'
import './admin.css'
import CrudCategory from './category_managment/crudCategory'
import CrudOrder from './crudOrder'
import StoreSettingsManagement from './storeSettingsManagement'
import CrudProducts from './product_management/crudProducts'
import { Provider } from 'react-redux';
import store from '../../redux/store';
import StorePerUser from './storePerUser'

function Admin(props) {

  function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }

  return (
    <Provider store={store}>

      <div className="tab">
        <button className="tablinks" onClick={(event) => { openCity(event, 'Categories') }}>Categories</button>
        <button className="tablinks" onClick={(event) => { openCity(event, 'Orders') }}>Orders</button>
        <button className="tablinks" onClick={(event) => { openCity(event, 'Product') }}>Product</button>
        <button className="tablinks" onClick={(event) => { openCity(event, 'StoreSettingsManagement') }}>Store Settings</button>
        <button className="tablinks" onClick={(event) => { openCity(event, 'StorePerUser') }}>your Store</button>
      </div>

      <div id="Categories" className="tabcontent">
        <CrudCategory></CrudCategory>
      </div>

      <div id="Product" className="tabcontent">
        <CrudProducts></CrudProducts>
      </div>

      <div id="Orders" className="tabcontent">
        <CrudOrder></CrudOrder>
      </div>

      <div id="StoreSettingsManagement" className="tabcontent">
        <StoreSettingsManagement></StoreSettingsManagement>
      </div>
      <div id="StorePerUser" className="tabcontent">
        <StorePerUser></StorePerUser>
      </div>


    </Provider>
  )
}
export default Admin;


