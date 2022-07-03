import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonFab,
  IonHeader,
  IonImg,
  IonInput,
  IonItem,
  IonLabel,
  IonPage,
  IonTextarea,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React, { useEffect, useState } from "react";
import { ISampleData, sampleData } from "../Inventory/InventoryList";
import "./itemdetails.scss";

export const AddItem = (props: any) => {
  const itemId = props?.match?.params?.id;
  const [formData, setFormData] = useState<Partial<ISampleData>>();

  const handleChange = (name: string, value: string) => {
    setFormData({ ...formData, [name]: value });
  };

  const fetchItemData = () => {
    setFormData(sampleData.find((item) => item.id === itemId));
  };
  useEffect(() => {
    itemId && fetchItemData();
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/inventory" />
          </IonButtons>
          <IonTitle>{props.editMode ? "Edit Item" : "Add a new Item"}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="add-item-content">
        <div>
          <br />
          <div className="image-wrapper">
            {formData?.image ? (
              <IonImg src={formData?.image} />
            ) : (
              <IonItem>
                <input type="file" />
              </IonItem>
            )}
          </div>
          <br />
          <IonItem>
            <IonLabel position="fixed">Name</IonLabel>
            <IonInput
              type="text"
              placeholder="Name of your product"
              value={formData?.name}
              onIonChange={(event) =>
                handleChange("name", event.detail.value || "")
              }
            />
          </IonItem>
          <IonItem>
            <IonLabel position="fixed">Description</IonLabel>
            <IonTextarea
              rows={4}
              placeholder="Any details of the product"
              value={formData?.description}
              onIonChange={(event) =>
                handleChange("description", event.detail.value || "")
              }
            />
          </IonItem>
          <IonItem>
            <IonLabel position="fixed">Quantity</IonLabel>
            <IonInput
              type="number"
              placeholder="10"
              value={formData?.quantity}
              onIonChange={(event) =>
                handleChange("quantity", event.detail.value || "")
              }
            />
          </IonItem>
        </div>
        <IonFab className="add-item-fab">
          <IonButton expand="block" color="primary">
            Add
          </IonButton>
          <br />
          <IonButton
            expand="block"
            color="secondary"
            onClick={() => props.history.goBack()}
          >
            Cancel
          </IonButton>
        </IonFab>
      </IonContent>
    </IonPage>
  );
};
