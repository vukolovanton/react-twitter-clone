import { Button, Typography } from "@material-ui/core";
import {
  Twitter,
  Search,
  Message,
  Notifications,
  Bookmark,
  PermIdentityOutlined,
  ListAltOutlined,
} from "@material-ui/icons";
import React from "react";
import { useHomeStyles } from "../../pages/Home";

interface SideMenuProps {
  classes: ReturnType<typeof useHomeStyles>;
}

const SideMenu: React.FC<SideMenuProps> = ({
  classes,
}: SideMenuProps): React.ReactElement => {
  return (
    <ul>
      <li className={classes.sideMenuListItem}>
        <div>
          <Twitter color="primary" className={classes.sideMenuListItemIcon} />
          <Typography variant="h6" className={classes.sideMenuListItemLabel}>
            Home
          </Typography>
        </div>
      </li>
      <li className={classes.sideMenuListItem}>
        <div>
          <Search />
          <Typography variant="h6" className={classes.sideMenuListItemLabel}>
            Search
          </Typography>
        </div>
      </li>
      <li className={classes.sideMenuListItem}>
        <div>
          <Message />
          <Typography variant="h6" className={classes.sideMenuListItemLabel}>
            Messages
          </Typography>
        </div>
      </li>
      <li className={classes.sideMenuListItem}>
        <div>
          <Notifications />
          <Typography variant="h6" className={classes.sideMenuListItemLabel}>
            Notifications
          </Typography>
        </div>
      </li>
      <li className={classes.sideMenuListItem}>
        <div>
          <Bookmark />
          <Typography variant="h6" className={classes.sideMenuListItemLabel}>
            Bookmarks
          </Typography>
        </div>
      </li>
      <li className={classes.sideMenuListItem}>
        <div>
          <ListAltOutlined />
          <Typography variant="h6" className={classes.sideMenuListItemLabel}>
            List
          </Typography>
        </div>
      </li>
      <li className={classes.sideMenuListItem}>
        <div>
          <PermIdentityOutlined />
          <Typography variant="h6" className={classes.sideMenuListItemLabel}>
            Profile
          </Typography>
        </div>
      </li>
      <li className={classes.sideMenuListItem}>
        <Button
          color="primary"
          fullWidth
          variant="contained"
          className={classes.sideMenuTweetButton}
        >
          Make new tweet
        </Button>
      </li>
    </ul>
  );
};

export default SideMenu;
