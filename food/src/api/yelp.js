import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer RIJWR3KhwXYXBdK7Ahopw1vVwOvh8gE9oURFx-wR0_t-tlumuytm_A5SB7if6wKufw8x8XoIXeXwuwZ-TArvw_3Upg4Vu_GtVn5ClPm5pHXFQmNPTfLf5d0jkiexXnYx'
    }
});