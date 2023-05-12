import { fetchProjectList, addProject, updateProject } from "../../Api/Portfolio";
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialStateValue = {
    isLoading: false,
    data: null,
    isError: false
};

export const getProjectList  = createAsyncThunk("fetchProjectList", async(payload) => {
    try{
        const response = await fetchProjectList();
        return response;
    }catch(err){
        throw(err);
    }
})

export const portfolioSlice = createSlice({
    name: 'portfolio',
    initialState: {value: initialStateValue},
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getProjectList.fulfilled, (state, action)=>{
            state.isLoading = false;
            state.isError = true;
            state.data = action.payload;
        });
        builder.addCase(getProjectList.pending, (state, action)=> {
            state.isLoading = true;
            state.data = null;
            state.isError = false;
        });
        builder.addCase(getProjectList.rejected, (state, action)=> {
            state.isLoading = false;
            state.data = null;
            state.isError = true;
        });
    }
})
