import React from "react";

function BotCard({ bot, enlistBot, selectBot }) {
  return (
    <div className="bot-card" onClick={() => selectBot(bot)}>
      <img src={bot.avatar_url} alt={bot.name} />
      <h3>{bot.name}</h3>
      <p>Class: {bot.bot_class}</p>
      <p>Health: {bot.health}</p>
      <p>Damage: {bot.damage}</p>
      <p>Armor: {bot.armor}</p>
      <p>"{bot.catchphrase}"</p>
      <button
        className="enlist-btn"
        onClick={(e) => {
          e.stopPropagation();
          enlistBot(bot);
        }}
      >
        Enlist
      </button>
    </div>
  );
}

export default BotCard;
