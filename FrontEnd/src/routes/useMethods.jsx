export const validExistSession = () =>{
    const sessionExist = localStorage.getItem('session') ? localStorage.getItem('session') : null;    
     return sessionExist;
    
}