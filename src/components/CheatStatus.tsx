import { useState, useEffect } from 'react';
import { FiInfo } from 'react-icons/fi';

type Status = 'UPDATED' | 'UPDATING';

interface Game {
  name: string;
  status: Status;
}

export default function CheatStatus() {
  const [games, setGames] = useState<Game[]>([]);
  const isAdmin = localStorage.getItem('adminAuth') === 'true';

  useEffect(() => {
    const savedGames = localStorage.getItem('gameStatuses');
    if (savedGames) {
      setGames(JSON.parse(savedGames));
    } else {
      const defaultGames = [
        { name: 'Fortnite', status: 'UPDATED' },
        { name: 'Valorant', status: 'UPDATING' },
        { name: 'CSGO', status: 'UPDATED' },
        { name: 'Apex Legends', status: 'UPDATING' },
        { name: 'Rust', status: 'UPDATED' },
      ];
      setGames(defaultGames);
      localStorage.setItem('gameStatuses', JSON.stringify(defaultGames));
    }
  }, []);

  const toggleStatus = (gameName: string) => {
    if (!isAdmin) return;
    
    const newGames = games.map(game => {
      if (game.name === gameName) {
        const newStatus: Status = game.status === 'UPDATED' ? 'UPDATING' : 'UPDATED';
        return { ...game, status: newStatus };
      }
      return game;
    });
    setGames(newGames);
    localStorage.setItem('gameStatuses', JSON.stringify(newGames));
  };

  const getStatusColor = (status: Status) => {
    const colors = {
      UPDATED: 'bg-emerald-900 text-emerald-400',
      UPDATING: 'bg-yellow-900/50 text-yellow-400'
    };
    return colors[status];
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-[#0A1018] rounded-lg p-6">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-white">Status</h2>
        </div>

        <div className="space-y-4">
          {games.map((game) => (
            <div
              key={game.name}
              className={`flex items-center justify-between p-4 bg-[#111827] rounded-lg ${
                isAdmin ? 'cursor-pointer hover:bg-[#1F2937]' : ''
              } transition-colors`}
              onClick={() => toggleStatus(game.name)}
            >
              <div className="flex items-center space-x-4">
                <span className="text-white font-medium">{game.name}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className={`px-3 py-1 rounded text-sm ${getStatusColor(game.status)}`}>
                  {game.status.toLowerCase()}
                </span>
                {isAdmin && (
                  <span className="text-xs text-gray-500">(click to toggle)</span>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-2 mt-6 text-gray-400 text-sm">
          <FiInfo className="w-4 h-4" />
          <span>More games coming soon - If you have any game requests, feel free to contact us on Discord</span>
        </div>
      </div>
    </div>
  );
}
