import "../style/Product.css";
import { NavLink } from "react-router-dom";
import { StarOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";

import { Add, Remove } from "@material-ui/icons";
import { Box, Button } from "@material-ui/core";
import {
  addNewProduct,
  createNewCart,
} from "../features/cartSlice";
import { useState } from "react";
import { addNewCart, updatedCart } from "../data/cartAPI";

export default function Product(props) {
  const [amount, setAmount] = useState(1);
  const cart = useSelector((state) => state.usercart);
  const users = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleCart = async () => {
    if (cart.data !== null) {
      let newCart = [];
      console.log("cart nè", cart);
      const current = cart.data[0].products.find(
        (i) => i.productId === props.data.id
      );
      if (current === null || current === undefined) {
        console.log("cart nè 2", cart);
        const newProduct = {
          productId: props.data.id,
          quantity: amount,
        };

        newCart = [...cart.data[0].products, newProduct];
        dispatch(addNewProduct(newCart));
      } else {
        console.log("cart nè 2", cart);
        const updatedProduct = {
          productId: current.productId,
          quantity: current.quantity + amount,
        };
        newCart = cart.data[0].products.map((i) =>
          i.productId === updatedProduct.productId ? updatedProduct : i
        );
        dispatch(addNewProduct(newCart));
      }
      const payload = {
        cartId: cart.data[0].id,
        data: {
          date: cart.data[0].date,
          products: newCart,
          userId: cart.data[0].userId,
        },
      };

      // console.log(payload);
      await updatedCart(payload);
      console.log("cart nè 3", cart);
      // console.log(res.data);
    } else {
      const user = users.id;
      const payload = {
        userId: user.id,
        date: new Date(),
        products: [
          {
            productId: props.product.id,
            quantity: amount,
          },
        ],
      };
      const res = await addNewCart(payload);
      if (res.data) {
        console.log("cart nè 4", cart);
        dispatch(createNewCart(res.data));
      }
    }
  };

  // console.log(props);
  return (
    <div className="cell">
      <NavLink className=" product-list" to={`/products/${props.data.id}`}>
        <div>
          <img
            className="product-img zoom"
            src={props.data.image}
            alt={props.data.id}
          ></img>
          <p className="rating">
            <StarOutlined />
            {props.data.rating.rate}
          </p>
          <p className="count">total:{props.data.rating.count}</p>
        </div>
        <p className="price">{props.data.price}$</p>
        <p className="title">{props.data.title}</p>
        <p className="description">{props.data.description}</p>
      </NavLink>
      <Box className="addtoCart">
        <Box>
          <Remove onClick={() => setAmount(amount !== 1 ? amount - 1 : 1)} />

          <span>{amount}</span>
          <Add onClick={() => setAmount(amount + 1)} />
        </Box>
        {users.data.username !== null ? (
          <Button variant="outlined" size="large" onClick={handleCart}>
            Add To Cart
          </Button>
        ) : (
          <Button variant="outlined" size="large" disabled={true}>
            Add To Cart
          </Button>
        )}
      </Box>
    </div>
  );
}
