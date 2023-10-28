// firebase
import { getAuth } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { doc, setDoc, getFirestore,serverTimestamp} from 'firebase/firestore';

import { createSlice } from '@reduxjs/toolkit';

import { dispatch } from '../../store';
import { FIREBASE_API } from '../../../config';

import { v4 as uuidv4 } from 'uuid'; 


const firebaseApp = initializeApp(FIREBASE_API);
const DB = getFirestore(firebaseApp);

// -------------------------------------------------------//

const initialState = {
  isLoading: false,
  error: null,
  success : null
};

const slice = createSlice({
  name: 'buy-software',
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
    // Send reset password email
    success(state) {
      state.isLoading = false;
      state.success = true;
    },
  },
});

// Reducer
export default slice.reducer;

// Actions
export const { hasError, startLoading, sentVerificationEmail, resetState } = slice.actions;

// ----------------------------------------------------------------------

export function buySoftware(options) {
  return async () => {
    console.log('buying',options)
    dispatch(slice.actions.startLoading());
    const auth = getAuth();
    try {
      await setDoc(doc(DB, 'user-softwares', `${auth.currentUser.uid}`), {
        id: auth.currentUser.uid,
        user_id: auth.currentUser.uid,
        user_name : options.user.fullname,
        user_email : options.user.email,
        status: 'pending',
        ...options.softwaredetails,
        createdAt : serverTimestamp(),
        created_at: Math.floor(Date.now() / 1000),
        updated_at: Math.floor(Date.now() / 1000),
      }).then(() => {
        dispatch(slice.actions.success());
      });
      // await setDoc(doc(DB, 'withdrawals', `${withdrawalId}`), {
      //   id: withdrawalId,
      //   user_id: auth.currentUser.uid,
      //   Clientname : clientName,
      //   amount,
      //   walletAddress,
      //   paymentMethod,
      //   isApproved: false,
      //   from,
      //   network : paymentMethod,
      //   status : 'pending',
      //   createdAt : serverTimestamp(),
      //   created_at: Math.floor(Date.now() / 1000),
      //   updated_at: Math.floor(Date.now() / 1000),
      // }).then(() => {
      //   dispatch(slice.actions.success());
      // });
    } catch (error) {
      const errorMessage = error.message;
      console.log('error',errorMessage )
      dispatch(slice.actions.hasError(errorMessage));
    }
  };
};

