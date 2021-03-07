import React, { useState } from 'react';
import { connect } from 'react-redux';
import { actions } from '../../redux/action';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { Link } from "react-router-dom";
import "./scrollNavbar.css";


function CategoryWithDropdown(props) {
        const { category } = props;
        const [dropdownOpen, setDropdownOpen] = useState(false);

        const toggle = () => setDropdownOpen(prevState => !prevState);
        return (
                <Dropdown isOpen={dropdownOpen} toggle={toggle} style={{ backgroundColor: "transparent" }} nav>
                        <DropdownToggle caret id="dropdown">
                                {category.categoryName}
                        </DropdownToggle>
                        {(Array.isArray(category.childrenCategory) && category.childrenCategory.length) &&
                                <DropdownMenu>
                                        {category.childrenCategory.map((item, index) => (
                                                <DropdownItem key={index}>{item.categoryName}</DropdownItem>

                                        ))}
                                </DropdownMenu>}
                </Dropdown>
        )
}

function Dnd(props) {

        const onDragEnd = (result) => {
                if (!result.destination) {
                        return;
                }
                console.log("pppppp", props.categories);
                const items = reorder(
                        props.categories,
                        result.source.index,
                        result.destination.index
                );
                props.setListMenu(items)
                console.log(props.categories)
        }
        const reorder = (list, startIndex, endIndex) => {
                console.log("grryty", list);
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
                marginLeft: '80px',
                enabled: 'false',

        });
        return (

                <DragDropContext onDragEnd={onDragEnd}>
                        <Droppable droppableId="droppable" direction="horizontal">
                                {(provided, snapshot) => (
                                        <div

                                                ref={provided.innerRef}
                                                style={getListStyle(snapshot.isDraggingOver)}
                                                {...provided.droppableProps}
                                        >
                                                {props.categories.filter(item => {
                                                        if (!item.masterCategory && item.masterCategory === null)
                                                                return item
                                                }).map((item, index) => (
                                                        <Draggable key={index} draggableId={`${index}`} index={index}>
                                                                {(provided, snapshot) => (
                                                                        <div
                                                                                id={index}
                                                                                ref={provided.innerRef}
                                                                                {...provided.draggableProps}
                                                                                {...provided.dragHandleProps}
                                                                                style={getItemStyle(
                                                                                        snapshot.isDragging,
                                                                                        provided.draggableProps.style,

                                                                                )}
                                                                        >
                                                                                <CategoryWithDropdown style={{ backgroundColor: "transparent" }} category={item}></CategoryWithDropdown>
                                                                        </div>
                                                                )}
                                                        </Draggable>
                                                ))}
                                                {provided.placeholder}
                                        </div>
                                )}
                        </Droppable>
                </DragDropContext>
        );
}
export default connect(
        (state) => {
                return {
                        // ObjCategory: state.createCategoryReducer.ObjCreateCategory,
                        categories: state.categoriesReducer.categoryListMenu,
                        // postData: state.createPostReducer.postData
                }
        },
        (dispatch) => {
                return {
                        setListMenu: (listMenu) => { dispatch(actions.setCategoryListMenu(listMenu)) },
                        // setFilterPosts: (value) => { dispatch(setFilterPosts(value)) },
                }
        }
)(Dnd)