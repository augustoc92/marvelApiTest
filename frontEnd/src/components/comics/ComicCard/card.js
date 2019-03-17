import React, { Component } from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Collapse from '@material-ui/core/Collapse'
import CardActions from '@material-ui/core/CardActions'
import classnames from 'classnames'
import styles from './Card.module.css'
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { withStyles } from '@material-ui/core/styles';

class ComicCard extends Component {
  state = { expanded: false }

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }))
  }
  render() {
    const { 
      comicName,
      comicDate,
      issueNumber,
      variantDescription,
      urls
    } = this.props
    const { expanded } = this.state
    return (
      <Card className={styles.card}>
      <CardHeader
        avatar={
          <Avatar aria-label="Issue Number" className={styles.avatar}>
            {issueNumber}
          </Avatar>
        }
        action={
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        }
        title={comicName}
        subheader={comicDate[0].date}
      />
      <CardActions className={styles.actions} disableActionSpacing>
        <IconButton aria-label="Add to favorites">
          <FavoriteIcon />
        </IconButton>
        {
          variantDescription !== '' &&
        <IconButton
          className={classnames(styles.expand, {
            [styles.expandOpen]: expanded,
          })}
          onClick={this.handleExpandClick}
          aria-expanded={expanded}
          aria-label="Show more"
        >
          <ExpandMoreIcon />
        </IconButton>
        }
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
            {variantDescription}
          </Typography>
            {urls.map(item => 
            <Typography paragraph>
              {item.type}
              {' '}
              <a href={item.url}> {item.url} </a>
            </Typography>
            )}
        </CardContent>
      </Collapse>
    </Card>
    )}
}

export default withStyles(styles)(ComicCard)
