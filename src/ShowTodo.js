import { Alert, Button, Card, CardContent, Container, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton, Snackbar, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import { collection, doc, deleteDoc , getDocs, getFirestore,documentId } from "firebase/firestore"; 
import { useEffect, useState } from 'react';
import fs from'./firebase.js'


const db = getFirestore();





const ShowTodo = ()=>{

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const [todos, setTodos] = useState([]);



    useEffect(()=>{
        const todoData = async()=>{
            const dt = await fs.firestore().collection("todos").get()
            setTodos(dt.docs.map(doc=>({...doc.data(),id: doc.id})))
        }
        todoData()
        },[]);


   
    return(
        <div>
            {
                todos.map(todo=>{
                    return(
                        <Container>
                            <Box sx={{ display:'flex', flexDirection: 'column' ,justifyContent: 'center', alignItems:'center' ,padding:3}} >
                                <Card sx={{ width:650, padding:2}}>
                                    <CardContent >
                                    <Box sx={{padding:3}} >
                                    <Typography 
                                    sx={{ fontSize: 25 }} 
                                    color="text.secondary" 
                                    gutterBottom
                                    key={todo.id}
                                    >
                                        {todo.title} 
                                    </Typography>                   
                                </Box>
                                        <Typography 
                                        sx={{ fontSize: 18 }} 
                                        gutterBottom
                                        key={todo.id}
                                        >
                                            {todo.content} 
                                        </Typography>  
                                    </CardContent>
                                    <IconButton onClick={handleClickOpen}>
                                        <RemoveCircleIcon fontSize='small' className='iconAdd' />
                                    </IconButton>
                                    <Dialog
                                        open={open}
                                        onClose={handleClose}
                                        aria-labelledby="alert-dialog-title"
                                        aria-describedby="alert-dialog-description"
                                    >
                                        <DialogTitle id="alert-dialog-title">
                                        {"Warning"}
                                        </DialogTitle>
                                        <DialogContent>
                                        <DialogContentText id="alert-dialog-description">
                                            Are you sure to delete todo
                                        </DialogContentText>
                                        </DialogContent>
                                        <DialogActions>
                                        <Button onClick={handleClose}>No</Button>
                                        <Button onClick={async()=>{
                                       await fs.firestore().collection('todos').doc(todo.id).delete()
                                       .then(()=>{
                                           handleClose()
                                       })
                                    }
                                            
                                        } autoFocus>
                                            Yes
                                        </Button>
                                        </DialogActions>
                                    </Dialog>
                                </Card>
                            </Box>

                        </Container>    
                    );
                })
            }
        </div>
    );

}

export default ShowTodo;