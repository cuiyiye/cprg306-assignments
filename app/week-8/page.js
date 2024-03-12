'use client';   

import { useUserAuth } from "./_utils/auth-context";


export default function Page() {
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

    console.log(user);

    return (
        <div>
            <h1>Week 8</h1>
            <p>{user ? "Hi there!" : "Please sign in"}</p>
            <p>{user ?.email}</p>
            {user && user.displayName}
            <p>
                {user ? (<button onClick={firebaseSignOut}>Sign out</button>) : (<button onClick={gitHubSignIn}>Sign in with GitHub</button>)}
            </p>
        </div>
    );
}