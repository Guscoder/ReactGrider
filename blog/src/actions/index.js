import jsonPlaceholder from '../apis/jsonPlaceholder';
import _ from 'lodash';


// ACTION CREATORS
// Redux-thunk allows action creators to return a function, not just objects
// Thunk is necessary to deal with APIs and the repsonse from APIs

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
    await dispatch(fetchPosts()); // await will make sure we wait for API request for posts to be completed

    const userIds = _.uniq(_.map(getState().posts, 'userId')) // goes through posts and gets userId from each
    userIds.forEach(id => dispatch(fetchUser(id)));// calls function and then finds user with matching id
};


export const fetchPosts = () => async dispatch => {
        const response = await jsonPlaceholder.get('/posts');

        dispatch({ type: 'FETCH_POSTS', payload: response.data });
};


export const fetchUser = id => async dispatch => {

    const response = await jsonPlaceholder.get(`/users/${id}`);

    dispatch({ type: 'FETCH_USER', payload: response.data });

};


// Memoize version

// export const fetchUser = id => dispatch => {
//     _fetchUser(id, dispatch);
// };

// const _fetchUser = _.memoize(async (id, dispatch) => {
//     const response = await jsonPlaceholder.get(`/users/${id}`);

//     dispatch({ type: 'FETCH_USER', payload: response.data });

// });