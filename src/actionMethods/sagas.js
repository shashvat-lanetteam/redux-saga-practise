import {takeEvery} from 'redux-saga';
import {put,call} from 'redux-saga/effects';
import axios from 'axios';

function apicallLogin(){
  return axios.get('https://api.myjson.com/bins/f7g67');
}

function* loginSaga(payload){
    try {
        const data = yield call(apicallLogin);
        yield put({type: 'loginUser', payload: data})
    }
    catch(err){
        alert(err.message);
        yield put({type:'err',payload:err})
    }
}
function* logoutSaga(){
    yield put({type:'logoutUser'})
}

function* getUser(data){
    debugger;
    yield put({type:'userset', payload:data.payload})
}


function* mysaga(){
    debugger;
    yield takeEvery('login', loginSaga);
    yield takeEvery('logout', logoutSaga);
    yield takeEvery('getUser', getUser);
}

export default mysaga;
//https://api.myjson.com/bins/f7g67