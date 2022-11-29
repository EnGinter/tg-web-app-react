import './App.css';
const tg = window.Telegram;

function App() {
    const onClose = () => {
        tg.close()
    }

    return (
        <div className="App">
          <button onClick={onClose}>Закрыть</button>
        </div>
    );
}

export default App;
