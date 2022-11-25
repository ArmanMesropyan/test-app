import React from "react";
import './assets/style/index.scss'
import HeaderComponent from "./pages/header";
import ContentComponent from "./pages/content";
import FooterComponent from "./pages/footer";

function App() {
    return (
        <div className="App">
            <HeaderComponent/>
            <ContentComponent/>
            <FooterComponent/>
        </div>
    );
}

export default App;
