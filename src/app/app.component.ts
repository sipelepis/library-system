import {
  Component,
  OnInit,
  WritableSignal,
  effect,
  signal,
} from '@angular/core';
import { initFlowbite } from 'flowbite';
import { Observable, map, shareReplay, timer } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  private _time$: Observable<Date> = timer(0, 1000).pipe(
    map((tick) => new Date()),
    shareReplay(1)
  );

  get time() {
    return this._time$;
  }

  ngOnInit(): void {
    initFlowbite();
  }
}
