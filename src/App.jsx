import React, { useState } from 'react'
import './App.css'

const App = () => {

  const [money, setMoney] = useState(100)
  const [team, setTeam] = useState([])
  const [teamStrength, setTeamStrength] = useState(0)
  const [teamAgility, setTeamAgility] = useState(0)
  const [zombieFighters, setZombieFighters] = useState([
    {
      id: 1,
      name: 'Survivor',
      price: 12,
      strength: 6,
      agility: 4,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/0c2d6b.png',
    },
    {
      id: 2,
      name: 'Scavenger',
      price: 10,
      strength: 5,
      agility: 5,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/033a16.png',
    },
    {
      id: 3,
      name: 'Shadow',
      price: 18,
      strength: 7,
      agility: 8,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/262c36.png',
    },
    {
      id: 4,
      name: 'Tracker',
      price: 14,
      strength: 7,
      agility: 6,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/3c1e70.png',
    },
    {
      id: 5,
      name: 'Sharpshooter',
      price: 20,
      strength: 6,
      agility: 8,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/4b2900.png',
    },
    {
      id: 6,
      name: 'Medic',
      price: 15,
      strength: 5,
      agility: 7,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5a1e02.png',
    },
    {
      id: 7,
      name: 'Engineer',
      price: 16,
      strength: 6,
      agility: 5,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5e103e.png',
    },
    {
      id: 8,
      name: 'Brawler',
      price: 11,
      strength: 8,
      agility: 3,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/67060c.png',
    },
    {
      id: 9,
      name: 'Infiltrator',
      price: 17,
      strength: 5,
      agility: 9,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/ac3220.png',
    },
    {
      id: 10,
      name: 'Leader',
      price: 22,
      strength: 7,
      agility: 6,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/e41f26.png',
    },
  ])
  
  const addToTeam = (fighter) => {
    if (money - fighter.price >= 0) {
      const newMoney = money - fighter.price
      const newTeam = [...team, fighter]
      const newZombieFighters = zombieFighters.filter((zombieFighter) => zombieFighter.id !== fighter.id)
      const newStrength = teamStrength + fighter.strength
      const newAgility = teamAgility + fighter.agility
      setMoney(newMoney)
      setTeam(newTeam)
      setTeamStrength(newStrength)
      setTeamAgility(newAgility)
      setZombieFighters(newZombieFighters)
    } else {
      alert('Not enough money!')
    }
  }

  const removeFromTeam = (fighter) => {
    const newMoney = money + fighter.price
    const newTeam = team.filter((teamFighter) => teamFighter.id !== fighter.id)
    const newZombieFighters = [...zombieFighters, fighter]
    const newStrength = teamStrength - fighter.strength
    const newAgility = teamAgility - fighter.agility
    setMoney(newMoney)
    setTeam(newTeam)
    setTeamStrength(newStrength)
    setTeamAgility(newAgility)
    setZombieFighters(newZombieFighters)
  }

  return (
    <>  
    <h1>Fighters</h1>
    <ul>
      {zombieFighters.map((fighter) => (
        <li key={fighter.id}>
          <img src={fighter.img} alt={fighter.name} />
          <h2>{fighter.name}</h2>
          <p>Strength: {fighter.strength}</p>
          <p>Agility: {fighter.agility}</p>
          <button onClick={() => addToTeam(fighter)}>Add to Team</button>
          <p>Cost: ${fighter.price}</p>
        </li>
      ))}
    </ul>
    <h1>Team</h1>
    <p>Money: ${money}</p>
    <p>Team Strength: {teamStrength}</p>
    <p>Team Agility: {teamAgility}</p>
    
    <ul>
      {team.length === 0 ? <p>No fighters in team</p> : null}

      {team.map((fighter) => (
        <li key={fighter.id}>
          <img src={fighter.img} alt={fighter.name} />
          <h2>{fighter.name}</h2>
          <p>Strength: {fighter.strength}</p>
          <p>Agility: {fighter.agility}</p>
          <button onClick={() => removeFromTeam(fighter)}>Remove from Team</button>
        </li>
      ))}
    </ul>
    </>
  );
}

export default App

