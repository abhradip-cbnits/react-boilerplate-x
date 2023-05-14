import {
    fetchIntroduction
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
    }
});


export default informationSlice.reducer;
