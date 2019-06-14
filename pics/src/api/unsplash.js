// all code related to axios and communicating with unsplash to get data

import axios from 'axios';

// create customized axios client for this specific purpose
export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 474520c7a7dc2f236bd2b9b46eaa29da131bc7f9fc503b97553e8a0c9f6e15cb'
    }
});