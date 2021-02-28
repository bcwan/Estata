import { SET_MESSAGE, CLEAR_MESSAGE } from '../actions/message_actions';

const MessageReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let nextState = Object.assign({}, oldState);
  switch (action.type) {
    case SET_MESSAGE:
      nextState["message"] = action.payload;
      return nextState;
    case CLEAR_MESSAGE:
      delete nextState["message"];
      return nextState;
    default:
      return oldState;
  }
}

export default MessageReducer;