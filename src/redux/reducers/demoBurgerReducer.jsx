

const stateDefault = {
    burger:[{name:'salad',quantity:2},{name:'cheese',quantity:2},{name:'beef',quantity:2}]
   
}

export const demoBurgerReducer = (state=stateDefault,action)=>{
    switch(action.type){
        case 'CHANGE_QUANTITY':{
            //B1: Lấy dữ liệu từ action
            let {name,quantity} = action.payload
            //B2: clone các state object/array
            let burgerUpdate = [...state.burger]
            let item = burgerUpdate.find(item=>item.name === name)
            if (item){
                item.quantity+=quantity
                if(item.quantity<1){
                    alert('Tối thiếu là 1')
                        item.quantity=1
                  
                    
                }
            }
            state.burger=burgerUpdate
            return {...state}


        }
        default: return state
    }
}