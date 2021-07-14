import * as api from "../api/api"




export const fetchCountries = () => async (dispatch) => {
    try {
        const { data } = await api.fetchCountry();
        dispatch({type: 'FETCH',payload: data });
    } catch (error) {

        console.log(error.message);
    }   
}