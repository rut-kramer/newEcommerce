// import React, { useEffect, useState } from 'react'
// import $ from 'jquery'
// import './admin.css'
// import CrudCategory from './crudCategory'
// import CrudOrder from './crudOrder'
// import StoreSettingsManagement from './storeSettingsManagement'
// import CrudProducts from './crudProducts'
// import { Provider } from 'react-redux';
// import store from '../redux/store';
// import Yeudit from './yeudit'
// import { Tabs, Tab } from 'react-bootstrap';
// import { AddAlarm } from '@material-ui/icons'

// // import Carousel from 'react-bootstrap/Carousel'  
// // import ReactBootstrapCarousel from "react-bootstrap-carousel";
// // import "bootstrap/dist/css/bootstrap.css";
// // import EditHomeStore from './editHomeStore'
// // import EditCart from './editCart'
// // import EditCategory from './editCategory'
// // import EditProduct from './editProduct'
// // import EditCheckout from './editCheckout'

// function Admin(props) {

//         const [key, setKey] = useState("products")

//         useEffect(() => {
//                 // $('#myTab a').on('click', function (e) {
//                 //          ;
//                 //         e.preventDefault()
//                 //         $('#myTab .active').removeClass('active')
//                 //         $(this).addClass('active')
//                 //         $('#myTabContent .show active').removeClass('show active');
//                 //         $('#profile').addClass('show active')
//                 // })
//                 $('.show').removeClass('fade');
//         }, [])

//         const aaa = (key) => {
//                 setKey(key);
//                 $('.show').removeClass('fade');
//         }

//         return (
//                 <Provider store={store}>
//                         {/* <div>
//                         <ul className="nav nav-tabs" id="myTab" role="tablist" style={{ fontSize: 1.7 + "rem" }}>
//                         <li className="nav-item">
//                         <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Categories</a>
//                         </li>
//                         <li className="nav-item">
//                         <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Products</a>
//                         </li>
//                         <li className="nav-item">
//                         <a className="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Sales</a>
//                         </li>
//                         </ul>
//                         <div className="tab-content" id="myTabContent">
//                         <div className="tab-pane" id="home" role="tabpanel" aria-labelledby="home-tab">

//                         </div>
//                         <div className="tab-pane show active" id="profile" role="tabpanel" aria-labelledby="profile-tab">
//                         <CrudProducts /> 
//                         <Yeudit />
//                         <CrudCategory />
//                         </div>
//                         <div className="tab-pane" id="contact" role="tabpanel" aria-labelledby="contact-tab">...</div>
//                         </div>
//                 </div> */}
//                         <Tabs
//                                 id="controlled-tab-example"
//                                 activeKey={key}
//                                 onSelect={(key) => {  aaa(key) }}
//                         // defaultActiveKey={props.currentTable ? props.currentTable.name : ""}
//                         >
//                                 <Tab
//                                         eventKey="products"
//                                         title="Products">
//                                         <Yeudit />
//                                         {/* <CrudProducts />  */}

//                                 </Tab>
//                                 <Tab
//                                         eventKey="categories"
//                                         title="Categories">
//                                         <CrudCategory />

//                                 </Tab>
//                                 <Tab
//                                         eventKey="order"
//                                         title="Order">

//                                         <CrudOrder/>
//                                 </Tab>
//                                 <Tab
//                                         eventKey="StoreManagement"
//                                         title="Store management">
//                                         <StoreSettingsManagement />
//                                 </Tab>
//                         </Tabs>
//                 </Provider>
//         )

// }

// export default Admin;
