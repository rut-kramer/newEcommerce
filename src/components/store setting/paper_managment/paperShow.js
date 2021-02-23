import { faBorderStyle } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import { actions } from "../../../redux/action"
import Editor from "./QuillPage";

function PaperShow(props) {

useEffect(()=>{
//      props.changeQuillStyle(props.quote.quillStyle) 
},[])

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
           {props.quote.quillStyle}
 <div style={{ border: '1px solid',width:'70%',height:'50%'}} id="id"></div>
 <button onClick={show}>show</button>
 <button onClick={submit}>submit</button>
            </>
        )
}
    export default connect(
            (state) => {
                    return {
                        // paper:state.paperReducer.paper,
                        quote:state.quillReducer.quote,

                    }
            },
            (dispatch) => {
                    return {
                        changeQuillStyle: (q) =>  {dispatch(actions.setQuillStyle(q))},    
                         newPaper: (paper) => { dispatch(actions.createNewPaper(paper)) }

                    }
            }
    )(PaperShow);