import { SET_MESSAGE, CLEAR_MESSAGE } from '../actions/message_actions';

const MessageReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let nextState = Object.assign({}, oldState);
  switch (action.type) {
    case SET_MESSAGE:
      return action.payload;
    case CLEAR_MESSAGE:
      delete nextState["payload"];
      return nextState;
    default:
      return oldState;
  }
}

export default MessageReducer;