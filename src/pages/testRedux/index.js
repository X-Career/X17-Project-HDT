import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../../../redux/slices/Test.js";
import { useEffect, useState } from "react";
import { handleCallApi, handleCallApiLogin } from "../../../axios/apiUtils.js";
function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const [data, setData] = useState({});
  const loginDatatest = {
    identifier: "Sieubuong@gmail.com",
    password: "Huybeo123",
  };
  useEffect(() => {
    handleCallApi(true)
      .then((response) => {
        console.log("Kết quả từ server:", response);
        setData(response.data);
      })
      .catch((error) => {
        console.error("Lỗi:", error);
      });
  }, []);
  const handleLogin = () => {
    handleCallApiLogin(loginDatatest, false)
      .then((response) => {
        console.log("Kết quả đăng nhập:", response);
      })
      .catch((error) => {
        console.error("Lỗi đăng nhập:", error);
      });
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <p>{data.firstName}</p>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Counter;
