import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { DocumentTypeList } from "./documentType/DocumentTypeList";
import { DocumentTypeCreate } from "./documentType/DocumentTypeCreate";
import { DocumentTypeEdit } from "./documentType/DocumentTypeEdit";
import { DocumentTypeShow } from "./documentType/DocumentTypeShow";
import { ProcessingResultList } from "./processingResult/ProcessingResultList";
import { ProcessingResultCreate } from "./processingResult/ProcessingResultCreate";
import { ProcessingResultEdit } from "./processingResult/ProcessingResultEdit";
import { ProcessingResultShow } from "./processingResult/ProcessingResultShow";
import { DocumentList } from "./document/DocumentList";
import { DocumentCreate } from "./document/DocumentCreate";
import { DocumentEdit } from "./document/DocumentEdit";
import { DocumentShow } from "./document/DocumentShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"document-reader"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="DocumentType"
          list={DocumentTypeList}
          edit={DocumentTypeEdit}
          create={DocumentTypeCreate}
          show={DocumentTypeShow}
        />
        <Resource
          name="ProcessingResult"
          list={ProcessingResultList}
          edit={ProcessingResultEdit}
          create={ProcessingResultCreate}
          show={ProcessingResultShow}
        />
        <Resource
          name="Document"
          list={DocumentList}
          edit={DocumentEdit}
          create={DocumentCreate}
          show={DocumentShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
