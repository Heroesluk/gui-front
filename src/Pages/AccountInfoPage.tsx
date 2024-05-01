import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    List,
    ListItem,
    ListItemText,
    Typography,
    Paper, TextField
} from '@mui/material';
import Box from "@mui/material/Box";
import {useState} from "react";


export const AccountInfoPage = () => {
    const account = {
        username: 'LucasComp',
        email: 'LucaComp@example.com',
        creationDate: '2024-02-01',
    }


    const [openDelete, setOpenDelete] = useState(false);
    const [openChangePassword, setOpenChangePassword] = useState(false);
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [repeatNewPassword, setRepeatNewPassword] = useState('');

    const handleClickOpenDelete = () => {
        setOpenDelete(true);
    };

    const handleCloseDelete = () => {
        setOpenDelete(false);
    };

    const handleClickOpenChangePassword = () => {
        setOpenChangePassword(true);
    };

    const handleCloseChangePassword = () => {
        setOpenChangePassword(false);
    };

    const handleDelete = () => {
        // Delete account logic here
        console.log('Account deleted');
        handleCloseDelete();
    };

    const handleChangePassword = () => {
        // Change password logic here
        console.log('Password changed');
        handleCloseChangePassword();
    };

    return (<>
            <div className="w-2/5">
                <Paper elevation={3}>

                    <List>
                        <ListItem>
                            <div className="flex flex-col gap-0">
                                <Typography variant="h6">Username:</Typography>
                                <Typography variant="subtitle1">{account.username}</Typography>
                            </div>
                        </ListItem>
                        <ListItem>
                            <div className="flex flex-col">

                                <Typography variant="h6">Email:</Typography>
                                <ListItemText primary={account.email}/>
                            </div>

                        </ListItem>
                        <ListItem>
                            <div className="flex flex-col">
                                <Typography variant="h6">Account creation date:</Typography>
                                <ListItemText primary={account.creationDate}/>
                            </div>

                        </ListItem>
                        <ListItem>
                            <Box display="flex" justifyContent="space-between" width="100%">
                                <Button variant="contained" color="primary" onClick={handleClickOpenChangePassword}>
                                    Change Password
                                </Button>
                                <Button variant="contained" color="secondary" onClick={handleClickOpenDelete}>
                                    Delete Account
                                </Button>
                            </Box>
                        </ListItem>
                    </List>

                    <Dialog
                        open={openDelete}
                        onClose={handleCloseDelete}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                    >
                        <DialogTitle id="alert-dialog-title">{"Delete Account"}</DialogTitle>
                        <DialogContent>
                            <DialogContentText id="alert-dialog-description">
                                Are you sure you want to delete your account permanently?
                            </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleCloseDelete} color="primary" autoFocus>
                                No
                            </Button>
                            <Button onClick={handleDelete} color="error">
                                Yes
                            </Button>
                        </DialogActions>
                    </Dialog>



                    <Dialog
                        open={openChangePassword}
                        onClose={handleCloseChangePassword}
                        aria-labelledby="change-password-dialog-title"
                        aria-describedby="change-password-dialog-description"
                    >
                        <DialogTitle id="change-password-dialog-title">{"Change Password"}</DialogTitle>
                        <DialogContent>
                            <TextField
                                autoFocus
                                margin="dense"
                                id="old-password"
                                label="Old Password"
                                type="password"
                                fullWidth
                                value={oldPassword}
                                onChange={(e) => setOldPassword(e.target.value)}
                            />
                            <TextField
                                margin="dense"
                                id="new-password"
                                label="New Password"
                                type="password"
                                fullWidth
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
                            />
                            <TextField
                                margin="dense"
                                id="repeat-new-password"
                                label="Repeat New Password"
                                type="password"
                                fullWidth
                                value={repeatNewPassword}
                                onChange={(e) => setRepeatNewPassword(e.target.value)}
                            />
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleCloseChangePassword} color="primary">
                                Cancel
                            </Button>
                            <Button onClick={handleChangePassword} color="primary">
                                Change Password
                            </Button>
                        </DialogActions>
                    </Dialog>
                </Paper>
            </div>

        </>

    );
};

