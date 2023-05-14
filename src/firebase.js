// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import React, { useState } from "react";


const firebaseConfig = {
  apiKey: "AIzaSyDJfOLznHL5-Yy4GHNRPvVRoB944crYnS4",
  authDomain: "chatapp-892cf.firebaseapp.com",
  projectId: "chatapp-892cf",
  storageBucket: "chatapp-892cf.appspot.com",
  messagingSenderId: "1069653813802",
  appId: "1:1069653813802:web:b67ab1e94a7ad6db8c7153",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
