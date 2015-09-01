$(document).ready(function() {
  $('.ss').hover((function() {
    $(this).css({
      'border': '5px solid #FFD700'
    });
  }), function() {
    $(this).css({
      'border': '5px solid #DAA520'
    });
  }).mousedown(function() {
    $(this).css({
      'border': '5px solid #00FF00'
    });
  });
  $('.ss').draggable({
    helper: 'clone',
    revert: 'invalid'
  });
  $('.game-one').droppable({
    activeClass: 'active-th',
    hoverClass: 'hover-th',
    drop: function(event, ui) {             
      window.cardOne = ui.draggable;
      $(this).prepend(cardOne);      
      window.topNumOne = $(cardOne).data('top');
      window.rightNumOne = $(cardOne).data('right');
      window.bottomNumOne = $(cardOne).data('bottom');
      window.leftNumOne = $(cardOne).data('left');      
      /*
          kod
       */    
      
      window.userOne = $(cardOne).data('user')
      if (userOne === 1) {
        cardOne.find('img').css({
          'border': '10px solid #008B00',
          'width': '150px',
          'height': '150px'
        }).animate({
          'width': '100%',
          'height': '100%'
        });
    } else {
        cardOne.find('img').css({
        'border': '10px solid #FF0000',
        'width': '150px',
        'height': '150px'
        }).animate({
        'width': '100%',
        'height': '100%'
        });
      }      
      cardOne.draggable('disable');
      $(this).droppable('disable');
    }
  });
  $('.game-two').droppable({
    activeClass: 'active-th',
    hoverClass: 'hover-th',
    drop: function(event, ui) {
      var card;
      card = ui.draggable;
      $(this).prepend(card);
      window.topNumTwo = $(card).data('top');
      window.rightNumTwo = $(card).data('right');
      window.bottomNumTwo = $(card).data('bottom');
      window.leftNumTwo = $(card).data('left');
      window.userTwo = $(card).data('user');      
      if (userTwo === 1) {
        card.find('img').css({
          'border': '10px solid #008B00',
          'width': '150px',
          'height': '150px'
        }).animate({
          'width': '100%',
          'height': '100%'
        });
    } else {
        card.find('img').css({
        'border': '10px solid #FF0000',
        'width': '150px',
        'height': '150px'
        }).animate({
        'width': '100%',
        'height': '100%'
        });
      }      
      card.draggable('disable');
      $(this).droppable('disable');
    }
  });
  $('.game-three').droppable({
    activeClass: 'active-th',
    hoverClass: 'hover-th',
    drop: function(event, ui) {      
      window.cardThree = ui.draggable;
      $(this).prepend(cardThree);
      window.topNumThree = $(cardThree).data('top');
      window.rightNumThree = $(cardThree).data('right');
      window.bottomNumThree = $(cardThree).data('bottom');
      window.leftNumThree = $(cardThree).data('left');
      window.userThree = $(cardThree).data('user');
      if (userThree === 1) {
        cardThree.find('img').css({
          'border': '10px solid #008B00',
          'width': '150px',
          'height': '150px'
        }).animate({
          'width': '100%',
          'height': '100%'
        });
    } else {
        cardThree.find('img').css({
        'border': '10px solid #FF0000',
        'width': '150px',
        'height': '150px'
        }).animate({
        'width': '100%',
        'height': '100%'
        });
      }      
      cardThree.draggable('disable');
      $(this).droppable('disable');
    }
  });
  $('.game-four').droppable({
    activeClass: 'active-th',
    hoverClass: 'hover-th',
    drop: function(event, ui) {
      var card;
      card = ui.draggable;
      $(this).prepend(card);
      window.topNumFour = $(card).data('top');
      window.rightNumFour = $(card).data('right');
      window.bottomNumFour = $(card).data('bottom');
      window.leftNumFour = $(card).data('left');
      window.userFour = $(card).data('user');
      if (userFour === 1) {
        card.find('img').css({
          'border': '10px solid #008B00',
          'width': '150px',
          'height': '150px'
        }).animate({
          'width': '100%',
          'height': '100%'
        });
    } else {
        card.find('img').css({
        'border': '10px solid #FF0000',
        'width': '150px',
        'height': '150px'
        }).animate({
        'width': '100%',
        'height': '100%'
        });
      }      
      card.draggable('disable');
      $(this).droppable('disable');
    }
  });
  $('.game-five').droppable({
    activeClass: 'active-th',
    hoverClass: 'hover-th',
    drop: function(event, ui) {
      var card;
      card = ui.draggable;
      $(this).prepend(card);
      window.topNumFive = $(card).data('top');
      window.rightNumFive = $(card).data('right');
      window.bottomNumFive = $(card).data('bottom');
      window.leftNumFive = $(card).data('left');
      window.userFive = $(card).data('user');
      if (userFive === 1) {
        card.find('img').css({
          'border': '10px solid #008B00',
          'width': '150px',
          'height': '150px'
        }).animate({
          'width': '100%',
          'height': '100%'
        });
    } else {
        card.find('img').css({
        'border': '10px solid #FF0000',
        'width': '150px',
        'height': '150px'
        }).animate({
        'width': '100%',
        'height': '100%'
        });
      }      
      card.draggable('disable');
      $(this).droppable('disable');
    }
  });
  $('.game-six').droppable({
    activeClass: 'active-th',
    hoverClass: 'hover-th',
    drop: function(event, ui) {
      var card;
      card = ui.draggable;
      $(this).prepend(card);
      window.topNumSix = $(card).data('top');
      window.rightNumSix = $(card).data('right');
      window.bottomNumSix = $(card).data('bottom');
      window.leftNumSix = $(card).data('left');
      window.userSix = $(card).data('user');
      if (userSix === 1) {
        card.find('img').css({
          'border': '10px solid #008B00',
          'width': '150px',
          'height': '150px'
        }).animate({
          'width': '100%',
          'height': '100%'
        });
    } else {
        card.find('img').css({
        'border': '10px solid #FF0000',
        'width': '150px',
        'height': '150px'
        }).animate({
        'width': '100%',
        'height': '100%'
        });
      }      
      card.draggable('disable');
      $(this).droppable('disable');
    }
  });
  $('.game-seven').droppable({
    activeClass: 'active-th',
    hoverClass: 'hover-th',
    drop: function(event, ui) {
      var card;
      card = ui.draggable;  
      $(this).prepend(card);
      window.topNumSeven = $(card).data('top');
      window.rightNumSeven = $(card).data('right');
      window.bottomNumSeven = $(card).data('bottom');
      window.leftNumSeven = $(card).data('left');
      window.userSeven = $(card).data('user');
      if (userSeven === 1) {
        card.find('img').css({
          'border': '10px solid #008B00',
          'width': '150px',
          'height': '150px'
        }).animate({
          'width': '100%',
          'height': '100%'
        });
    } else {
        card.find('img').css({
        'border': '10px solid #FF0000',
        'width': '150px',
        'height': '150px'
        }).animate({
        'width': '100%',
        'height': '100%'
        });
      }
      card.draggable('disable');
      $(this).droppable('disable');
    }
  });
  $('.game-eight').droppable({
    activeClass: 'active-th',
    hoverClass: 'hover-th',
    drop: function(event, ui) {
      var card;
      card = ui.draggable;
      $(this).prepend(card);
      window.topNumEight = $(card).data('top');
      window.rightNumEight = $(card).data('right');
      window.bottomNumEight = $(card).data('bottom');
      window.leftNumEight = $(card).data('left');
      window.userEight = $(card).data('user');
      if (userEight === 1) {
        card.find('img').css({
          'border': '10px solid #008B00',
          'width': '150px',
          'height': '150px'
        }).animate({
          'width': '100%',
          'height': '100%'
        });
    } else {
        card.find('img').css({
        'border': '10px solid #FF0000',
        'width': '150px',
        'height': '150px'
        }).animate({
        'width': '100%',
        'height': '100%'
        });
      }
      card.draggable('disable');
      $(this).droppable('disable');
    }
  });
  return $('.game-nine').droppable({
    activeClass: 'active-th',
    hoverClass: 'hover-th',
    drop: function(event, ui) {
      var card;
      card = ui.draggable;
      $(this).prepend(card);
      window.topNumNine = $(card).data('top');
      window.rightNumNine = $(card).data('right');
      window.bottomNumNine = $(card).data('bottom');
      window.leftNumNine = $(card).data('left');
      window.userNine = $(card).data('user');
      if (userNine === 1) {
        card.find('img').css({
          'border': '10px solid #008B00',
          'width': '150px',
          'height': '150px'
        }).animate({
          'width': '100%',
          'height': '100%'
        });
    } else {
        card.find('img').css({
        'border': '10px solid #FF0000',
        'width': '150px',
        'height': '150px'
        }).animate({
        'width': '100%',
        'height': '100%'
        });
      }
      card.draggable('disable');
      $(this).droppable('disable');
    }
  });
});

var user = function(){
  if (rightNumOne > leftNumThree) {
    alert('1');
  }
}

/*
window.cardOne   = ui.draggable
window.cardTwo   = ui.draggable
window.cardThree = ui.draggable
window.cardFour  = ui.draggable
window.cardFive  = ui.draggable
window.cardSix   = ui.draggable
window.cardSeven = ui.draggable
window.cardEight = ui.draggable
window.cardNine  = ui.draggable

if ($(cardOne).data('user') === $(cardThree).data('user')) {
  return
} else if ($(cardOne).data('user') > $(cardThree).data('user')) {
    if (rightNumOne > leftNumThree) {  $(cardThree).data('user', $(cardOne).data('user')) }    
} else if ($(cardOne).data('user') < $(cardThree).data('user')) {
    if (rightNumOne < leftNumThree) {  $(cardOne).data('user', $(cardThree).data('user')) }
}
*/



















