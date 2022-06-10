import { Nav } from "./Nav";

const AuthHeader = ({ isLoggedIn }) => {
    if (isLoggedIn) {
      return (<Nav />);
    }
    return (<div></div>);
  }
  
  export default AuthHeader;