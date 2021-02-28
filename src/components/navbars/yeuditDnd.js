import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { actions } from '../../redux/action';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';



function Dnd(props) {

        // componentDidMount() {
        //         this.props.updateListMenu(this.props.ObjCategory.filter(item => item.statusMenu == true))
        // }

        // filterPostByCategory(result) {
        //         let nameCategoryChoose = this.props.listCategoriesMenu[result.id].categoryName
        //         this.props.setFilterPosts(nameCategoryChoose)
        // }
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
                                                <i class="fas fa-home pt-2" style={{ color: '#FFB100' }}></i>
                                                {
                                                        props.categories.map((item, index) => (
                                                                <Draggable key={index} draggableId={`${index}`} index={index}>
                                                                        {(provided, snapshot) => (
                                                                                <div id={index}
                                                                                        // onClick={(e) => this.filterPostByCategory(e.target)}
                                                                                        ref={provided.innerRef}
                                                                                        {...provided.draggableProps}
                                                                                        {...provided.dragHandleProps}
                                                                                        style={getItemStyle(
                                                                                                snapshot.isDragging,
                                                                                                provided.draggableProps.style
                                                                                        )}
                                                                                >
                                                                                        {item.categoryName}
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