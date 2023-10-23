import React, { useState, useEffect } from "react";
import { Row, Col, Card, Badge } from "react-bootstrap";
import "./cart.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  addToCart,
  emptycartIteam,
  removeSingleIteams,
  removeToCart,
} from "../redux/features/cartSlice";

const CartDetail = () => {
  const { carts } = useSelector((state) => state.allCart);

  const [totalprice, setPrice] = useState(0);
  const [totalquantity, setTotalQuantity] = useState(0);

  const dispatch = useDispatch();

  const handleIncrement = (e) => {
    dispatch(addToCart(e));
  };

  // remove single item
  const handleSingleDecrement = (e) => {
    dispatch(removeSingleIteams(e));
  };

  // count total price
  const total = () => {
    let totalprice = 0;
    carts.map((ele, ind) => {
      totalprice += ele.price * ele.qnty;
    });
    setPrice(totalprice);
  };

  // count total quantity
  const countquantity = () => {
    let totalquantity = 0;
    carts.map((ele, ind) => {
      totalquantity += ele.qnty;
    });
    setTotalQuantity(totalquantity);
  };

  useEffect(() => {
    total();
  }, [total]);

  useEffect(() => {
    countquantity();
  }, [countquantity]);

  // empty cart
  const emptycart = () => {
    dispatch(emptycartIteam());
  };

  // remove to cart
  const handleDecrement = (e) => {
    dispatch(removeToCart(e));
  };
  return (
    <>
      <div className="row justify-content-center m-0">
        <div className="col-md-8 mt-5 mb-5 cardsdetails">
          <Card>
            <Card.Header className="bg-dark p-3">
              <div className="d-flex justify-content-between align-items-center">
                <h5 className="text-white m-0">
                  Cart Calculation
                  {carts.length > 0 ? `(${carts.length})` : ""}
                </h5>
                {carts.length > 0 ? (
                  <button
                    className="btn btn-danger d-flex align-items-center justify-content-center gap-2"
                    onClick={emptycart}
                  >
                    <i className="fa fa-trash-alt"></i>
                    <span>EmptyCart</span>
                  </button>
                ) : (
                  ""
                )}
              </div>
            </Card.Header>
            <Card.Body className="p-0">
              {carts.length === 0 ? (
                <table className="table cart-table mb-0">
                  <tbody>
                    <tr>
                      <td colSpan={6}>
                        <div className="cart-empty">
                          <i className="fa fa-shopping-cart"></i>
                          <p>Your Cart Is Empty</p>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              ) : (
                <table className="table cart-table mb-0 table-responsive-sm">
                  <thead>
                    <tr>
                      <th>Action</th>
                      <th>Product</th>
                      <th>Name</th>
                      <th>Price</th>
                      <th>Qty</th>
                      <th className="text-right">
                        {" "}
                        <span id="amount" className="amount">
                          Total Amount
                        </span>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {carts.map((data, index) => {
                      return (
                        <>
                          <tr>
                            <td>
                              <button
                                className="prdct-delete"
                                onClick={() => handleDecrement(data.id)}
                              >
                                <i className="fa fa-trash-alt"></i>
                              </button>
                            </td>
                            <td>
                              <div className="product-img">
                                <img src={data.image} alt="" />
                              </div>
                            </td>
                            <td>
                              <div className="product-name">
                                <p>{data.title}</p>
                              </div>
                            </td>
                            <td>{data.price}</td>
                            <td>
                              <div className="d-flex align-items-center">
                                <button
                                  className="prdct-qty-btn"
                                  type="button"
                                  //   onClick={
                                  //     data.qnty <= 1
                                  //       ? () => handleDecrement(data.id)
                                  //       : () => handleSingleDecrement(data)
                                  //   }
                                  onClick={() => handleSingleDecrement(data)}
                                >
                                  <i className="fa fa-minus"></i>
                                </button>
                                <input
                                  type="text"
                                  className="qty-input-box"
                                  value={data.qnty}
                                  disabled
                                  name=""
                                  id=""
                                />
                                <button
                                  className="prdct-qty-btn"
                                  type="button"
                                  onClick={() => handleIncrement(data)}
                                >
                                  <i className="fa fa-plus"></i>
                                </button>
                              </div>
                            </td>
                            <td className="text-right">
                              ₹ {data.price * data.qnty}
                            </td>
                          </tr>
                        </>
                      );
                    })}
                  </tbody>
                  <tfoot>
                    <tr>
                      <th>&nbsp;</th>
                      <th colSpan={3}>&nbsp;</th>
                      <th>
                        Items In Cart <span className="ml-2 mr-2">:</span>
                        <span className="text-danger">{totalquantity}</span>
                      </th>
                      <th className="text-right">
                        Total Price<span className="ml-2 mr-2">:</span>
                        <span className="text-danger">₹ {totalprice}</span>
                      </th>
                    </tr>
                  </tfoot>
                </table>
              )}
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
};

export default CartDetail;
