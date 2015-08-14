var app = angular.module('myApp', []);

app.controller('myCtrl', function($scope) {
  // MAP of letters to evil words!
     var translate_map = {
    'a': ["alpha", "al-fah", "are"],
     'b': ["bravo", "brah-voh", "bdellium"],
     'c': ["charlie", "char-lee", "cue"],
     'd': ["delta", "dell-tar", "django"],
     'e': ["echo", "eck-oh", "eye"],
     'f': ["foxtrot", "foks-trot", "faux"],
     'g': ["golf", "go-elf", "gneiss"],
     'h': ["hotel", "hoh-tel", "heir"],
     'i': ["india", "in-dee-ah", "ian"],
     'j': ["juliette", "jew-lee-ett", "jalapeno"],
     'k': ["kilo", "key-loh", "know"],
     'l': ["lima", "lee-mah", "llama"],
     'm': ["mike", "mike", "mnemonic"],
     'n': ["november", "no-vem-ber", "no"],
     'o': ["oscar", "oss-cah", "ouija"],
     'p': ["papa", "pah-pah" ,"phlegm"],
     'q': ["quebec", "keh-beck", "qat"],
     'r': ["romeo", "roh-me-oh", "right"],
     's': ["sierra", "see-air-ah", "sea"],
     't': ["tango", "tang-go","tsunami"],
     'u': ["uniform", "you-ni-form", "urn"],
     'v': ["victor", "vik-tah", "vaduz"],
     'w': ["whiskey" , "wiss-key", "write"],
     'x': ["xray", "ecks-ray", "xian"],
     'y': ["yankee", "yang-kee", "you"],
     'z': ["zulu", "zoo-loo", "z"],
     '.': ["stop", "ss-top" ,"period"],
     };
     $scope.translated='Text will appear here';
     $scope.translate_index=0;
     // When userinput is changed this function is called.
     $scope.change = function() {
       if($scope.userinput.length == 0){
         $scope.translated='Text will appear here';
         return
       }
     // Wipe out the translated string, because we are going to rebuild the string.
     $scope.translated = '';
     // for each letter in the inputword
      for (var i = 0, len = $scope.userinput.length; i < len; i++) {

         letter_that_should_be_tranlated = $scope.userinput[i]; // a

         response_from_translate_map = translate_map[letter_that_should_be_tranlated];
          if(response_from_translate_map == undefined){
            $scope.translated += ' ' + letter_that_should_be_tranlated;
          }
          else{
            $scope.translated += ' ' +  response_from_translate_map[$scope.translate_index];
          }
       }
     };
     $scope.activate= function(index){
       $scope.translate_index=index;
        $scope.change();
     }

 });
