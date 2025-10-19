import React from "react";

function BotSpecs({ bot, enlistBot, goBack }) {
  return (
    <div className="bot-specs">
      <img src={bot.avatar_url} alt={bot.name} />
      <h2>{bot.name}</h2>
      <p>Class: {bot.bot_class}</p>
      <p>Health: {bot.health}</p>
      <p>Damage: {bot.damage}</p>
      <p>Armor: {bot.armor}</p>
      <p>"{bot.catchphrase}"</p>
      <button className="enlist-btn" onClick={() => enlistBot(bot)}>
        Enlist Bot
      </button>
      <button className="release-btn" onClick={goBack}>
        Back to Collection
      </button>
    </div>
  );
}

export default BotSpecs;
