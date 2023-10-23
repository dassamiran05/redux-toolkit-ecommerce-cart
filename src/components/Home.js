import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Cardsdata from "./cardData";
import { Row, Col, Card, Badge } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/features/cartSlice";

const Home = () => {
  const [carddata, setCarddata] = useState(Cardsdata);

  const dispatch = useDispatch();

  const send = (item) => {
    dispatch(addToCart(item));
  };
  return (
    <>
      <section className="iteam_section mt-4 container">
        <h2 className="ps-0 pe-4 mb-3" style={{ fontWeight: 400 }}>
          Restaurants in Ahmedabad Open now
        </h2>
        <Row>
          {carddata?.map((item, index) => (
            <Col xs={12} md={6} lg={4} className="mb-4">
              <Card>
                <div className="img">
                  <Card.Img variant="top" src={item?.imgdata} />
                </div>

                <Card.Body>
                  <div className="d-flex justify-content-between align-items-center">
                    <Card.Title>{item?.dish}</Card.Title>
                    <Badge bg="success" className="d-flex align-items-center">
                      {item?.rating}&nbsp;
                      <i
                        className="fa-solid fa-star"
                        style={{ fontSize: "10px" }}
                      ></i>
                    </Badge>
                  </div>
                  <div className="d-flex justify-content-between align-items-center">
                    <Card.Text>{item?.address}</Card.Text>
                    <span>$&nbsp;{item?.price}</span>
                  </div>
                  <hr />

                  <div className="d-flex align-items-center justify-content-center ">
                    <Button
                      style={{
                        width: "150px",
                        backgroundColor: "#ff3054db",
                        border: "none",
                        outline: "none",
                      }}
                      onClick={() => send(item)}
                    >
                      Add to Cart
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </section>
    </>
  );
};

export default Home;
