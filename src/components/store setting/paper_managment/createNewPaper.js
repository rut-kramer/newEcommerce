import React, { useState } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { actions } from "../../../redux/action"

function CreateNewPaper(props) {

        // const [paper, setPaper] = useState({
        //         name: "",
        //         description: "",
        //         title: "",
        //         content: "",
        //         design: "" ,
        //         store:props.currentStore

        // });
        // const update = (event) => {
        //         setPaper({
        //            ...paper,
        //            [event.target.name]:event.target.value
        //        }); }
           


        // const saveForm = (e) => {
        //         e.preventDefault();
        //         props.newPaper(paper);
        // }

        return (
<>
{/* onSubmit={saveForm} */}
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
                                     {/* <label for="b">title:</label><br></br>
                        <textarea
                                id="b"
                                name="title"
                                placeholder={"Write your content..."}
                                onChange={update}
                        ></textarea><br></br> */}
                        
                        <label for="b">content:</label><br></br>
                        <textarea
                                id="b"
                                name="content"
                                placeholder={"Write your content..."}
                                onChange={props.setQuillStyle}
                        ></textarea><br></br>
                                                       
                          {/* <label for="b">design:</label><br></br>
                        <textarea
                                id="b"
                                name="design"
                                placeholder={"Write your content..."}
                                onChange={update}
                        ></textarea><br></br>
                        <input type="submit" value="Save your paper"></input> */}

                </form>
<Link to="/paper">           to design the paper</Link>
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
                        setQuillStyle:(d) => { dispatch(actions.setQuillStyle(d)) },
                        setQuillName:(d) => {debugger; dispatch(actions.setQuillName(d)) }
                }
        }
)(CreateNewPaper);
