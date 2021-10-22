import { Box, Button, Card, CardActions, CardContent, CircularProgress, Container, Snackbar, TextareaAutosize, TextField, Typography } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import React, { useRef, useState } from 'react';
import './AddTodo.css';
import { collection, addDoc, getFirestore } from "firebase/firestore"; 



const AddTodo = ()=>{


    const [openSnack, setOpenSnack] = useState(false);

    const handleSnackClickOpen = () => {
        setOpenSnack(true);
    };

    const handleSnackClose = () => {
        setOpenSnack(false);
    };



    const title = useRef();
    const content = useRef();

    //const ref = fbs.Firestore.collection("todos");
    const db = getFirestore();

    const addToFirebas = async ()=>{

        const ref = await addDoc(collection(db,'todos'),{
            title: title.current.value,
            content:content.current.value,
        }).then(()=>{
            handleSnackClickOpen()
        })
    }

    return(
        <Container>
            <Box sx={{ display:'flex', flexDirection: 'column' ,justifyContent: 'center', alignItems:'center' ,padding:3}}>
                <Box sx={{padding:3}} >
                    <img src='./images/todo.jpg' width={120} height={120} /> 
                    <Typography sx={{ fontSize: 18 }} color="text.secondary" gutterBottom>
                        type your notes 
                    </Typography>                   
                </Box>
                <Card sx={{ width:650, padding:2}}>
                    <CardContent >

                        <TextField inputRef={title} label="Title" color="primary"  sx={{width:'100%', paddingBottom:2}} />
                        <TextField inputRef={content} id="outlined-multiline-static" label="Content" multiline rows={4} sx={{width:'100%'}} />
                    </CardContent>
                </Card>
                <div sx={{ padding:2}} onClick={addToFirebas} >
                    <AddCircleIcon fontSize='large' className='iconAdd' on />
                </div>
                                            
                <Snackbar 
                    open={openSnack} 
                    autoHideDuration={6000} 
                    onClose={handleSnackClose}
                    message='todo added successfully'
                    />
            </Box>
        </Container>
    );
}

export default AddTodo;