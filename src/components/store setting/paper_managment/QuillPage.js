import React, { useState } from 'react'
import 'react-quill/dist/quill.snow.css';
import ReactQuill, { Quill, Mixin, Toolbar } from 'react-quill';
// import * as ReactQuill from 'react-quill'; 
// import React from 'react/react-in-jsx-scope';
import ReactDOM from 'react-dom'
import { connect } from 'react-redux';
import { actions } from '../../../redux/action';
// import React, { Component } from "react";
//const file
// const [aa,setaa]=useState('')
const CustomButton = () => <span className="octicon octicon-star" />;

/*
 * Event handler to be attached using Quill toolbar module (see line 73)
 * https://quilljs.com/docs/modules/toolbar/
 */
function insertStar() {
  const cursorPosition = this.quill.getSelection().index;
  this.quill.insertText(cursorPosition, "★");
  this.quill.setSelection(cursorPosition + 1);
}
// function onChangeHandlerProfile(e, title) {

//   
//   var files = document.querySelectorAll(".ql-editor img")
//   if (files.length && !files[files.length - 1].src.startsWith("https")) {
//     var file = this.dataURLtoFile(files[files.length - 1].src, `image${files.length - 1}.jpg`);
//     console.log(e)
//     const reader1 = new FileReader()
//     // const file = e
//     reader1.onloadend = () => {
//       this.setState({ file2: reader1.result })
//     };
//     reader1.readAsDataURL(file)
//     var fileToUpload = file
//     var myFile = new FormData()
//     myFile.append("file", fileToUpload)
//     // if (!this.props.rowToEdit)


//     this.props.addNewImageFromDb(myFile)
//   }
// }




/*
 * Custom toolbar component including insertStar button and dropdowns
 */




/* 
 * Editor component with custom toolbar and content containers
 */
class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.state = { editorHtml: "", kkk: "", file: "", file2: "" };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(html) {

    // var parser = new DOMParser();
    // var doc = parser.parseFromString(this.state.editorHtml, 'text/html');
    // ;
    // this.props.changeQuillText(doc.body.innerText);
    // this.props.changeQuillText(document.getElementById("reactQuill").innerText);
    console.log(html)
    this.props.changeQuillStyle(html);
  }
  //var file = new File([files[1].src], "image.jpg");

  dataURLtoFile = (dataurl, filename) => {

    var arr = dataurl.split(','),
      mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]),
      n = bstr.length,
      u8arr = new Uint8Array(n);

    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }

    return new File([u8arr], filename, { type: mime });
  }









  CustomToolbar = (props) => (
    // let s=0;
    // setaa(bb);
    <div id="toolbar">

      {/* <button className="ql-bold" />
      <button className="ql-italic" />
      <button className="ql-underline"></button> */}


      {/* <button className="ql-insertStar">
        <CustomButton />

      </button> */}


      {/* <button className="ql-color">
      </button> */}
      {/* <input className="ql-color" type="color" /> */}
      {/* <input type="color" className="ql-color" /> */}


      {/* <button className="ql-image" onClick={(e)=>this.onChangeHandlerProfile(e)} ></button> */}

      {/* <button className="ql-image"></button>



      <button className="ql-clean"></button>
      <button className="ql-align"></button>


 */}











    </div>
  );


  kk(ggg) {

    // תמר
    // var files=document.querySelectorAll(".ql-editor img")
    // let index=ggg.search('src="')
    // let str=ggg[index+5]
    // index=str.search('"')




    ///////////////////////////////////
    // this.onChangeHandlerProfile();



    //   var parser = new DOMParser();
    //   var doc = parser.parseFromString(this.state.editorHtml, 'text/html');
    //  ;
    //  this.props.changeQuillText(doc.body.innerText);
    //  this.props.changeQuillStyle(doc.body.innerHTML);
    //////////////////////////////////
    this.props.changeQuillStyle(ggg);
  }


  render() {

    return (
      <>

      <div style={{ marginTop: "-4.8%", width: "86%", marginLeft: "auto", marginRight: "auto" }}>

        <div>{this.CustomToolbar()}</div>
        {/* <CustomToolbar /> */}
        <ReactQuill
          placeholder={this.props.placeholder}
          id="reactQuill"
          modules={Editor.modules}
          formats={Editor.formats}
          theme={"snow"}
          // style={{ height: "35vh", overflow: "auto" }}
          value={this.props.quote ? this.props.quote.quillStyle ? this.props.quote.quillStyle : "" : ""}
          // onChange={(e) => { this.handleChange(e) }}
          onChange={this.handleChange}
        />

      </div>
</>

    );
  }
}

