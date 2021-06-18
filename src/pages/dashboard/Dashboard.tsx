import { IonButton, IonCol, IonContent, IonLabel, IonPage, IonRow } from "@ionic/react";
import './Dashboard.css';

const Dashboard: React.FC = () => {
    return (
    <IonPage>
      <IonContent class="content">
        <IonRow>
            <IonCol size="12">
              <IonButton routerLink="/home"> Voltar </IonButton>
            </IonCol>
        </IonRow>

        <IonRow>
            <IonCol size="12">
                <IonLabel>Area de Usuário</IonLabel>
            </IonCol>
        </IonRow>

      </IonContent>
    </IonPage>
    );
  };

  export default Dashboard;