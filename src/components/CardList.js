import React from "react";
import Card from "./Card";

const CardList = ({ robots }) => {
    if (!robots) {
        throw new Error("Nooooooo!");
    }
    return (
        <div>
            {robots.map((_, i) => {
                return (
                    <Card
                        key={i}
                        id={robots[i].id}
                        name={robots[i].name}
                        email={robots[i].email}
                    />
                );
            })}
        </div>
    );
};

export default CardList;
