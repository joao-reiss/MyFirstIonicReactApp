import { IonButton, IonCol, IonContent, IonPage, IonRow } from "@ionic/react";
import './Register.css';

const Register: React.FC = () => {
    return (
    <IonPage>
      <IonContent class="content">
        <IonRow>
            <IonCol size="12">
              <IonButton routerLink="/home"> Voltar </IonButton>
            </IonCol>
        </IonRow>
      </IonContent>
    </IonPage>
    );
  };

  export default Register;