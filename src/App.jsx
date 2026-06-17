import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import  AuthenticationProvider  from "./context/AuthenticationContext";

const App = () => {
    return <div className='text-2xl'>Hello there:Event
    <SignUpPage/>
    <AuthenticationProvider>
        <LoginPage/>
    </AuthenticationProvider>
    </div>;
};

export default App;
