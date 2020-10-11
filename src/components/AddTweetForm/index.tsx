import React from "react";
import classNames from "classnames";
import {
  Avatar,
  TextareaAutosize,
  IconButton,
  CircularProgress,
  Button,
} from "@material-ui/core";
import {
  ImageOutlined,
  SentimentSatisfiedAltOutlined,
} from "@material-ui/icons";
import { useHomeStyles } from "../../pages/Home";

interface AddTweetFormProps {
  classes: ReturnType<typeof useHomeStyles>;
}

const MAX_LENGTH = 280;

const AddTweetForm: React.FC<AddTweetFormProps> = ({
  classes,
}: AddTweetFormProps): React.ReactElement => {
  const [text, setText] = React.useState<string>("");
  const textLimitPercent = Math.round((text.length / 280) * 100);
  const maxLength = MAX_LENGTH - text.length;

  const handleChangeTextArea = (e: React.FormEvent<HTMLTextAreaElement>) => {
    if (e.currentTarget) {
      setText(e.currentTarget.value);
    }
  };

  const handleClickAddTweet = () => {
    setText("");
  };

  return (
    <div className={classes.addForm}>
      <div className={classes.addFormBody}>
        <Avatar className={classes.tweetAvatar} alt="Current user avatar" />
        <TextareaAutosize
          className={classes.addFormTextarea}
          placeholder="What's going on?"
          onChange={handleChangeTextArea}
          value={text}
        />
      </div>
      <div className={classes.addFormBottom}>
        <div className={classNames(classes.tweetFooter)}>
          <IconButton>
            <ImageOutlined style={{ fontSize: 26 }} />
          </IconButton>
          <IconButton>
            <SentimentSatisfiedAltOutlined style={{ fontSize: 26 }} />
          </IconButton>
        </div>
        <div className={classes.addFormBottomRight}>
          <span>{maxLength}</span>
          <div className={classes.addFormCircleProgress}>
            {text && (
              <CircularProgress
                variant="static"
                value={text.length >= MAX_LENGTH ? 100 : textLimitPercent}
                style={text.length >= MAX_LENGTH ? { color: "red" } : undefined}
                size={20}
                thickness={4}
              />
            )}
          </div>
          <Button
            color="primary"
            variant="contained"
            disabled={text.length >= MAX_LENGTH}
            onClick={handleClickAddTweet}
          >
            Tweet
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AddTweetForm;
