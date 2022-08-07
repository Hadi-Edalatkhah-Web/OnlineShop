

const shorter=(title)=>{
    const splitedTitle=title.split(" ");
    const newTitle=`${splitedTitle[0]}  ${splitedTitle[1]}`
    return newTitle
}


const isInCart=(state , id)=>{
    // we used two of (!) because  we want true or false 
    const result=!!state.selectedItems.find(item=> item.id === id);
    return result;

}

const quantityCounter=(state , id)=>{
    const index = state.selectedItems.findIndex((item) => item.id === id);
  if (index === -1) {
    return false;
  } else {
    return state.selectedItems[index].quantity;
  }

}


export  { shorter ,isInCart ,quantityCounter}