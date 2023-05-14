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

export const updateIntroduction = (payload) => {
    return new Promise((resolve, reject) => {
        API.post(`information/updateintroduction`, payload)
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

export const updateProject = (payload) => {
    return new Promise((resolve, reject) => {
        API.post(`information/updateprojectSummary`, payload)
        .then(response => {
            resolve(response);
        })
        .catch((error) => reject(error));
    })
}

export const fetchCompanies = () => {
    return new Promise((resolve, reject) => {
        API.get(`information/companies`)
        .then(response => {
            resolve(response);
        })
        .catch((error) => reject(error));
    })
}

export const updateCompanies = (payload) => {
    return new Promise((resolve, reject) => {
        API.post(`information/updatecompanies`, payload)
        .then(response => {
            resolve(response);
        })
        .catch((error) => reject(error));
    })
}

export const fetchHobbies = () => {
    return new Promise((resolve, reject) => {
        API.get(`information/hobbies`)
        .then(response => {
            resolve(response);
        })
        .catch((error) => reject(error));
    })
}

export const updateHobbies = (payload) => {
    return new Promise((resolve, reject) => {
        API.post(`information/updatehobbies`, payload)
        .then(response => {
            resolve(response);
        })
        .catch((error) => reject(error));
    })
}

export const fetchPublications = () => {
    return new Promise((resolve, reject) => {
        API.get(`information/publications`)
        .then(response => {
            resolve(response);
        })
        .catch((error) => reject(error));
    })
}

export const updatePublications = (payload) => {
    return new Promise((resolve, reject) => {
        API.post(`information/updatepublications`, payload)
        .then(response => {
            resolve(response);
        })
        .catch((error) => reject(error));
    })
}
