import { fetchIntroduction, fetchCompanies, fetchHobbies, fetchProject, fetchPublications } from "../../Api/Information";
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

const initialStateValue = {
    isLoading: false,
    data: null,
    isError: false
};

export const getIntroduction = createAsyncThunk("fetchIntroduction", async(payload) => {
    try{
        const response = await fetchIntroduction();
        return response;
    }catch(err){
        throw(err);
    }
})

export const getProject = createAsyncThunk("fetchProject", async(payload) => {
    try{
        const response = await fetchProject();
        return response;
    }catch(err){
        throw(err);
    }
})

export const getCompanies = createAsyncThunk("fetchCompanies", async(payload) => {
    try{
        const response = await fetchCompanies();
        return response;
    }catch(err){
        throw(err);
    }
})


export const getHobbies = createAsyncThunk("fetchHobbies", async(payload) => {
    try{
        const response = await fetchHobbies();
        return response;
    }catch(err){
        throw(err);
    }
})

export const getPublications = createAsyncThunk("fetchPublications", async(payload) => {
    try{
        const response = await fetchPublications();
        return response;
    }catch(err){
        throw(err);
    }
})


export const informationSlice = createSlice({
    name: 'information',
    initialState: { value: initialStateValue },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getIntroduction.fulfilled, (state, action)=>{
            state.isLoading = false;
            state.isError = true;
            state.data = action.payload;
        });
        builder.addCase(getIntroduction.pending, (state, action)=> {
            state.isLoading = true;
            state.data = null;
            state.isError = false;
        });
        builder.addCase(getIntroduction.rejected, (state, action)=> {
            state.isLoading = false;
            state.data = null;
            state.isError = true;
        });


        builder.addCase(getProject.fulfilled, (state, action)=>{
            state.isLoading = false;
            state.isError = true;
            state.data = action.payload;
        });
        builder.addCase(getProject.pending, (state, action)=> {
            state.isLoading = true;
            state.data = null;
            state.isError = false;
        });
        builder.addCase(getProject.rejected, (state, action)=> {
            state.isLoading = false;
            state.data = null;
            state.isError = true;
        });


        builder.addCase(getCompanies.fulfilled, (state, action)=>{
            state.isLoading = false;
            state.isError = true;
            state.data = action.payload;
        });
        builder.addCase(getCompanies.pending, (state, action)=> {
            state.isLoading = true;
            state.data = null;
            state.isError = false;
        });
        builder.addCase(getCompanies.rejected, (state, action)=> {
            state.isLoading = false;
            state.data = null;
            state.isError = true;
        });


        builder.addCase(getHobbies.fulfilled, (state, action)=>{
            state.isLoading = false;
            state.isError = true;
            state.data = action.payload;
        });
        builder.addCase(getHobbies.pending, (state, action)=> {
            state.isLoading = true;
            state.data = null;
            state.isError = false;
        });
        builder.addCase(getHobbies.rejected, (state, action)=> {
            state.isLoading = false;
            state.data = null;
            state.isError = true;
        });



        builder.addCase(getPublications.fulfilled, (state, action)=>{
            state.isLoading = false;
            state.isError = true;
            state.data = action.payload;
        });
        builder.addCase(getPublications.pending, (state, action)=> {
            state.isLoading = true;
            state.data = null;
            state.isError = false;
        });
        builder.addCase(getPublications.rejected, (state, action)=> {
            state.isLoading = false;
            state.data = null;
            state.isError = true;
        });
    }
});


export default informationSlice.reducer;
