import { useEffect, useState, useContext } from "react";
import { Context } from "../../context";
import axios from "axios";
import { useRouter } from "next/router";

export default function UserRoute({ children }) {
  //state
  const [ok, setOk] = useState(false);

  //router
  const router = useRouter();

  const { state } = useContext(Context);

  const { user } = state;

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const { data } = await axios.get("api/current-user");
        // console.log(data);

        if (data.ok) {
          setOk(true);
        }
      } catch (err) {
        console.log(err);
        setOk(false);
        router.push("/login");
      }
    };
    fetchUser();
  }, []);

  return <>{!ok ? "" : <>{children}</>}</>;
}
