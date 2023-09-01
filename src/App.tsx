import './App.css';
import {Slogan} from "layout/sections/contactMe/Slogan";
import {Header} from "layout/header/Header";
import {Main} from "layout/sections/main/Main";
import {Skills} from "layout/sections/skills/Skills";
import {Works} from "layout/sections/works/Works";
import {Footer} from "layout/footer/Footer";

function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <Works/>
            <Slogan/>
            <Footer/>
        </div>
    );
}

export default App;