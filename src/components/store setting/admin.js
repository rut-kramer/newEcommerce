import React, { useEffect } from 'react'
import './admin.css'
import CrudCategory from './category_managment/crudCategory'
import CrudOrder from './crudOrder'
import StoreSettingsManagement from './storeSettingsManagement'
import CrudProducts from './product_management/crudProducts'
import { Provider } from 'react-redux';
import store from '../../redux/store';
import StorePerUser from './storePerUser'
import CrudAttributes from './attribute_management/crudAttribute'
import NewPaper from './paper_managment/createNewPaper';

function Admin(props) {

  
  function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" crud_active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " crud_active";
  }

  return (
    <Provider store={store}>

      <div className="tab">
        <button className="tablinks crud_active" onClick={(event) => { openCity(event, 'Product') }}>Products</button>
        <button className="tablinks" onClick={(event) => { openCity(event, 'Categories') }}>Categories</button>
        <button className="tablinks" onClick={(event) => { openCity(event, 'Orders') }}>Orders</button>
        <button className="tablinks" onClick={(event) => { openCity(event, 'Attributes') }}>Attributes</button>
        <button className="tablinks" onClick={(event) => { openCity(event, 'StoreSettingsManagement') }}>Store Settings</button>
        <button className="tablinks" onClick={(event) => { openCity(event, 'StorePerUser') }}>All Your Stores</button>
        <button className="tablinks" onClick={(event) => { openCity(event, 'NewPaper') }}>All Pages</button>
      </div>

      <div id="Categories" className="tabcontent">
        <CrudCategory></CrudCategory>
      </div>

      <div id="Product" style={{display:"block"}} className="tabcontent">
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
      <div id="Attributes" className="tabcontent">
        <CrudAttributes></CrudAttributes>
      </div>
      <div id="NewPaper" className="tabcontent">
        <NewPaper></NewPaper>
      </div>
    
    </Provider>
  )
}
export default Admin;


