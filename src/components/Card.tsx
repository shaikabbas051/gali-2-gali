import { IonCard } from "@ionic/react";
import React from "react";

export default function Card(props: { children: React.ReactNode }) {
  return (
    <IonCard
      style={{
        flex: 1,
        padding: "10px",
        borderRadius: 4,
        margin: "3px 3px",
      }}
    >
      {props.children}
    </IonCard>
  );
}
