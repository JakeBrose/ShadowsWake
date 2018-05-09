//
// 'use strict';
//
module.exports.chapterOneBattle = (req, res) => {
  let characterData = res.locals.character;
  res.render("ChapterOneBattle", { characterData });
};
// ///////////////////////////////////////////////////
// // Defining the objects that contain enemy keys //
// /////////////////////////////////////////////////
// let enemyOrcSword = {
//   vigor: 0,
//   fight: 0,
//   armor: 0
// };
//
// let enemyWarg = {
//   vigor: 0,
//   fight: 0,
//   armor: 0
// };
//
// let enemyOrcCaptain = {
//   vigor: 0,
//   fight: 0,
//   armor: 0
// };
//
// let theDwimmerlaik = {
//   vigor: 0,
//   fight: 0,
//   armor: 0
// };
//
// let currentEnemy;
///////////////////////////////////////////////////////////////////////////////////////
// a group of functions that create new instances of the previously defined objects //
/////////////////////////////////////////////////////////////////////////////////////
// module.exports.battleOneEnemy = (req, res, next) => {
//   let newOrcSword = Object.create(enemyOrcSword);
//   newOrcSword.vigor = 1 ;
//   newOrcSword.fight = Math.floor(Math.random() * 3) + 1;
//   newOrcSword.armor = Math.floor(Math.random() * 3) + 1;
//   res.locals.currentEnemy = newOrcSword;
//   // res.redirect("/chapterOneBattle");
//   return next();
// };


///////////////////////////////////////////////////
// functions that handle the combat mechanics   //
/////////////////////////////////////////////////

// let diceRoll = () => {
//   return  Math.floor(Math.random() * 6) + 1;
// };
//
// module.exports.theWholeFuckingBattle = (req, res) => {
//   let engage = (newOrcSword, diceRoll) => {
//     let myCurrentCharacter = res.locals.character;
//     console.log("myCurrentCharacter===", myCurrentCharacter);
//     let charFight = myCurrentCharacter.characterData.fight + diceRoll();
//     console.log("character fight value", charFight);
//     let orcFight = newOrcSword.fight + diceRoll();
//     console.log("enemy fight value", orcFight);
//     if (charFight > orcFight) {
//       return charFight;
//     } else {
//       return orcFight
//     }
//   };
//   engage(diceRoll);
// };


// let battleResults = () => {
//   let results = engage();
//   if (results.charFight > results.orcFight) {
//
//   }
// };

