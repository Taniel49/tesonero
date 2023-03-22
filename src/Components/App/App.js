import './App.css';
import Header from "../Header/Header";
import MainFeatures from "../Main/MainFeatures";
import Container from "../Container/Container";

function App() {
    return (
        <div className="page">
            <Header/>
            <MainFeatures/>
            <Container/>
        </div>
    );
}

export default App;
