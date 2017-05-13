import { Pipe, PipeTransform } from '@angular/core';
import { Hike } from './hike.model';

@Pipe({
  name: 'difficulty',
  pure: false
})
export class DifficultyPipe implements PipeTransform {

  transform(input: Hike[], hikeDifficulty) {
    var output: Hike[] = [];
      if(hikeDifficulty === "easy") {
        for (var i = 0; i< input.length; i++) {
          if (input[i].difficulty.toLowerCase() === "easy") {
             output.push(input[i]);
           }
        }
        return output;
      } else if (hikeDifficulty === "moderate") {
        for(var i = 0; i < input.length; i++) {
          if(input[i].difficulty.toLowerCase() === "moderate") {
            output.push(input[i]);
         }
       }
       return output;
     } else if (hikeDifficulty === "difficult") {
        for(var i = 0; i < input.length; i++) {
          if(input[i].difficulty.toLowerCase() === "difficult") {
            output.push(input[i]);
         }
       }
       return output;
      } else {
      return input;
    }
  }
}
