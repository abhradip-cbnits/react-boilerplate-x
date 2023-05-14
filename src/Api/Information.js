import API from '../apiClient';

/* Sample API call */

export const fetchIntroduction = () => {
    return new Promise((resolve, reject) => {
        API.get(`information/introduction`)
        .then(response => {
            resolve(response);
        })
        .catch((error) => reject(error));
    })
}


