import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import HomeIcon from '@material-ui/icons/Home';
import AlbumIcon from '@material-ui/icons/Album';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import QueueMusicIcon from '@material-ui/icons/QueueMusic';
import styles from './Breadcrumb.css';

const useStyles = makeStyles(theme => ({
  link: {
    display: 'flex',
  },
  icon: {
    marginRight: theme.spacing(0.5),
    width: 20,
    height: 20,
  },
}));

function handleClick(event) {
  event.preventDefault();
  window.location.href = 'http://localhost:7890/';
}

export default function IconBreadcrumbs() {
  const classes = useStyles();

  return (
    <Breadcrumbs className={styles.Breadcrumbs} aria-label="breadcrumb">
      <Link alt="Home Icon. Click here to go Home"color="inherit" href="http://localhost:7890/" onClick={handleClick} className={classes.link}>
        <HomeIcon className={classes.icon} />
        Artist Search
      </Link>
      <div
        color="inherit"
        alt="Album Icon." >
        <AlbumIcon className={classes.icon} />
        Album
      </div>
      <div
        alt="Song Icon."
        color="inherit" >
        <MusicNoteIcon className={classes.icon} />
        Songs
      </div>
      <div
        alt="Lyrics Icon." >
        <QueueMusicIcon className={classes.icon} />
        Lyrics
      </div>
    </Breadcrumbs>
  );
}
