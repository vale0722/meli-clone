import React from "react";
import config from "../../../domain/config";

export default function Icon({ iconName, className }) {
  return (
    <img
      alt={iconName}
      className={className}
      src={config.statics + "icons/" + iconName + ".svg"}
    />
  );
}
