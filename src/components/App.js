import "../styles/App.scss";
import Editor from "./Editor";
import Header from "./Header";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Editor />
      <Footer />
    </div>
  );
}

export default App;

// TODO: Build a nice landing page
