import {Pipe, PipeTransform}  from '@angular/core';


@Pipe({name: 'millionNumber'})
export class MillionNumberPipe implements PipeTransform {

    transform(value: string) : string{

        if(isNaN(parseInt(value)))
            return '-1';
        return '$' + parseInt(value)/1000000 + ' million.';

    }
}