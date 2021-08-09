import React from 'react'
import {makeStyles,InputBase} from '@material-ui/core'
import {Search} from '@material-ui/icons'

const useStyles = makeStyles((theme)=>({
    search: {
        marginLeft:10,
        borderRadius:2,
        backgroundColor: '#fff',
        display: 'flex',
        width:'40%',
      },
      searchIcon: {
        height: '100%',
        pointerEvents: 'none',
        color:'#2874f0',
        padding:5,
       },
      inputRoot: {
        width:'100%',
        fontSize:'unset',
      },
      inputInput: {
      paddingLeft:20,
      },
}))

const Searchbar = () => {
    const classes = useStyles();
    return (
        <>
           <div className={classes.search}>
            <InputBase
              placeholder="Search for products, brands and more ..."
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />

            <div className={classes.searchIcon}>
              <Search />
            </div>
          </div>
        </>
    )
}

export default Searchbar
