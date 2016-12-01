$(document).ready(function() {
  var pokemonImages = [
    'articuno', 'articuno',
    'bulbasaur', 'bulbasaur',
    'charmander', 'charmander',
    'dragonite', 'dragonite',
    'moltres', 'moltres',
    'pikachu', 'pikachu',
    'squirtle', 'squirtle',
    'zapdos', 'zapdos']

  var $box = $('.box-card');
  var $imgCard = $ ('.img-card');
  var firstCard, secondCard;

  $box.click(function() {
    card = $(this);
    console.log('clicked')
    card.find('div').removeClass('hidden');
    if(!firstCard) {
      firstCard = card;
    } else {
      secondCard = card;
      game(firstCard, secondCard);
    }
  });

  // $('#play-time').click(function() {
  //   var shuffledCards = shuffle(pokemonImages);
  //   $(shuffledCards).each(function(index, value) {
  //     $('.shuffled').append(
  //       "<div class='col s3 box-card pokemon'>" +
  //         "<div class='img-card hidden' id='" + value + "'></div>" +
  //       "</div>");
  //   });

  //   $('.box-card').click(function() {
  //     card = $(this);
  //     card.find('div').removeClass('hidden');
  //     if(!firstCard) {
  //       firstCard = card;
  //     } else {
  //       secondCard = card;
  //       game(firstCard, secondCard);
  //     }
  //   })
  // });



//   function shuffle(array) {
//   var currentIndex = array.length, temporaryValue, randomIndex;
//
//   // While there remain elements to shuffle...
//   while (0 !== currentIndex) {
//
//     // Pick a remaining element...
//     randomIndex = Math.floor(Math.random() * currentIndex);
//     currentIndex -= 1;
//
//     // And swap it with the current element.
//     temporaryValue = array[currentIndex];
//     array[currentIndex] = array[randomIndex];
//     array[randomIndex] = temporaryValue;
//   }
//
//   return array;
// }

  function game(first, second) {
    if(first.children().attr('id') === second.children().attr('id')) {
      Materialize.toast('You Got A Match! Good Job!', 2000);
      firstCard = null;
      secondCard = null;
    } else {
      setTimeout(function() {
        firstCard.children().addClass('hidden');
        secondCard.children().addClass('hidden');
        firstCard = null;
        secondCard = null;
      }, 1000);
      Materialize.toast("Sorry! You're Wrong!", 3000);
    }
  }

  function getName() {
    var name = prompt('Hey! What is your name?');
    if(name === null || name === '') {
      getName();
    } else {
      $('#welcome-user').text("Let's get ready to rumble " + name + '!');
    }
  }

  getName();
});
