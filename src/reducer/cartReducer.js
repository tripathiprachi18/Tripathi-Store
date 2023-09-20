const cartReducer = (state, action) => {
  switch(action.type){
    case "ADD_TO_CART": {
      let { id, color, amount, product } = action.payload;
      console.log(
        "🚀 ~ file: cartReducer.js ~ line 4 ~ cartReducer ~ product",
        product
      );
  
      let existingProduct= state.cart.find((curr)=>curr.id==id+color);
      if(existingProduct){
        let updatedProduct=state.cart.map((currEle)=>{

        if(currEle.id==id+color){
         let newAmount=currEle.amount+amount;
         if(newAmount>=currEle.max){
          newAmount=currEle.max;
          console.log(currEle.max);
         }
         return {
          ...currEle,
          amount:newAmount,
         }
        }
        else{return currEle;}
      
        })
      return {
        ...state,
        cart: updatedProduct,
      }
      
      }
      else{
      let cartProduct;
  
      cartProduct = {
        id: id + color,
        name: product.name,
       
        image: product.image[0].url,
        price: product.price,
        max: product.stock,
        color,
        amount,
      };
  
      return {
        ...state,
        cart: [...state.cart, cartProduct],
      };
    }
    }
          //delete product from cart
             case "REMOVE_ITEM" :{
               const tempArr =state.cart.filter((currEle)=>currEle.id!==action.payload);
            console.log(tempArr);
             return {
          ...state,
            cart:tempArr,
         }
    }
    //clear the cart
    case "CLEAR_CART" :{
      return {
        ...state,
        cart: [],
      }
    }
    //increase cart amount
    case "SET_INCREMENT":{
      const {id}=action.payload;
      let cartList=state.cart.map((currEle)=>{
        if(currEle.id==action.payload ){
           let increseAmount=currEle.amount+1;
           if(currEle.max<=increseAmount){
            increseAmount=currEle.max;
           }
           return {...currEle,
            amount:increseAmount,}
        }
       else{
        return currEle;
       }
      });
      return{...state,cart:cartList};
    }
    //decrease cart amount
 case "SET_DECREMENT":{
  let cartlist=state.cart.map((currEle)=>{
    if(currEle.id===action.payload){
      let decreseditem=currEle.amount-1;
      if(currEle.amount<=1){
           decreseditem=1;
      }
      return {...currEle,
      amount:decreseditem}
    }else{
      return currEle;
    }

  })
  return {...state,
  cart:cartlist,}
 }
 //cart total item
  case "CART_TOTAL_ITEM": {
    let updatedItemVal = state.cart.reduce((initialVal, curElem) => {
      let { amount } = curElem;

      initialVal = initialVal + amount;
      return initialVal;
    }, 0);

    return {
      ...state,
      total_item: updatedItemVal,
    };
  }
  
  case "CART_TOTAL_PRICE_ITEM":{
    let {total_item,total_amount}=state.cart.reduce((initialVal,curElem)=>{
      let {price,amount} = curElem;
      initialVal.total_item+= amount;
       initialVal.total_amount += price * amount;
      return initialVal;
    },{total_item:0,
    total_amount:0,});
    return {
      ...state,
      total_item,
      total_amount,
    }
  }
   default :return state;}
  };
  
  export default cartReducer;