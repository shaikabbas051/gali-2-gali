import { IonRow } from "@ionic/react";
import React from "react";

interface IProps {
  children: React.ReactNode;
  type?: "space-between";
}
export default function Row(props: IProps) {
  let style: any = {
    flexWrap: "nowrap",
  };
  if (props.type === "space-between") {
    style = { justifyContent: "space-between" };
  }

  return <IonRow style={style}>{props.children}</IonRow>;
}
