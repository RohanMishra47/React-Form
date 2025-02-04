import { Provider } from "react-redux";
import store from "./redux/store";
import App from "./App";

const Root = () => {
    return (
        <div>
            <Provider store={store}>
                <App/>
            </Provider>
        </div>
    );
};

export default Root;