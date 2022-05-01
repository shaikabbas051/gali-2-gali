import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonIcon,
  IonCard,
  IonCardContent,
  IonGrid,
  IonRow,
  IonCol,
  IonText,
  IonButton,
} from "@ionic/react";
import { menuOutline, notificationsOutline } from "ionicons/icons";
import BarChart from "../components/BarChart";
import ExploreContainer from "../components/ExploreContainer";
import Row from "../components/Row";
import "./Tab1.css";

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <IonHeader>
          <IonToolbar
            color="#fff"
            style={{
              padding: 0,
              height: 50,
            }}
          >
            {/* <Row> */}
            <Row spaceBetween>
              <IonButton fill="clear" style={{ height: "auto" }}>
                <IonIcon icon={menuOutline} />
              </IonButton>
              <IonText>G2G</IonText>
              <IonButton fill="clear">
                <IonIcon icon={notificationsOutline} color="#000" />
              </IonButton>
            </Row>
            {/* </Row> */}
          </IonToolbar>
        </IonHeader>
        <div style={{ padding: "20px 10px" }}>
          <IonText>Your Stats</IonText>
          <div style={{ marginTop: 15 }}>
            <div style={{ padding: 10, backgroundColor: "#1b4b58" }}>
              <IonText color="light">April</IonText>
              <br />
              <IonText color="light">59%</IonText>
            </div>
            <div style={{ backgroundColor: "#37606b" }}>
              <Row>
                <div style={{ padding: 10, width: "50%" }}>
                  <IonText color="light">Orders pending</IonText>
                  <br />
                  <IonText color="light">78</IonText>
                </div>
                <div style={{ padding: 10 }}>
                  <IonText color="light">Orders completed</IonText>
                  <br />
                  <IonText color="light">123</IonText>
                </div>
              </Row>
            </div>
          </div>
          <div style={{ height: 30 }} />
          <BarChart />
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
