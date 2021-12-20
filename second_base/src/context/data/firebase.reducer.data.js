import { con } from '../../utils/console';

export default function dataReducer(state, { type, payload }) {
  switch (type) {
    case 'GET_USERS':
      con.success(`** USER FETCHED ** uid: ${payload.uid}`);
      return {
        ...state,
        data: { ...state.data, user: [payload] },
      };
    case 'ADD_USER':
      con.success('** USER ADDED **');
      console.log(payload);
      return {
        ...state,
        data: { ...state.data, user: payload },
      };
    case 'UPDATE_USER':
      con.success(`** USER UPDATED ** uid: ${payload}`);
      return {
        ...state,
        data: { ...state.data, user: [payload] },
      };
    case 'GET_IMAGES':
      con.success('** IMAGE FETCHED **');
      return {
        ...state,
        data: { ...state.data, images: { ...state.data.images, ...payload } },
      };
    default:
      return state;
  }
}
