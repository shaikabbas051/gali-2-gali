import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonImg,
  IonPage,
  IonText,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { pencil } from "ionicons/icons";
import React, { useEffect, useState } from "react";
import { sampleData, ISampleData } from "../Inventory/InventoryList";

export const ItemDetails = (props: any) => {
  const { match } = props;
  const [itemDetails, setItemDetails] = useState<ISampleData>();

  const fetchItemDetails = () => {
    setItemDetails(sampleData.find((item) => item.id === match.params.id));
  };
  useEffect(() => {
    console.log(match);
    fetchItemDetails();
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/inventory" />
          </IonButtons>
          <IonTitle>{itemDetails?.name}</IonTitle>
          <IonButtons slot="end">
            <IonButton
              onClick={() =>
                props.history.push(`/inventory/items/edit/${itemDetails?.id}`)
              }
            >
              <IonIcon icon={pencil} />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonImg
          src={itemDetails?.image}
          style={{ width: "70%", margin: "auto" }}
        />
        <div style={{ textAlign: "justify", padding: "1rem" }}>
          <IonText>
            <strong>Name:</strong> {itemDetails?.name}
          </IonText>
          <br />
          <IonText>
            <strong>Description:</strong> {itemDetails?.description}
          </IonText>
          <br />
          <IonText>
            <strong>Qty:</strong> {itemDetails?.quantity}
          </IonText>
        </div>
      </IonContent>
    </IonPage>
  );
};
