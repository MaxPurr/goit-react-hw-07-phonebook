import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL =
  'https://644abe4f79279846dcf0ec26.mockapi.io/api/phonebook';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const responce = await axios.get('/contacts');
      return responce.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async ({ name, number }, thunkAPI) => {
    try {
      const responce = await axios.post('/contacts', { name, number });
      return responce.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      const responce = await axios.delete(`/contacts/${contactId}`);
      return responce.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
