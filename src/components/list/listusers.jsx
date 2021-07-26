import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import axios from 'axios';

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
  const [userId, setUserId] = useState();
  const [admin, setAdmin] = useState();
  useEffect(async () => {
    // const token = {
    //   token: localStorage.getItem('token'),
    // };
    // const myToken = jwt_decode(token.token);
    const item = {
      item: localStorage.getItem('email'),
    };

    if (item.item) {
      const profil = await axios.get(`http://localhost:5006/users/${item.item}`);
      if (profil.data[0].admin === 1) {
        setAdmin(true);
        console.log('ok');
      }
    } else {
      setAdmin(false);
    }
  }, []);

  const showModale = async (id) => {
    const user = await axios.get(`http://localhost:5006/users/id/${id}`);
    setUserId(user.data[0]);
    setShowModal(true);
  };

  const Delete = async (id) => {
    await axios.delete(`http://localhost:5006/users/${id}`);
  };
  return (
    <>
      <List compopent="nav" className={classes.root} aria-label="mailbox folders">
        {props.waitingUser &&
          props.waitingUser.map((item, index) => {
            return (
              <ListItem button divider alignItems="flex-start" key={index} onClick={() => showModale(item.student_id)}>
                <ListItemAvatar>
                  <Avatar alt="image" src={item.picture ? `data:image/jpeg;base64, ${item.picture}` : null} />
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
                          <>
                            <Typography component="span" className="school-tag">
                              {`${item.schools[0].title} ${item.schools[0].year_of_promotion}`}
                            </Typography>
                            <Typography component="span" className="school-tag">
                              {`${item.schools[1].title} ${item.schools[1].year_of_promotion}`}
                            </Typography>
                          </>
                        ) : (
                          <Typography className="school-tag" component="span">
                            {`${item.schools[0].title} ${item.schools[0].year_of_promotion}`}{' '}
                          </Typography>
                        )}
                      </React.Fragment>
                    </>
                  }
                />

                <button style={{ backgroundColor: 'green', marginRight: '20px' }}>V</button>
                <button style={{ backgroundColor: 'red' }}>X</button>
              </ListItem>
            );
          })}
        {props.valueUser &&
          props.valueUser.map((item, index) => {
            return (
              <ListItem button divider alignItems="flex-start" key={index} onClick={() => showModale(item.student_id)}>
                <ListItemAvatar>
                  <Avatar alt="image" src={item.picture ? `data:image/jpeg;base64, ${item.picture}` : null} />
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
                          <>
                            <Typography component="span" className="school-tag">
                              {`${item.schools[0].title} ${item.schools[0].year_of_promotion}`}
                            </Typography>
                            <Typography component="span" className="school-tag">
                              {`${item.schools[1].title} ${item.schools[1].year_of_promotion}`}
                            </Typography>
                          </>
                        ) : (
                          <Typography className="school-tag" component="span">
                            {`${item.schools[0].title} ${item.schools[0].year_of_promotion}`}{' '}
                          </Typography>
                        )}
                      </React.Fragment>
                    </>
                  }
                />
                {item.validate === 1 && admin && (
                  <button onClick={() => Delete(item.student_id)} id="delete-button">
                    X
                  </button>
                )}
              </ListItem>
            );
          })}
      </List>

      <ModalUser modal={showModal} userId={userId} cancelModal={(value) => setShowModal(value)} />
    </>
  );
}
