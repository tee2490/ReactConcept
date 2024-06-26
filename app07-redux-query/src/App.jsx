import { DestinationIndex, RandomDestination } from "./components";
import { Header } from "./layout/Header";

export default function App() {
  return (
    <div className="m-2">
      <Header />
      <DestinationIndex/>
      <RandomDestination/>
    </div>
  );
}
