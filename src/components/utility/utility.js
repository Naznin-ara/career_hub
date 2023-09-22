const getjobItem = () =>{
    const storedItem = localStorage.getItem('item');
    if(storedItem){
        return JSON.parse(storedItem)
    }
    return [];
}

const setjobItem = (id) =>{
 const storedItem = getjobItem();
 
 const isexist = storedItem.find(item => item === id);
 if(!isexist){
    storedItem.push(id)
     localStorage.setItem('item',  JSON.stringify(storedItem) )
 }
}

export {getjobItem, setjobItem}