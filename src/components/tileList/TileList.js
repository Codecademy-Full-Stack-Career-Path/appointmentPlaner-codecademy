import React from "react";
import { Tile } from "../tile/Tile";

export const TileList = ({ array }) => {
  return (
    <div>
      {array.map((item, index) => {
        const { name, ...rest } = item; // destructure name and rest of the object

        return (
          <Tile key={index} name={name} description={rest} />
        );
      })}
    </div>
  );
};
