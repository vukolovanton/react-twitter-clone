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
    justifyContent: "space-between",
    width: 450,
  },
  tweet: {
    cursor: "pointer",
    paddingTop: 15,
    paddingLeft: 15,
    "&:hover": {
      backgroundColor: "#f5f8fa",
    },
  },
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
          <SideMenu classes={classes} />
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.tweetsWrapper}>
            <Paper className={classes.tweetsHeader}>
              <Typography variant="h6">Main page</Typography>
            </Paper>
            <Tweet
              text="Со временем отношения у Марии Федоровны испортились не только с
              венценосной свекровью, но и с супругом. Павел Петрович становился
              все более замкнутым, неуравновешенным, он имел любовниц и не
              скрывал этого."
              classes={classes}
              user={{
                fullname: "Vukolov Anton",
                username: "@vklvn",
                avatarUrl: "",
              }}
            />
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
