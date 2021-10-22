import React from "react";
import { Switch } from "react-router-dom";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import { AppBar, Container, FormControlLabel, FormGroup, Grid, IconButton, MenuItem, Toolbar, Typography } from '@mui/material';
import { Box, textAlign } from '@mui/system';
import AddTodo from "./AddTodo";
import ShowTodo from "./ShowTodo";
import  './Home.css';



const Home = ()=>{



    return(
        <Container>
        <Router>
         <Box sx={{display:'flex', justifyContent: 'center'}}>
          <AppBar position="static" sx={{backgroundColor: '#6062F1'}}>
            <Toolbar sx={{justifyContent:'center'}}>
            <NavLink to='/AddTodo' style={{textDecoration:'none'}}> 
              <Typography  className="navlinks">
                  Add
              </Typography>
              </NavLink>
              <NavLink to='/ShowTodo' style={{textDecoration:'none'}}> 
              <Typography  className="navlinks">
                  Show
              </Typography>
              </NavLink>
            </Toolbar>
          </AppBar>
        </Box>
          <Switch>
            <Route path="/AddTodo" component={AddTodo} exact/>
            <Route path="/ShowTodo" component={ShowTodo} exact/>

          </Switch>
        </Router>
      </Container>
    );

}

export default Home;