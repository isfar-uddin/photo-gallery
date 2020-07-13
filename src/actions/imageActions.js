import {FETCH_IMAGES} from "./types";
import DummyData from './../dummyData';

export const fetchImages = () => dispatch => {
  /*Need to call api here to fetch data. But here I used dummy data from an existing file*/
  dispatch({
    type: FETCH_IMAGES,
    payload: DummyData
  })

};