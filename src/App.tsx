import React from 'react';
import { Gamepad2, Users, Trophy, Clock } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-8 px-4 md:py-12">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Monster Survivors</h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-6">
            Survive endless waves of monsters in this thrilling action-packed adventure game
          </p>
        </div>
      </header>

      {/* Game Container */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        <div className="aspect-[16/9] w-full bg-black rounded-lg overflow-hidden shadow-xl mb-12">
          <iframe
            src="https://cloud.onlinegames.io/games/2025/unity/monster-survivors/index-og.html"
            className="w-full h-full border-0"
            title="Monster Survivors Game"
            allow="fullscreen"
          />
        </div>

        {/* Game Features */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">Game Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard
              icon={<Gamepad2 className="w-8 h-8" />}
              title="Intuitive Controls"
              description="Easy to learn, challenging to master gameplay mechanics"
            />
            <FeatureCard
              icon={<Users className="w-8 h-8" />}
              title="Multiple Characters"
              description="Choose from various unique characters with special abilities"
            />
            <FeatureCard
              icon={<Trophy className="w-8 h-8" />}
              title="Achievement System"
              description="Unlock achievements and compete for high scores"
            />
            <FeatureCard
              icon={<Clock className="w-8 h-8" />}
              title="Endless Mode"
              description="Test your survival skills in endless wave mode"
            />
          </div>
        </section>

        {/* Game Description */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">About the Game</h2>
          <div className="prose max-w-none text-gray-600">
            <p className="mb-4">
              Monster Survivors is an action-packed survival game where players must navigate
              through waves of increasingly challenging monsters. With each survival milestone,
              players unlock new abilities and power-ups, making every run unique and exciting.
            </p>
            <p className="mb-4">
              The game features a dynamic difficulty system that adapts to your playstyle,
              ensuring a challenging experience for both newcomers and veteran players alike.
              Collect experience orbs, level up your character, and choose from a variety of
              powerful upgrades to create your own survival strategy.
            </p>
          </div>
        </section>

        {/* How to Play */}
        <section>
          <h2 className="text-3xl font-bold mb-6 text-gray-800">How to Play</h2>
          <div className="bg-white rounded-lg p-6 shadow-md">
            <ul className="list-disc list-inside space-y-3 text-gray-600">
              <li>Use WASD or arrow keys to move your character</li>
              <li>Automatically attack nearby enemies</li>
              <li>Collect experience orbs to level up</li>
              <li>Choose upgrades wisely to enhance your survival chances</li>
              <li>Survive as long as possible and aim for high scores</li>
            </ul>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8 mt-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p>&copy; 2024 Monster Survivors. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-white rounded-lg p-6 shadow-md">
      <div className="text-blue-600 mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

export default App;