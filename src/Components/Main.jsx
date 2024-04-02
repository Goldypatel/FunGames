import React from 'react';
import git from '../images/github.png';
import linkedin from '../images/linkedin.png';
import mail from '../images/email.png';
import discord from '../images/discord.png';

function Main() {
  return (
    <div className='main'>
    <div className='games'>
        <div className='music'>
            <span>BeatBoxMasters</span>
            <p>"BeatBoxMasters.com is your virtual drumming paradise, where rhythm meets innovation. Experience the thrill of playing a digital drum set right from your browser. Our responsive interface allows you to unleash your creativity, whether you're a seasoned drummer or a first-time player. With a variety of realistic drum sounds and customizable options, BeatBoxMasters.com is the ultimate destination for drum enthusiasts and music lovers alike. Start drumming to your own beat and create music effortlessly with our digital drum set experience!"</p>
            <button><a href='https://goldypatel.github.io/PlayMusic/'>Play</a><a/></button>
            
        </div>

        <div className='simon'>
            <span>SimonChallenge</span>
            <p>"SimonChallenge.com brings the classic Simon game to your fingertips in an engaging online experience. Test your memory and reflexes as you follow the ever-growing pattern of colors and tones. With each successful sequence, the challenge intensifies. Compete against yourself or challenge friends to see who can reach the highest level. Enjoy the nostalgic vibes of this electronic memory game in a convenient online format with SimonChallenge.com!"</p>
            <button><a href='https://goldypatel.github.io/simon-game/'>Play</a><a/></button>
        </div>

        <div className='dice'>
            <span>RollDiceShowdown</span>
            <p>"RollDiceShowdown.com is an interactive and entertaining website that adds a fun twist to decision-making. Upon refreshing the page, two virtual dice are rolled simultaneously, one for Player 1 and the other for Player 2. The outcome is instantly displayed, revealing the winner of the dice showdown. Whether you're making a simple choice or settling a friendly dispute, RollDiceShowdown.com adds an element of chance and excitement to your decision-making process."</p>
            <button><a href='https://goldypatel.github.io/DiceGame/'>Play</a><a/></button>
        </div>
        </div>

        <div className='connect'>
          <a href="https://github.com/Goldypatel"><img src={git} alt='git'/></a>
          <a href='https://www.linkedin.com/in/goldyppatel/'><img src={linkedin} alt='linkedin'/></a>
          <a href='mailto:goldy39.gp@gmail.com'><img src={mail} alt='mail'/></a>
          {/* <a href=''><img src={discord} alt='discord'/></a> */}
        </div>
    </div>
  );
}

export default Main;
