import React from 'react';
import { Link } from 'react-router-dom';
import homeImg from '../assets/50344.jpg';
import StorePerUser from './store setting/storePerUser';
import { connect } from 'react-redux';

function Home(props) {

  return (
    <div>

      <img id="home-img" src={homeImg} style={{ float: "left" }} alt="home" />
      <div style={{ float: "left" }}>
        <h1>Wellcome!!{props.user.username}  </h1>
        <h2>Do you want to create your shop?</h2>
        <Link to='/openStore'>
          <button>create virtual shop</button>
        </Link>

        {/* <a href="/addUser">create user</a> */}
      </div>
      <div style={{ float: "right" }}>
        <StorePerUser ></StorePerUser>
      </div>
    </div>
  )

}

export default connect(

  (state) => {

    return {

      user: state.userReducer.user,
    }

  },
  (dispatch) => {
    return {
      // getCategories: () => dispatch(actions.getAllCategories()),

    }
  }
)(Home);

