/*
 *
 * Roles reducer
 *
 */
import produce from 'immer';
import {
	ROLES_REQUEST,
	ROLES_SUCCESS,
	ROLES_ADD,
	ROLES_EDIT,
	ROLES_DELETE,
	ROLES_ADD_SUCCESS,
	ROLES_EDIT_SUCCESS,
	ROLES_DELETE_SUCCESS,
} from './constants';

export const initialState = {
	fetching: false,
	isLoading: false,
	error: false,
	payload: null,
	data: [],
	form: 'roles',
};

/* eslint-disable default-case, no-param-reassign */
const rolesReducer = (state = initialState, action) =>
	produce(state, draft => {
		const { type, data, payload } = action;
		switch (type) {
			case ROLES_REQUEST:
				return { ...state, fetching: true, payload: null };
			case ROLES_SUCCESS:
				draft.data = data;
				draft.fetching = false;
				draft.isLoading = false;
				break;
			case ROLES_ADD:
				draft.payload = payload;
				draft.isLoading = true;
				break;
			case ROLES_ADD_SUCCESS:
				draft.data.push(payload);
				draft.isLoading = false;
				break;
			case ROLES_EDIT:
				draft.payload = payload;
				draft.isLoading = true;
				break;
			case ROLES_EDIT_SUCCESS:
				draft.data[payload.index] = payload.data;
				draft.isLoading = false;
				break;
			case ROLES_DELETE:
				draft.payload = payload;
				draft.isLoading = true;
				break;
			case ROLES_DELETE_SUCCESS:
				delete draft.data.splice(payload.index, 1);
				draft.isLoading = false;
				break;
			default:
				return draft;
		}
	});

export default rolesReducer;
