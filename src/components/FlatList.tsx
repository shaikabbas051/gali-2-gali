import { IonList } from "@ionic/react";
import React from "react";

export default function FlatList(props: {
  list: any[];
  renderItem: (item: any, idx: number) => React.ReactNode;
}) {
  return (
    <IonList>
      {props.list.map((item, idx) => (
        <div key={idx} style={{ paddingBottom: 5 }}>
          {props.renderItem(item, idx)}
        </div>
      ))}
    </IonList>
  );
}
