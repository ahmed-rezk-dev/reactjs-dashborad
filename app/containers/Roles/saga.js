import { call, put, takeLatest, all } from 'redux-saga/effects';
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
} from './actions';

// FETCH
function* fetchRoles() {
	try {
		const response = yield call(Api.getRoles);
		yield put(rolesSuccess(response.data.data));
	} catch (error) {
		console.error('error:', error);
	}
}

// ADD
function* addRoles({ payload }) {
	try {
		// const response = yield call(Api.getRoles);
		yield put(rolesAddSuccess(payload));
	} catch (error) {
		const { data } = error.response;
		// yield put(errorAction(data));
		console.error('error:', error);
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
		const { data } = error.response;
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
		const { data } = error.response;
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
