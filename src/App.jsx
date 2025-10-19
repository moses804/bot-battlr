import React, { useState, useEffect } from "react";
import BotCollection from "./components/BotCollection";
import YourBotArmy from "./components/YourBotArmy";
import BotSpecs from "./components/BotSpecs";
import SortBar from "./components/SortBar";
import "./index.css";

function App() {
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);
  const [selectedBot, setSelectedBot] = useState(null);
  const [sortType, setSortType] = useState("");

  useEffect(() => {
    fetch("http://localhost:8001/bots")
      .then((r) => r.json())
      .then((data) => setBots(data));
  }, []);

  // Enlist bot
  const enlistBot = (bot) => {
    if (!army.find((b) => b.id === bot.id)) {
      setArmy([...army, bot]);
    }
  };

  // Release bot
  const releaseBot = (bot) => {
    setArmy(army.filter((b) => b.id !== bot.id));
  };

  // Discharge bot
  const dischargeBot = (bot) => {
    fetch(`http://localhost:8001/bots/${bot.id}`, { method: "DELETE" }).then(
      () => {
        setBots(bots.filter((b) => b.id !== bot.id));
        setArmy(army.filter((b) => b.id !== bot.id));
      }
    );
  };

  // Sort bots
  const sortedBots = [...bots].sort((a, b) => {
    if (sortType === "health") return b.health - a.health;
    if (sortType === "damage") return b.damage - a.damage;
    if (sortType === "armor") return b.armor - a.armor;
    return 0;
  });

  return (
    <div className="App">
      <h1>Bot Battlr</h1>
      <YourBotArmy
        army={army}
        releaseBot={releaseBot}
        dischargeBot={dischargeBot}
      />
      <SortBar setSortType={setSortType} />
      {selectedBot ? (
        <BotSpecs
          bot={selectedBot}
          enlistBot={enlistBot}
          goBack={() => setSelectedBot(null)}
        />
      ) : (
        <BotCollection
          bots={sortedBots}
          enlistBot={enlistBot}
          selectBot={setSelectedBot}
        />
      )}
    </div>
  );
}

export default App;
