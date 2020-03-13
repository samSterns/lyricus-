import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import HomeIcon from '@material-ui/icons/Home';
import AlbumIcon from '@material-ui/icons/Album';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import QueueMusicIcon from '@material-ui/icons/QueueMusic';

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
  console.info('You clicked a breadcrumb.');
}

export default function IconBreadcrumbs() {
  const classes = useStyles();

  return (
    <Breadcrumbs aria-label="breadcrumb">
      <Link color="inherit" href="/" onClick={handleClick} className={classes.link}>
        <HomeIcon className={classes.icon} />
        Artist Search
      </Link>
      <Link
        color="inherit"
        href="/getting-started/installation/"
        onClick={handleClick}
        className={classes.link} >
        <AlbumIcon className={classes.icon} />
        Album
      </Link>
      <Typography color="textPrimary" className={classes.link}>
        <MusicNoteIcon className={classes.icon} />
        Songs
      </Typography>
      <Typography color="textPrimary" className={classes.link}>
        <QueueMusicIcon className={classes.icon} />
        Lyrics
      </Typography>
    </Breadcrumbs>
  );
}
