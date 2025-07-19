import "./App.css";
import { ManualLayout, Sidebar } from "./components";
import ClassSubclass from "./pages/1-Class-Subclass";
import BalanceEnweave from "./pages/2-Balance-Enweave";
import Maneuvers from "./pages/2-Maneuvers";
import Triggers from "./pages/3-Triggers";
import Signatures from "./pages/4-Signatures";
import ThreeHR from "./pages/5-ThreeHR";
import FiveHR from "./pages/6-FiveHR";
import Level2 from "./pages/7-Level2";
import Level3 from "./pages/8-Level3";
import Kits from "./pages/Kits";
import ChangeLog from "./pages/ChangeLog";
import { useIsMobile } from "./hooks/useIsMobile";

function App() {
  const isMobile = useIsMobile();

  return (
    <div className="flex flex-row">
      {!isMobile && <Sidebar />}
      <ManualLayout>
        <ClassSubclass />
        <BalanceEnweave />
        <Maneuvers />
        <Triggers />
        <Signatures />
        <ThreeHR />
        <FiveHR />
        <Level2 />
        <Level3 />
        <Kits />
        <ChangeLog />
      </ManualLayout>
    </div>
  );
}

export default App;
