import React from "react";
import axios from "axios";
import Card from "./Card";
import Loader from "./Loader";
import { useState } from "react";

const Main = (props) => {
  const getRead = (sign = "leo",day="today") => {
    axios
      .post(`https://aztro.sameerkumar.website/?sign=${sign}&day=${day}`)
      .then((response) => {
        console.clear();
        console.log(response.data);
        setRead(response.data);
        setLoading(false);
      });
  };

  const [sign, setSign] = useState("leo");
  const [read, setRead] = useState();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [loading, setLoading] = useState(false);
  const [showCard, setShowCard] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    setLoading(true);
    getRead(e.target.value);
    setShowCard(true);
    e.target.reset();
  };

  return (
    <div className="main">
      <h2 className="head">Horoscope</h2>
      <div className="form">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="name"
            placeholder="Enter Your Name"
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            className="email"
            placeholder="Enter Your Email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <div className="sign select">
            <select onChange={(e) => setSign(e.target.value)}>
              <option value="" disabled selected>
                Select sign
              </option>
              <option value="aquarius">Aquarius</option>
              <option value="pisces">Pisces</option>
              <option value="taurus">Taurus</option>
              <option value="gemini">Gemini</option>
              <option value="cancer">Cancer</option>
              <option value="leo">Leo</option>
              <option value="virgo">Virgo</option>
              <option value="libra">Libra</option>
              <option value="scorpio">Scorpio</option>
              <option value="sagittarius">Sagittarius</option>
              <option value="capricorn">Capricorn</option>
            </select>
          </div>
          <button>Submit</button>
        </form>
      </div>

      <div className="card-box">
        {loading ? (
          <>
          <Loader />
          </>
        ) : showCard ? (
          <>
          <div className="timeperiod">
            <button className="days" onClick={()=>getRead(sign,"Yesterday")}>Yesterday</button>
          <button className="days"onClick={()=>getRead(sign)}>Today</button>
          <button className="days"onClick={()=>getRead(sign,"tomorrow")}>Tomorrow</button>
            
          </div>
          <Card {...read} sign={sign} name={name} email={email} />
          </>
        ) : null}
      </div>
    </div>
  );
};

export default Main;
