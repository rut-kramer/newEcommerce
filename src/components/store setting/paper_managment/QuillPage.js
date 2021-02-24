import React, { useState } from 'react'
import 'react-quill/dist/quill.snow.css';
import ReactQuill, { Quill, Mixin, Toolbar } from 'react-quill';
import ReactDOM from 'react-dom'
import { connect } from 'react-redux';
import { actions } from '../../../redux/action';

const CustomButton = () => <span className="octicon octicon-star" />;

function insertStar() {
  const cursorPosition = this.quill.getSelection().index;
  this.quill.insertText(cursorPosition, "★");
  this.quill.setSelection(cursorPosition + 1);
}
class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.state = { editorHtml: "", kkk: "", file: "", file2: "" };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(html) {
    console.log(html)
    this.props.changeQuillStyle(html);
  }

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
    <div id="toolbar"></div>
  );

  kk(ggg) {
    this.props.changeQuillStyle(ggg);
  }

  render() {
    return (
      <>
      <div style={{ marginTop: "-4.8%", width: "86%", marginLeft: "auto", marginRight: "auto" }}>
        <div>{this.CustomToolbar()}</div>
        <ReactQuill
          placeholder={this.props.placeholder}
          id="reactQuill"
          modules={Editor.modules}
          formats={Editor.formats}
          theme={"snow"}
          value={this.props.quote ? this.props.quote.quillStyle ? this.props.quote.quillStyle : "" : ""}
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
        [{ header: [1, 2, 3, 4, 5, 6] }, { font: [] }], ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }], ['link', 'image'], ['clean'],
        [{ 'color': ["#000000", "#e60000", "#ff9900", "#ffff00", "#008a00", "#0066cc", "#9933ff", "#ffffff", "#facccc", "#ffebcc", "#ffffcc", "#cce8cc", "#cce0f5", "#ebd6ff", "#bbbbbb", "#f06666", "#ffc266", "#ffff66", "#66b966", "#66a3e0", "#c285ff", "#888888", "#a10000", "#b26b00", "#b2b200", "#006100", "#0047b2", "#6b24b2", "#444444", "#5c0000", "#663d00", "#666600", "#003700", "#002966", "#3d1466", 'custom-color'] },
        { 'background': ["#000000", "#e60000", "#ff9900", "#ffff00", "#008a00", "#0066cc", "#9933ff", "#ffffff", "#facccc", "#ffebcc", "#ffffcc", "#cce8cc", "#cce0f5", "#ebd6ff", "#bbbbbb", "#f06666", "#ffc266", "#ffff66", "#66b966", "#66a3e0", "#c285ff", "#888888", "#a10000", "#b26b00", "#b2b200", "#006100", "#0047b2", "#6b24b2", "#444444", "#5c0000", "#663d00", "#666600", "#003700", "#002966", "#3d1466", 'custom-color'] },
        [{ align: '' }, { align: 'center' }, { align: 'right' }, { align: 'justify' }],
        ]
      ],
    handlers: {
      insertStar: insertStar,
    }
  },
  clipboard: {
    matchVisual: false,
  }
};

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
  };
}

const mapDispatchToProps = (dispatch) => ({
  changeQuillStyle: (q) =>  {dispatch(actions.setQuillStyle(q))},
})
export default connect(mapStateToProps, mapDispatchToProps)(Editor);
