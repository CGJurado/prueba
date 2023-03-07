import { HttpClient } from '@angular/common/http';
import { Pipe, PipeTransform } from '@angular/core';
import { map, Observable } from 'rxjs';

@Pipe({
  name: 'translate',
  standalone: true
})
export class TranslatePipe implements PipeTransform {

  constructor(private http: HttpClient) {}

  transform(value: string): Observable<string> {
    return this.getLiteral(value)
  }

  getLiteral(value: string): Observable<string> {
    return this.http.get<{[key: string]: string}>('../../../assets/literals.json').pipe(
      map((res) => res[value])
    )
  }

}
