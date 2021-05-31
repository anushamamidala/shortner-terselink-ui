import axios from 'axios';
import * as END_POINTS from './endpoints'

export const authenticateUser = async() => {
    const response = await axios.get(END_POINTS.AUTH);
    return response;
}