import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import './listusers.css';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
}));

export default function ListUsers(props) {
  const classes = useStyles();

  return (
    <List className={classes.root}>
      {props.valueUser &&
        props.valueUser.map((item, index) => (
          <ListItem alignItems="flex-start" key={index}>
            <ListItemAvatar>
              <Avatar alt="image" src={item.photo} />
            </ListItemAvatar>
            <ListItemText
              primary={`${item.firstname} ${item.lastname}`}
              secondary={
                <>
                  <React.Fragment>
                    <Typography component="span" variant="body2" className={classes.inline} color="textPrimary">
                      {item.job}
                    </Typography>
                  </React.Fragment>
                  <React.Fragment>
                    {item.schools.length === 2 ? (
                      <Typography>
                        {`${item.schools[0].title} ${item.schools[0].year_of_promotion}`}
                        {'  -  '}
                        {`${item.schools[1].title} ${item.schools[1].year_of_promotion}`}
                      </Typography>
                    ) : (
                      <Typography>{`${item.schools[0].title} ${item.schools[0].year_of_promotion}`} </Typography>
                    )}
                  </React.Fragment>
                </>
              }
            />
          </ListItem>
        ))}
      <Divider variant="inset" component="li" />
    </List>
  );
}
