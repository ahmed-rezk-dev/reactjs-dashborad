/*
 *
 * Roles actions
 *
 */

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

export function rolesRequest() {
	return {
		type: ROLES_REQUEST,
	};
}

export function rolesSuccess(data) {
	return {
		type: ROLES_SUCCESS,
		data,
	};
}

export function rolesAdd(payload) {
	return {
		type: ROLES_ADD,
		payload,
	};
}
export function rolesAddSuccess(payload) {
	return {
		type: ROLES_ADD_SUCCESS,
		payload,
	};
}

export function rolesEdit(payload) {
	return {
		type: ROLES_EDIT,
		payload,
	};
}

export function rolesEditSuccess(payload) {
	return {
		type: ROLES_EDIT_SUCCESS,
		payload,
	};
}

export function rolesDelete(payload) {
	return {
		type: ROLES_DELETE,
		payload,
	};
}
export function rolesDeleteSuccess(payload) {
	return {
		type: ROLES_DELETE_SUCCESS,
		payload,
	};
}
