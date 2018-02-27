const keyName='todolist';
export default{
    fetch(){
        return JSON.parse(window.localStorage.getItem(keyName)||'[]');
    },
    save(item){
        window.localStorage.setItem(keyName,JSON.stringify(item));
    }
}


