import { IonRow } from "@ionic/react";
import React from "react";

interface IProps {
  children: React.ReactNode;
  spaceBetween?: boolean;
  gap?: number;
}
export default function Row(props: IProps) {
  let style: any = {
    flexWrap: "nowrap",
    alignItems: "center",
    gap: props.gap || 0,
  };
  if (props.spaceBetween) {
    style = { justifyContent: "space-between" };
  }

  return <IonRow style={style}>{props.children}</IonRow>;
}
