import React from 'react'
import { Helmet } from 'react-helmet'

import Container from '../components/ui/Container'

export default () => (
  <Container>
    <Helmet>
      <link rel='canonical' href='https://nashcash.casino/games' />
    </Helmet>
    <div className='measure center mt5'>
      <h1 className='f1 f-subheadline-ns'>Games</h1>
    </div>
    <ul className='list pl0 mt0 measure center'>
      <li className='pb3'>
        <details>
          <summary className='f3 outline-0 pointer'>Two Thirds of Average</summary>
          <p className='lh-copy'><label className='b'>Number of Players:</label> Unlimited.</p>
          <p className='lh-copy'><label className='b'>Equipment:</label> Scraps of paper & pencils, equal in number to the number of players.</p>
          <p className='lh-copy'>How rational are you? How rational should you be if winning requires accounting for the irrationality of others?</p>
          <p className='lh-copy'>This game requires an examination of those two questions each time it is played.</p>
          <p className='lh-copy'>Players will each get a scrap of paper and a pencil. They are then instructed to write down a number between 0 and 100 that they believe will be 2/3 of the average of all the guesses – including their own guess – combined. The scraps are collected and the guesses are added together. That sum is divided by the number of players, and then multiplied by 0.6666666666667. Whichever player’s initial guess is closest to the result without going over wins!</p>
          <p className='lh-copy'>
            For example, if five people were playing, and four guessed, “80”, and one player guessed, “49”, the scoring would look like this:
            <br />
            <pre>
              80+80+80+80+49 = 369<br />
              369/5 Players = 73.8 (the average of the guesses)<br />
              73.8*0.666667 = 49.2 (2/3 of the average of the guesses)
            </pre>
          </p>
          <p className='lh-copy'>The player who guessed “49” would win… and would probably get a lot of pats on the back from the other players for being so astonishingly close!</p>
          <p className='lh-copy'>So what <em>is</em> the best answer? Like many things in life, it depends on who you’re playing with.</p>
        </details>
      </li>
      <li className='pb3'>
        <details>
          <summary className='f3 outline-0 pointer'>Minority Wins</summary>
          <p className='lh-copy'><label className='b'>Number of Players:</label> Any number, as long as it’s odd. Five is best.</p>
          <p className='lh-copy'><label className='b'>Equipment:</label> One dice per player.</p>
          <p className='lh-copy'>Which behavior rewards us most… deceitfulness or truthfulness? Some might argue that it depends on how long you’re required to play! This game is built for that group of agnostic strategists… the virtuous and the vicious might find they’re falling behind the longer the game goes on.</p>
          <p className='lh-copy'>An odd numbered group of players will each receive one dice. They will then be instructed to decide amongst themselves who will choose an even numbered side on their dice, and who will choose an odd numbered side on their dice, but to keep in mind that whoever ends up in the minority group will win. Players then have time to strategize (i.e. engage in deceitfulness and truthfulness with each other). Players will then be instructed to make their final decision by selecting an even or odd side, placing the dice down on the table without showing anyone else, and covering it up with their hands. On the count of 3, all players will reveal their selections. After counting up the number of odd selections and the number of even selections, the player or players in the smaller group win(s)!</p>
          <p className='lh-copy'>This is a game that punishes virtue and vice the longer you play it, so experiment with requiring players to play only one round vs. requiring players to play ten rounds.</p>
        </details>
      </li>
      <li className='pb3'>
        <details>
          <summary className='f3 outline-0 pointer'>Prisoner's Dice</summary>
          <p className='lh-copy'><label className='b'>Number of Players:</label> Two (plus a prison guard to keep score).</p>
          <p className='lh-copy'><label className='b'>Equipment:</label> Two dice.</p>
          <p className='lh-copy'>Grab an accomplice and see if you can maximize your rewards! Be careful though, your accomplice will be trying to maximize their rewards as well… do you two know each other very well? Past behavior may or may not be a good indicator of future behavior...</p>
          <p className='lh-copy'>Each player will get one dice. There are two chips (or points) available each round, and there three possible outcomes: one player will get both chips, both players will each get 1 chip, or both players will get 0 chips. Players are not allowed to talk to each other. They both participated in a hypothetical crime, and they’re now prisoners being held in different cells, guarded by the score keeper. </p>
          <p className='lh-copy'>Players can choose to keep their mouths shut by selecting an even number, or they can choose to rat out the other player by choosing an odd number. If both players choose an even number (do not “rat each other out”), they both have a good outcome and receive one chip. If one of the players decides to defect and pick an odd number, and the other player still picks an even number, the player who picked the odd number wins <em>both</em> chips. If however, both players select an odd number, they both implicate each other and both receive zero chips. Without talking to each other or even <em>looking</em> at each other, players will put one side of their dice face up on the table while covering it with their hands. On the prison guard’s count of three, they will reveal their selections and learn their fate!</p>
          <p className='lh-copy'>If you keep playing - round after round - you’ll learn the best way the play... but it will always depend on the character of your accomplice.</p>
        </details>
      </li>
    </ul>
  </Container>
)
