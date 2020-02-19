import { call, put, takeLatest, all } from 'redux-saga/effects';
import { message } from 'antd';
import {
	ROLES_REQUEST,
	ROLES_DELETE,
	ROLES_EDIT,
	ROLES_ADD,
} from './constants';
import Api from '../../utils/Api';
import {
	rolesSuccess,
	rolesAddSuccess,
	rolesEditSuccess,
	rolesDeleteSuccess,
	rolesError,
	toggleAddModal,
} from './actions';

// FETCH
function* fetchRoles() {
	const response = yield call(Api.getRoles);
	yield put(rolesSuccess(response.data.data));
}

// ADD
function* addRoles({ payload }) {
	try {
		const { data } = yield call(Api.addRoles, payload);
		yield put(rolesAddSuccess(data));
		yield put(toggleAddModal());
		message.error(data.msg);
	} catch (error) {
		const { data } = error.response;
		yield put(rolesError());
		message.error(data.msg);
	}
}

// EDIT
function* editRoles({ payload }) {
	console.log('payload in saga:', payload);
	try {
		// const response = yield call(Api.getRoles);
		yield put(rolesEditSuccess({ data: payload.data, index: payload.index }));
	} catch (error) {
		console.error('error:', error);
		// const { data } = error.response;
		// yield put(errorAction(data));
	}
}

// DELETE
function* deleteRoles({ payload }) {
	try {
		// const response = yield call(Api.getRoles);
		yield put(rolesDeleteSuccess({ index: payload.index }));
	} catch (error) {
		console.error('error:', error);
		// const { data } = error.response;
		// yield put(errorAction(data));
	}
}

// Individual exports for testing
export default function* rootSaga() {
	yield all([
		takeLatest(ROLES_REQUEST, fetchRoles),
		takeLatest(ROLES_ADD, addRoles),
		takeLatest(ROLES_EDIT, editRoles),
		takeLatest(ROLES_DELETE, deleteRoles),
	]);
}
