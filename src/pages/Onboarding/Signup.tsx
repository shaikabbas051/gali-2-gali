import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonCardTitle,
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
  IonToolbar,
} from "@ionic/react";
import { arrowBack } from "ionicons/icons";

const SignUp = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton icon={arrowBack} />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonGrid>
          <IonRow>
            <IonCol size="12">
              <IonCardTitle>
                {" "}
                Welcome to <strong>G2G</strong>
              </IonCardTitle>
              <h5>Create account and start selling</h5>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="12">
              <IonItem>
                <IonLabel position="floating">Mobile Number</IonLabel>
                <IonInput inputMode="tel" maxlength={10} />
              </IonItem>
            </IonCol>
            <IonCol size="8">
              <IonItem>
                <IonLabel position="floating">Enter OTP</IonLabel>
                <IonInput inputMode="numeric" maxlength={4} />
              </IonItem>
            </IonCol>
            <IonCol size="4">
              <IonButton>Send OTP</IonButton>
            </IonCol>
            <IonCol size="12">
              <IonItem>
                <IonLabel position="floating">Email ID</IonLabel>
                <IonInput inputMode="email" />
              </IonItem>
            </IonCol>
            <IonCol size="8">
              <IonItem>
                <IonLabel position="floating">Enter OTP</IonLabel>
                <IonInput inputMode="numeric" maxlength={4} />
              </IonItem>
            </IonCol>
            <IonCol size="4">
              <IonButton>Send OTP</IonButton>
            </IonCol>
            <IonCol size="12">
              <IonItem>
                <IonLabel position="floating">Set Password</IonLabel>
                <IonInput type="password" />
              </IonItem>
            </IonCol>
            <IonCol size="12">
              <IonItem>
                <IonLabel position="floating">Confirm Password</IonLabel>
                <IonInput type="password" />
              </IonItem>
            </IonCol>
          </IonRow>
        </IonGrid>
        <IonFab vertical="bottom" horizontal="start" slot="fixed" className="full-width">
          <h5>
            <IonItem>
              <IonCheckbox slot="start" />
              <span style={{ fontSize: "0.8rem" }}>
                {" "}
                Receive important updates on Whatsapp
              </span>
            </IonItem>
          </h5>
          <IonButton className="full-width">Create Account</IonButton>
        </IonFab>
      </IonContent>
      Hello
    </IonPage>
  );
};

export default SignUp;
