import * as types from "./actionTypes";
import fetch from "isomorphic-unfetch";

export const startLoading = () => {
  return { type: types.START_LOADING };
};

export const stopLoading = () => {
  return { type: types.STOP_LOADING };
};

// 儲存Fetch拿到的資料
export const saveFetchData = (data, saveFetchData) => {
  return { type: types.SAVE_FETCH_DATA, data, saveFetchData };
};

export const saveFetchedProduct = data => {
  return { type: types.SAVE_FETCHED_PRODUCT, data };
};

// Fetch商品資料
export const testingFetchData = () => async dispatch => {
  await fetch("http://localhost:8081/chowsangsang")
    .then(response => response.json())
    .then(data => {
      dispatch(saveFetchedProduct(data));
    })
    .catch(error => console.log(error))
    .finally(() => {});
};
