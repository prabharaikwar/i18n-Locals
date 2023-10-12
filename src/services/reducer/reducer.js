import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
// jest.mock('axios');


// first parameter action type,second call back fun

// Create action
export const getAllUsers = createAsyncThunk('fetchuser/apiUsers', async () => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/users');
  return response.data; // Return the fetched data
});

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    allUsers: [],
    error: null,
    loading: false
  },
  reducers: {
    // editUser: (state, action) => {
    //   console.log(state, 'edittt')
    //   const { id, inputData } = action.payload;
    //   const updatedUsers = state.allUsers.map((user) =>
    //     user.id === parseInt(id) ? { ...user, ...inputData } : user
    //   );
    //   return {
    //     ...state,
    //     allUsers: updatedUsers,
    //   };
    // },
    addUser: (state, action) => {
      state.allUsers.push(action.payload);
    },
    editUser: (state, action) => {
    const { id, inputData } = action?.payload;
 return {
 ...state,
 allUsers: state.allUsers.map(user =>
user.id === parseInt(id) ? { ...user, ...inputData } : user
)
 }
},
    removeUser: (state, action) => {
      console.log(action.payload)
      const deletedUsers = state.allUsers.filter((user) => user.id !== action.payload);
      state.allUsers = deletedUsers;
      console.log(deletedUsers, 'delete')
    },
  },

  extraReducers: (builder) => {
    builder.addCase(getAllUsers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getAllUsers.fulfilled, (state, action) => {
      // debugger
      state.loading = false;
      state.allUsers = action.payload;
    });
    builder.addCase(getAllUsers.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export const { fetchDataSuccess, editUser, addUser, removeUser, getUser } = usersSlice.actions;

export default usersSlice.reducer;




