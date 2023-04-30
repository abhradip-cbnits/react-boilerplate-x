import API from '../apiClient';

export const fetchIntroduction = () => {
    API.get(`information/introduction`)
    .then(response => {
        console.log(response);
        console.log(response.data);
    })
}


export const fetchProject = () => {
    API.get(`information/introduction`)
    .then(response => {
        console.log(response);
        console.log(response.data);
    })
}

export const fetchCompanies = (payload) => {
    API.get(`information/introduction`)
    .then(response => {
        console.log(response);
        console.log(response.data);
    })
}

export const fetchHobbies = (payload) => {
    API.get(`information/introduction`)
    .then(response => {
        console.log(response);
        console.log(response.data);
    })
}
