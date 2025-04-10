import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';



export const loginUser = createAsyncThunk(
    'user/loginUser',
    async (User, thunkAPI) => {
        try{
        const reponse = await fetch("http://localhost:3001/api/v1/user/login" ,{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: User.email ,
                password: User.password
            })
        })
        if(!reponse.ok){
            const error =  await reponse.json
            return thunkAPI.rejectWithValue(error.message || 'Erreur de connexion');
        }
        const data = await reponse.json()
        console.log(data.body.token)
        return data.body.token
    } catch (error){
        return thunkAPI.rejectWithValue(error.message);
    }
    }
)

export const infosUser = createAsyncThunk(
    'user/infosUser',
    async (_,thunkAPI) => {
        const state = thunkAPI.getState()
        const token = state.user.token

        try{
            const reponse = await fetch("http://localhost:3001/api/v1/user/profile" ,{
                method: 'GET',
                headers:{
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                }
            })
            const data = await reponse.json()
            if(!reponse.ok){
                return thunkAPI.rejectWithValue(error.message || 'Erreur lors de la récupération du profil');
            }
            console.log(data.body)
            return data.body
        } catch (error){
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)




const initialState = {
    isLoggedIn : false,
    userInfo: null,
    token : null,
    status: 'idle',
    error: null
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers:{
        logout: (state) => {
            state.isLoggedIn = false
            state.userInfo = null,
            state.status = 'idle',
            state.error = null
        }
    },
    extraReducers: (builder) =>{
        builder
            .addCase(loginUser.pending, (state) =>{
                state.status = 'loading';
                state.error = null;
            })
            .addCase(loginUser.fulfilled, (state , actions) =>{
                state.status = 'succeeded';
                state.isLoggedIn = true
                state.token = actions.payload
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload || 'Erreur inconnue';
            })

            .addCase(infosUser.pending, (state) =>{
                state.status = 'loading';
                state.error = null;
            })
            .addCase(infosUser.fulfilled, (state , actions) =>{
                state.status = 'succeeded';
                state.userInfo = actions.payload
            })
            .addCase(infosUser.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload || 'Erreur inconnue';
            });
    }
})

export const {login, logout} = userSlice.actions ;

export default userSlice.reducer;