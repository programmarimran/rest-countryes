const getFromLocalStorage =()=>{
    const getItem=localStorage.getItem("country")
    if(getItem){
        const item =JSON.parse(getItem)
        return item
    }
    else{
        return []
    }
}
const itemStringfy=(id)=>{
    const stringfyid=JSON.stringify(id)
    saveToLocalStorage(stringfyid)
}
const saveToLocalStorage=(id)=>{
    const item =getFromLocalStorage()
    const setitem=[...item,id]
    localStorage.setItem("country",setitem)
}
export {getFromLocalStorage as getId,
        saveToLocalStorage as saveId,
    itemStringfy as setId}
