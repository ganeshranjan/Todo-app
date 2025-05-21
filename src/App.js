import './App.css';
import TodoList from './components/TodoList/todoList';
import { Provider }from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
       <TodoList />
      </div>
    </Provider>
  );
}

export default App;
