import React from 'react';
import styles from '../../styles/Content';
import Paper from '@material-ui/core/Paper';
import FormHelperText from '@material-ui/core/FormHelperText';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

 function WriteForm(props) {
  
     return(
       <Paper className = {styles.paper} >
           <Container maxWidth="xs">
            <form className={styles.root} onSubmit={props.handleSubmit}>
                <TextField id="id" name="id" label="ID" variant="outlined" 
                className={styles.searchInput} onChange={props.handleChange} />
                <FormHelperText id="my-helper-text">insert your Id.</FormHelperText>

                <TextField id="userName" name="userName" label="UserName" variant="outlined"
                className={styles.searchInput} onChange={props.handleChange} />
                <FormHelperText id="my-helper-text">insert your UserName.</FormHelperText>

                <TextField id="birthday" name="birthday" label="Birthday" variant="outlined"
                className={styles.searchInput} onChange={props.handleChange} />
                <FormHelperText id="my-helper-text">insert your Birthday.</FormHelperText>

                <TextField id="gender" name="gender" label="Gender" variant="outlined"
                className={styles.searchInput} onChange={props.handleChange} />
                <FormHelperText id="my-helper-text">gender.</FormHelperText>

                <TextField id="job" name="job" label="Job" variant="outlined"
                className={styles.searchInput} onChange={props.handleChange} />
                <FormHelperText id="my-helper-text">job.</FormHelperText>

                <label htmlFor="file">
                  <IconButton color="primary" component="span">
                      <SearchIcon />
                  </IconButton>
                </label>
                <input accept="image/*" style={{ display: 'none' }} id="file" name="file"
                 type="file" onChange={props.handleFileChange} />
                <InputLabel htmlFor="my-input">{props.fileName}</InputLabel>

                <br /><br />
                <Button variant="contained" color="primary" className={styles.addUser} type="submit">
                    고객 추가
                </Button>
            </form>
            </Container>
        </Paper>
    );
}

export default WriteForm;