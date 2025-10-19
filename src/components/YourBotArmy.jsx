import BotCard from "./BotCard";

function YourBotArmy({ army, onRelease, onDelete }) {
  return (
    <div className="your-bot-army mb-6">
      <h2 className="text-xl font-semibold mb-3">Your Bot Army</h2>
      {army.length === 0 ? (
        <p className="text-gray-500">No bots enlisted yet!</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {army.map((bot) => (
            <BotCard
              key={bot.id}
              bot={bot}
              onClick={() => onRelease(bot)}
              onDelete={onDelete}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default YourBotArmy;
