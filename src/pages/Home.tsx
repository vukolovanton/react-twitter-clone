import React from "react";
import {
  Avatar,
  Container,
  createStyles,
  Grid,
  IconButton,
  InputBase,
  makeStyles,
  Paper,
  Typography,
  withStyles,
} from "@material-ui/core";
import {
  Bookmark,
  Message,
  Search,
  Twitter,
  Notifications,
  List,
  PermIdentityOutlined,
  ChatBubbleOutlineOutlined,
  RepeatOutlined,
  FavoriteBorderOutlined,
  ShareOutlined,
} from "@material-ui/icons";

const useHomeStyles = makeStyles((theme) => ({
  wrapper: {
    height: "100vh",
  },
  sideMenuList: {
    listStyle: "none",
    padding: 0,
    margin: 0,
  },
  sideMenuListItem: {
    display: "flex",
    alignItems: "center",
  },
  sideMenuListItemLabel: {
    fontWeight: 700,
    fontSize: 20,
    marginLeft: 10,
  },
  sideMenuListItemIcon: {
    fontSize: 25,
  },
  tweetsWrapper: {
    borderRadius: 0,
    height: "100%",
    borderTop: 0,
    borderBottom: 0,
  },
  tweetsHeader: {
    borderTop: 0,
    borderLeft: 0,
    borderRight: 0,
    padding: "15px 25px",
    "& h6": {
      fontWeight: 700,
    },
  },
  tweetsUsername: {
    color: "grey",
  },
  tweetFooter: {
    display: "flex",
    justifyContent: "space-between",
    width: 450,
  },
  tweet: {},
}));

const SearchTextField = withStyles(() =>
  createStyles({
    input: {
      borderRadius: 30,
      backgroundColor: "#E6ECF0",
      height: 35,
      padding: 0,
    },
  })
)(InputBase);

const Home = () => {
  const classes = useHomeStyles();

  return (
    <Container maxWidth="lg" className={classes.wrapper}>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <ul>
            <li className={classes.sideMenuListItem}>
              <IconButton aria-label="home" color="primary">
                <Twitter
                  color="primary"
                  className={classes.sideMenuListItemIcon}
                />
              </IconButton>
              <Typography
                variant="h6"
                className={classes.sideMenuListItemLabel}
              >
                Home
              </Typography>
            </li>
            <li className={classes.sideMenuListItem}>
              <IconButton
                aria-label="search"
                className={classes.sideMenuListItemIcon}
              >
                <Search />
              </IconButton>
              <Typography
                variant="h6"
                className={classes.sideMenuListItemLabel}
              >
                Search
              </Typography>
            </li>
            <li className={classes.sideMenuListItem}>
              <IconButton
                aria-label="messages"
                className={classes.sideMenuListItemIcon}
              >
                <Message />
              </IconButton>
              <Typography
                variant="h6"
                className={classes.sideMenuListItemLabel}
              >
                Messages
              </Typography>
            </li>
            <li className={classes.sideMenuListItem}>
              <IconButton
                aria-label="notifications"
                className={classes.sideMenuListItemIcon}
              >
                <Notifications />
              </IconButton>
              <Typography
                variant="h6"
                className={classes.sideMenuListItemLabel}
              >
                Notifications
              </Typography>
            </li>
            <li className={classes.sideMenuListItem}>
              <IconButton
                aria-label="bookmarks"
                className={classes.sideMenuListItemIcon}
              >
                <Bookmark />
              </IconButton>
              <Typography
                variant="h6"
                className={classes.sideMenuListItemLabel}
              >
                Bookmarks
              </Typography>
            </li>
            <li className={classes.sideMenuListItem}>
              <IconButton
                aria-label="list"
                className={classes.sideMenuListItemIcon}
              >
                <List />
              </IconButton>
              <Typography
                variant="h6"
                className={classes.sideMenuListItemLabel}
              >
                List
              </Typography>
            </li>
            <li className={classes.sideMenuListItem}>
              <IconButton
                aria-label="profile"
                className={classes.sideMenuListItemIcon}
              >
                <PermIdentityOutlined />
              </IconButton>
              <Typography
                variant="h6"
                className={classes.sideMenuListItemLabel}
              >
                Profile
              </Typography>
            </li>
          </ul>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.tweetsWrapper}>
            <Paper className={classes.tweetsHeader}>
              <Typography variant="h6">Main page</Typography>
            </Paper>
            <Paper className={classes.tweetsHeader} variant="outlined">
              <Grid container spacing={3}>
                <Grid item xs={1}>
                  <Avatar alt="User avatar" src="" />
                </Grid>
                <Grid item xs={11}>
                  <Typography>
                    <b>vukolov</b>
                    <span className={classes.tweetsUsername}>@vkvntn</span>
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    Со временем отношения у Марии Федоровны испортились не
                    только с венценосной свекровью, но и с супругом. Павел
                    Петрович становился все более замкнутым, неуравновешенным,
                    он имел любовниц и не скрывал этого.
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
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <SearchTextField placeholder="Search" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
