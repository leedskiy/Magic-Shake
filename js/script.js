const elem = document.documentElement;
const blink = document.querySelector('.blink');
const playersWeaponText = document.querySelector('.block1__text');
// const playersWeaponTitleContent = playersWeaponTitle.innerHTML;
const playersSquare = document.querySelectorAll('.players-weapon__square');
const playersSquareImg = document.querySelectorAll('.players-square__img');
const playersSquareLine = document.querySelectorAll('.players-square__line');
const playersSquareName = document.querySelectorAll('.player-square__name');
const wizardsSquare = document.querySelector('.wizards-weapon__esquare');
const wizardsSquareImg = document.querySelector('.wizards-square__img');
const wizardsSquareLine = document.querySelector('.wizards-square__line');
const wizardsSquareName = document.querySelector('.wizards-square__name');
const playersHPImgs = document.querySelectorAll('.players-hp__img');
const wizardsHPImgs = document.querySelectorAll('.wizards-hp__img');
const comments = document.querySelectorAll('.comments__text');


let rounds = 0;
let victories = 0;
let defeats = 0;
let winner;
let loser;
let value;
let randomWeaponValue = 0;

function randomWeapon() {
   value = Math.floor(Math.random() * 3) + 1;

   if (value === 1) {
      randomWeaponValue = 'stick';
   }

   else if (value === 2) {
      randomWeaponValue = 'ring';
   }

   else if (value === 3) {
      randomWeaponValue = 'medallion';
   }
}

function wizardChoose() {
   randomWeapon();

   if (randomWeaponValue === 'stick') {
      wizardsSquareImg.innerHTML = '<img src="img/img11.svg" alt="Stick">';
      wizardsSquareName.innerHTML = 'stick';
      return 'stick';
   }

   else if (randomWeaponValue === 'ring') {
      wizardsSquareImg.innerHTML = '<img src="img/img12.svg" alt="Ring">';
      wizardsSquareName.innerHTML = 'ring';
      return 'ring';
   }

   else if (randomWeaponValue === 'medallion') {
      wizardsSquareImg.innerHTML = '<img src="img/img13.svg" alt="Medallion">';
      wizardsSquareName.innerHTML = 'medallion';
      return 'medallion';
   }
}

function countRounds(winner) {
   ++rounds;

   if (winner === 'you') {
      ++victories;
   }

   else if (winner === 'Wizard') {
      ++defeats;
   }
}

function changeHPImgPlayer() {
   if (defeats === 5) {
      playersHPImgs.forEach((HPImg) => {
         HPImg.style.cssText = `
            display: none;
         `;
      })

      wizardsHPImgs.forEach((HPImg) => {
         if (HPImg.innerHTML === `<img src="img/img222.svg" alt="Wizard's HP">`) {
            HPImg.style.cssText = `
               display: none;
            `;
         }
      })

      playersHPImgs[playersHPImgs.length - defeats].innerHTML = `<img src="img/img223.svg" alt="Your HP">`;
      playersHPImgs[playersHPImgs.length - defeats].style.cssText = `
         display: block;
      `;
   }

   else {
      playersHPImgs[playersHPImgs.length - defeats].innerHTML = `<img src="img/img222.svg" alt="Your HP">`;

      setTimeout(function () {
         playersHPImgs[playersHPImgs.length - defeats].style.cssText = `
            position: relative;  
            left: 1px;
         `;
      }, 100);

      setTimeout(function () {
         playersHPImgs[playersHPImgs.length - defeats].style.cssText = `
            position: relative;
            right: 1px;
         `;
      }, 200);

      setTimeout(function () {
         playersHPImgs[playersHPImgs.length - defeats].style.cssText = `
            position: relative;
            left: 0;
         `;
      }, 300);

      setTimeout(function () {
         playersHPImgs[playersHPImgs.length - defeats].style.cssText = `
            display: none;
         `;
      }, 400);
   }
}

