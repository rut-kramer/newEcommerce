import { actions } from '../action';
import $ from 'jquery';

export const getTheLastUpdatedStorePerUser = ({ dispatch, getState }) => next => action => {

        return new Promise((resolve, reject) => {
                if (action.type === 'LAST_UPDATED_STORE') {
                        debugger
                        $.ajax({
                                url: "https://community.leader.codes/api/users/latestStoreOfUser/" + action.payload,
                                method: "get",
                                dataType: "json",
                                contentType: "application/json",
                                success: function (data) {
                                        debugger
                                        dispatch(actions.setLastUpdatedUserStore(data));
                                        resolve(data);
                                },
                                error: function (err/*XMLHttpRequest, textStatus, errorThrown*/) {
                                        console.log(err/*XMLHttpRequest, " ", textStatus, " ", errorThrown*/)
                                        reject(err)
                                }
                        });
                }

                return next(action);
        })
};

export const getStoreByUser = ({ dispatch, getState }) => next => action => {
        if (action.type === 'GET_STORE_BY_USER') {


                $.ajax({
                        url: "https://community.leader.codes/api/users/getAllStores/" + action.payload,
                        method: "get",
                        dataType: "json",
                        contentType: "application/json",
                        success: function (data) {
                                debugger
                                dispatch(actions.setStorePerUser(data));
                        },
                        // error: function (XMLHttpRequest, textStatus, errorThrown) {
                        //         console.log(XMLHttpRequest, " ", textStatus, " ", errorThrown)

                        // }
                });

                // axios.get('https://community.leader.codes/api/users/getAllStores/' + action.payload)
                //         .then(res => {
                //                 console.log("gjhjet ", res.data);
                //                 dispatch(actions.setStorePerUser(res.data))
                //         })
                //         .catch(err => console.log("errrrrrrr", err));
        }
        return next(action);
}
