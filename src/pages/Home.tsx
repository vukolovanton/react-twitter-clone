import React from "react";
import {
  Container,
  createStyles,
  Grid,
  InputBase,
  makeStyles,
  Paper,
  Typography,
  withStyles,
} from "@material-ui/core";

import Tweet from "../components/Tweet";
import SideMenu from "../components/SideMenu";
import AddTweetForm from "../components/AddTweetForm";
import { useDispatch, useSelector } from "react-redux";
import { fetchTweets } from "../store/ducks/tweets/actionCreators";
import { selectTweetsItems } from "../store/ducks/tweets/selectors";

export const useHomeStyles = makeStyles((theme) => ({
  wrapper: {
    height: "100vh",
  },
  sideMenuList: {
    padding: 0,
    margin: 0,
  },
  sideMenuListItem: {
    "&:hover": {
      "& div": {
        backgroundColor: "rgba(29, 161, 242, 0.1)",
      },
      "& h6": {
        color: theme.palette.primary.main,
      },
      "& svg path": {
        color: theme.palette.primary.main,
      },
    },
    listStyle: "none",
    "& div": {
      display: "inline-flex",
      padding: "0 30px",
      alignItems: "center",
      cursor: "pointer",
      borderRadius: 30,
      height: 60,
      transition: "background-color 0.1s ease-in-out",
    },
  },
  sideMenuTweetButton: {
    color: "white",
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
    width: "60%",
  },
  tweet: {
    cursor: "pointer",
    paddingTop: 15,
    paddingLeft: 15,
    "&:hover": {
      backgroundColor: "#f5f8fa",
    },
  },
  addForm: {
    padding: 20,
  },
  addFormBody: {
    display: "flex",
    width: "100%",
  },
  tweetAvatar: {},
  addFormTextarea: {
    width: "100%",
    minHeight: 100,
    padding: "10px",
    borderRadius: "10px",
    marginLeft: 15,
  },
  addFormBottom: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  addFormBottomRight: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "30%",
  },
  addFormCircleProgress: {},
}));

const SearchTextField = withStyles(() =>
  createStyles({
    input: {
      borderRadius: 30,
      backgroundColor: "#E6ECF0",
      height: 35,
      marginTop: 20,
      paddingLeft: 35,
    },
  })
)(InputBase);

const Home = () => {
  const classes = useHomeStyles();
  const dispatch = useDispatch();
  const tweets = useSelector(selectTweetsItems);

  React.useEffect(() => {
    dispatch(fetchTweets())
  }, [dispatch])

  return (
    <Container maxWidth="lg" className={classes.wrapper}>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <SideMenu classes={classes} />
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.tweetsWrapper}>
            <Paper className={classes.tweetsHeader}>
              <Typography variant="h6">Main page</Typography>
            </Paper>
            <Paper>
              <AddTweetForm classes={classes} />
            </Paper>
            { 
              tweets.map((tweet) =>
              <Tweet
                text={tweet.text}
                classes={classes}
                user={tweet.user}
                key={tweet._id}
              />
            )}
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