function changeHPImgWizard() {
   if (victories === 5) {
      wizardsHPImgs.forEach((HPImg) => {
         HPImg.style.cssText = `
            display: none;
         `;
      })

      playersHPImgs.forEach((HPImg) => {
         if (HPImg.innerHTML === `<img src="img/img222.svg" alt="Your HP">`) {
            HPImg.style.cssText = `
               display: none;
            `;
         }
      })

      wizardsHPImgs[wizardsHPImgs.length - victories].innerHTML = `<img src="img/img223.svg" alt="Wizard's HP">`;
      wizardsHPImgs[wizardsHPImgs.length - victories].style.cssText = `
         display: block;
      `;
   }

   else {
      wizardsHPImgs[wizardsHPImgs.length - victories].innerHTML = `<img src="img/img222.svg" alt="Wizard's HP">`;

      setTimeout(function () {
         wizardsHPImgs[wizardsHPImgs.length - victories].style.cssText = `
            position: relative;  
            left: 1px;
         `;
      }, 100);

      setTimeout(function () {
         wizardsHPImgs[wizardsHPImgs.length - victories].style.cssText = `
            position: relative;
            right: 1px;
         `;
      }, 200);

      setTimeout(function () {
         wizardsHPImgs[wizardsHPImgs.length - victories].style.cssText = `
            position: relative;
            left: 0;
         `;
      }, 300);

      setTimeout(function () {
         wizardsHPImgs[wizardsHPImgs.length - victories].style.cssText = `
            display: none;
         `;
      }, 400);
   }
}

function makeBlinkRed() {
   blink.classList.add('blink-loss');

   setTimeout(function () {
      blink.classList.remove('blink-loss');
   }, 150);
}

function makeBlinkGreen() {
   blink.classList.add('blink-win');

   setTimeout(function () {
      blink.classList.remove('blink-win');
   }, 150);
}

function makeBlinkBlack() {
   blink.classList.add('blink-draw');

   setTimeout(function () {
      blink.classList.remove('blink-draw');
   }, 150);
}

function playRound(playersSelection, wizardsSelection) {
   if (playersSelection === wizardsSelection) {
      loser = undefined;
      winner = undefined;
      countRounds(winner);
      makeBlinkBlack();
      return 'Draw!';
   }

   else if (playersSelection === 'stick' && wizardsSelection === 'medallion' ||
      playersSelection === 'ring' && wizardsSelection === 'stick' ||
      playersSelection === 'medallion' && wizardsSelection === 'ring') {
      loser = 'you';
      winner = 'Wizard';

      countRounds(winner);
      changeHPImgPlayer();
      makeBlinkRed();

      return 'You lost!';
   }

   else {
      loser = 'Wizard';
      winner = 'you';

      countRounds(winner);
      changeHPImgWizard();
      makeBlinkGreen();

      return 'You won!';
   }
}

function reset() {
   playersSquare.forEach((plSquare) => {
      if (plSquare.classList.contains('players-weapon__square-draw')) {
         plSquare.classList.remove('players-weapon__square-draw');
      }
      else if (plSquare.classList.contains('players-weapon__square-win')) {
         plSquare.classList.remove('players-weapon__square-win');
      }
      else if (plSquare.classList.contains('players-weapon__square-loss')) {
         plSquare.classList.remove('players-weapon__square-loss');
      }
   })

   playersSquareImg.forEach((plImg) => {
      if (plImg.classList.contains('players-square__img-active')) {
         plImg.classList.remove('players-square__img-active');
      }
   })

   playersSquareLine.forEach((plLine) => {
      if (plLine.classList.contains('players-square__line-draw')) {
         plLine.classList.remove('players-square__line-draw');
      }
      else if (plLine.classList.contains('players-square__line-win')) {
         plLine.classList.remove('players-square__line-win');
      }
      else if (plLine.classList.contains('players-square__line-loss')) {
         plLine.classList.remove('players-square__line-loss');
      }
   })

   playersSquareName.forEach((plName) => {
      if (plName.classList.contains('players-square__name-draw')) {
         plName.classList.remove('players-square__name-draw');
      }
      else if (plName.classList.contains('players-square__name-win')) {
         plName.classList.remove('players-square__name-win');
      }
      else if (plName.classList.contains('players-square__name-loss')) {
         plName.classList.remove('players-square__name-loss');
      }
   })

   if (wizardsSquare.classList.contains('wizards-weapon__esquare-win')) {
      wizardsSquare.classList.remove('wizards-weapon__esquare-win');
   }
   else if (wizardsSquare.classList.contains('wizards-weapon__esquare-loss')) {
      wizardsSquare.classList.remove('wizards-weapon__esquare-loss');
   }

   if (wizardsSquareLine.classList.contains('wizards-square__line-win')) {
      wizardsSquareLine.classList.remove('wizards-square__line-win');
   }
   else if (wizardsSquareLine.classList.contains('wizards-square__line-loss')) {
      wizardsSquareLine.classList.remove('wizards-square__line-loss');
   }

   if (wizardsSquareName.classList.contains('wizards-square__name-win')) {
      wizardsSquareName.classList.remove('wizards-square__name-win');
   }
   else if (wizardsSquareName.classList.contains('wizards-square__name-loss')) {
      wizardsSquareName.classList.remove('wizards-square__name-loss');
   }
}

