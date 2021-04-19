import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { actions } from '../../redux/action';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { Link, useLocation } from "react-router-dom";
import "./scrollNavbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



function CategoryWithDropdown(props) {

        const { category } = props;
        const location = useLocation();
        const [activeCategory, setActiveCategory] = useState("");


        useEffect(() => {

                let splitedPathname = location.pathname.split("/");
                if (splitedPathname[2] === "category")
                        setActiveCategory(splitedPathname[3]);
                else
                        setActiveCategory("");

        })
        // const [dropdownOpen, setDropdownOpen] = useState(false);

        // const toggle = () => setDropdownOpen(prevState => !prevState);
        return (
                // to={{ pathname: "/" + (props.objectFields.urlRoute ? props.objectFields.urlRoute : props.objectFields.storeName) + "/product/" + item.SKU, state: { product: item } }}
                <Link to={{ pathname: `/${props.storeName}/category/${category.categoryName}`, state: { category: category } }} style={{ color: (activeCategory === category.categoryName && '#F29544') }}>
                        {category.categoryName}
                </Link>
                //         <Dropdown isOpen={dropdownOpen} toggle={toggle} style={{ backgroundColor: "transparent" }} nav>
                //                 <DropdownToggle caret id="dropdown" onClick={() => { history.push(`/${props.storeName}/category`) }}>
                //                         {category.categoryName}
                //                 </DropdownToggle>
                //                 {(Array.isArray(category.childrenCategory) && category.childrenCategory.length) &&
                //                         <DropdownMenu>
                //                                 {category.childrenCategory.map((item, index) => (
                //                                         <DropdownItem key={index}>{item.categoryName}</DropdownItem>

                //                                 ))}
                //                         </DropdownMenu>}
                //         </Dropdown>
        )
}

function Dnd(props) {

        const location = useLocation();

        const [activeHome, setActiveHome] = useState("");


        useEffect(() => {

                let splitedPathname = location.pathname.split("/");
                if (splitedPathname[1] === props.storeName && splitedPathname[2] === undefined)
                        setActiveHome("Home");
                else
                        setActiveHome("");

        })

        const onDragEnd = (result) => {
                if (!result.destination) {
                        return;
                }
                const items = reorder(
                        props.categories,
                        result.source.index,
                        result.destination.index
                );
                props.setListMenu(items)
        }
        const reorder = (list, startIndex, endIndex) => {
                const result = [list.length]
                for (let index = 0; index < list.length; index++) {
                        result[index] = list[index];

                }
                const [removed] = result.splice(startIndex, 1);
                result.splice(endIndex, 0, removed);
                return result;
        };
        const getItemStyle = (isDragging, draggableStyle) => ({
                userSelect: 'none',
                padding: '5px',
                margin: `0 20px 0 0`,
                fontSize: '15px',
                fontWeight: 'bold',
                color: "transparent",
                ...draggableStyle,

        });

        const getListStyle = isDraggingOver => ({
                display: 'flex',
                padding: '10',
                overflow: 'auto',
                // marginLeft: '80px',שמתי בהערה כי נראה מ יותר ומעוות את השורה
                enabled: 'false',

        });
        return (
                <>
                        <Link to={`/${props.storeName}`} style={{ color: (activeHome === "Home" && '#F29544'), fontWeight: 900 }}>
                                Home
                        </Link>
                        <DragDropContext onDragEnd={onDragEnd}>
                                <Droppable droppableId="droppable" direction="horizontal">
                                        {(provided, snapshot) => (
                                                <div
                                                        className="d-flex justify-content-center"
                                                        ref={provided.innerRef}
                                                        style={getListStyle(snapshot.isDraggingOver)}
                                                        {...provided.droppableProps}
                                                >
                                                        {/* <Draggable
                                                        key={0} draggableId={0} index={0}>
                                                        {(provided, snapshot) => (
                                                                <div
                                                                        className="drag_category"
                                                                        id={0}
                                                                        ref={provided.innerRef}
                                                                        {...provided.draggableProps}
                                                                        {...provided.dragHandleProps}
                                                                        style={getItemStyle(
                                                                                snapshot.isDragging,
                                                                                provided.draggableProps.style,

                                                                        )}
                                                                >
                                                                        {/* arrows-alt */}
                                                        {/* <FontAwesomeIcon className="drag_icon_category mr-2" icon={['fas', 'grip-vertical']}></FontAwesomeIcon>
                                                                        <Link to={`/${props.storeName}/`}>
                                                                                Home
                                                                        </Link>                                                                        </div>
                                                        )}
                                                </Draggable> */}

                                                        {props.categories.filter(item => {
                                                                if (!item.masterCategory && item.masterCategory === null
                                                                        // && item.categoryDesign.statusShow
                                                                )
                                                                        return item
                                                        }).map((item, index) => (

                                                                <Draggable
                                                                        onChange={props.setCategoryTitle(item.categoryName)}
                                                                        key={index} draggableId={`${index}`} index={index}>
                                                                        {(provided, snapshot) => (
                                                                                <div
                                                                                        className="drag_category"
                                                                                        id={index}
                                                                                        ref={provided.innerRef}
                                                                                        {...provided.draggableProps}
                                                                                        {...provided.dragHandleProps}
                                                                                        style={getItemStyle(
                                                                                                snapshot.isDragging,
                                                                                                provided.draggableProps.style,
                                                                                        )}
                                                                                >
                                                                                        {/* arrows-alt */}
                                                                                        <FontAwesomeIcon className="drag_icon_category mr-2" icon={['fas', 'grip-vertical']}></FontAwesomeIcon>
                                                                                        <CategoryWithDropdown style={{ backgroundColor: "transparent" }} category={item}></CategoryWithDropdown>
                                                                                </div>
                                                                        )}
                                                                </Draggable>
                                                        ))}
                                                        {provided.placeholder}

                                                        <Link to={{ pathname: "/" + props.objectFields.urlRoute + "/category/New", state: { category: "New" } }}
                                                                onClick={() => { props.setcomponnet("AddCategory") }}>
                                                                <span className="badge rounded-pill badge-notification" style={{ backgroundColor: "#FC894D" }}>+</span>
                                                        </Link>
                                                </div>
                                        )}
                                </Droppable>
                        </DragDropContext>
                </>
        );
}
export default connect(
        (state) => {
                return {
                        // ObjCategory: state.createCategoryReducer.ObjCreateCategory,
                        categories: state.categoriesReducer.categoryListMenu,
                        storeName: state.storeReducer.objectFields.urlRoute ?
                                state.storeReducer.objectFields.urlRoute :
                                state.storeReducer.objectFields.storeName,
                        objectFields: state.storeReducer.objectFields,
                        // postData: state.createPostReducer.postData
                }
        },
        (dispatch) => {
                return {
                        setListMenu: (listMenu) => { dispatch(actions.setCategoryListMenu(listMenu)) },
                        setCategoryTitle: (title) => { dispatch(actions.setCategoryTitle(title)) },

                        // setFilterPosts: (value) => { dispatch(setFilterPosts(value)) },
                        setcomponnet: (r) => dispatch(actions.setCurrentComponent(r)),

                }
        }
)(Dnd)