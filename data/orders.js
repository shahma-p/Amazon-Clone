export const orders =JSON.parse(localStorage.getItem('oreders'))|| [];

export function addOrder(order){
  orders.unshift(order);
  saveToStorage();
}

function saveToStorage(){
  localStorage.setItem('order',JSON.stringify(orders))
}