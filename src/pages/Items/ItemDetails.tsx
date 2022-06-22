import {
  IonAvatar,
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonImg,
  IonPage,
  IonSlide,
  IonSlides,
  IonText,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import {
  pencil,
  star,
  shareSocialOutline,
  imageOutline,
  personOutline,
} from "ionicons/icons";
import React, { useEffect, useState } from "react";
import Col from "../../components/Col";
import Row from "../../components/Row";
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
        <div style={{ padding: 20 }}>
          <IonSlides
            pager={true}
            options={{
              initialSlide: 1,
              speed: 400,
            }}
          >
            <IonSlide>
              <IonImg
                src={itemDetails?.image}
                style={{ width: "70%", margin: "auto" }}
              />
            </IonSlide>
            <IonSlide>
              <IonImg
                src={
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq2N6cmD87Bxpv8fHbFn_HmwhPfgUOiiq2Rg&usqp=CAU"
                }
                style={{ width: "70%", margin: "auto" }}
              />
            </IonSlide>
            <IonSlide>
              <IonImg
                src={itemDetails?.image}
                style={{ width: "70%", margin: "auto" }}
              />
            </IonSlide>
          </IonSlides>
          {/* <IonImg
            src={itemDetails?.image}
            style={{ width: "70%", margin: "auto" }}
          /> */}
          <Row spaceBetween>
            <Row gap={5}>
              <IonIcon icon={shareSocialOutline} style={{ fontSize: 12 }} />
              <IonText style={{ fontSize: 14 }}>Share</IonText>
            </Row>
            <div
              style={{
                border: "1px solid #ebebeb",
                borderRadius: 4,
                padding: "2px 7px",
                backgroundColor: "#ebebeb",
              }}
            >
              <Row gap={7}>
                <IonIcon icon={imageOutline} style={{ fontSize: 12 }} />
                <IonText style={{ fontSize: 12 }}>1/4</IonText>
              </Row>
            </div>
          </Row>
        </div>
        <Separator />
        <Info itemDetails={itemDetails} />
        <Separator />
        <Details itemDetails={itemDetails} />
        <Separator />
        <SellerInfo />
        <Separator />
        <Reviews itemDetails={itemDetails} />
      </IonContent>
    </IonPage>
  );
};
const Info = (props: any) => {
  return (
    <div
      style={{ padding: 20, display: "flex", gap: 7, flexDirection: "column" }}
    >
      <div>
        <IonText style={{ fontWeight: "bold" }}>
          {props?.itemDetails?.name}
        </IonText>
        <br />
        <IonText style={{ fontSize: 12, opacity: 0.7 }}>
          by Reliance fresh
        </IonText>
      </div>
      <Row gap={5}>
        <IonIcon icon={star} style={{ color: "#edc648" }} />
        <IonIcon icon={star} style={{ color: "#edc648" }} />
        <IonIcon icon={star} style={{ color: "#edc648" }} />
        <IonIcon icon={star} style={{ color: "#edc648" }} />
        <IonIcon icon={star} style={{ color: "#f7e8b8" }} />
        <div>
          <IonText style={{ fontSize: 12 }}>4.5</IonText>{" "}
          <IonText style={{ fontSize: 12 }}>(8 reviews)</IonText>
        </div>
      </Row>
      <div>
        <IonText style={{ fontWeight: "bold", opacity: 0.7, marginRight: 15 }}>
          ₹ 400
        </IonText>
        <IonText
          style={{
            fontWeight: "bold",
            fontSize: 14,
            opacity: 0.4,
            textDecoration: "line-through",
          }}
        >
          {" "}
          ₹ 500{" "}
        </IonText>
      </div>
      <div
        style={{
          position: "absolute",
          height: 30,
          width: 30,
          backgroundColor: "#d33334",
          borderRadius: "50%",
          right: 20,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <IonText style={{ fontSize: 10, color: "white" }}>%20</IonText>
      </div>
    </div>
  );
};

const Details = (props: any) => {
  function renderLabel(title: string) {
    return <IonText style={{ opacity: 0.7 }}>{title}:</IonText>;
  }
  function renderValue(title: string) {
    return <IonText style={{ opacity: 0.7 }}>{title}</IonText>;
  }
  return (
    <div
      style={{ padding: 20, display: "flex", gap: 7, flexDirection: "column" }}
    >
      <IonText style={{ fontWeight: "bold" }}>Product Details</IonText>
      <div>
        {renderLabel("Name")}{" "}
        {renderValue(props?.itemDetails?.description || "")}
      </div>
      <div style={{ display: "flex", gap: 7, flexDirection: "column" }}>
        <Row gap={5}>
          {renderLabel("Brand")}
          {renderValue("Borboun")}
        </Row>
        <Row gap={5}>
          {renderLabel("Item Weight")}
          {renderValue("400 grams")}
        </Row>
        <Row gap={5}>
          {renderLabel("Size")}
          {renderValue("14.1 Ounce (Pack of 1)")}
        </Row>
      </div>
    </div>
  );
};
const Separator = () => {
  return (
    <div style={{ height: 10, flex: 1, backgroundColor: "#f3f3f3" }}></div>
  );
};

const Reviews = (props: any) => {
  return (
    <div
      style={{ padding: 20, display: "flex", gap: 7, flexDirection: "column" }}
    >
      <IonText style={{ fontWeight: "bold" }}>Top Reviews</IonText>
      {[1, 2].map((item, idx) => (
        <div
          key={idx}
          style={{
            marginTop: 20,
            gap: 10,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Row gap={15}>
            <IonAvatar
              style={{
                width: 40,
                height: 40,
              }}
            >
              <img
                src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y"
                alt="profile"
              />
            </IonAvatar>
            <IonText style={{ fontSize: 18, fontWeight: "bold" }}>
              G2G Customer
            </IonText>
          </Row>
          <Row gap={5}>
            <IonIcon icon={star} style={{ color: "#edc648" }} />
            <IonIcon icon={star} style={{ color: "#edc648" }} />
            <IonIcon icon={star} style={{ color: "#edc648" }} />
            <IonIcon icon={star} style={{ color: "#edc648" }} />
            <IonIcon icon={star} style={{ color: "#f7e8b8" }} />
            <div>
              <IonText style={{ fontSize: 14 }}>
                Too expensive for quantity
              </IonText>{" "}
            </div>
          </Row>
          <IonText style={{ fontSize: 14 }}>
            Wish I had read the other reviews that warned about this. I have no
            idea how this product has a 4 star review with the false
            advertising. I wish Amazon would get better about catching stuff
            like this.
          </IonText>
        </div>
      ))}
    </div>
  );
};

const SellerInfo = () => {
  function renderLabel(title: string) {
    return (
      <div style={{ paddingBottom: 3 }}>
        <IonText style={{ fontWeight: "bold" }}>{title}</IonText>
      </div>
    );
  }
  function renderValue(title: string) {
    return <IonText style={{ opacity: 0.7 }}>{title}</IonText>;
  }
  return (
    <div style={{ padding: 20 }}>
      <IonText style={{ fontWeight: "bold" }}>Sold By</IonText>
      <Row spaceBetween>
        <Row gap={15}>
          <IonAvatar
            style={{
              width: 40,
              height: 40,
            }}
          >
            <img
              src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y"
              alt="profile"
            />
          </IonAvatar>
          <IonText style={{ fontSize: 18, fontWeight: "bold" }}>
            Mohan kirana store
          </IonText>
        </Row>
        <IonButton fill="outline">View Shop</IonButton>
      </Row>
      <div style={{ paddingLeft: 50, paddingTop: 20 }}>
        <Row gap={15}>
          <div>
            {renderLabel("4.1")}
            {renderValue("509 ratings")}
          </div>
          <div>
            {renderLabel("30")}
            {renderValue("Followers")}
          </div>
          <div>
            {renderLabel("25")}
            {renderValue("Products")}
          </div>
        </Row>
      </div>
    </div>
  );
};
