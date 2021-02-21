import React, { useEffect, useState } from 'react';
// import { useParams } from "react-router";
import { connect } from 'react-redux';
import { actions } from '../../../redux/action'
// import './crudProducts.css';
import $ from 'jquery'
// import productImg from '../assets/products/product-pic-7.png'
import cloneDeep from 'lodash/cloneDeep';

function ProductsList(props) {

        const [file, setFile] = useState()
        const fileI = React.createRef();
        let { Name, Description, Amount, Price, Category } = {
                Name: "Name",
                Description: "Description",
                Amount: "Amount",
                Price: "Price",
                Category: "Category"
        }
        // const [file, setFile] = useState(0);
        // useEffect(() => {

        //         $(".data__preview input").on("change", function () {
        //                  
        //                 console.log("useeff", $(this));
        //         })

        //         // var panel = $('.js-panel');
        //         // if (panel.length) {
        //         //         var btn = panel.find('.js-panel-btn, .js-panel-action'),
        //         //                 tab = panel.find('.js-panel-tab');

        //         // }
        // }, [])


        const onChangeHandlerImage = (eve) => {
                let event = eve.target.files[0]
                let num = eve.target.name;
                // const input = fileI.current

                if (event) {

                         let reader = new FileReader();
                        reader.onloadend = () => {

                                props.changeProductImage(num, reader.result)
                                // props.setProductImage(num, reader.result)
                                // props.setSearchReasult(props.products)
                        }
                        reader.readAsDataURL(event)
                }

                //  ;
                // if (event) {
                //         let reader = new FileReader();
                //         reader.onloadend = async () => {
                //                 await props.changeProductImage(reader.result)
                //                 console.log("img", props.products[0]);
                //                 props.setSearchReasult(props.products);
                //         }
                //         reader.readAsDataURL(event)
                // }
        }

        // const onChangeHandlerImage = (event, thiss) => {
        //          ;
        //         if (event) {
        //                 let reader = new FileReader();
        //                 reader.onloadend = () => {
        //                          ;
        //                         props.changeProductImage(0, reader.result)
        //                         console.log("img", props.products[0]);

        //                 }
        //                 reader.readAsDataURL(event)
        //         }
        //         props.setSearchReasult(props.products);

        // }

        const sortColumn = (columnName) => {
                ;
                props.setSortYOrN();

                let sortProducts = props.filteredProducts;

                let bb = sortProducts.slice().sort((a, b) => {

                        let x = String(a[columnName]).toLowerCase();
                        let y = String(b[columnName]).toLowerCase()

                        if (x < y) { return -1; }
                        if (x > y) { return 1; }
                        return 0

                        // return a[columnName].localeCompare(b[columnName])
                });
                if (!props.sortYOrNo)
                        bb.reverse();

                ;
                props.setSearchReasult(bb);
        }
        // const onChangeHandlerImage2 = (e) => {

        //         console.log(e)
        //         const reader1 = new FileReader();
        //         // const file = e
        //         reader1.onloadend = () => {
        //                 setFile(reader1.result);
        //                 console.log("reader111", reader1.result);
        //         };
        //         reader1.readAsDataURL(e);
        //         // var fileToUpload = e
        //         var myFile = new FormData();
        //         console.log("upload", e);
        //         myFile.append("file", e);
        //         console.log("myfile", myFile);
        //         // if (!props.rowToEdit) {
        //         props.addNewImageFromDbP({ f: myFile, t: "title" });
        //         // }
        // }
        function askDeleteProduct(i) {
                if (window.confirm("אם אתה בטוח שברצונך למחוק את המוצר"))
                props.delete(i)
              }
        function DataHaed() {
                return (
                        <div className="data__head">
                                <div className="data__row">
                                        <div className="data__cell data__cell_xl" >
                                                <div className="data__filter" onClick={() => sortColumn("name")}>{Name}<i className="la la-sort-alpha-down "></i></div>
                                        </div>
                                        <div className="data__cell">
                                                <div className="data__filter" onClick={() => sortColumn("description")}>{Description}<i className="la la-sort-alpha-down "></i></div>
                                        </div>
                                        <div className="data__cell">
                                                <div className="data__filter" onClick={() => sortColumn("amount")}>{Amount}<i className="la la-sort-alpha-down "></i></div>
                                        </div>

                                        <div className="data__cell">
                                                <div className="data__filter" onClick={() => sortColumn("price")}>{Price}<i className="la la-sort-alpha-down "></i></div>
                                        </div>
                                        <div className="data__cell">
                                                <div className="data__filter" onClick={() => sortColumn("category")}>{Category}<i className="la la-sort-alpha-down "></i></div>
                                        </div>
                                        <div className="data__cell data__cell_action"></div>
                                </div>
                        </div>)
        }
        function Data_Main({item,index}) {
                return(
                <div className="data__main">
                        <div className="data__effect mobile-hide"><label className="switch">
                                <input className="switch__input" type="button" onClick={() => { askDeleteProduct(item._id); props.setSearchReasult(props.products); }} />
                                <span className="switch__content">
                                </span></label></div>
                        <div className="data__preview">
                                <label className="prdct_img" for={"fileInput" + index}>
                                        {/* <img alt="product image" src={item.images[0] ? item.images[0] : productImg} /> */}
                                </label>
                                <input ref={fileI}
                                        name={index}
                                        type={"file"}
                                        id={"fileInput" + index}
                                        htmlFor="myInput"
                                        accept="image/*"
                                        style={{
                                                display: 'none',
                                                cursor: 'pointer'
                                        }}
                                        onChange={onChangeHandlerImage} />
                        </div>
                        <div className="data__wrap">
                                <div className="data__content">
                                        <strong>{item.name}</strong></div>
                                <div className="data__label">SKU {item.SKU}</div>
                        </div>
                </div>)
        }

        return (
                <>
                        <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&amp;display=swap" rel="stylesheet" />
                        <link rel="stylesheet" media="all" href="css/app.css" />
                        <link rel="stylesheet" media="all" href="app2.css" />
                        <link rel="apple-touch-icon" sizes="180x180" href="img/apple-touch-icon.png" />
                        <link rel="icon" type="image/png" sizes="32x32" href="img/favicon-32x32.png" />
                        <link rel="icon" type="image/png" sizes="16x16" href="img/favicon-16x16.png" />
                        <link rel="manifest" href="img/site.webmanifest" />
                        <link rel="mask-icon" href="img/safari-pinned-tab.svg" color="#5bbad5" />

                        <div className="panel__tab js-panel-tab"
                                style={{ display: 'block' }}>
                                <div className="data data_list">
                                        <div className="data__container">
                                                <DataHaed></DataHaed>
                                                <div className="data__body">
                                                        {/* TO DO FELTERADE */}
                                                        {props.products.map((item, index) => (
                                                               index < (props.PageNum - 1) * 6||index>props.PageNum * 6 - 1?"":                                                             
                                                               
                                                               <div className="data__item" key={index}>
                                                                                         <button className="accordion">

                                                                        <div className="data__row" >
                                                                                <div className="data__cell data__cell_xl">
                                                                                        <Data_Main item={item} index={index}></Data_Main>
                                                                                </div>
                                                                                <div className="data__cell mobile-hide">
                                                                                        <div className="data__content">{item.description}</div>
                                                                                        {/* <div className="data__label">amount</div> */}
                                                                                </div>
                                                                                <div className="data__cell mobile-hide">
                                                                                        <div className="data__content"><strong>{item.amount}</strong> </div>
                                                                                </div>
                                                                                <div className="data__cell mobile-hide">
                                                                                <div className="data__content">
                                                                              <input type="checkbox"
                                                                              checked={item.featured}
                                                                              ></input></div>
                                                                        </div>
                                                                        
                                                                                <div className="data__cell mobile-hide">
                                                                                        <div className="data__content"><strong>${item.price}</strong></div>
                                                                                </div>
                                                                                {item.category && <div className="data__cell mobile-hide">
                                                                                        <div style={{ "backgroundColor": item.category.color }}
                                                                                                className="tag gray">{item.category.categoryName}</div>
                                                                                </div>}

                                                                                <div className="data__cell data__cell_action">
                                                                                        <button className="action action_stroke"
                                                                                                onClick={() => { props.setcomponnet("EditProduct"); props.setCurrentProduct(item) }} >
                                                                                                <i className="la la-ellipsis-h "></i>
                                                                                        </button>
                                                                                </div>
                                                                                
                                                                        </div> 
                                                                         </button>
                                                                         <div className="panel1">
                                                                         <div>
                                                                         <div className="data__content">
                                                                         <h5>:תכונות</h5> 
                                                                         {item.attributes&&item.attributes.map((att, index) => (
                                                                         att&&<div>
                                                                                 {/* <h1>{att}</h1> */}
                                                                                 <strong>{att.name}</strong>
                                                                         </div>))}

                                                                                 </div>  </div> </div>
                                                                </div>
                                                              
                                                        ))}
                                                </div>
                                        </div>
                                </div>
                        </div>
{/* {a()} */}
                </>
        )

}

export default connect(
        (state) => {
                return {
                        products: state.productReducer.products,
                        // filteredProducts: state.searchReducer.filteredItems,
                        // sortYOrNo: state.sortReducer.ascendingProductsYOrN
                }
        },
        (dispatch) => {
                return {
                        addNewImageFromDbP: (f, t) => dispatch(actions.addNewImageFromDb(f, t)),
                        setSearchReasult: (filteredItems) => dispatch(actions.setFilteredItems(filteredItems)),
                        setcomponnet: (r) => dispatch(actions.setCurrentComponent(r)),
                        changeProductImage: (i, p) => dispatch(actions.addImgToProduct({ p, i })),
                        delete: (i) => { dispatch(actions.deleteProduct(i)) },
                        setSortYOrN: () => dispatch(actions.setAscendingProductsYOrN()),
                        setCurrentProduct: (p) => dispatch(actions.setCurrentProduct(p)),
                }
        }

)(ProductsList);

