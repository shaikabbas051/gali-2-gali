import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import {
  businessOutline,
  homeOutline,
  personOutline,
  cashOutline,
} from "ionicons/icons";
import Home from "./pages/Home/Home";
import InventoryList from "./pages/Inventory/InventoryList";
import Tab3 from "./pages/Tab3";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import { ItemDetails } from "./pages/Items/ItemDetails";
import { AddItem } from "./pages/Items/AddItem";
import SignUp from "./pages/Onboarding/Signup";
import UserOnboarding from "./pages/Onboarding/UserOnboarding";
import "./app.scss";
import { useEffect } from "react";
import { createLocalDb } from "./data/storage";
setupIonicReact();

const App: React.FC = () => {
  //initialising the store on app load
  useEffect(() => {
    const setupStore = async () => {
      await createLocalDb("g2gDB");
    };
    setupStore();
  }, []);

  return (
    <IonApp>
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet>
            <Route exact path="/home">
              <Home />
            </Route>
            <Route exact path="/inventory" component={InventoryList} />
            <Route exact path="/inventory/items/:id" component={ItemDetails} />
            <Route exact path="/inventory/items/add" component={AddItem} />
            <Route exact path="/inventory/items/edit/:id" component={AddItem} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/onboarding" component={UserOnboarding} />
            <Route path="/sales">
              <Tab3 />
            </Route>
            <Route path="/account">
              <Tab3 />
            </Route>
            <Route exact path="/">
              <Redirect to="/home" />
            </Route>
          </IonRouterOutlet>
          <IonTabBar slot="bottom" color="#fff">
            <IonTabButton tab="tab1" href="/home">
              <IonIcon icon={homeOutline} size={"small"} />
              <IonLabel>Home</IonLabel>
            </IonTabButton>
            <IonTabButton tab="tab2" href="/inventory">
              <IonIcon icon={businessOutline} size={"small"} />
              <IonLabel>Inventory</IonLabel>
            </IonTabButton>
            <IonTabButton tab="tab3" href="/sales">
              <IonIcon icon={cashOutline} size={"small"} />
              <IonLabel>Sales</IonLabel>
            </IonTabButton>
            <IonTabButton tab="tab4" href="/account">
              <IonIcon icon={personOutline} size={"small"} />
              <IonLabel>Account</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
    </IonApp>
  );
};
export default App;
