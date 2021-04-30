import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dobFilter',
  pure:true
})
export class DobFilterPipe implements PipeTransform {

  transform(list: any[], column: string ): any {
    let sortArray=list.sort((a,b)=>{
      if(a[column] > b[column]){
        return 1;
      }if(a[column] > b[column]){
        return -1;
      }
      return 0;
    });
    return sortArray;
  }

}
