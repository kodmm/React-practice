import React, { useState, useEffect} from 'react';
import firebase from '../Firebase/firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';





const uiConfig = {
    signInFlow: 'popup',
    // signInSuccessUrl: '/',
    signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.TwitterAuthProvider.PROVIDER_ID
        
    ],
    callbacks: {
        signInSuccessWithAuthResult: () => false
    }
}

const Alert = (props) => {
    return <MuiAlert elevation={10} variant="filled" {...props} />;
}



const Login = () => {
    const [open, setOpen] = useState(false);
    const [isSignedIn, setIsSignedIn] = useState(false);

    const handleClick = () => {
        setOpen(true);
    }

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false)
    }

    useEffect(() => {
        const unregisterAuthObserver = firebase.auth().onAuthStateChanged(user => {
            console.log(firebase.auth().currentUser)
            console.log(user)
            console.log(!!user)
            setIsSignedIn(!!user)
            if (!!user) {
                setOpen(true);
            }
        })
    }, []);

    if(!isSignedIn){
        return(

            <div>
                <h1>Myapp</h1>
                <p>Please sign-In</p>
                <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
            </div>
        )
    }
    return(
        <div>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity="success">
                        Successfully Login !!!
                    </Alert>
            </Snackbar>
             <h1>Myapp</h1>
            <p>Welcome {firebase.auth().currentUser.displayName} ! You are now Signed-in</p>
            <button onClick={() => firebase.auth().signOut()}>Sign-out</button>
        </div>
    )
}

export default Login