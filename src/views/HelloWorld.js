import Button from "@material-ui/core/Button";
import { useNavigate } from "react-router-dom";

const HelloWorld = () => {
    const navigate = useNavigate();
  return (
    <div>
              <h1>HelloWorld</h1>
      <Button onClick={() => {navigate('/about')}}>Next page</Button>

    </div>
  );
};

export default HelloWorld;