import { createContext} from "react";
import { Provider } from 'react-redux';

// Import Redux store from the file we created in /utils
import store from './store';

// Create a context for the store
const StoreContext = createContext();

export default function StoreProvider(props) {


  return <Provider store={store} {...props} />;
};

// const useStoreContext = () => {
//   return useContext(StoreContext);
// };



