import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { useHomeStyles } from '../../pages/Home';
import { fetchTweet, setTweet } from '../../store/ducks/tweet/actions';
import { selectTweetData } from '../../store/ducks/tweet/selectors';
import Tweet from '../Tweet'

const TweetExpanded: React.FC = () => {
  const classes = useHomeStyles();
  const params: {id?: string} = useParams();
  const dispatch = useDispatch();

  const id = params.id;

  const tweetData = useSelector(selectTweetData)

  React.useEffect(() => {
    id && dispatch(fetchTweet(id))

    return () => {
      dispatch(setTweet(undefined))
    }
  }, [dispatch, id])

  if (!tweetData) {
    return null;
  }
  
  return (
    <div>
        <Tweet
          classes={classes}
          {...tweetData}
      />
    </div>
  )
}

export default TweetExpanded
