//import { useState } from "react";
import { useHistory, useParams, Redirect } from "react-router-dom";
//import { LayoutContainer } from "../../components/LayoutContainer/LayoutContainer";
import { UserPage } from "./styles";

const Profile = ({ user }) => {
  const history = useHistory();
  const { id } = useParams();

  return (
    <UserPage>
      <>
        {user !== 0 ? (
          <div>
            <h1>Bem Vindo!</h1>
            <h2>{id}</h2>

            <button onClick={() => history.push("/")}> Back</button>
          </div>
        ) : (
          <Redirect to="/" />
        )}
      </>
    </UserPage>
  );
};

export default Profile;
