import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Message} from './../Components/Message'
import PropTypes from 'prop-types';
import * as Message from './../contants/Message'

class MessageContainer extends Component {
  render(){

  return (
    <div>
        <Message>
    
        </Message>
    </div>
    );
}

  

   
}

   

MessageContainer.propTypes = {
    
}
const mapStateToProps = state => {
    return {
        message : state.message
    }
}
export default connect(mapStateToProps)(MessageContainer);

