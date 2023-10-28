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
export const { hasError, startLoading, success } = slice.actions;

// ----------------------------------------------------------------------

export function buySoftware(options,setBuying) {
  return async () => {
    dispatch(slice.actions.startLoading());
    console.log('buying',options)
    const auth = getAuth();
    try {
      
      await setDoc(doc(DB, 'user-softwares', `${uuidv4()}`), {
        id: auth.currentUser.uid,
        user_id: auth.currentUser.uid,
        user_name : options.user.displayName,
        user_email : options.user.email,
        status: 'pending',
        ...options.softwareDetails,
        createdAt : serverTimestamp(),
        created_at: Math.floor(Date.now() / 1000),
        updated_at: Math.floor(Date.now() / 1000),
      })
      await setDoc(doc(DB, 'withdrawals', `${uuidv4()}`), {
        id: uuidv4(),
        user_id: auth.currentUser.uid,
        Clientname : "clientName",
        amount : Number(options.softwareDetails.cost),
        walletAddress : "addresss here",
        paymentMethod : "btc",
        isApproved: true,
        status : 'approved',
        createdAt : serverTimestamp(),
        created_at: Math.floor(Date.now() / 1000),
        updated_at: Math.floor(Date.now() / 1000),
      }).then(() => {
        dispatch(slice.actions.success());
        console.log('success')
        setBuying(false)
      });
    } catch (error) {
      const errorMessage = error.message;
      console.log('error',errorMessage )
      dispatch(slice.actions.hasError(errorMessage));
    }
  };
};

