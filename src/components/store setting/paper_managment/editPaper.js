import { faBorderStyle } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { actions } from "../../../redux/action"
import Editor from "./QuillPage";

function editPaper(props) {


function  show() {
        document.getElementById("id").innerHTML =  props.quote.quillStyle
}

function  submit() {
 props.newPaper(props.quote);   
}



    return (<>
          <h1> ערוך את דף {props.quote.name}</h1>
      <br></br>
      <br></br>
      <br></br>         
      <br></br>
      <br></br>
      <br></br>   
            <Editor></Editor>   
 <div style={{ border: '1px solid',width:'70%',height:'50%'}} id="id"></div>
 <button onClick={show}>show</button>
 <button onClick={submit}>submit</button>
 <button onClick={()=>{props.editPaper(props.quote)}}>edit</button>
 <Link to="/:storeName/admin">to the admin</Link>
            </>
        )
}
    export default connect(
            (state) => {
                    return {
                        quote:state.quillReducer.quote,

                    }
            },
            (dispatch) => {
                    return {
                        changeQuillStyle: (q) =>  {dispatch(actions.setQuillStyle(q))},    
                         newPaper: (paper) => { dispatch(actions.createNewPaper(paper)) },
                         editPaper:(paper) => { dispatch(actions.editPaper(paper)) },
                    }
            }
    )(editPaper);