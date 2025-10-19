import BotCard from "./BotCard";

function BotCollection({ bots, onAddBot }) {
  return (
    <div className="bot-collection mb-6">
      <h2 className="text-xl font-semibold mb-3">Available Bots</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {bots.map((bot) => (
          <BotCard key={bot.id} bot={bot} onClick={() => onAddBot(bot)} />
        ))}
      </div>
    </div>
  );
}

export default BotCollection;