Editor.modules = {
  toolbar: {
    container:
      [
        // { header: "1" },
        // [{ size: ["small", false, "large", "huge"] }],
        [{ header: [1, 2, 3, 4, 5, 6] }, { font: [] }], ['bold', 'italic', 'underline', 'strike', 'blockquote'],

        [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }], ['link', 'image'], ['clean'],
        [{ 'color': ["#000000", "#e60000", "#ff9900", "#ffff00", "#008a00", "#0066cc", "#9933ff", "#ffffff", "#facccc", "#ffebcc", "#ffffcc", "#cce8cc", "#cce0f5", "#ebd6ff", "#bbbbbb", "#f06666", "#ffc266", "#ffff66", "#66b966", "#66a3e0", "#c285ff", "#888888", "#a10000", "#b26b00", "#b2b200", "#006100", "#0047b2", "#6b24b2", "#444444", "#5c0000", "#663d00", "#666600", "#003700", "#002966", "#3d1466", 'custom-color'] },
        { 'background': ["#000000", "#e60000", "#ff9900", "#ffff00", "#008a00", "#0066cc", "#9933ff", "#ffffff", "#facccc", "#ffebcc", "#ffffcc", "#cce8cc", "#cce0f5", "#ebd6ff", "#bbbbbb", "#f06666", "#ffc266", "#ffff66", "#66b966", "#66a3e0", "#c285ff", "#888888", "#a10000", "#b26b00", "#b2b200", "#006100", "#0047b2", "#6b24b2", "#444444", "#5c0000", "#663d00", "#666600", "#003700", "#002966", "#3d1466", 'custom-color'] },

        [{ align: '' }, { align: 'center' }, { align: 'right' }, { align: 'justify' }],

        ]
      ],
    handlers: {
      insertStar: insertStar,
      // 'image': onChangeHandlerProfile
    }
  },
  clipboard: {
    matchVisual: false,
  }
};

/* 
 * Quill editor formats
 * See https://quilljs.com/docs/formats/
 */
Editor.formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "color",
  "background",
  "insertStar"
];
const mapStateToProps = (state) => {
  return {
    quote: state.quillReducer.quote,
    // managerComponent: state.managerComponent.currentComponent,
  };
}

const mapDispatchToProps = (dispatch) => ({

//   changeFile2: (q) => {debugger; dispatch(actions.setFile2(q))},
//   changeQuillText: (q) => {debugger; dispatch(actions.setQuillText(q))},
  changeQuillStyle: (q) =>  {dispatch(actions.setQuillStyle(q))},
//   addNewImageFromDb: (a) => dispatch({ type: 'ADD_NEW_IMAGE_FROM_DB', payload: a }),
})
export default connect(mapStateToProps, mapDispatchToProps)(Editor);
/*
 * PropType validation
 */

// Editor.propTypes = {
//   placeholder: PropTypes.string
// };

/*
 * Render component on page
 */
// ReactDOM.render(
//   <Editor placeholder={"Write something or insert a star ★"} />,
//   document.querySelector(".app")
// );



// var files=document.querySelectorAll(".ql-editor img")
// var file = new File([files[1].src], "image.jpg");