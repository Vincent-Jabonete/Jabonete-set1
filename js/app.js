$(function(){
    // declaration coming from index selectors
  var jokeButton = $ ('#joke-button');
  var jokesList = $('#jokes-list');
  var jokeLoader = $('#joke-loader');

  // declaration variables
  var count = 0;
  var ResetText = "RESET";


jokeButton.on( 'click', function(e){

    // call function joke and reset
    MakeJoke();
  removeAllJoke();


});

 async function MakeJoke(){

   try {
   jokeButtonDisabled(true);
   jokeLoader.show();
   var randomJoke = await getRandomJoke();

   await MakeJokeList(randomJoke);

   jokeLoader.hide();

   if(randomJoke!=null){
       count++;
     }
   if(count=!5){
         jokeButtonDisabled(false);
   }
   if(count == 5 ){
         jokeButtonDisabled(true);
         count = 0;
         jokeButtonDisabled(false);
          jokesList.empty();
         check();
         removeAllJoke();
        

   }
 

console.log(count);

}catch(err){
    alert(err);
    jokeButtonDisabled(false);
    jokeLoader.hide();

   }

 }

 ////////////////end function make joke//////////////////

 function check(){
       jokeButtonDisabled(false);
       jokeButton.text(ResetText);
 }

 function jokeButtonDisabled(val){
     jokeButton.attr('disabled', val);
 }

 function getRandomJoke(){
     return JOKES_SERVICE.get(); 
 }
 function MakeJokeList(joke){

     var list = `<li> 
                 <p>${joke}</p>
               </li>`;

    jokesList.append(list);
 }

 function removeAllJoke(){
      count = 0;
      jokeButtonDisabled(false);
      jokesList.empty();
    
    }


      });