import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'reversepipe',
    //pure: false (default is true)
})
export class CustomPipe implements PipeTransform{
    reversedValue?: string;
    transform(value: any, ...args: any[]) {
        this.reversedValue = value.split('').reverse().join('');
        return this.reversedValue;
    }
}