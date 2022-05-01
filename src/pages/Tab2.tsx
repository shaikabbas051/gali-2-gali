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
  IonImg,
  IonSearchbar,
} from "@ionic/react";
import {
  menuOutline,
  notificationsOutline,
  addCircleOutline,
} from "ionicons/icons";
import BarChart from "../components/BarChart";
import Card from "../components/Card";
import ExploreContainer from "../components/ExploreContainer";
import FlatList from "../components/FlatList";
import Row from "../components/Row";
import "./Tab1.css";

const sampleData: {
  image: string;
  name: string;
  description: string;
  quantity: number;
}[] = [
  {
    image:
      "https://www.bigbasket.com/media/uploads/p/l/30008604_2-sunfeast-dark-fantasy-bourbon-chocolate-cream-biscuits.jpg",
    name: "Bourbon",
    description:
      "Sunfeast Bourbon Bliss 60 Gm Online at the Best Price Now available at Rs 10.",
    quantity: 5,
  },
  {
    image:
      "https://www.bigbasket.com/media/uploads/p/l/30008604_2-sunfeast-dark-fantasy-bourbon-chocolate-cream-biscuits.jpg",
    name: "Bourbon",
    description:
      "Sunfeast Bourbon Bliss 60 Gm Online at the Best Price Now available at Rs 10.",
    quantity: 5,
  },
  {
    image:
      "https://www.bigbasket.com/media/uploads/p/l/30008604_2-sunfeast-dark-fantasy-bourbon-chocolate-cream-biscuits.jpg",
    name: "Bourbon",
    description:
      "Sunfeast Bourbon Bliss 60 Gm Online at the Best Price Now available at Rs 10.",
    quantity: 5,
  },
  {
    image:
      "https://www.bigbasket.com/media/uploads/p/l/30008604_2-sunfeast-dark-fantasy-bourbon-chocolate-cream-biscuits.jpg",
    name: "Bourbon",
    description:
      "Sunfeast Bourbon Bliss 60 Gm Online at the Best Price Now available at Rs 10.",
    quantity: 5,
  },
  {
    image:
      "https://www.bigbasket.com/media/uploads/p/l/30008604_2-sunfeast-dark-fantasy-bourbon-chocolate-cream-biscuits.jpg",
    name: "Bourbon",
    description:
      "Sunfeast Bourbon Bliss 60 Gm Online at the Best Price Now available at Rs 10.",
    quantity: 5,
  },
  {
    image:
      "https://www.bigbasket.com/media/uploads/p/l/30008604_2-sunfeast-dark-fantasy-bourbon-chocolate-cream-biscuits.jpg",
    name: "Bourbon",
    description:
      "Sunfeast Bourbon Bliss 60 Gm Online at the Best Price Now available at Rs 10.",
    quantity: 5,
  },
];
const Tab2: React.FC = () => {
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
          <Row gap={10}>
            <IonSearchbar
              placeholder="Enter something...."
              mode="ios"
              searchIcon="searchIcon"
            />

            <IonIcon icon={addCircleOutline} size={"large"} color="grey" />
          </Row>
          <FlatList
            list={sampleData}
            renderItem={(item, idx) => {
              return (
                <Card>
                  <Row gap={20}>
                    <div>
                      <IonImg
                        src={item.image}
                        style={{ width: 50, height: 50 }}
                      />
                    </div>
                    <div>
                      <IonText>{item.name}</IonText>
                      <IonText>{item.description}</IonText>
                    </div>
                    <div>
                      <IonText>{item.quantity}</IonText>
                    </div>
                  </Row>
                </Card>
              );
            }}
          />
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
