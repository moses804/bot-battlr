import { useEffect, useState } from "react";
import BotCollection from "./components/BotCollection";
import YourBotArmy from "./components/YourBotArmy";
import BotSpecs from "./components/BotSpecs";
import SortBar from "./components/SortBar";

const BOT_CLASSES = [
  "Support",
  "Medic",
  "Assault",
  "Defender",
  "Captain",
  "Witch",
];

function App() {
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);
  const [selectedBot, setSelectedBot] = useState(null);
  const [filterClass, setFilterClass] = useState("");
  const [sortBy, setSortBy] = useState("");

  useEffect(() => {
    fetch("http://localhost:8001/bots")
      .then((r) => r.json())
      .then((data) => setBots(data))
      .catch((err) => console.error(err));
  }, []);

  function handleAddBot(bot) {
    if (!army.find((b) => b.id === bot.id)) {
      setArmy([...army, bot]);
    }
  }

  function handleReleaseBot(bot) {
    setArmy(army.filter((b) => b.id !== bot.id));
  }

  function handleDeleteBot(bot) {
    fetch(`http://localhost:8001/bots/${bot.id}`, { method: "DELETE" })
      .then(() => {
        setArmy(army.filter((b) => b.id !== bot.id));
        setBots(bots.filter((b) => b.id !== bot.id));
      })
      .catch((err) => console.error(err));
  }

  // Filter & sort
  const displayedBots = bots
    .filter((b) => (filterClass ? b.bot_class === filterClass : true))
    .sort((a, b) => (sortBy ? b[sortBy] - a[sortBy] : 0));

  return (
    <div className="App p-6">
      <h1 className="text-3xl font-bold text-center mb-6">🤖 Bot Battlr 🤖</h1>

      <YourBotArmy
        army={army}
        onRelease={handleReleaseBot}
        onDelete={handleDeleteBot}
      />

      {selectedBot ? (
        <BotSpecs
          bot={selectedBot}
          onEnlist={(bot) => {
            handleAddBot(bot);
            setSelectedBot(null);
          }}
          onBack={() => setSelectedBot(null)}
        />
      ) : (
        <>
          <SortBar
            onSort={setSortBy}
            onFilter={setFilterClass}
            classes={BOT_CLASSES}
          />
          <BotCollection
            bots={displayedBots}
            onAddBot={(bot) => setSelectedBot(bot)}
          />
        </>
      )}
    </div>
  );
}

export default App;