function changeBlock1Text(result) {
   if (result === 'Draw!') {
      playersWeaponText.innerHTML = `<div class="block1__result1 title">Draw in round 
                                     ${rounds}!</div><div class="blcok1__title title">
                                     <span class="block1__result2">Draw in round ${rounds}! 
                                     </span>Choose your next weapon</div>`;
   }

   else if (result === 'You won!') {
      playersWeaponText.innerHTML = `<div class="block1__result1 title blcok1__result-win">
                                     You won round ${rounds}!</div><div class="blcok1__title 
                                     title"><span class="block1__result2 blcok1__result-win">
                                     You won round ${rounds}! </span>Choose your next weapon</div>`;
   }

   else if (result === 'You lost!') {
      playersWeaponText.innerHTML = `<div class="block1__result1 title blcok1__result-loss">
                                     You lost round ${rounds}!</div><div class="blcok1__title 
                                     title"><span class="block1__result2 blcok1__result-loss">
                                     You lost round ${rounds}! </span>Choose your next weapon</div>`;
   }
}

function changePlayer(result, playersSelection) {
   if (result === 'Draw!') {
      if (playersSelection === 'stick') {
         playersSquare[0].classList.add('players-weapon__square-draw');
         playersSquareImg[0].classList.add('players-square__img-active');
         playersSquareLine[0].classList.add('players-square__line-draw');
         playersSquareName[0].classList.add('players-square__name-draw');
      }

      else if (playersSelection === 'ring') {
         playersSquare[1].classList.add('players-weapon__square-draw');
         playersSquareImg[1].classList.add('players-square__img-active');
         playersSquareLine[1].classList.add('players-square__line-draw');
         playersSquareName[1].classList.add('players-square__name-draw');
      }

      else if (playersSelection === 'medallion') {
         playersSquare[2].classList.add('players-weapon__square-draw');
         playersSquareImg[2].classList.add('players-square__img-active');
         playersSquareLine[2].classList.add('players-square__line-draw');
         playersSquareName[2].classList.add('players-square__name-draw');
      }
   }

   else if (result === 'You won!') {
      if (playersSelection === 'stick') {
         playersSquare[0].classList.add('players-weapon__square-win');
         playersSquareImg[0].classList.add('players-square__img-active');
         playersSquareLine[0].classList.add('players-square__line-win');
         playersSquareName[0].classList.add('players-square__name-win');
      }

      else if (playersSelection === 'ring') {
         playersSquare[1].classList.add('players-weapon__square-win');
         playersSquareImg[1].classList.add('players-square__img-active');
         playersSquareLine[1].classList.add('players-square__line-win');
         playersSquareName[1].classList.add('players-square__name-win');
      }

      else if (playersSelection === 'medallion') {
         playersSquare[2].classList.add('players-weapon__square-win');
         playersSquareImg[2].classList.add('players-square__img-active');
         playersSquareLine[2].classList.add('players-square__line-win');
         playersSquareName[2].classList.add('players-square__name-win');
      }
   }

   else if (result === 'You lost!') {
      if (playersSelection === 'stick') {
         playersSquare[0].classList.add('players-weapon__square-loss');
         playersSquareImg[0].classList.add('players-square__img-active');
         playersSquareLine[0].classList.add('players-square__line-loss');
         playersSquareName[0].classList.add('players-square__name-loss');
      }

      else if (playersSelection === 'ring') {
         playersSquare[1].classList.add('players-weapon__square-loss');
         playersSquareImg[1].classList.add('players-square__img-active');
         playersSquareLine[1].classList.add('players-square__line-loss');
         playersSquareName[1].classList.add('players-square__name-loss');
      }

      else if (playersSelection === 'medallion') {
         playersSquare[2].classList.add('players-weapon__square-loss');
         playersSquareImg[2].classList.add('players-square__img-active');
         playersSquareLine[2].classList.add('players-square__line-loss');
         playersSquareName[2].classList.add('players-square__name-loss');
      }
   }
}

