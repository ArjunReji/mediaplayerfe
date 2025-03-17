import { serverurl } from "./serverUrl";
import { commonApi } from "./commonApi";

// API call for upload videos
export const uploadVideo = async (reqBody) => {
  return await commonApi('POST', `${serverurl}/videos`, reqBody)
}

// get all videos api call

export const getAllVideos = async () => {
  return await commonApi('GET', `${serverurl}/videos`, "")
}

// delete video
export const deleteVideo = async (id) => {
  return await commonApi('DELETE', `${serverurl}/videos/${id}`,"")
}

// add to History
export const addToHistory = async (data)=>{
  return await commonApi('POST',`${serverurl}/history`, data)
}

// get all watch history
export const getHistory = async ()=>{
  return await commonApi('GET',`${serverurl}/history`,"")
}

// delete History
export const deleteWatchHistory = async(id)=>{
  return await commonApi('DELETE', `${serverurl}/history/${id}`,{})
}

// add category
export const addCategory = async (data)=>{
  return await commonApi('POST',`${serverurl}/categories`,data)
}

// delete category
export const deleteVideoCategory = async (data)=>{
  return await commonApi('DELETE',`${serverurl}/categories/${data}`,{})
}


// get All Categories
export const getAllCategories = async ()=>{
  return await commonApi('GET',`${serverurl}/categories`,"")
}
