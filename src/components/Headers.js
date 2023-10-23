import React from "react";
import { Navbar, Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Headers = () => {
  const allCart = useSelector((state) => state.allCart);
  return (
    <>
      <Navbar
        style={{ height: "60px", backgroundColor: "#000", color: "white" }}
      >
        <Container>
          <NavLink to="/" className="text-light text-decoration-none fs-3">
            Brand link
          </NavLink>
          <NavLink to="/cart" className="text-light">
            <div>
              <span className="position-relative">
                {allCart.carts.length > 0 && (
                  <span className="badgepos">{allCart.carts.length}</span>
                )}
                <i className="fa-solid fa-cart-shopping"></i>
              </span>
            </div>
          </NavLink>
        </Container>
      </Navbar>
    </>
  );
};

export default Headers;
