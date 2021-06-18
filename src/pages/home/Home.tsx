import { IonButton, IonCol, IonContent, IonInput, IonItem, IonLabel, IonPage, IonRow} from '@ionic/react';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonContent class="content">
      <IonRow>
            <IonCol size="12">
              <IonLabel>
                <div id="alHome">
                  <p id="BemVindo">Bem Vindo!</p>
                  <p id="sLogin">Faça seu Login</p>
                </div>
              </IonLabel>
            </IonCol>
      </IonRow>

       <IonRow>
         
           <section className="formInputs">
           <IonCol size="12">
             <div id="inputAli">
               <IonItem lines="none" class="item">
                 <IonLabel color="primary"><p className="label">Email:</p></IonLabel>
                 <IonInput class="input" type="email"></IonInput>
               </IonItem>
             </div>
           </IonCol>

           <IonCol size="12">
             <div id="inputAli">
               <IonItem lines="none" class="item">
                 <IonLabel color="primary"><p className="label">Senha:</p></IonLabel>
                 <IonInput class="input" type="password"></IonInput>
               </IonItem>
             </div>
           </IonCol>

           <IonCol size="12">
             <div className="btnAli">
               <IonButton class="btnLogin" routerLink="./dashboard">LOGIN</IonButton>
            
             </div>
           </IonCol>

           </section>
        
       </IonRow>

       <IonRow>
         <IonCol size="12">
         <div className="btnAli2">
               <IonButton class="btnLogin" routerLink="./register">CADASTRE-SE</IonButton>
          </div>
         </IonCol>
       </IonRow>

      </IonContent>
    </IonPage>
  );
};

export default Home;
