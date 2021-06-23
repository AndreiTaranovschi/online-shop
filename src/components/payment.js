import 'bootstrap';
import React, { useState, useEffect } from "react";

import { connect } from "react-redux";


const Payment = ({ cart }) => {
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalItems, setTotalItems] = useState(0);


    useEffect(() => {
        let items = 0;
        let price = 0;

        cart.forEach((item) => {
            items += item.qty;
            price += item.qty * item.price;
        });

        setTotalItems(items);
        setTotalPrice(price);

    }, [cart, totalPrice, totalItems, setTotalPrice, setTotalItems]);

    function successPayment(params) {
        alert("Ваш заказ на расмотрении в ближайшее время с вами свяжутся!!")
    }


    return (
        <div className="container">

            <div >
                <span>TOTAL: {totalItems}</span>
                <span>$ {totalPrice}</span>
            </div>
            <form className="container">
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label for="inputEmail4">Email</label>
                        <input type="email" className="form-control" id="inputEmail4" placeholder="Email"></input>
                    </div>
                    <div className="form-group col-md-6">
                        <label for="inputAddress">Name</label>
                        <input type="text" className="form-control" id="inputAddress" placeholder="Name"></input>
                    </div>
                </div>
                <div className="form-group">
                    <label for="inputAddress">Phone</label>
                    <input type="text" className="form-control" id="inputPhone" placeholder="+00000000000"></input>
                </div>
                <div className="form-group">
                    <label for="inputAddress2">Address</label>
                    <input type="text" className="form-control" id="inputAddress" placeholder="Unifun"></input>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label for="inputCity">City</label>
                        <input type="text" className="form-control" id="inputCity"></input>
                    </div>
                    <div className="form-group col-md-4">
                        <label for="inputState">State</label>
                        <select id="inputState" className="form-control">
                            <option selected>Наличка</option>
                            <option>Карта</option>
                        </select>
                    </div>
                    <div className="form-group col-md-2">
                        <label for="inputZip">Zip</label>
                        <input type="text" className="form-control" id="inputZip"></input>
                    </div>
                </div>
                <div className="form-group">

                </div>
                <button type="submit" className="btn btn-primary" onClick={successPayment}>Sent</button>
            </form>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        cart: state.shop.cart,
    };
};
export default connect(mapStateToProps)(Payment);