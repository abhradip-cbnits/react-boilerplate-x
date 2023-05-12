import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import { userLogin } from '../../Api/Login';


const intialStateValue = {
    isLoading: false,
    isError: false,
    data: null
}

export const doLogin = createAsyncThunk("doLogin", async (payload) => {
    try{
        const response = await userLogin(payload);
        return response;
    }catch(err){
        throw(err)
    }
})

export const userSlice = createSlice({
    name: "user",
    initialState: { value: intialStateValue },
    extraReducers: (builder) => {
        builder.addCase(doLogin.fulfilled, (state, action)=> {
            state.isLoading = false;
            state.isError = false;
            state.data = action.payload;
        });
        builder.addCase(doLogin.pending, (state, action)=> {
            state.isLoading = true;
            state.data = null;
            state.isError = false;
        });
        builder.addCase(doLogin.rejected, (state, action)=> {
            state.isLoading = false;
            state.data = null;
            state.isError = true;
        })
    }

})


export default userSlice.reducer;
