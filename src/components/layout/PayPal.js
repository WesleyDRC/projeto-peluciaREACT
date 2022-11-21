import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

import useBuy from "../../hooks/useBuyFlow";
import { api } from "../../services/api";

import axios from "axios";

export default function PayPal() {
  const { selectedItem, total } = useBuy();

  const navigate = useNavigate();
  const paypal = useRef();

  useEffect(() => {
    window.paypal
      .Buttons({
        createOrder: (data, actions, err) => {
          return actions.order.create({
            intent: "CAPTURE",
            purchase_units: [
              {
                description: selectedItem.name,
                amount: {
                  currency_code: "BRL",
                  value: total,
                },
              },
            ],
          });
        },
        onApprove: async (data, actions) => {
          var userToken = localStorage.getItem('user_token')

          const AuthStr = `Bearer ${JSON.parse(userToken)}`;
          console.log("TOKEN" + AuthStr);
          const response = await api.post(
            "/order",
            {
              products: [selectedItem.id],
            },
            {
              headers: {
                Authorization: AuthStr,
              },
            }
          );

          console.log(response);
          const order = await actions.order.capture();
          navigate("/ordersuccess");
          console.log(order);
        },
        onError: (err) => {
          console.log(err);
        },
      })
      .render(paypal.current);
  }, []);
  return (
    <div>
      <div ref={paypal}></div>
    </div>
  );
}
