// firebase
import { initializeApp } from 'firebase/app';
import { doc, getFirestore, getDoc, } from 'firebase/firestore';

import { createSlice } from '@reduxjs/toolkit';

import { dispatch } from '../../store';
import { FIREBASE_API } from '../../../config';

const firebaseApp = initializeApp(FIREBASE_API);
const DB = getFirestore(firebaseApp);

// -------------------------------------------------------//

const initialState = {
  isLoading: false,
  error: null,
  softwareDetails : null
};

const slice = createSlice({
  name: 'software',
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
    // success state
    success(state, payload) {
      state.softwareDetails = payload.payload;
    },
  },
});

// Reducer
export default slice.reducer;

// Actions
export const { hasError, startLoading, sentVerificationEmail, resetState } = slice.actions;

// ----------------------------------------------------------------------


export function getSoftware(id) {
  return async () => {
    dispatch(slice.actions.startLoading());
    try {
      const userRef = doc(DB, 'softwares', `${id}`,);
      const docSnap = await getDoc(userRef);

      if (docSnap.exists()) {
        const depositDetails = docSnap.data();
        console.log('software details',depositDetails )
        dispatch(slice.actions.success(depositDetails));
      } else {
        dispatch(slice.actions.hasError('something went worng'));
      }
    } catch (error) {
      const errorMessage = error.message;
      dispatch(slice.actions.hasError(errorMessage));
    }
  };
}
