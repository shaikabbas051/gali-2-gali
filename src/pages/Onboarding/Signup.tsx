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
  useIonViewWillEnter,
} from "@ionic/react";
import { arrowBack } from "ionicons/icons";
import { useEffect, useState } from "react";
import { getfromLocalDb, setToLocalDb } from "../../data/storage";

interface IFormData {
  phoneNumber: string;
  email: string;
}

const initialForm: IFormData = {
  phoneNumber: "",
  email: "",
};
const SignUp = () => {
  const SIGNUP_KEY = "signup";
  const [formData, setFormData] = useState<IFormData>(initialForm);
  //keeping non persistent/sensitive data outside of formData
  const [passwords, setPasswords] = useState({
    password: "",
    confirmPassword: "",
  });
  const [phoneOtp, setPhoneOtp] = useState<number>();
  const [emailOtp, setEmailOtp] = useState<number>();

  useIonViewWillEnter(async () => {
    const response = await getfromLocalDb(SIGNUP_KEY);
    if (response) setFormData(response);
  }, []);

  const handleInput = (name: string, value: string) => {
    setFormData((prevFormData) => {
      return { ...prevFormData, [name]: value };
    });
  };

  //keeping a separate method for passwords to later encrypt them
  const handlePasswords = (name: string, value: string) => {
    setPasswords((prevpass) => {
      return { ...prevpass, [name]: value };
    });
  };
  useEffect(() => {
    setToLocalDb(SIGNUP_KEY, formData);
  }, [formData]);

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
                <IonInput
                  inputMode="tel"
                  maxlength={10}
                  onIonChange={(event) =>
                    handleInput("phoneNumber", event.detail?.value || "")
                  }
                  value={formData.phoneNumber}
                />
              </IonItem>
            </IonCol>
            <IonCol size="8">
              <IonItem>
                <IonLabel position="floating">Enter OTP</IonLabel>
                <IonInput
                  inputMode="numeric"
                  maxlength={4}
                  onIonChange={(e) =>
                    setPhoneOtp(parseInt(e.detail.value!, 10))
                  }
                  value={phoneOtp}
                />
              </IonItem>
            </IonCol>
            <IonCol size="4">
              <IonButton>Send OTP</IonButton>
            </IonCol>
            <IonCol size="12">
              <IonItem>
                <IonLabel position="floating">Email ID</IonLabel>
                <IonInput
                  inputMode="email"
                  onIonChange={(event) =>
                    handleInput("email", event.detail?.value || "")
                  }
                  value={formData.email}
                />
              </IonItem>
            </IonCol>
            <IonCol size="8">
              <IonItem>
                <IonLabel position="floating">Enter OTP</IonLabel>
                <IonInput
                  inputMode="numeric"
                  maxlength={4}
                  onIonChange={(e) =>
                    setEmailOtp(parseInt(e.detail.value!, 10))
                  }
                  value={emailOtp}
                />
              </IonItem>
            </IonCol>
            <IonCol size="4">
              <IonButton>Send OTP</IonButton>
            </IonCol>
            <IonCol size="12">
              <IonItem>
                <IonLabel position="floating">Set Password</IonLabel>
                <IonInput
                  type="password"
                  onIonChange={(event) =>
                    handlePasswords("password", event.detail.value || "")
                  }
                  value={passwords.password}
                />
              </IonItem>
            </IonCol>
            <IonCol size="12">
              <IonItem>
                <IonLabel position="floating">Confirm Password</IonLabel>
                <IonInput
                  type="password"
                  onIonChange={(event) =>
                    handlePasswords(
                      "confirm-password",
                      event.detail?.value || ""
                    )
                  }
                  value={passwords.confirmPassword}
                />
              </IonItem>
            </IonCol>
          </IonRow>
        </IonGrid>
        <IonFab
          vertical="bottom"
          horizontal="start"
          slot="fixed"
          className="full-width"
        >
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
