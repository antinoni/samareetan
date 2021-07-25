import firebase from "firebase";
import React, { Component } from "react";
import { View } from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchUser } from "../redux/actions";

export class Feed extends Component {
  componentDidMount() {
    this.props.fetchUsers;
  }
  render() {
    //const { currentUser } = this.props;
    return (
      <View>
        <Text> THis is some text</Text>
      </View>
    );
  }
}

const mapStateToProps = (store) => ({
  currentUser: store.userState.currentUser,
});
const mapDispatchProps = (dispatch) =>
  bindActionCreators({ fetchUser }, dispatch);

export default connect(null, mapDispatchProps)(Feed);
