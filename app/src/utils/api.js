import fetch from 'whatwg-fetch';
let token = localStorage.token;
if (!token) {
    token = localStorage.token = Math.random().toString(36).substring(-8);
}
const header = {
    "Accpet": "application/json",
    "Authorization": token,
    "content-type":"application/json"
}
export const getAllCatagories = () => { return fetch().then() };
export const getPostsByCatagories = () => { return fetch().then() };

export const getAllPosts = () => { return fetch().then() };
export const addAPost = () => { return fetch().then() };
export const getAPostById = () => { return fetch().then() };
export const delPostById = () => { return fetch().then() };
export const voteAPostById = () => { return fetch().then() };
export const updatePostById = () => { return fetch().then() };

export const getCommentsByPostId = () => { return fetch().then() };
export const getCommentsById = () => { return fetch().then() };
export const updateCommentsById = () => { return fetch().then() };
export const addComments = () => { return fetch().then() };
export const voteCommentsBy = () => { return fetch().then() };
export const deleteCommentsById= () => { return fetch().then() };