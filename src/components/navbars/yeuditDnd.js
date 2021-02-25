import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { updateCategoriesMenu } from '../../../../redux/actions/createCategory.action';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { setFilterPosts } from '../../../../redux/actions/posts.action';



class Dnd extends Component {
        constructor(props) {
                super(props);

                this.onDragEnd = this.onDragEnd.bind(this);
        }
        componentDidMount() {
                this.props.updateListMenu(this.props.ObjCategory.filter(item => item.statusMenu == true))
        }

        filterPostByCategory(result) {
                let nameCategoryChoose = this.props.listCategoriesMenu[result.id].categoryName
                this.props.setFilterPosts(nameCategoryChoose)
        }
        onDragEnd(result) {
                if (!result.destination) {
                        return;
                }
                const items = this.reorder(
                        this.props.listCategoriesMenu,
                        result.source.index,
                        result.destination.index
                );
                this.props.updateListMenu(items)
                console.log(this.props.listCategoriesMenu)
        }
        reorder = (list, startIndex, endIndex) => {
                const result = [list.length]
                for (let index = 0; index < list.length; index++) {
                        result[index] = list[index];

                }
                const [removed] = result.splice(startIndex, 1);
                result.splice(endIndex, 0, removed);
                return result;
        };
        getItemStyle = (isDragging, draggableStyle) => ({
                userSelect: 'none',
                padding: '5px',
                margin: `0 20px 0 0`,
                fontSize: '15px',
                fontWeight: 'bold',
                ...draggableStyle,
        });

        getListStyle = isDraggingOver => ({
                display: 'flex',
                padding: '10',
                overflow: 'auto',
                marginLeft: '80px',
                enabled: 'false',

        });

        render() {
                return (


                        <DragDropContext onDragEnd={this.onDragEnd}>
                                <Droppable droppableId="droppable" direction="horizontal">
                                        {(provided, snapshot) => (
                                                <div

                                                        ref={provided.innerRef}
                                                        style={this.getListStyle(snapshot.isDraggingOver)}
                                                        {...provided.droppableProps}
                                                >
                                                        <i class="fas fa-home pt-2" style={{ color: '#FFB100' }}></i>
                                                        {
                                                                this.props.listCategoriesMenu.map((item, index) => (
                                                                        <Draggable key={index} draggableId={`${index}`} index={index}>
                                                                                {(provided, snapshot) => (
                                                                                        <div id={index}
                                                                                                onClick={(e) => this.filterPostByCategory(e.target)}
                                                                                                ref={provided.innerRef}
                                                                                                {...provided.draggableProps}
                                                                                                {...provided.dragHandleProps}
                                                                                                style={this.getItemStyle(
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
}
export default connect(
        (state) => {
                return {
                        ObjCategory: state.createCategoryReducer.ObjCreateCategory,
                        listCategoriesMenu: state.createCategoryReducer.categoriesMenu,
                        postData: state.createPostReducer.postData
                }
        },
        (dispatch) => {
                return {
                        updateListMenu: (listMenu) => { dispatch(updateCategoriesMenu(listMenu)) },
                        setFilterPosts: (value) => { dispatch(setFilterPosts(value)) },
                }
        }
)(Dnd)
