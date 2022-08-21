


const stateDefault = './img/products/black-car.jpg'

export const imgCarReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case 'CHANGE-COLOR':{
            state= action.imgCar;
            return state
        }
      default:
        return state;
    }
  }
