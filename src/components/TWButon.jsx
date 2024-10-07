import Button from './Button';

function App() {
  return (
    <div className="flex flex-col gap-2">
      <Button>Hello world!</Button>
      <Button backgroundColor="bg-red-500">Hello world!</Button>
      <Button backgroundColor="m-10 bg-red-500">Hello world!</Button>
      <Button backgroundColor="text-red-500 text-blue-500">Blue Color</Button>
      <Button backgroundColor="text-blue-500 text-red-500">
        Still in Blue color
      </Button>
    </div>
  );
}

export default App;
