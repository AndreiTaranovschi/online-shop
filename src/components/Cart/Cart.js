import React, { useState, useEffect } from "react";
import styles from "./Cart.module.css";
import {
  loadCurrentItem,
  addToCart,
} from "../../redux/Shopping/shopping-actions";
import { connect } from "react-redux";

import CartItem from "./CartItem/CartItem";
var counter = 0;
const Cart = ({ cart }) => {
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
    counter = items;
  }, [cart, totalPrice, totalItems, setTotalPrice, setTotalItems]);
  function showMessage(items) {
    var name = prompt('Введите ваше имя и фамилию', 'Гоша Унифан )');
    var adress = prompt('Введите ваш адрес для доставки', 'Адрес');
    alert('\nУважаемый ' + name + '\nВы заказали:' + counter + " Товаров" + '\n По адресу ' + adress);
    alert("C вами свяжутся в ближайшее время, ожидайте");

  }
  return (
    <div className={styles.cart}>
      <div className={styles.cart__items}>
        {cart.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <div className={styles.cart__summary}>
        <h4 className={styles.summary__title}>Cart Summary</h4>
        <div className={styles.summary__price}>
          <span>TOTAL: ({totalItems} items)</span>
          <span>$ {totalPrice}</span>
        </div>
        <button onClick={showMessage} className={styles.summary__checkoutBtn}>
          Proceed To Checkout
        </button>
        <div id="prompt-form-container">
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  };
};

export default connect(mapStateToProps)(Cart);
