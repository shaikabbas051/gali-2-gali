import {
  IonContent,
  IonHeader,
  IonPage,
  IonToolbar,
  IonIcon,
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
import Card from "../../components/Card";
import FlatList from "../../components/FlatList";
import Row from "../../components/Row";

export interface ISampleData {
  id: string;
  image: string;
  name: string;
  description: string;
  quantity: number;
}
export const sampleData: ISampleData[] = [
  {
    id: "1",
    image:
      "https://www.bigbasket.com/media/uploads/p/l/30008604_2-sunfeast-dark-fantasy-bourbon-chocolate-cream-biscuits.jpg",
    name: "Bourbon",
    description:
      "Sunfeast Bourbon Bliss 60 Gm Online at the Best Price Now available at Rs 10.",
    quantity: 5,
  },
  {
    id: "2",
    image:
      "https://www.bigbasket.com/media/uploads/p/l/30008604_2-sunfeast-dark-fantasy-bourbon-chocolate-cream-biscuits.jpg",
    name: "Bourbon",
    description:
      "Sunfeast Bourbon Bliss 60 Gm Online at the Best Price Now available at Rs 10.",
    quantity: 5,
  },
  {
    id: "3",
    image:
      "https://www.bigbasket.com/media/uploads/p/l/30008604_2-sunfeast-dark-fantasy-bourbon-chocolate-cream-biscuits.jpg",
    name: "Bourbon",
    description:
      "Sunfeast Bourbon Bliss 60 Gm Online at the Best Price Now available at Rs 10.",
    quantity: 5,
  },
  {
    id: "4",
    image:
      "https://www.bigbasket.com/media/uploads/p/l/30008604_2-sunfeast-dark-fantasy-bourbon-chocolate-cream-biscuits.jpg",
    name: "Bourbon",
    description:
      "Sunfeast Bourbon Bliss 60 Gm Online at the Best Price Now available at Rs 10.",
    quantity: 5,
  },
  {
    id: "5",
    image:
      "https://www.bigbasket.com/media/uploads/p/l/30008604_2-sunfeast-dark-fantasy-bourbon-chocolate-cream-biscuits.jpg",
    name: "Bourbon",
    description:
      "Sunfeast Bourbon Bliss 60 Gm Online at the Best Price Now available at Rs 10.",
    quantity: 5,
  },
  {
    id: "6",
    image:
      "https://www.bigbasket.com/media/uploads/p/l/30008604_2-sunfeast-dark-fantasy-bourbon-chocolate-cream-biscuits.jpg",
    name: "Bourbon",
    description:
      "Sunfeast Bourbon Bliss 60 Gm Online at the Best Price Now available at Rs 10.",
    quantity: 5,
  },
];
const InventoryList: React.FC = (props: any) => {
  const handleClick = (itemId: string) => {
    props.history.push(`/inventory/items/${itemId}`);
  };

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

            <IonIcon
              onClick={() => props.history.push("/inventory/items/add")}
              icon={addCircleOutline}
              size={"large"}
              color="grey"
            />
          </Row>
          <FlatList
            list={sampleData}
            renderItem={(item, idx) => {
              return (
                <Card deepProps={{ onClick: () => handleClick(item.id) }}>
                  <Row gap={20}>
                    <div>
                      <IonImg
                        src={item.image}
                        style={{ width: 50, height: 50 }}
                      />
                    </div>
                    <div>
                      <IonText style={{ fontWeight: "bold" }}>
                        {item.name}
                      </IonText>
                      <br />
                      <IonText style={{ fontSize: 12, opacity: 0.8 }}>
                        {item.description}
                      </IonText>
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

export default InventoryList;
