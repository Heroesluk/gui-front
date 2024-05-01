import {useState} from 'react';
import {Button, Paper, TextField, Typography} from '@mui/material';

export const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        console.log(event)
        console.log({username, password});
    };

    return (
        <>

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
                        label="Password"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Button variant="contained" color="primary" type="submit" fullWidth
                            style={{marginTop: '1em'}}>
                        Register
                    </Button>
                </form>
            </Paper>

        </>


    );
};

