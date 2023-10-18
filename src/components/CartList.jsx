import CartItem from "./CartItem"

function CartList(props) {
    const {carts, onClickRemove, onClickInc, onClickDec} = props
    
    function CartListRender(){
        const CartListRender = carts.map((Item) => {
        
            return (
                <CartItem cartItem={Item} 
                key={Item.id} 
                onClickRemove={onClickRemove}
                onClickInc={onClickInc}
                onClickDec={onClickDec}
                />
            )
        })

        console.log(CartListRender)
        return CartListRender
    }

    return (
        <div>
            {CartListRender()}
        </div>
    )
}

export default CartList