function changeWizard(result) {
   if (result === 'You won!') {
      wizardsSquare.classList.add('wizards-weapon__esquare-loss');
      wizardsSquareLine.classList.add('wizards-square__line-loss');
      wizardsSquareName.classList.add('wizards-square__name-loss');
   }

   else if (result === 'You lost!') {
      wizardsSquare.classList.add('wizards-weapon__esquare-win');
      wizardsSquareLine.classList.add('wizards-square__line-win');
      wizardsSquareName.classList.add('wizards-square__name-win');
   }
}

function changeComments(result, playersSelection) {
   stickWinsRing = `Pheeeew… *~* Come on guys! Watch out! You can hurt someone, chill! 
                    Hopefully I managed to place a barrier between you and civilians. 
                    Actually, I wasn’t expecting that ${winner} will get ${loser}. 
                    It was kinda hard, you know… Stick hits on a small area and ring 
                    takes a big field. I’m sure that ${loser} had an advantage but… 
                    Well, never mind. May be ${loser} should practice more 
                    with a stick… stick))`;

   ringWinsMedallion = `What??? HOW? How had ${winner} win ${loser}? I thought that 
                        medallion has more power than ring. Hope next time ${loser} will be 
                        more careful! Don’t forget about protection. Even if ${loser} lose, 
                        ${loser} can use medallion’s protection. It’s a unique skill. Try to 
                        use all potential of your weapon and try to remember all spells that 
                        you’ve learned… Watch out! Wizard is attacking! x_x`;

   medallionWinsStick = `I have no words. What has just happened? Does medallion really beat 
                         stick? 0_o It must be other way. I’m sure ${loser} lost because of 
                         lack of skills. Although I think ${winner} really learned a lot to 
                         cast like this… What’s about ${loser}? Do you hear me? You have to 
                         wake up for another round! By the way, this medallion… I’ve seen it 
                         somewhere but I can’t remember…`;

   let value = Math.floor(Math.random() * 7) + 1;

   if (value === 7) {
      comments.forEach((comment) => {
         comment.innerHTML = `Hey! Hey! Shhhhh… Hope Wizard doesn’t hear us… I know it’s not fair 
                              and I mustn’t intervene in your fight but… Next time Wizard will use 
                              ${randomWeaponValue}… You haven’t heard anything. ^_^`
      })
   }

   else {
      if (result === 'Draw!') {
         comments.forEach((comment) => {
            comment.innerHTML = `Well, it’s a draw! Soooo close! #o# Wizard almost hit you! Next time 
                                 you should expect attack from behind. You know, he’s not that easy. 
                                 I’ve calculated that your spells’ level is almost the same so it will 
                                 depend on weapon more. Pick it carefully to get your enemy on 
                                 surprise. I heard from lots of people that ${randomWeapon()} is the 
                                 best choice… `
         })
      }

      else if (result === 'You won!') {
         if (playersSelection === 'stick') {
            comments.forEach((comment) => {
               comment.innerHTML = stickWinsRing;
            })
         }

         else if (playersSelection === 'ring') {
            comments.forEach((comment) => {
               comment.innerHTML = ringWinsMedallion;
            })
         }

         else if (playersSelection === 'medallion') {
            comments.forEach((comment) => {
               comment.innerHTML = medallionWinsStick;
            })
         }
      }

      else if (result === 'You lost!') {
         if (playersSelection === 'stick') {
            comments.forEach((comment) => {
               comment.innerHTML = medallionWinsStick;
            })
         }

         else if (playersSelection === 'ring') {
            comments.forEach((comment) => {
               comment.innerHTML = stickWinsRing;
            })
         }

         else if (playersSelection === 'medallion') {
            comments.forEach((comment) => {
               comment.innerHTML = ringWinsMedallion;
            })
         }
      }
   }
}

function change(result, playersSelection) {
   changeBlock1Text(result);
   changePlayer(result, playersSelection);
   changeWizard(result);
   changeComments(result, playersSelection);
}

