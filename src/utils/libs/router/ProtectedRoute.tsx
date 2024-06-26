import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../redux/hooks";
interface Props {
  element: JSX.Element;
}

export default function ProtectedRoute({ element }: Props) {
  const navigate = useNavigate();
  const { authenticated } = useAppSelector((state) => state.root);

  useEffect(() => {
    if (sessionStorage.getItem("accessToken") === null) {
      navigate("/auth/login");
    }
  }, [authenticated, navigate]);

  if (sessionStorage.getItem("accessToken") !== null) {
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
