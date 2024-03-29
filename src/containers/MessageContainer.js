import React, {Component} from 'react';
import { connect } from 'react-redux';
import  Message from './../Components/Message'
import PropTypes from 'prop-types';
// import * as MessageType from './../contants/Message'

class MessageContainer extends Component {
  render(){
    var {message} = this.props;

  return (
        <Message message = {message}>
        </Message>
    );
}
}


MessageContainer.propTypes = {
    message: PropTypes.string.isRequired
}
const mapStateToProps = state => {
    return {
        message : state.message
    }
}
export default connect(mapStateToProps)(MessageContainer);

