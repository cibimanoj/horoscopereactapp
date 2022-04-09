import React from "react";

const Card = (props) => {
  console.log(props);
  return (
    <article className="card">
      <div className="card-a">
        <h1>{props.name}</h1>
        <h1>{props.sign}</h1>
        <h2>{props.date_range}</h2>
      </div>
      <div className="card-b">
        <h2>Day: {props.current_date}</h2>
      </div>
      <div className="card-c">
        <p>{props.description}</p>
      </div>
      <div className="card-d">
        <span>
          Compatibility: <div>{props.compatibility}</div>
        </span>
        <span>
          Mood: <div>{props.mood}</div>
        </span>
        <span>
          Color: <div>{props.color}</div>
        </span>
        <span>
          Lucky number: <div>{props.lucky_number}</div>
        </span>
        <span>
          Lucky time: <div>{props.lucky_time}</div>
        </span>
      </div>
      <p className="card-e">See yeah tomorrow</p>
    </article>
  );
};
export default Card;
