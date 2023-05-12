import API from '../apiClient';

export const fetchIntroduction = () => {
    return new Promise((resolve, reject) => {
        API.get(`information/introduction`)
        .then(response => {
            resolve(response);
        })
        .catch((error) => reject(error));
    })
}


export const fetchProject = () => {
    return new Promise((resolve, reject) => {
        API.get(`information/projectSummary`)
        .then(response => {
            resolve(response);
        })
        .catch((error) => reject(error));
    })
}

export const fetchCompanies = (payload) => {
    return new Promise((resolve, reject) => {
        API.get(`information/companies`)
        .then(response => {
            resolve(response);
        })
        .catch((error) => reject(error));
    })
}

export const fetchHobbies = (payload) => {
    return new Promise((resolve, reject) => {
        API.get(`information/hobbies`)
        .then(response => {
            resolve(response);
        })
        .catch((error) => reject(error));
    })
}

export const fetchPublications = (payload) => {
    return new Promise((resolve, reject) => {
        API.get(`information/publications`)
        .then(response => {
            resolve(response);
        })
        .catch((error) => reject(error));
    })
}
