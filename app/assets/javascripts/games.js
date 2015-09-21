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
  
  var q  = 1;  
  var u1 = 0;
  var u2 = 0;
  
  // перемешиваю колоду. //
  
  var arr   = [0,1,2,3,4];  

  function shuffle(o){
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
  }
          
  shuffle(arr);
  
  var cards = new Array();
      
  for (var i=0; i<5; i++) {
    cards[i] = $('.ssComp:eq('+(arr[i])+')');
  }
  
  // ------------------------------------- //
  
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
      
      
      u1++;
      q++;
      
      var self = $(this);
      
      
      var right  = $('[data-id='+(self.data('id')+1)+'] .ss').data('user') === 1 ? $('[data-id='+(self.data('id')+1)+'] .ss') : $('[data-id='+(self.data('id')+1)+'] .ss').data('user') === 2 ? $('[data-id='+(self.data('id')+1)+'] .ss') : $('[data-id='+(self.data('id')+1)+'] .ssComp');            
      var left   = $('[data-id='+($(this).data('id')-1)+'] .ss').data('user') === 1 ? $('[data-id='+($(this).data('id')-1)+'] .ss') : $('[data-id='+(self.data('id')-1)+'] .ss').data('user') === 2 ? $('[data-id='+(self.data('id')-1)+'] .ss') : $('[data-id='+(self.data('id')-1)+'] .ssComp');
      var top    = $('[data-id='+($(this).data('id')-3)+'] .ss').data('user') === 1 ? $('[data-id='+($(this).data('id')-3)+'] .ss') : $('[data-id='+(self.data('id')-3)+'] .ss').data('user') === 2 ? $('[data-id='+(self.data('id')-3)+'] .ss') : $('[data-id='+(self.data('id')-3)+'] .ssComp');
      var bottom = $('[data-id='+($(this).data('id')+3)+'] .ss').data('user') === 1 ? $('[data-id='+($(this).data('id')+3)+'] .ss') : $('[data-id='+(self.data('id')+3)+'] .ss').data('user') === 2 ? $('[data-id='+(self.data('id')+3)+'] .ss') : $('[data-id='+(self.data('id')+3)+'] .ssComp');
      
      if ($($card).data('user') != right.data('user')) {
        if ($($card).data('right') > right.data('left')) { 
          if ($(this).data('id') != 2 && $(this).data('id') != 5) {
            right.data('user', $($card).data('user'));
            u1++;
            u2--;            
          }         
        }
      }
      
      if ($($card).data('user') != left.data('user')) {
        if ($($card).data('left') > left.data('right')) { 
          if ($(this).data('id') != 3 && $(this).data('id') != 6) {
            left.data('user', $($card).data('user'));
            u1++;
            u2--;
          }         
        }
      }
      
      if ($($card).data('user') != top.data('user')) {
        if ($($card).data('top') > top.data('bottom')) { 
          top.data('user', $($card).data('user'));
          u1++;
          u2--;                      
        }
      }
      
      if ($($card).data('user') != bottom.data('user')) {
        if ($($card).data('bottom') > bottom.data('top')) { 
          bottom.data('user', $($card).data('user'));
          u1++;
          u2--;                     
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
      
      
// ----------------------------------------------------------------------------------------- //
          
      var appendCard = function(arg) {
        $(arg).append(cards.shift()).find('img').css({
          'border': '10px solid #FF0000',
          'width': '150px',
          'height': '150px'          
        }).animate({
          'width': '100%',
          'height': '100%'          
        });
        $(arg).droppable('disable');
        q++;
        u2++;
      }
               
      
   // функция сравнение ответной карты с той, что сверху над ней  //          
      
      function topInsert () {
        var x;
        if (insertField != 0 && insertField != 1 && insertField != 2) {
          if (insertComp.data('user') != topComp.data('user') && insertComp.data('user') != topSs.data('user')) {
            if (insertComp.data('top') > topComp.data('bottom') || insertComp.data('top') > topSs.data('bottom')) {
              topComp.data('user', 2);
              topSs.data('user', 2);
              u2++;
              u1--;            
              if (topSs.data('user') === 2) {
                x = red(topSs);
              }
              if (topComp.data('user') === 2) {
                x = red(topComp);
              }
            }               
          }
        }
        return x, u1, u2, q;
      }
      
    // функция сравнение ответной карты с той, что снизу под ней //
    
      function bottomInsert () {
        var x;
        if (insertField != 6 && insertField != 7 && insertField != 8) {
          if (insertComp.data('user') != bottomComp.data('user') && insertComp.data('user') != bottomSs.data('user')) {
            if (insertComp.data('bottom') > bottomComp.data('top') || insertComp.data('bottom') > bottomSs.data('top')) {
              bottomComp.data('user', 2);
              bottomSs.data('user', 2);
              u2++;
              u1--;
              if (bottomSs.data('user') === 2) {
                x = red(bottomSs);
              }
              if (bottomComp.data('user') === 2) {
                x = red(bottomComp);
              }
            }              
          }
        }  
        return x, u1, u2;
      } 
      
    // функция сравнение ответной карты с той, что справа от неё //
    
      function rightInsert () {
        var x;
        if (insertField != 2 && insertField != 5 && insertField != 8) {
          if (insertComp.data('user') != rightComp.data('user') && insertComp.data('user') != rightSs.data('user')) {
            if (insertComp.data('right') > rightComp.data('left') || insertComp.data('right') > rightSs.data('left')) {
              rightComp.data('user', 2);
              rightSs.data('user', 2);
              u2++;
              u1--;
              if (rightSs.data('user') === 2) {
                x = red(rightSs);
              }
              if (rightComp.data('user') === 2) {
                x = red(rightComp);
              }
            }               
          }
        }
        return x, u1, u2;
      }
      
    // функция сравнение ответной карты с той, что слева от неё //
    
      function leftInsert () {
        var x;
        if (insertField != 0 && insertField != 3 && insertField != 6) {
          if (insertComp.data('user') != leftComp.data('user') && insertComp.data('user') != leftSs.data('user')) {
            if (insertComp.data('left') > leftComp.data('right') || insertComp.data('left') > leftSs.data('right')) {
              leftComp.data('user', 2);
              leftSs.data('user', 2);
              u2++;
              u1--;
              if (leftSs.data('user') === 2) {
                x = red(leftSs);
              }
              if (leftComp.data('user') === 2) {
                x = red(leftComp);
              }
            }              
          }
        }
        return x, u1, u2;
      } 
      
      var insertComp;
      var topSs;
      var topComp;
      var bottomComp;
      var bottomSs;
      var rightSs; 
      var rightComp;
      var leftSs;
      var leftComp;
      var insertField;
      var emptyInsertField;          
                  
      if ($(this).data('id') != 2 && $(this).data('id') != 5 && $(this).data('id') != 8 && $('[data-id='+($(this).data('id')+1)+'] .ss').data('user') === undefined && $('[data-id='+($(this).data('id')+1)+'] .ssComp').data('user') === undefined) {
       
        setTimeout(function(){appendCard.call(null, '[data-id='+(self.data('id')+1)+']')}, 3000);    // вставляем карту справа  
        
        setTimeout(function(){
          insertField = $('[data-id='+(self.data('id')+1)+']').data('id');
          insertComp  = $('[data-id='+(self.data('id')+1)+'] .ssComp');
          topSs       = $('[data-id='+(self.data('id')-2)+'] .ss'); 
          topComp     = $('[data-id='+(self.data('id')-2)+'] .ssComp');
          bottomComp  = $('[data-id='+(self.data('id')+4)+'] .ssComp');
          bottomSs    = $('[data-id='+(self.data('id')+4)+'] .ss');
          rightSs     = $('[data-id='+(self.data('id')+2)+'] .ss');
          rightComp   = $('[data-id='+(self.data('id')+2)+'] .ssComp');
          leftSs      = $('[data-id='+(self.data('id')+0)+'] .ss'); 
          leftComp    = $('[data-id='+(self.data('id')+0)+'] .ssComp');
        }, 3400);        
          
          
        setTimeout(function(){        
          leftInsert();        // сравнение ответной карты с той, что СЛЕВА от неё 
          topInsert();         // сравнение ответной карты с той, что СВЕРХУ над ней 
          rightInsert();       // сравнение ответной карты с той, что СПРАВА от неё
          bottomInsert();      // сравнение ответной карты с той, что СНИЗУ под ней
        }, 4000);
         
                          
      } else if ($(this).data('id') != 6 && $(this).data('id') != 7 && $(this).data('id') != 8 && $('[data-id='+($(this).data('id')+3)+'] .ss').data('user') === undefined && $('[data-id='+($(this).data('id')+3)+'] .ssComp').data('user') === undefined) { 
                  
        setTimeout(function(){appendCard.call(null, '[data-id='+(self.data('id')+3)+']')}, 3000);          // вставляем карту снизу         
        
        setTimeout(function(){
          insertField = $('[data-id='+(self.data('id')+3)+']').data('id');
          insertComp  = $('[data-id='+(self.data('id')+3)+'] .ssComp');
          bottomComp  = $('[data-id='+(self.data('id')+6)+'] .ssComp');
          bottomSs    = $('[data-id='+(self.data('id')+6)+'] .ss');
          rightSs     = $('[data-id='+(self.data('id')+4)+'] .ss'); 
          rightComp   = $('[data-id='+(self.data('id')+4)+'] .ssComp');
          leftSs      = $('[data-id='+(self.data('id')+2)+'] .ss'); 
          leftComp    = $('[data-id='+(self.data('id')+2)+'] .ssComp');
          topSs       = $('[data-id='+(self.data('id')+0)+'] .ss') 
          topComp     = $('[data-id='+(self.data('id')+0)+'] .ssComp');
        }, 3400);
       
        setTimeout(function(){        
          leftInsert();        // сравнение ответной карты с той, что СЛЕВА от неё 
          topInsert();         // сравнение ответной карты с той, что СВЕРХУ над ней 
          rightInsert();       // сравнение ответной карты с той, что СПРАВА от неё
          bottomInsert();      // сравнение ответной карты с той, что СНИЗУ под ней
        }, 4000);       
        
      } else if ($(this).data('id') != 0 && $(this).data('id') != 3 && $(this).data('id') != 6 && $('[data-id='+($(this).data('id')-1)+'] .ss').data('user') === undefined && $('[data-id='+($(this).data('id')-1)+'] .ssComp').data('user') === undefined) {              
      
        setTimeout(function(){appendCard.call(null, '[data-id='+(self.data('id')-1)+']')}, 3000);          // вставляем карту слева 
        
        setTimeout(function(){
          insertField = $('[data-id='+(self.data('id')-1)+']').data('id');
          insertComp  = $('[data-id='+(self.data('id')-1)+'] .ssComp');
          topSs       = $('[data-id='+(self.data('id')-4)+'] .ss') 
          topComp     = $('[data-id='+(self.data('id')-4)+'] .ssComp');
          bottomComp  = $('[data-id='+(self.data('id')+2)+'] .ssComp');
          bottomSs    = $('[data-id='+(self.data('id')+2)+'] .ss');
          leftSs      = $('[data-id='+(self.data('id')-2)+'] .ss'); 
          leftComp    = $('[data-id='+(self.data('id')-2)+'] .ssComp');
          rightSs     = $('[data-id='+(self.data('id')+0)+'] .ss'); 
          rightComp   = $('[data-id='+(self.data('id')+0)+'] .ssComp');
        }, 3400);
        
        setTimeout(function(){        
          leftInsert();        // сравнение ответной карты с той, что СЛЕВА от неё 
          topInsert();         // сравнение ответной карты с той, что СВЕРХУ над ней 
          rightInsert();       // сравнение ответной карты с той, что СПРАВА от неё
          bottomInsert();      // сравнение ответной карты с той, что СНИЗУ под ней
        }, 4000);
        
        
      } else if ($(this).data('id') != 0 && $(this).data('id') != 1 && $(this).data('id') != 2 && $('[data-id='+($(this).data('id')-3)+'] .ss').data('user') === undefined && $('[data-id='+($(this).data('id')-3)+'] .ssComp').data('user') === undefined) {               
      
        setTimeout(function(){appendCard.call(null, '[data-id='+(self.data('id')-3)+']')}, 3000);        // вставляем карту сверху
        
        setTimeout(function(){
          insertField = $('[data-id='+(self.data('id')-3)+']').data('id');
          insertComp  = $('[data-id='+(self.data('id')-3)+'] .ssComp');
          topSs       = $('[data-id='+(self.data('id')-6)+'] .ss') 
          topComp     = $('[data-id='+(self.data('id')-6)+'] .ssComp');
          leftComp    = $('[data-id='+(self.data('id')-4)+'] .ssComp');
          leftSs      = $('[data-id='+(self.data('id')-4)+'] .ss');
          rightSs     = $('[data-id='+(self.data('id')-2)+'] .ss'); 
          rightComp   = $('[data-id='+(self.data('id')-2)+'] .ssComp');
          bottomComp  = $('[data-id='+(self.data('id')+0)+'] .ssComp');
          bottomSs    = $('[data-id='+(self.data('id')+0)+'] .ss');
        }, 3400);
                 
        setTimeout(function(){        
          leftInsert();        // сравнение ответной карты с той, что СЛЕВА от неё 
          topInsert();         // сравнение ответной карты с той, что СВЕРХУ над ней 
          rightInsert();       // сравнение ответной карты с той, что СПРАВА от неё
          bottomInsert();      // сравнение ответной карты с той, что СНИЗУ под ней
        }, 4000);
      } else if ($('.game-field:empty:first').data('id') != undefined) {
      
        setTimeout(function(){appendCard.call(null, $('.game-field:empty:first'))}, 3000);        // вставляем карту в первую свободную ячейку
        
        emptyInsertField = $('.game-field:empty:first');
        
        setTimeout(function(){
          insertField = emptyInsertField.data('id');
          insertComp  = $('[data-id='+emptyInsertField.data('id')+'] .ssComp');
          topSs       = $('[data-id='+(emptyInsertField.data('id')-3)+'] .ss') 
          topComp     = $('[data-id='+(emptyInsertField.data('id')-3)+'] .ssComp');
          leftComp    = $('[data-id='+(emptyInsertField.data('id')-1)+'] .ssComp');
          leftSs      = $('[data-id='+(emptyInsertField.data('id')-1)+'] .ss');
          rightSs     = $('[data-id='+(emptyInsertField.data('id')+1)+'] .ss'); 
          rightComp   = $('[data-id='+(emptyInsertField.data('id')+1)+'] .ssComp');
          bottomComp  = $('[data-id='+(emptyInsertField.data('id')+3)+'] .ssComp');
          bottomSs    = $('[data-id='+(emptyInsertField.data('id')+3)+'] .ss');
        }, 3400);
                 
        setTimeout(function(){        
          leftInsert();        // сравнение ответной карты с той, что СЛЕВА от неё 
          topInsert();         // сравнение ответной карты с той, что СВЕРХУ над ней 
          rightInsert();       // сравнение ответной карты с той, что СПРАВА от неё
          bottomInsert();      // сравнение ответной карты с той, что СНИЗУ под ней
        }, 4000); 
      } 
        
      
 // ------------------------------------------------------------------------------------- //
           
                  
      if ($($card).data('user') === 1) {
        green($card);
        } else {
        red($card);
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
 
 // ------------------------------------------------------------------------------------- //  
            
      if (q % 2 === 0) {
        $('.triangle-one').css({
        'border-left':'150px solid #FE2E2E'                      
        })
        $('.triangle-two').css({        
        'border-right':'150px solid #00EE00'        
        })          
      }
      setTimeout(function(){
        if (q % 2 === 1) {
          $('.triangle-one').css({        
          'border-left':'150px solid #00EE00'        
          })
          $('.triangle-two').css({         
          'border-right':'150px solid #FE2E2E'       
          });          
        }
      }, 5000);
                                  
      setTimeout(function(){$('.ss').draggable('disable')}, 100);
      setTimeout(function(){$('.ss').draggable('enable')}, 5000);      
      
      $card.draggable('disable');
      $(this).droppable('disable');             
      
      setTimeout(function(){
        if (q === 10) {
          if (u1 > u2) {    
            alert('Вы победили!');
          } else {
            alert('Победил Computer');
          }
        } 
      }, 4000);           
    }         
  });        
});



    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
