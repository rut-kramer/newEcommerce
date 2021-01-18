import React, { useEffect, useState } from 'react';
// import { useParams } from "react-router";
import './yeudit.css'
import { connect } from 'react-redux';
import { actions } from '../redux/action'
import './crudProducts.css';
import ProductsList from './productsList';
import ProductsGrid from './productsGrid'
// import $ from 'jquery'
// import productImg from '../assets/products/product-pic-7.png'
// import cloneDeep from 'lodash/cloneDeep';
// import { getElementError } from '@testing-library/react';


function Yeudit(props) {
    const [degelBtn, setDegelBtn] = useState(1)
    // const [file, setFile] = useState()
    // let [items, setMyItems] = useState(props.products);
    function changePageNum(num) {
        ;

        let PageNum;
        // $(".pager__link").removeClass('active')

        if (num == "+")
            PageNum++;
        else {
            if (num == "-")
                PageNum--;
            else
                PageNum = num;
        }
        setDegelBtn(PageNum)
        // כבר מיותר:
        // let p1 = (PageNum - 1) * 6;
        // let p2 = PageNum * 6 - 1;
        // let list = props.filteredProducts;
        // list = list[0] ? list.slice(p1, p2) : [];
        // console.log("list", list);
        // setMyItems(list);                
    }
    // ניסוי שלי:
    // function setProductImage(num, img) {
    //         props.changeProductImage(num, img)
    //         changePageNum(degelBtn);
    // }

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

            <div className="page">
                <div>
                    <div className="container__head">
                        <div className="container__title title title_md">Products</div>
                        <div className="container__search search js-search mySearch">
                            <button className="search__action action js-search-open">
                                <i className="la la-search" onClick={() => { props.setcomponnet("search") }}></i></button>
                        </div>
                        <div className="container__new new js-new">
                            <button className="new__action action js-new-open" onClick={() => { props.setcomponnet("addProduct") }}>
                                <i className="la la-plus-circle "></i>
                            </button>
                        </div>
                    </div>

                    <div className="container__body">
                        <div className="panel js-panel">
                            <div className="panel__head panel__head_line">
                                <div className="panel__group btn-group btn-group_tabs">
                                    <button className="btn btn_light btn_icon js-panel-btn active" onClick={() => props.setViewLOrG("list")}>
                                        <i className="la la-list "></i>List</button><button className="btn btn_light btn_icon js-panel-btn" onClick={() => props.setViewLOrG("grid")}><i className="la la-border-all "></i>Grid</button></div>
                            </div>
                            <div className="panel__body">
                                {props.viewLOrGrid === "list" ? <ProductsList
                                    PageNum={degelBtn}
                                // data={items} setProductImage={setProductImage}
                                /> : <ProductsGrid />}

                                <div className="panel__foot">
                                    <div className="pager">
                                        <button className="pager__arrow action action_icon_before" onClick={() => { changePageNum('-') }}>
                                            <i className="la la-angle-left "></i>Prev
                                                                                 </button>
                                        <div className="pager__list">
                                            <button
                                                className={degelBtn == 1 ? "active pager__link action" : "pager__link action"}
                                                onClick={() => { changePageNum(1) }}
                                            // className="pager__link action"
                                            >1</button>
                                            <button
                                                className={degelBtn == 2 ? "active pager__link action" : "pager__link action"}
                                                onClick={() => { changePageNum(2) }}
                                            >2</button>
                                            <button
                                                className={degelBtn == 3 ? "active pager__link action" : "pager__link action"}
                                                onClick={() => { changePageNum(3) }}
                                            >3</button>
                                            <button
                                                onClick={() => { changePageNum(4) }}
                                                className={degelBtn == 4 ? "active pager__link action" : "pager__link action"}
                                            >4</button>
                                            <button
                                                onClick={() => { changePageNum(5) }}
                                                className={degelBtn == 5 ? "active pager__link action" : "pager__link action"}
                                            >5</button>

                                        </div>
                                        <button className="pager__arrow action action_icon_after" onClick={() => { changePageNum('+') }}>Next
                                                                                <i className="la la-angle-right "></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )

}

export default connect(
    (state) => {
        return {
            products: state.productReducer.products,
            filteredProducts: state.searchReducer.filteredItems,
            sortYOrNo: state.sortReducer.ascendingProductsYOrN,
            viewLOrGrid: state.productReducer.viewListOrGrid
        }
    },
    (dispatch) => {
        return {
            // getAllProducts:()=>dispatch(actions.getAllProducts()) 
            // getAllProducts:()=>dispatch(actions.setProducts()) 
            getAllProducts: () => dispatch(actions.getAllProducts()),
            addNewImageFromDbP: (f, t) => dispatch(actions.addNewImageFromDb(f, t)),
            setSearchReasult: (filteredItems) => dispatch(actions.setFilteredItems(filteredItems)),
            setcomponnet: (r) => dispatch(actions.setCurrentComponent(r)),
            delete: (i) => { dispatch(actions.deleteProduct(i)) },
            setSortYOrN: () => dispatch(actions.setAscendingProductsYOrN()),
            setViewLOrG: (x) => dispatch(actions.setLOrG(x)),
            changeProductImage: (i, p) => dispatch(actions.addImgToProduct({ i, p })),
            // changeProductImage: (p, i) => dispatch(actions.setProductImage({ p, i })),

        }
    }

)(Yeudit);

