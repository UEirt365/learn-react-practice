import { Route } from "react-router-dom";

const Welcome = () => {
  return (
    <section>
      <h1>The Welcome page</h1>
      <Route path="/welcome/hello" exact>
        <h1>Hello!!!</h1>
      </Route>
    </section>
  );
};

export default Welcome;
