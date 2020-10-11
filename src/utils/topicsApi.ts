import axios from "axios"
import { TopicsState } from "../store/ducks/topics/contracts/state";

export const TopicsApi = {
  fetchTopics(): Promise<TopicsState['topics']> {
    return axios.get('/topics').then(({data}) => data);
  }
}