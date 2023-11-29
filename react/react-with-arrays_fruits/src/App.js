import Card from "./components/Card";

export default function App() {
  const fruits = [
    { name: "Apple🍎", id: 1, color: "red" },
    { name: "Banana🍌", id: 2, color: "yellow" },
    { name: "Orange🍊", id: 3, color: "orange" },
    { name: "Grapes🍇", id: 4, color: "purple" },
    { name: "Kiwi🥝", id: 5, color: "green" },
  ];

  return (
    <ul>
      {fruits.map(({ id, name, color }) => (
        <Card key={id} name={name} color={color}></Card>
      ))}
    </ul>
  );
}
