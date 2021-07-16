import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import ModalUser from '../ModalUser/ModalUser';

import './listusers.css';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
    cursor: 'pointer',
  },
  inline: {
    display: 'inline',
  },
}));

export default function ListUsers(props) {
  const classes = useStyles();
  const [showModal, setShowModal] = useState(false);
  const setShowModale = () => {
    setShowModal(true);
  };
  return (
    <>
      <List className={classes.root} onClick={setShowModale}>
        {props.valueUser &&
          props.valueUser.map((item, index) => (
            <ListItem alignItems="flex-start" key={index}>
              <ListItemAvatar>
                <Avatar alt="image" src={item.photo} />
              </ListItemAvatar>
              <ListItemText
                primary={`${item.prenom} ${item.nom}`}
                secondary={
                  <React.Fragment>
                    <Typography component="span" variant="body2" className={classes.inline} color="textPrimary">
                      {item.profession}
                    </Typography>
                    {'   '}
                    {`${item.promo} ${item.annee}`}
                  </React.Fragment>
                }
              />
            </ListItem>
          ))}
        <Divider variant="inset" component="li" />
      </List>
      <ModalUser modal={showModal} cancelModal={(value) => setShowModal(value)} />
    </>
  );
}
