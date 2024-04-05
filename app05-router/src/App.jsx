import {Header} from "./components/Header";
import {AllRoutes} from "./routes/AllRoutes";

export default function App() {
  return (
    <div>
      <Header/>
      <div className="text-center mt-4">
        <AllRoutes/>
      </div>
    </div>
  );
}
