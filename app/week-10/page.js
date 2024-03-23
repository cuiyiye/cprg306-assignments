'use client';   

import { useUserAuth } from "./_utils/auth-context";
import Link from "next/link";
import { useEffect, useState } from 'react';
import { db } from './_utils/firebase';
import { doc, getDoc } from 'firebase/firestore';



export default function Page() {
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
    

    useEffect(() => {

        const fetchPost = async () => {
            try {
              const docRef = doc(db, "item-posts", "zOQxTzaco3wwVd1DTwgk");
              const docSnap = await getDoc(docRef);
        
              if (docSnap.exists()) {
                setPost(docSnap.data());
              } else {
                console.log("No such document!");
              }
            } catch (error) {
              console.error("Error fetching document:", error);
            }
          };
        
          fetchPost();
        }, []);

    return (
        <div>
            <h1>Week 10</h1>
            <p>{user ? "Hi there!" : "Please sign in"}</p>
            <p>{user ?.email}</p>
            {user && user.displayName}
            {user ? (<Link href= {`/week-10/shopping-list`}>Continue to your Shopping List</Link>): null}
            <p>
                {user ? (<button onClick={firebaseSignOut}>Sign out</button>) : (<button onClick={gitHubSignIn}>Sign in with GitHub</button>)}
                
            </p>
        
        </div>
    );
}