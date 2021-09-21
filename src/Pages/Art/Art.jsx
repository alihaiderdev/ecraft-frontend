import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { loadStripe } from "@stripe/stripe-js";
const stripePromise = loadStripe(
  "pk_test_51JX1SoKLVfMoL6q8Hc9OJ9Mr8mDXdAAx5SiZ7GipNFNWQVXVCFNXaPnwocUo0hVcqJslPxfCickoDNKkxZQkNT8O00p5XacqUC"
);




const Art = () => {
  var { artId } = useParams();
  var [art, setArt] = useState({});
  const checkoutSession = async () => {
    try {
      const stripe = await stripePromise;
      var {data: {data: {session}}} = await axios.get(`/orders/checkout-session/${artId}`)
      await stripe.redirectToCheckout({
        sessionId: session.id,
      });
      console.log(session);
    } catch (error) {
      
    }
   }
  const fetchArt = async () => {
    try {
      var {
        data: {
          data: { art },
        },
      } = await axios.get(`/arts/${artId}`);
      setArt({ ...art });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    const fn = async () => {
      fetchArt();
    };
    fn();
  }, []);
  console.log(art);
  return (
    <div>
        <img src={art.coverPhoto} />
        <div style={{ display: "flex", alignItems: "center" }}>
          <h2>{art.title}</h2> ---- <h3>${art.cost}</h3>
        </div>
        <button onClick={checkoutSession} >BUY!</button>
    </div>
  );
};

export default Art;
