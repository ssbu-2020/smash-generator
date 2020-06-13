import React, { useState } from 'react';

import * as images from '../../assets/images';
import CharacterCard from '../../components/CharacterCard/CharacterCard';

const characters = [
  { id: 0, name: 'Mario', image: images.Mario },
  { id: 1, name: 'Donkey Kong', image: images.DonkeyKong },
  { id: 2, name: 'Link', image: images.Link },
  { id: 3, name: 'Samus', image: images.Samus },
  { id: 4, name: 'Dark Samus', image: images.DarkSamus },
  { id: 5, name: 'Yoshi', image: images.Yoshi },
  { id: 6, name: 'Kirby', image: images.Kirby },
  { id: 7, name: 'Fox', image: images.Fox },
  { id: 8, name: 'Pikachu', image: images.Pikachu },
  { id: 9, name: 'Luigi', image: images.Luigi },
  { id: 10, name: 'Ness', image: images.Ness },
  { id: 11, name: 'Captain Falcon', image: images.CaptainFlacon },
  { id: 12, name: 'Jigglypuff', image: images.Jigglypuff },
  { id: 13, name: 'Peach', image: images.Peach },
  { id: 14, name: 'Daisy', image: images.Daisy },
  { id: 15, name: 'Bowser', image: images.Bowser },
  { id: 16, name: 'Ice Climbers', image: images.IceClimbers },
  { id: 17, name: 'Sheik', image: images.Sheik },
  { id: 18, name: 'Zelda', image: images.Zelda },
  { id: 19, name: 'Dr. Mario', image: images.DrMario },
  { id: 20, name: 'Pichu', image: images.Pichu },
  { id: 21, name: 'Falco', image: images.Falco },
  { id: 22, name: 'Marth', image: images.Marth },
  { id: 23, name: 'Lucina', image: images.Lucina },
  { id: 24, name: 'Young Link', image: images.YoungLink },
  { id: 25, name: 'Ganondorf', image: images.Ganondorf },
  { id: 26, name: 'Mewtwo', image: images.Mewtwo },
  { id: 27, name: 'Roy', image: images.Roy },
  { id: 28, name: 'Chrom', image: images.Chrom },
  { id: 29, name: 'Mr. Game & Watch', image: images.MrGameAndWatch },
  { id: 30, name: 'Meta Knight', image: images.MetaKnight },
  { id: 31, name: 'Pit', image: images.Pit },
  { id: 32, name: 'Dark Pit', image: images.DarkPit },
  { id: 33, name: 'Zero Suit Samus', image: images.ZeroSuitSamus },
  { id: 34, name: 'Wario', image: images.Wario },
  { id: 35, name: 'Snake', image: images.Snake },
  { id: 36, name: 'Ike', image: images.Ike },
  { id: 37, name: 'Pokémon Trainer', image: images.PokemonTrainer },
  { id: 38, name: 'Diddy Kong', image: images.DiddyKong },
  { id: 39, name: 'Lucas', image: images.Lucas },
  { id: 40, name: 'Sonic', image: images.Sonic },
  { id: 41, name: 'King Dedede', image: images.KingDedede },
  { id: 42, name: 'Olimar', image: images.Olimar },
  { id: 43, name: 'Lucario', image: images.Lucario },
  { id: 44, name: 'R.O.B.', image: images.Rob },
  { id: 45, name: 'Toon Link', image: images.ToonLink },
  { id: 46, name: 'Wolf', image: images.Wolf },
  { id: 47, name: 'Villager', image: images.Villager },
  { id: 48, name: 'Mega Man', image: images.MegaMan },
  { id: 49, name: 'Wii Fit Trainer', image: images.WiiFitTrainer },
  { id: 50, name: 'Rosalina & Luma', image: images.Rosalina },
  { id: 51, name: 'Little Mac', image: images.LittleMac },
  { id: 52, name: 'Greninja', image: images.Greninja },
  { id: 53, name: 'Mii Fighter', image: images.MiiFighter },
  { id: 54, name: 'Mii Gunner', image: images.MiiGunner },
  { id: 55, name: 'Mii Swordfighter', image: images.MiiSwordFighter },
  { id: 56, name: 'Palutena', image: images.Palutena },
  { id: 57, name: 'Pac-Man', image: images.PacMan },
  { id: 58, name: 'Robin', image: images.Robin },
  { id: 59, name: 'Shulk', image: images.Shulk },
  { id: 60, name: 'Bowser Jr.', image: images.BowserJr },
  { id: 61, name: 'Duck Hunt', image: images.DuckHunt },
  { id: 62, name: 'Ryu', image: images.Ryu },
  { id: 63, name: 'Ken', image: images.Ken },
  { id: 64, name: 'Cloud', image: images.Cloud },
  { id: 65, name: 'Corrin', image: images.Corrin },
  { id: 66, name: 'Bayonetta', image: images.Bayonetta },
  { id: 67, name: 'Inkling', image: images.Inkling },
  { id: 68, name: 'Ridley', image: images.Ridley },
  { id: 69, name: 'Simon', image: images.Simon },
  { id: 70, name: 'Richter', image: images.Richter },
  { id: 71, name: 'King K. Rool', image: images.KingKRool },
  { id: 72, name: 'Isabelle', image: images.Isabelle },
  { id: 73, name: 'Incineroar', image: images.Incineroar },
  { id: 74, name: 'Piranha Plant', image: images.PiranhaPlant },
  { id: 75, name: 'Joker', image: images.Joker },
  { id: 76, name: 'Hero', image: images.Hero },
  { id: 77, name: 'Banjo-Kazooie', image: images.BanjoAndKazooie },
  { id: 78, name: 'Terry', image: images.Terry },
  { id: 79, name: 'Byleth', image: images.Byleth },
];

const CharacterGenerator = () => {
  const [count, setCount] = useState(characters.length + 1);
  const [character, setCharacter] = useState({});
  const [characterList, setCharacterList] = useState(characters);

  const handleCharacterGenerator = () => {
    if (count !== 0) {
      const character = characterList[Math.floor(Math.random() * characterList.length)];
      setCharacter({ id: character.id, name: character.name, image: character.image });
      setCharacterList(characterList.filter((value) => value.name !== character.name));
      setCount(characterList.length - 1);
    } else {
      setCharacterList(characters);
      setCount(characters.length + 1);
    }
  };

  return (
    <div>
      {count >= characterList.length && (
        <CharacterCard character={character} onClick={handleCharacterGenerator} count={count} />
      )}
    </div>
  );
};

export default CharacterGenerator;
