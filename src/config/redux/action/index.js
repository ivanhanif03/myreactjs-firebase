import firebase from '../../firebase';
import Swal from 'sweetalert2';

export const actionUserName = () => (dispatch) => {
    setTimeout(() => {
        return dispatch({type: 'CHANGE_USER', value: 'Ganteng'})
    }, 2000)
}

export const registerUserAPI = (data) => (dispatch) => {
    return new Promise((resolve, reject) => {
        dispatch({type: 'CHANGE_LOADING', value: true})
        firebase.auth().createUserWithEmailAndPassword(data.email, data.password)
        .then((result) => {
            // Handle Success
            console.log('success: ', result);
            dispatch({type: 'CHANGE_LOADING', value: false});
            resolve(true)
        })
        .catch(function(error) {
            // Handle Errors
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode, errorMessage)
            dispatch({type: 'CHANGE_LOADING', value: false})
            reject(false)
        })
    })
}

export const loginUserAPI = (data) => (dispatch) => {

    return new Promise((resolve, reject) => {
        dispatch({type: 'CHANGE_LOADING', value: true})
        firebase.auth().signInWithEmailAndPassword(data.email, data.password)
        .then((result) => {
            // Handle Success
            console.log('success: ', result);
            const dataUser = {
                email: result.user.email,
                uid: result.user.uid,
                emailVerified: result.user.emailVerified,
            }

            dispatch({type: 'CHANGE_LOADING', value: false})
            dispatch({type: 'CHANGE_ISLOGIN', value: true})
            dispatch({type: 'CHANGE_USER', value: dataUser})

            Swal.fire({
                icon: 'success',
                title: 'login akun telah berhasil',
                showConfirmButton: false,
                timer: 2000
            })
        
            resolve(true)
        })
        .catch(function(error) {
            // Handle Errors
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode, errorMessage)
            dispatch({type: 'CHANGE_LOADING', value: false})
            dispatch({type: 'CHANGE_ISLOGIN', value: false})
            reject(false)
        })
    })
}