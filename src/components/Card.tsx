import { IonCard } from "@ionic/react";
import React from "react";

export default function Card(props: { children: React.ReactNode }) {
  return <IonCard>{props.children}</IonCard>;
}
