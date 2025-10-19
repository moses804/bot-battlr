function BotSpecs({ bot, onEnlist, onBack }) {
  if (!bot) return null;

  return (
    <div className="bot-specs p-6 border rounded-lg shadow-md max-w-md mx-auto">
      <img
        src={bot.avatar_url}
        alt={bot.name}
        className="w-full h-64 object-cover rounded-md mb-4"
      />
      <h2 className="text-2xl font-bold mb-2">{bot.name}</h2>
      <p>Class: {bot.bot_class}</p>
      <p> Health: {bot.health}</p>
      <p> Damage: {bot.damage}</p>
      <p> Armor: {bot.armor}</p>
      <p className="italic mb-4">"{bot.catchphrase}"</p>

      <div className="flex justify-between">
        <button
          className="bg-green-600 text-white px-4 py-2 rounded"
          onClick={() => onEnlist(bot)}
        >
          Enlist Bot
        </button>
        <button
          className="bg-gray-600 text-white px-4 py-2 rounded"
          onClick={onBack}
        >
          Back
        </button>
      </div>
    </div>
  );
}

export default BotSpecs;
