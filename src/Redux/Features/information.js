import {
    fetchIntroduction,
    fetchCompanies,
    fetchHobbies,
    fetchProject,
    fetchPublications,
    updateIntroduction,
    updateProject,
    updateCompanies,
    updateHobbies,
    updatePublications
} from "../../Api/Information";
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

const initialStateValue = {
    isLoading: false,
    data: null,
    isError: false
};

/* Fetch and Update ACTION for Introduction */
export const getIntroduction = createAsyncThunk("fetchIntroduction", async() => {
    try{
        const response = await fetchIntroduction();
        return response;
    }catch(err){
        throw(err);
    }
})

export const modifyIntroduction = createAsyncThunk("updateIntroduction", async(payload) => {
    try {
        const response = await updateIntroduction(payload);
        return response;
    }catch (err){
        throw(err);
    }
})



/* Fetch and Update ACTION for Project Summary */
export const getProject = createAsyncThunk("fetchProject", async() => {
    try{
        const response = await fetchProject();
        return response;
    }catch(err){
        throw(err);
    }
})

export const modifyProject = createAsyncThunk("updateProject", async(payload) => {
    try{
        const response = await updateProject(payload);
        return response;
    }catch(err){
        throw(err);
    }
})



/* Fetch and Update ACTION for Companies */
export const getCompanies = createAsyncThunk("fetchCompanies", async() => {
    try{
        const response = await fetchCompanies();
        return response;
    }catch(err){
        throw(err);
    }
})

export const modifyCompanies = createAsyncThunk("updateCompanies", async(payload) => {
    try{
        const response = await updateCompanies(payload);
        return response;
    }catch(err){
        throw(err);
    }
})



/* Fetch and Update ACTION for Hobbies */
export const getHobbies = createAsyncThunk("fetchHobbies", async() => {
    try{
        const response = await fetchHobbies();
        return response;
    }catch(err){
        throw(err);
    }
})

export const modifyHobbies = createAsyncThunk("updateHobbies", async(payload) => {
    try{
        const response = await updateHobbies(payload);
        return response;
    }catch(err){
        throw(err);
    }
})


/* Fetch and Update ACTION for Publications */
export const getPublications = createAsyncThunk("fetchPublications", async() => {
    try{
        const response = await fetchPublications();
        return response;
    }catch(err){
        throw(err);
    }
})

export const modifyPublications = createAsyncThunk("updatePublications", async(payload) => {
    try{
        const response = await updatePublications(payload);
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

        builder.addCase(modifyIntroduction.fulfilled, (state, action)=>{
            state.isLoading = false;
            state.isError = true;
            state.data = action.payload;
        });
        builder.addCase(modifyIntroduction.pending, (state, action)=> {
            state.isLoading = true;
            state.data = null;
            state.isError = false;
        });
        builder.addCase(modifyIntroduction.rejected, (state, action)=> {
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

        builder.addCase(modifyProject.fulfilled, (state, action)=>{
            state.isLoading = false;
            state.isError = true;
            state.data = action.payload;
        });
        builder.addCase(modifyProject.pending, (state, action)=> {
            state.isLoading = true;
            state.data = null;
            state.isError = false;
        });
        builder.addCase(modifyProject.rejected, (state, action)=> {
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

        builder.addCase(modifyCompanies.fulfilled, (state, action)=>{
            state.isLoading = false;
            state.isError = true;
            state.data = action.payload;
        });
        builder.addCase(modifyCompanies.pending, (state, action)=> {
            state.isLoading = true;
            state.data = null;
            state.isError = false;
        });
        builder.addCase(modifyCompanies.rejected, (state, action)=> {
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

        builder.addCase(modifyHobbies.fulfilled, (state, action)=>{
            state.isLoading = false;
            state.isError = true;
            state.data = action.payload;
        });
        builder.addCase(modifyHobbies.pending, (state, action)=> {
            state.isLoading = true;
            state.data = null;
            state.isError = false;
        });
        builder.addCase(modifyHobbies.rejected, (state, action)=> {
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

        builder.addCase(modifyPublications.fulfilled, (state, action)=>{
            state.isLoading = false;
            state.isError = true;
            state.data = action.payload;
        });
        builder.addCase(modifyPublications.pending, (state, action)=> {
            state.isLoading = true;
            state.data = null;
            state.isError = false;
        });
        builder.addCase(modifyPublications.rejected, (state, action)=> {
            state.isLoading = false;
            state.data = null;
            state.isError = true;
        });
    }
});


export default informationSlice.reducer;
