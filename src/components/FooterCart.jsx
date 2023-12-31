function FooterCart(props) {
    const {priceTotal} = props;
    return (
        <footer>
                <hr />
                <div className="cart-total">
                    <h4>
                        total <span>{priceTotal}</span>
                    </h4>
                </div>
                <button className="btn clear-btn">
                    clear cart
                </button>
            </footer>
    )
}

export default FooterCart