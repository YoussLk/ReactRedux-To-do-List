
import './App.css';
import AddTask from './component/AddTask';
import ListTask from './component/ListTask';


function App() {
  return (
    <div className="App ">
      <div className="p-6 max-w-xl mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4 flex-col mt-8 ">
        <h1 className='p-4 text-[1.3rem]'>My ToDoApp</h1>
        <AddTask />
        <ListTask />
      </div>
    </div>
  );
}

export default App;
