

const countries = (countries=[],action) => {

    switch(action.type) {
        case 'FETCH': 
            return action.payload;
           
        default: return countries  ;
    }
};

export default countries;