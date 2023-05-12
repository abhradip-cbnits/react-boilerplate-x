import API from '../apiClient';

export const fetchProjectList = () => {
    return new Promise((resolve, reject) => {
        API.get(`portfolio/projectlist`)
        .then(response => {
            resolve(response);
        }).catch((error) => {
            reject(error);
        })
    })
}


export const addProject = (payload) => {
    return new Promise((resolve, reject) => {
        API.post(`portfolio/addproject`, payload)
        .then(response => {
            resolve(response);
        }).catch((error) => {
            reject(error);
        })
    })
}


export const updateProject = (payload) => {
    return new Promise((resolve, reject) => {
        API.post(`portfolio/updateproject`, payload)
        .then(response => {
            resolve(response);
        }).catch((error) => {
            reject(error);
        })
    })
}
