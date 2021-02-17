import React, { useState } from 'react'
import { connect } from 'react-redux';
import { actions } from "../../redux/action"

function CreateNewPaper(props) {

        const [name, setName] = useState("");
        const [description, setDescription] = useState("");
        const [title, setTitle] = useState("");
        const [content, setContent] = useState("");
        const [design, setDesign] = useState("");

        const saveForm = (e) => {
                debugger
                e.preventDefault();
                props.newPaper({
                        name: name,
                        description: description,
                        title: title,
                        content: content,
                        design: design
                })
                debugger
        }

        return (

                <form onSubmit={saveForm}>
                        <h1>Create your paper</h1>
                        <label for="a">title:</label><br></br>
                        <input id="a"
                                required
                                name="paperTitle"
                                placeholder={"Write your title..."}
                                onChange={(e) => { setTitle(e.target.value) }}
                        ></input><br></br>

                        <label for="b">content:</label><br></br>
                        <textarea
                                id="b"
                                name="paperContent"
                                placeholder={"Write your content..."}
                                onChange={(e) => { setContent(e.target.value) }}
                        ></textarea><br></br>

                        <input type="submit" value="Save your paper"></input>

                </form>

        )
}
export default connect(
        (state) => {
                return {
                        // store: state.storeReducer.currentStore
                }
        },
        (dispatch) => {
                return {
                        newPaper: (paper) => { dispatch(actions.createNewPaper(paper)) }
                }
        }
)(CreateNewPaper);
