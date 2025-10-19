import React from "react";
import BotCard from "./BotCard";

function BotCollection({ bots, enlistBot, selectBot }) {
  return (
    <div className="bot-collection">
      {bots.map((bot) => (
        <BotCard
          key={bot.id}
          bot={bot}
          enlistBot={enlistBot}
          selectBot={selectBot}
        />
      ))}
    </div>
  );
}

export default BotCollection;
