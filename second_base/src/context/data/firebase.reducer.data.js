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
    case 'GET_STUDIO':
      con.success('** STUDIO INFO FETCHED **');
      return {
        ...state,
        data: { ...state.data, studio: payload },
      };
    case 'GET_IMAGES':
      con.success('** IMAGES FETCHED **');
      return {
        ...state,
        data: { ...state.data, images: payload },
      };
    case 'UPDATE_IMAGE':
      con.success('** IMAGE UPDATED **');
      return {
        ...state,
        data: { ...state.data, images: payload },
      };
    case 'UPDATE_STUDIO':
      con.success('** STUDIO UPDATED **');
      return {
        ...state,
        data: { ...state.data, studio: payload },
      };
    default:
      return state;
  }
}
