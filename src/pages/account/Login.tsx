import React, { useEffect, useState } from "react";
import {
  IonBackButton,
  IonButtons,
  IonHeader,
  IonPage,
  IonToolbar,
  IonTitle,
  IonContent,
  IonItemDivider,
  IonItem,
  IonInput,
  IonLabel,
  IonButton,
} from "@ionic/react";
import "./login.scss";
const Details: React.FC = () => {
  const [account, setAccount] = useState<string>("");
  useEffect(() => {}, []);
  return (
    <IonPage>
      <IonContent>
        <div className="login-container">
          <p className="title">欢迎登录考信通</p>
          <form>
            <IonItem>
              <IonLabel>账号:</IonLabel>
              <IonInput required={true}></IonInput>
            </IonItem>
            <IonItem>
              <IonLabel>密码:</IonLabel>
              <IonInput type="password" required={true}></IonInput>
            </IonItem>
            <IonButton
              style={{ marginTop: 20 }}
              color="primary"
              size="large"
              expand="block"
            >
              登录
            </IonButton>
          </form>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Details;
