const stateDefault = {
    arrSinhVien: [{id:1,name:'Nguyễn Văn A'},{id:2,name:'Nguyễn Văn B'}],
    sinhVien:{
        id:'',
        name:''
    }

}

export const qlsvReducer = (state = stateDefault,action)=>{
    switch(action.type){
        case 'HANDLE_CHANGE_INPUT':{
            let {id,value} = action
            state.sinhVien[id] = value
            state.sinhVien = {...state.sinhVien}
            return {...state}
        }
        case 'HANDLE_SUBMIT':{
            //B1: Lấy dữ liệu từ action ra
            let {sinhVien} = action
            //B2: clone state (object,array)
            let arrSinhVienUpdate = [...state.arrSinhVien]
            arrSinhVienUpdate.push(sinhVien)
            //B3: cập nhật lại state
            state.arrSinhVien=arrSinhVienUpdate
            return {...state}
        }
        default: return state
    }
}