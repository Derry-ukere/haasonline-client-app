/* eslint-disable no-unused-vars */
/* eslint-disable consistent-return */
// firebase
import { initializeApp } from 'firebase/app';
import { getFirestore, getDocs, collection, query, } from 'firebase/firestore';
import { createSlice } from '@reduxjs/toolkit';
import { dispatch } from '../../store';
import { FIREBASE_API } from '../../../config';


//
import {softwares} from '../../../assets/data/bots'

const firebaseApp = initializeApp(FIREBASE_API);
const DB = getFirestore(firebaseApp);

// -------------------------------------------------------//

const initialState = {
  isLoading: false,
  error: null,
  allSoftwares: null,
};

const slice = createSlice({
  name: 'softwares',
  initialState,
  reducers: {
    // START LOADING
    startLoading(state) {
      state.isLoading = true;
    },
    // HAS ERROR
    hasError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },

    // SUCCESS
    gotAllSoftwares(state, payload) {
        state.isLoading = false;
        state.allSoftwares = payload.payload;
    },

  },
});

// Reducer
export default slice.reducer;

// Actions
export const { hasError, startLoading } = slice.actions;

// ------------------------------------------------------- //

export function getAllSoftwares() {
  return async () => {
    dispatch(slice.actions.startLoading());
    try {
    //   const container = []
    //   const q = query(collection(DB, 'traders'));
    //   const querySnapshot = await getDocs(q);
    //   querySnapshot.forEach((doc) => {
    //     container.push(doc.data());
    //   });
      dispatch(slice.actions.gotAllSoftwares(softwares));
    } catch (error) {
      const errorMessage = error.message;
      dispatch(slice.actions.hasError(errorMessage));
    }
  };
}



