import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Dashboard from "@material-ui/icons/Dashboard";
import Settings from "@material-ui/icons/Settings";


function Sidebar() {
    const classes = useStyles();
    return (
        <div className={classes.Sidebar}>
            <ul className={classes.navList}>
                <li>
                    <a href="#">
                        <Dashboard style={{ color: '#0849b2'}} />
                    </a>
                </li>
                <li>
                    <a href="#">
                        <Settings style={{ color: '#0849b2'}} />
                    </a>
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
            alignItems: 'center',
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