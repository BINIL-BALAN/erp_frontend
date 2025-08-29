export const storageKeys = {
    USER:"user"
}

type KeyType = keyof typeof storageKeys

export const setItem = (key:KeyType | string ,data:any)=>{
     localStorage.setItem(key,JSON.stringify(data))
}
export const getItem = (key:KeyType | string):any=>{
   return localStorage.getItem(key)
}

export const clearStorage = ()=>{
    localStorage.clear()
}

