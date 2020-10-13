import React from "react";
import classNames from "classnames";
import {
  Avatar,
  TextareaAutosize,
  IconButton,
  CircularProgress,
  Button,
  Snackbar,
} from "@material-ui/core";
import {
  ImageOutlined,
  SentimentSatisfiedAltOutlined,
} from "@material-ui/icons";
import { useHomeStyles } from "../../pages/Home";
import { fetchAddTweet } from "../../store/ducks/tweets/actionCreators";
import { useDispatch, useSelector } from "react-redux";
import { selectAddFormState } from "../../store/ducks/tweets/selectors";
import { AddFormState } from "../../store/ducks/tweets/contracts/state";

interface AddTweetFormProps {
  classes: ReturnType<typeof useHomeStyles>;
}

const MAX_LENGTH = 280;

const AddTweetForm: React.FC<AddTweetFormProps> = ({
  classes,
}: AddTweetFormProps): React.ReactElement => {
  const [text, setText] = React.useState<string>("");
  const [open, setOpen] = React.useState<boolean>(false);

  const handleSnackbarClose = () => {
    setOpen(false)
  }
  const dispatch = useDispatch();

  const addFormState = useSelector(selectAddFormState);

  React.useEffect(() => {
    if(addFormState === AddFormState.ERROR) {
      setOpen(true);
    }
  }, [addFormState])

  const textLimitPercent = Math.round((text.length / 280) * 100);
  const maxLength = MAX_LENGTH - text.length;

  const handleChangeTextArea = (e: React.FormEvent<HTMLTextAreaElement>) => {
    if (e.currentTarget) {
      setText(e.currentTarget.value);
    }
  };

  const handleClickAddTweet = () => {
    setText("");
    dispatch(fetchAddTweet(text))
  };

  return (
    <div className={classes.addForm}>
      <Snackbar
        open={open}
        onClose={handleSnackbarClose}
        message="Oops! Something went wrong"
      />
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
            disabled={!text || text.length >= MAX_LENGTH || addFormState === AddFormState.LOADING}
            onClick={handleClickAddTweet}
          >
            { addFormState === AddFormState.LOADING ? (<CircularProgress color="inherit" size={16} />) : "Tweet"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AddTweetForm;
