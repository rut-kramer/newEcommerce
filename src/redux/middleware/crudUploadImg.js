import { actions } from '../action';

export const newUploadImage = ({ dispatch, getState }) => next => action => {
    // return new Promise((resolve, reject) => {
    if (action.type === 'UPLOAD_IMAGE_NAME_ACTION') {
        var raw = JSON.stringify(action.payload)
        console.log(raw)
        dispatch(actions[action.payload.func](action.payload.img))
    }
    return next(action);
    // })
};
