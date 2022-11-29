import './App.css';
const tg = window.Telegram.WepApp;

function App() {
    const onClose = () => {
        tg.close()
    }

    return (
        <div className="App">
          <button>Закрыть</button>
        </div>
    );
}

export default App;
