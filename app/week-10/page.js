'use client';   

import { useUserAuth } from "./_utils/auth-context";
import Link from "next/link";


export default function Page() {
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

    console.log(user);


    return (
        <div>
            <h1>Week 10</h1>
            <p>{user ? "Hi there!" : "Please sign in"}</p>
            <p>{user ?.email}</p>
            {user && user.displayName}
            <p>
                {user ? (<button onClick={firebaseSignOut}>Sign out</button>) : (<button onClick={gitHubSignIn}>Sign in with GitHub</button>)}
           </p>
            <Link href="./week-10/shopping-list">Continue to your shopping list</Link>
            
            
        </div>
    );
}