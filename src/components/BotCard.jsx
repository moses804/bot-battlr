function BotCard({ bot, onClick, onDelete }) {
  return (
    <div
      className="border rounded-lg shadow-md p-4 hover:shadow-lg cursor-pointer relative"
      onClick={onClick}
    >
      <img
        src={bot.avatar_url}
        alt={bot.name}
        className="w-full h-48 object-cover rounded-md mb-2"
      />
      <h3 className="text-lg font-bold">{bot.name}</h3>
      <p>Class: {bot.bot_class}</p>
      <p> Health: {bot.health}</p>
      <p>Damage: {bot.damage}</p>
      <p> Armor: {bot.armor}</p>
      {onDelete && (
        <button
          className="absolute top-2 right-2 bg-red-600 text-white px-2 py-1 rounded"
          onClick={(e) => {
            e.stopPropagation();
            onDelete(bot);
          }}
        >
          x
        </button>
      )}
    </div>
  );
}

export default BotCard;
