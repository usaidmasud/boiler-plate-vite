import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../redux/hooks";

interface AuthRouteProps {
  element: JSX.Element;
}

export default function AuthRoute({ element }: AuthRouteProps) {
  const navigate = useNavigate();
  const { authenticated } = useAppSelector((state) => state.root);

  useEffect(() => {
    if (authenticated === true) {
      navigate("/");
    }
  }, [authenticated, navigate]);

  if (authenticated === false) {
    return element;
  } else {
    return (
      <div
        style={{
          height: "100vh",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img src="/images/loading.svg" alt="loading" height="40" />
      </div>
    );
  }
}
