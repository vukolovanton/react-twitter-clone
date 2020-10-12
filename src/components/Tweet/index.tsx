import React from "react";
import classNames from "classnames";
import { Avatar, Grid, IconButton, Paper, Typography } from "@material-ui/core";
import {
  ChatBubbleOutlineOutlined,
  RepeatOutlined,
  FavoriteBorderOutlined,
  ShareOutlined,
} from "@material-ui/icons";
import { useHomeStyles } from "../../pages/Home";
import { Link } from "react-router-dom";

interface TweetProps {
  _id: string,
  text: string;
  classes: ReturnType<typeof useHomeStyles>;
  user: {
    fullname: string;
    username: string;
    avatarUrl: string;
  };
}

const Tweet: React.FC<TweetProps> = ({
  classes,
  text,
  user,
  _id
}: TweetProps): React.ReactElement => {
  return (
      <Link to={`/tweet/${_id}`} style={{ textDecoration: 'none' }}>
        <div>
          <Paper
            className={classNames(classes.tweetsHeader, classes.tweet)}
            variant="outlined"
          >
            <Grid container spacing={3}>
              <Grid item xs={1}>
                <Avatar alt="User avatar" src={user.avatarUrl} />
              </Grid>
              <Grid item xs={11}>
                <Typography>
                  <b>{user.fullname}</b>&nbsp;
                  <span className={classes.tweetsUsername}>{user.username}</span>
                </Typography>
                <Typography variant="body1" gutterBottom>
                  {text}
                </Typography>
                <div className={classes.tweetFooter}>
                  <div className={classes.tweet}>
                    <IconButton>
                      <ChatBubbleOutlineOutlined style={{ fontSize: 16 }} />
                    </IconButton>
                    <span>1</span>
                  </div>
                  <div className={classes.tweet}>
                    <IconButton>
                      <RepeatOutlined style={{ fontSize: 16 }} />
                    </IconButton>
                    <span>3</span>
                  </div>
                  <div className={classes.tweet}>
                    <IconButton>
                      <FavoriteBorderOutlined style={{ fontSize: 16 }} />
                    </IconButton>
                    <span>6</span>
                  </div>
                  <div className={classes.tweet}>
                    <IconButton>
                      <ShareOutlined style={{ fontSize: 16 }} />
                    </IconButton>
                  </div>
                </div>
              </Grid>
            </Grid>
          </Paper>
        </div>
      </Link>
  );
};

export default Tweet;
