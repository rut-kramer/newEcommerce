import React, { useEffect } from 'react';
// import { useParams } from "react-router";
import { connect } from 'react-redux';
import { actions } from '../../../redux/action'
// import './crudProducts.css';
import $ from 'jquery'
// import productImg from '../assets/products/product-pic-7.png'
// import cloneDeep from 'lodash/cloneDeep';

function ProductsGrid(props) {

        // const [file, setFile] = useState()

        // let { Name, Description, Amount, Price, Category } = {
        //         Name: "Name",
        //         Description: "Description",
        //         Amount: "Amount",
        //         Price: "Price",
        //         Category: "Category"
        // }
        useEffect(() => {
                var panel = $('.js-panel');
                if (panel.length) {
                        var btn = panel.find('.js-panel-btn, .js-panel-action'),
                                tab = panel.find('.js-panel-tab');

                        btn.on('click', function () {
                                var index = $(this).index();

                                btn.removeClass('active');
                                btn.eq(index).addClass('active');

                                ;
                                tab.hide();
                                tab.eq(index).show();
                        });
                }
        }, [])


        // let i = 0;

        // const onChangeHandlerImage = (event, thiss) => {

        //         if (event) {
        //                 let reader = new FileReader();
        //                 reader.onloadend = () => {
        //                          ;
        //                         props.changeProductImage(0, reader.result)

        //                 }
        //                 reader.readAsDataURL(event)
        //         }
        //         props.setSearchReasult(props.products);

        // }

        // const sortColumn = (columnName) => {
        //          ;
        //         props.setSortYOrN();

        //         let sortProducts = props.filteredProducts;

        //         let bb = sortProducts.slice().sort((a, b) => {

        //                 let x = a[columnName].toString().toLowerCase();
        //                 let y = b[columnName].toString().toLowerCase()

        //                 if (x < y) { return -1; }
        //                 if (x > y) { return 1; }
        //                 return 0

        //                 // return a[columnName].localeCompare(b[columnName])
        //         });
        //         if (!props.sortYOrNo)
        //                 bb.reverse();

        //          ;
        //       props.setSearchReasult(bb);

        // }

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

        return (
                <>
                        <div className="panel__tab js-panel-tab" style={{ display: 'block' }}>
                                <div className="data data_grid">
                                        <div className="data__container">
                                                <div className="data__head">
                                                </div>
                                                <div className="data__body">
                                                        {/*TO DOs  filteredProducts */}
                                                        {props.products.map((item, index) => (
                                                                <div class="data__item">
                                                                        <div class="data__corner">
                                                                                <button class="action action_stroke"><i class="la la-ellipsis-h "></i></button></div>
                                                                        <div class="data__corner data__corner_left"><label class="switch"><input class="switch__input" type="checkbox" /><span class="switch__content"></span></label></div>
                                                                        <div class="data__row">
                                                                                <div class="data__cell">
                                                                                        <div class="data__main">
                                                                                                <div class="data__wrap">
                                                                                                        <div class="data__content"><strong>{item.name}</strong></div>
                                                                                                        <div class="data__label">SKU {item.SKU}</div>
                                                                                                </div>
                                                                                        </div>
                                                                                </div>
                                                                                {item.category && <div className="data__cell mobile-hide">
                                                                                        <div style={{ "backgroundColor": item.category.color }}
                                                                                                className="tag gray">{item.category.categoryName}</div>
                                                                                </div>}
                                                                                <div class="data__foot">
                                                                                        <div class="data__box"><strong>${item.price}</strong></div>
                                                                                </div>
                                                                        </div>
                                                                </div>
                                                        ))}
                                                </div>
                                        </div>
                                </div>
                        </div>
                </>)
}

export default connect(
        (state) => {
                return {
                        products: state.productReducer.products,
                        //filteredProducts: state.searchReducer.filteredItems,
                        // sortYOrNo: state.sortReducer.ascendingProductsYOrN
                }
        },
        (dispatch) => {
                return {
                        addNewImageFromDbP: (f, t) => dispatch(actions.addNewImageFromDb(f, t)),
                        changeProductImage: (i, p) => dispatch(actions.setProductImage({ i, p })),
                        setSearchReasult: (filteredItems) => dispatch(actions.setFilteredItems(filteredItems)),
                        setcomponnet: (r) => dispatch(actions.setCurrentComponent(r)),
                        changeProductImage: (i, p) => dispatch(actions.setProductImage({ i, p })),
                        delete: (i) => { dispatch(actions.deleteProduct(i)) },
                        setSortYOrN: () => dispatch(actions.setAscendingProductsYOrN())
                }
        }

)(ProductsGrid);

