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
            </ListItem>
          ))}
        <Divider variant="inset" component="li" />
      </List>

      <ModalUser modal={showModal} cancelModal={(value) => setShowModal(value)} />
    </>
  );
}
