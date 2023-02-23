import { Box, TextField, InputAdornment, Grid , Button} from "@mui/material";
import AccountCircle from '@mui/icons-material/AccountCircle';
import SendIcon from '@mui/icons-material/Send';
import { useState } from "react";

export default function AddReq() {
    const [name, setName] = useState("");
    const [request, setReq] = useState("");
    const addReq = () => {
        console.log("test");
    };

    return (

        <Box sx={{ p: 5}}>
            要望投稿
            <Box component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, p:1, width: '50%' },
                    justifyContent: 'center'
                }}
                noValidate
                autoComplete="off"
            >
                <Grid container alignItems='center' justifyContent='center' direction="column">
                        <TextField

                            id="outlined-textarea"
                            label="名前"
                            placeholder="名前を入力してください"
                            multiline
                            fullWidth
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <AccountCircle />
                                    </InputAdornment>
                                ),
                            }}
                        />
                    <TextField
                        fullWidth label="要望"
                        id="fullWidth"
                        multiline
                        rows={4}
                        defaultValue="Default Value"
                        variant="filled"
                        onChange={e => setReq(e.target.value)} value={request}
                    />
                    <Box sx={{ p: 2}}>
                        <Button variant="contained" endIcon={<SendIcon />} onClick={addReq}>
                        送信
                        </Button>
                    </Box>
                </Grid>
            </Box>

        </Box>
    );
}
