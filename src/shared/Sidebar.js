import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Dashboard, Settings } from '@material-ui/icons';
import IconButton from '@material-ui/core/IconButton';

function Sidebar() {
    const classes = useStyles();
    return (
        <div className={classes.Sidebar}>
            <ul className={classes.navList}>
                <li>
                    <IconButton>
                        <Dashboard style={{ color: '#0849b2'}} />
                    </IconButton>
                </li>
                <li>
                    <IconButton>
                        <Settings style={{ color: '#0849b2'}} />
                    </IconButton>
                </li>
            </ul>
        </div>
    )
}

const useStyles = makeStyles((theme) => ({
    Sidebar: {
        height: "100%",
        width: 70,
        backgroundColor: '#fff',
        position: 'fixed',
        left:0,
        top: 65
    }, 
    navList: {
        "& li": {
            position: 'relative',
            display: 'flex',
            listStyle: 'none',
            color: '#0849b2', 
            margin: '10px 10px 10px -25px',
            alignItems: 'center',
            justifyContent: 'center',
            padding: theme.spacing(0, 2),
        }
    }
}));

export default Sidebar;