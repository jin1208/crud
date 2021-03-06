import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Paper from '@material-ui/core/Paper';
import styles from '../styles/Content';
import IconButton from '@material-ui/core/IconButton';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';

class SignInContainer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            showPassword : false
        }
    }

    handleChange = (e) => { 
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleClickShowPassword = (e) => {
        this.setState({
            showPassword : true
        })
      };
    
      handleMouseDownPassword = event => {
        this.setState({
            showPassword : false
        })
      };


    render() {
        const { classes } = this.props;

        return (
            <div>
                <TableContainer component={Paper} className={classes.paper}>
                    <Table className={classes.table} aria-label="simple table">
                        <TableBody>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>
                            <FormControl className={classes.margin} variant="outlined">
                            <OutlinedInput
                                id="id" placeholder="ID"
                                onChange={this.handleChange}
                                endAdornment={<InputAdornment position="end"> <AccountCircle /> </InputAdornment>}
                            />
                            </FormControl>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Password</TableCell>
                            <TableCell>
                            <FormControl className={classes.margin} variant="outlined">
                                <InputLabel htmlFor="password">Password</InputLabel>
                                <OutlinedInput id="password" type={this.state.showPassword ? 'text' : 'password'}
                                    onChange={this.handleChange}
                                    endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={this.handleClickShowPassword}
                                        onMouseDown={this.handleMouseDownPassword}
                                        edge="end"
                                        >
                                        {this.state.showPassword ? <Visibility /> : <VisibilityOff />}
                                        </IconButton>
                                    </InputAdornment>
                                    }
                                    labelWidth={70}
                                />
                            </FormControl>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <FormControl className={classes.margin} variant="outlined">
                            <Button variant="contained" color="primary" className={classes.addUser} type="submit">
                                로그인
                            </Button>
                            </FormControl>
                            <FormControl className={classes.margin} variant="outlined">
                            <Button variant="contained" color="secondary" className={classes.addUser} type="button">
                                취소
                            </Button>
                            </FormControl>
                        </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        );
    }

}

export default withStyles(styles)(SignInContainer);