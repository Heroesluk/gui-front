import {useState} from 'react';
import {Button, Paper, TextField, Typography} from '@mui/material';
import {ButtonAppBar} from "../Components/TopBanner.tsx";

export const RegisterPage = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');

    const handleSubmit = (event) => {
        console.log(event)
        console.log({username, email, password});
    };

    return (
        <>
            <ButtonAppBar loggedIn={true}></ButtonAppBar>
            <div className="flex flex-col items-center pt-10">
                <div className="w-4/12">
                    <Paper elevation={3} style={{padding: '2em', marginTop: '2em'}}>
                        <Typography variant="h5" align="center">Create new account</Typography>
                        <form onSubmit={handleSubmit}>
                            <TextField
                                label="Username"
                                variant="outlined"
                                fullWidth
                                margin="normal"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                            <TextField
                                label="Email"
                                variant="outlined"
                                fullWidth
                                margin="normal"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <TextField
                                label="Password"
                                variant="outlined"
                                fullWidth
                                margin="normal"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <TextField
                                label="Repeat password"
                                variant="outlined"
                                fullWidth
                                margin="normal"
                                type="password"
                                value={repeatPassword}
                                onChange={(e) => setRepeatPassword(e.target.value)}
                            />
                            <Button variant="contained" color="primary" type="submit" fullWidth
                                    style={{marginTop: '1em'}}>
                                Register
                            </Button>
                        </form>
                    </Paper>

                </div>


            </div>
        </>


    );
};

