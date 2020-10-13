import produce, { Draft } from "immer";
import { TweetsActions, TweetsActionsType } from "./actionCreators";
import { TweetsState, LoadingState, AddFormState } from "./contracts/state";

const initialState: TweetsState = {
  items: [],
  loadingState: LoadingState.NEVER,
  addFormState: AddFormState.NEVER,
};

export const tweetsReducer = produce((draft: Draft<TweetsState>, action: TweetsActions) => {
  switch (action.type) {
    case TweetsActionsType.SET_TWEETS:
      draft.items = action.payload;
      draft.loadingState = LoadingState.LOADED;
      break;

    case TweetsActionsType.FETCH_TWEETS:
      draft.items = [];
      draft.loadingState = LoadingState.LOADING;
      break;
    
    case TweetsActionsType.SET_LOADING_STATE:
      draft.loadingState = LoadingState.LOADED;
      break;

    case TweetsActionsType.ADD_TWEET:
      draft.items.push(action.payload);
      draft.addFormState = AddFormState.NEVER;
      break;

    case TweetsActionsType.FETCH_ADD_TWEET:
      draft.addFormState = AddFormState.LOADING;
      break;

    case TweetsActionsType.SET_ADD_FORM_STATE:
      draft.addFormState = action.payload
      break;

    default:
      break;
  }
}, initialState);
