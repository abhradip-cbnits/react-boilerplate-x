import API from '../apiClient';

export const userLogin = (payload) => {
    return new Promise((resolve, reject) => {
        API.post(`user/login`, payload)
        .then(response => {
            resolve(response);
        }).catch((error) => {
            reject(error);
        })
    })

}
