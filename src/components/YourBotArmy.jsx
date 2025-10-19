import React from "react";

function YourBotArmy({ army, releaseBot, dischargeBot }) {
  return (
    <div>
      <h2>Your Bot Army</h2>
      <div className="your-bot-army">
        {army.map((bot) => (
          <div key={bot.id} className="bot-card">
            <img src={bot.avatar_url} alt={bot.name} />
            <h3>{bot.name}</h3>
            <button className="release-btn" onClick={() => releaseBot(bot)}>
              Release
            </button>
            <button className="discharge-btn" onClick={() => dischargeBot(bot)}>
              x
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default YourBotArmy;
