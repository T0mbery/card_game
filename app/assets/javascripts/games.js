$(document).ready(function() {
  $('.ss, .ssComp').hover((function() {
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
  
  window.q  = 1;
  
  var u1 = 0;
  var u2 = 0;
  
  $('.ss').draggable({
    helper: 'clone',
    revert: 'invalid'
  });
  
    
  $('.game-field').droppable({
    activeClass: 'active-th',
    hoverClass: 'hover-th',
    drop: function(event, ui) {             
      $card = $(ui.draggable);
      $(this).prepend($card);             
             
      var right  = $('[data-id='+($(this).data('id')+1)+'] .ss').data('user') === 1 ? $('[data-id='+($(this).data('id')+1)+'] .ss') : $('[data-id='+($(this).data('id')+1)+'] .ssComp');            
      var left   = $('[data-id='+($(this).data('id')-1)+'] .ss').data('user') === 1 ? $('[data-id='+($(this).data('id')-1)+'] .ss') : $('[data-id='+($(this).data('id')-1)+'] .ssComp');
      var top    = $('[data-id='+($(this).data('id')-3)+'] .ss').data('user') === 1 ? $('[data-id='+($(this).data('id')-3)+'] .ss') : $('[data-id='+($(this).data('id')-3)+'] .ssComp');
      var bottom = $('[data-id='+($(this).data('id')+3)+'] .ss').data('user') === 1 ? $('[data-id='+($(this).data('id')+3)+'] .ss') : $('[data-id='+($(this).data('id')+3)+'] .ssComp');
      
      if ($($card).data('user') != right.data('user')) {
        if ($($card).data('right') > right.data('left')) {
          if ($(this).data('id') != 2 && $(this).data('id') != 5) {
            right.data('user', $($card).data('user'));
            if ($($card).data('user') === 1) {
              u1++;
              u2--;
            } else {
              u2++;
              u1--;
            }
          }          
        }    
      }
           
      if ($($card).data('user') != left.data('user')) {
        if ($($card).data('left') > left.data('right')) { 
          if ($(this).data('id') != 3 && $(this).data('id') != 6) {
            left.data('user', $($card).data('user'));
            if ($($card).data('user') === 1) {
              u1++;
              u2--;
            } else {
              u2++;
              u1--;
            }
          }         
        }
      }
      
      if ($($card).data('user') != top.data('user')) {
        if ($($card).data('top') > top.data('bottom')) { 
          top.data('user', $($card).data('user'));
          if ($($card).data('user') === 1) {
              u1++;
              u2--;
            } else {
              u2++;
              u1--;
            }          
        }
      }
      
      if ($($card).data('user') != bottom.data('user')) {
        if ($($card).data('bottom') > bottom.data('top')) { 
          bottom.data('user', $($card).data('user'));
          if ($($card).data('user') === 1) {
              u1++;
              u2--;
            } else {
              u2++;
              u1--;
            }          
        }
      }
      
      var green = function(i) { i.find('img').css({
          'border': '10px solid #008B00',
          'width': '150px',
          'height': '150px'          
        }).animate({
          'width': '100%',
          'height': '100%'          
        });
      }
      
      var red = function(i) { i.find('img').css({
          'border': '10px solid #FF0000',
          'width': '150px',
          'height': '150px'          
        }).animate({
          'width': '100%',
          'height': '100%'          
        });         
      }
                  
      if ($($card).data('user') === 1) {
        green($card);
        u1++;
        } else {
        red($card);
        u2++;
      }
       
      if (right.data('user') === 1) {
        green(right);
      } else {
        red(right);
      }
      if (left.data('user') === 1){
        green(left);
      } else {
        red(left);
      }
      if (top.data('user') === 1){
        green(top);
      } else {
        red(top);
      }
      if (bottom.data('user') === 1){
        green(bottom);
      } else {
        red(bottom);
      }   
      
      q++;
      
      if (q % 2 === 0) {
        $('.triangle-one').css({
        'border-left':'150px solid #FE2E2E'                      
        })
        $('.triangle-two').css({        
        'border-right':'150px solid #00EE00'        
        })          
      }
      if (q % 2 === 1) {
        $('.triangle-one').css({        
        'border-left':'150px solid #00EE00'        
        })
        $('.triangle-two').css({         
        'border-right':'150px solid #FE2E2E'       
        });          
      }
                                  
      $card.draggable('disable');
      $(this).droppable('disable');             
      
      if (q === 10) {
        if (u1 > u2) {    
          setTimeout("alert('Победил USER 1')", 2300);
        } else {
          setTimeout("alert('Победил USER 2')", 2300);
        }
      }
      
      if ( q % 2 === 0) {  
        $('.ssComp').draggable({
          helper: 'clone',
          revert: 'invalid',
          cancel:'.ss'
        });
      } 
      
      if ( q % 2 === 1) {  
        $('.ss').draggable({
          helper: 'clone',
          revert: 'invalid',
          cancel:'.ssComp'
        });
      }            
    }         
  });        
});


    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
