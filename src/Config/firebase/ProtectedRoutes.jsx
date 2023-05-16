import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { checkAuth } from "./firebasemethod";
import { Vortex } from "react-loader-spinner";


const ProtectedRoute = ({ Component, type }) => {
  const [laoder, setLoader] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setLoader(true);
    checkAuth()
      .then(() => {
        setLoader(true);
        console.log("User Logged In");
        if (type == "admin") {
          navigate("/transporter");
        } else {
          navigate("/user");
        }
      })
      .catch((err) => {
        setLoader(false);
        console.log(err);
        navigate("/signup");
      });
  }, []);
  return (
    <>
      <div> {laoder ? (
        <Component />
      ) : (
        <Vortex
          visible={true}
          height="80"
          width="80"
          sx={{ mt: 3, mb: 2 }}
          ariaLabel="vortex-loading"
          wrapperStyle={{}}
          wrapperClass="vortex-wrapper"
          colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
        />
      )} </div>
    </>
  );
};

export default ProtectedRoute;