function endCssChange() {
   const header = document.querySelector('.header');
   const headerContainer = document.querySelector('.header__container');
   const headerLogo = document.querySelector('.header__logo');
   const headerRight = document.querySelector('.header__right');
   const block1Weapon = document.querySelector('.block1__weapon');
   const block2Container = document.querySelector('.block2__container');
   const block2Left = document.querySelector('.block2__left');
   const block2Right = document.querySelector('.block2__right');
   const block2HP = document.querySelector('.block2__hp');
   const HPPlayer = document.querySelector('.hp__player');
   const playersHPText = document.querySelector('.players-hp__text');
   const HPWizard = document.querySelector('.hp__wizard');
   const commentsTitle = document.querySelectorAll('.comments__title');
   const block3Container = document.querySelector('.block3__container');
   const footer = document.querySelector('.footer');
   const footerText = document.querySelector('.footer__text');

   if (elem.clientWidth < 425) {
      header.style.cssText = `
         border-bottom: 0;
      `;

      headerContainer.style.cssText = `
         justify-content: center;
         padding: 5px 20px;
      `;

      headerLogo.style.cssText = `
         width: 50vw;
      `;

      headerRight.style.cssText = `
         display: none;
      `;
   }

   block1Weapon.style.cssText = `
      display: none;
   `;

   block2Container.style.cssText = `
      justify-content: center;
      padding: 0;
   `;

   block2Left.style.cssText = `
      display: none;
   `;

   block2Right.style.cssText = `
      align-items: center;
   `;

   block2HP.style.cssText = `
      margin: 0 0 20px 0;
   `;

   HPPlayer.style.cssText = `
      align-items: center;
   `;

   playersHPText.style.cssText = `
      margin: 5px 74px 0 0;
   `;

   if (elem.clientWidth < 768) {
      playersHPText.style.cssText = `
         margin: 0;
      `;
   }

   if (elem.clientWidth > 1300) {
      playersHPText.style.cssText = `
         margin: 5px 56px 0 0;
      `;
   }

   HPWizard.style.cssText = `
      align-items: center;
   `;

   commentsTitle.forEach((commentTitle) => {
      commentTitle.style.cssText = `
         text-align: center;
      `;
   })

   block3Container.style.cssText = `
      padding: 0 20px;
   `;

   if (elem.clientWidth < 425) {
      footer.style.cssText = `
         border-top: 0;
      `;

      footerText.style.cssText = `
         font-size: 25px;
      `;
   }
}

function end() {
   if (victories === 5 || defeats === 5) {
      const block4Container = document.querySelector('.block4__container');
      const block4Button = document.querySelector('.block4__button');

      endCssChange();

      block4Container.style.cssText = `
            display: flex;
      `;

      if (victories > defeats) {
         loser = 'Wizard';
         winner = 'you';

         playersWeaponText.innerHTML = `<div style="text-transform: uppercase; color: #39FF14; 
                                        font-size: 35px;" class="blcok1__title title">you won 
                                        the game!</div>`;

         block4Button.style.cssText = `
            border: 2px solid #FF142A;
            color: #FF142A;
         `;
      }

      else if (victories < defeats) {
         loser = 'you';
         winner = 'Wizard';

         playersWeaponText.innerHTML = `<div style="text-transform: uppercase; color: #FF142A; 
                                        font-size: 35px;" class="blcok1__title title">you lost 
                                        the game!</div>`;

         block4Button.style.cssText = `
            border: 2px solid #39FF14;
            color: #39FF14;
         `;
      }

      comments.forEach((comment) => {
         comment.innerHTML = `CAN’T BE ${winner} managed to WIN ${loser}! WHAT a fight! Two 
                              of the most powerful magicians in the world faced each other! 
                              HAS ANYONE EXPECTED THIS FIGHT? I still can believe… IT WAS 
                              SOOOOO INCREDIBLE! How many unique spells were used?? I’m sure 
                              there were a lot... Does anyone know their level? Finally we 
                              have the name of the best wizard in the world….. It’s me 
                              actually. However, this fight wasn’t so bad. ^w^`
      })
   }
}

function game() {
   let playersSelection;

   playersSquare.forEach((plSquare) => {
      plSquare.addEventListener('click', () => {
         if (plSquare.classList.contains('stick')) {
            playersSelection = 'stick';
         }

         else if (plSquare.classList.contains('ring')) {
            playersSelection = 'ring';
         }

         else if (plSquare.classList.contains('medallion')) {
            playersSelection = 'medallion';
         }

         reset();
         change(playRound(playersSelection, wizardChoose()), playersSelection);
         end();
      });
   });
}

game();
