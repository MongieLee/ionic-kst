import React, { useState, useRef, useEffect } from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import "./Tab3.css";
import QrReader from "react-qr-reader";

const Tab3: React.FC = () => {
  const [result, setResult] = useState();
  const handleScan = (data: any) => {
    if (data) {
      setResult(data);
    }
  };
  const couterRef = useRef<any>();
  const handleError = (err: any) => {
    console.error(err);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 3</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 3</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div>
          <QrReader
            delay={300}
            onError={handleError}
            onScan={handleScan}
            style={{ width: "100%" }}
          />
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
