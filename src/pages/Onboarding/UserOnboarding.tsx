import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonCheckbox,
  IonCol,
  IonContent,
  IonFab,
  IonGrid,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonPage,
  IonRow,
  IonSegment,
  IonSegmentButton,
  IonText,
  IonToolbar,
  SegmentChangeEventDetail,
} from "@ionic/react";
import React, { useState } from "react";

const CommonFab = () => {
  return (
    <IonFab vertical="bottom" horizontal="start" className="full-width">
      <IonButton className="full-width">Next</IonButton>
    </IonFab>
  );
};

const GstSection = (
  <IonGrid>
    <IonRow>
      <IonCol size="12">
        <IonItem>
          <IonLabel position="floating">GST Number</IonLabel>
          <IonInput inputMode="text" />
        </IonItem>
      </IonCol>
      <IonCol size="12">
        <IonButton className="full-width">Verify</IonButton>
      </IonCol>
      <IonCol size="12">
        <div
          style={{
            height: "15rem",
            border: "solid 2px #666",
            margin: "2rem 2rem 2rem 1rem",
          }}
        >
          <IonGrid>
            <IonRow>
              <IonCol size="12">
                <IonLabel>GSTIN</IonLabel>
              </IonCol>
              <IonCol size="12">
                <IonLabel>Business Name</IonLabel>
              </IonCol>
              <IonCol size="12">
                <IonLabel>PAN Number</IonLabel>
              </IonCol>
              <IonCol size="12">
                <IonLabel>Business Type</IonLabel>
              </IonCol>
              <IonCol size="12">
                <IonLabel>Registered Address</IonLabel>
              </IonCol>
            </IonRow>
            <br />
            <br />
            <IonText>(Captured from GST Portal)</IonText>
          </IonGrid>
        </div>
      </IonCol>
      <CommonFab />
    </IonRow>
  </IonGrid>
);

const storeStructure: IStructure = {
  addr1: {
    display: "Address Line 1",
    type: "text",
    span: "12",
  },
  addr2: {
    display: "Address Line 2",
    type: "text",
    span: "12",
  },
  landmark: {
    display: "Landmark",
    type: "text",
    span: "!2",
  },
  pincode: {
    display: "Pincode",
    type: "text",
    span: "6",
  },
  city: {
    display: "City",
    type: "text",
    span: "6",
  },
  state: {
    display: "State",
    type: "text",
    span: "12",
  },
};
const storeSection = (
  <IonGrid>
    <IonRow>
      <IonCol size="12">
        <IonLabel>
          <IonItem>
            Use address registered on GST? <IonCheckbox slot="end" />
          </IonItem>
        </IonLabel>
      </IonCol>
      {Object.keys(storeStructure).map((item) => (
        <IonCol size={storeStructure[item].span as string}>
          <IonItem>
            <IonLabel position="floating">
              {storeStructure[item].display}
            </IonLabel>
            <IonInput type={storeStructure[item].type}></IonInput>
          </IonItem>
        </IonCol>
      ))}
      <IonCol size="8">
        <div
          style={{
            height: "7rem",
            border: "solid 2px #666",
            margin: "2rem 2rem 2rem 1rem",
            padding: "3rem",
          }}
        >
          Dropped Pin
        </div>
      </IonCol>
      <IonCol size="4">
        <div
          style={{
            height: "5rem",
            borderRadius: "50%",
            border: "solid 2px #666",
            margin: "2rem 1rem",
          }}
        ></div>
      </IonCol>
    </IonRow>
    <CommonFab />
  </IonGrid>
);

interface IStructureValue {
  display: string;
  type: any;
  span: string;
}
interface IStructure {
  [value: string]: IStructureValue;
}
const bankStructure: IStructure = {
  accNo: {
    display: "Account Number",
    type: "text",
    span: "12",
  },
  ReAccNo: {
    display: "Re Enter Account Number",
    type: "text",
    span: "12",
  },
  ifsc: {
    display: "IFSC Code",
    type: "text",
    span: "12",
  },
};
const BankSection = (
  <IonGrid>
    <IonRow>
      {Object.keys(bankStructure).map((item) => (
        <IonCol size={bankStructure[item].span as string}>
          <IonItem>
            <IonLabel position="floating">
              {bankStructure[item].display}
            </IonLabel>
            <IonInput type={bankStructure[item].type}></IonInput>
          </IonItem>
        </IonCol>
      ))}
      <div
        style={{ height: "10rem", border: "solid 2px #666", margin: "2rem" }}
      >
        <IonGrid>
          <IonRow>
            <IonCol size="12">
              <IonLabel>Name</IonLabel>
            </IonCol>
            <IonCol size="12">
              <IonLabel>Acc. No</IonLabel>
            </IonCol>
            <IonCol size="12">
              <IonLabel>IFSC Code</IonLabel>
            </IonCol>
            <IonCol size="12">
              <IonLabel>Branch, City</IonLabel>
            </IonCol>
          </IonRow>
          <br />
          <IonText>(fetched bank details)</IonText>
        </IonGrid>
      </div>
    </IonRow>
    <CommonFab />
  </IonGrid>
);

const getSectionBySelection = (type: string) => {
  switch (type) {
    case "gstin":
      return GstSection;
    case "store":
      return storeSection;
    case "bank-details":
      return BankSection;
    default:
      return <></>;
  }
};
const UserOnboarding = () => {
  const [selectedSegment, setSelectedSegment] = useState<string>("gstin");

  const handleSegmentChange = (
    event: CustomEvent<SegmentChangeEventDetail>
  ) => {
    setSelectedSegment(event?.detail?.value || "gstin");
  };
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons>
            <IonBackButton />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonSegment onIonChange={handleSegmentChange} value={selectedSegment}>
          <IonSegmentButton value="gstin">
            <IonLabel>GSTIN</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="store">
            <IonLabel>Store Details</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="bank-details">
            <IonLabel>Bank Details</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="additional-details">
            <IonLabel>Additional Details</IonLabel>
          </IonSegmentButton>
        </IonSegment>
        {getSectionBySelection(selectedSegment)}
      </IonContent>
    </IonPage>
  );
};

export default UserOnboarding;
