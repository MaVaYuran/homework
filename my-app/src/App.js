import logo from "./logo.svg";
import "./App.css";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				{/* Декларативный: описываем структуру и свойства компонента */}
				<img src={logo} className="App-logo" alt="logo" />
				{/* Декларативный: просто JSX-описание */}
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				{/* Декларативный: ссылка с атрибутами */}
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
				{/* Императивный элемент: явное указание КАК получить год, а не просто ЧТО отобразить.*/}
				<span>{new Date().getFullYear()}</span>
			</header>
		</div>
	);
}

export default App;
