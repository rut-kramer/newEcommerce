import React, { useState } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { actions } from "../../../redux/action"
import CrudPaper from "./crudPaper";
function CreateNewPaper(props) {
        return (
<>
                <form >
                        <h1>Create your paper</h1>
                        <label for="a">name:</label><br></br>
                        <input id="a"
                                required
                                name="name"
                                placeholder={"Write your title..."}
                                onChange={ props.setQuillName}
                        ></input><br></br>

                        <label for="b">description:</label><br></br>
                        <textarea
                                id="b"
                                name="description"
                                placeholder={"Write your content..."}
                                onChange={props.setQuillDescription}
                        ></textarea><br></br>
                        
                        <label for="b">content:</label><br></br>
                        <textarea
                                id="b"
                                name="content"
                                placeholder={"Write your content..."}
                                onChange={props.setQuillStyle}
                        ></textarea><br></br>                                           

                </form>
<Link to="/paper"> to design the paper</Link>
<CrudPaper></CrudPaper>

</>
        )
}
export default connect(
        (state) => {
                return {
                         store: state.storeReducer.currentStore,
                         quote:state.quillReducer.quote
                }
        },
        (dispatch) => {
                return {
                        // newPaper: (paper) => { dispatch(actions.createNewPaper(paper)) }
                        setQuillDescription :(d) => { dispatch(actions.setQuillDescription(d)) },
                        setQuillStyle:(d) => { dispatch(actions.setQuillStyleFromInput(d)) },
                        setQuillName:(d) => { dispatch(actions.setQuillName(d)) }
                }
        }
)(CreateNewPaper);
