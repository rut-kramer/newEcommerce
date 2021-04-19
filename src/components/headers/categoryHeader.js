import React, { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { connect } from "react-redux";
import { actions } from "../../redux/action";
import "./ecommerceHeader.css"
import aa from "../../assets/img/bg1.jpg"

function CategoryHeader(props) {
  const history = useHistory();
  const location = useLocation();
  const { category } = props;
  props.setTitle(category.categoryName)
  props.setImage(aa)
  function openMediaGallery() {
    props.setImageLocation(location.pathname)
    props.setfunctionToSetImage("setCategoryImages")
    history.push("/" + props.objectFields.urlRoute + "/mediaGallery/uploudImage");
  }

  return (
    <div>
      {props.ifDisplayTitle ?
        <div className="bullcommerceTitle">
          <input className="bullcommerceTitleInput"
            value={props.categoryTitle}
            onChange={(e) => props.setTitle(e.target.value)}
            style={{
              textAlign: props.alignment ? props.alignment : 'center',
            }}
          ></input>
        </div> : ""
      }

      <div onClick={() => openMediaGallery()}
        className="page-header header-filter carouelImgHover">
        <div
          className="page-header-image"
          style={{
            backgroundImage: 'url(' + props.categoryImage + ')'
          }}
        >
          {/* {props.categoryImage.map((image) => {
            if (image.categoryName == category.categoryName) {
              <div
                style={{
                        backgroundImage: 'url(' + image.img + ')'
                }}>
              </div>
            }
          }
          )} */}
        </div>
      </div>
    </div>
  )
}
const mapStateToProps = (state) => {
  return {
    objectFields: state.storeReducer.objectFields,
    categoryTitle: state.categoryHeaderReducer.title,
    categoryImage: state.categoryHeaderReducer.image,
    alignment: state.bullPageEditReducer.alignment,
    ifDisplayTitle: state.bullPageEditReducer.ifDisplayTitle,
  }
}
const mapDispatchToProps = (dispatch) => ({
  setTitle: (e) => dispatch(actions.setCategoryTitle(e)),
  setImage: (e) => dispatch(actions.setCategoryImage(e)),
  changeCurrentComponent: (e) => dispatch(actions.setCurrentComponent(e)),
  setImageLocation: (e) => dispatch(actions.setImageLocation(e)),
  setfunctionToSetImage: (e) => dispatch(actions.setfunctionToSetImage(e))
})
export default connect(mapStateToProps, mapDispatchToProps)(CategoryHeader);