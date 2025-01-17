import { Output, Injectable, EventEmitter } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable, map } from 'rxjs';
import { MatDrawerMode } from '@angular/material/sidenav';

@Injectable({
  providedIn: 'root'
})
export class ScreenService {
  @Output() changed = new EventEmitter();

  public activeComponent  = ''
  private observer : Observable<BreakpointState>;

  constructor(private breakpointObserver: BreakpointObserver) {
    this.observer = this.breakpointObserver.observe([Breakpoints.XSmall, Breakpoints.Small, Breakpoints.Medium, Breakpoints.Large,Breakpoints.XLarge])
  
   this.observer
    .subscribe((t) => this.changed.next(t));
  }

  private isLargeScreen() {
    const isLarge = this.breakpointObserver.isMatched(Breakpoints.Large);
    const isXLarge = this.breakpointObserver.isMatched(Breakpoints.XLarge);

    return isLarge || isXLarge;
  }



  public get sizes(): Record<string, boolean> {
    return {
      'screen-x-small': this.breakpointObserver.isMatched(Breakpoints.XSmall),
      'screen-small': this.breakpointObserver.isMatched(Breakpoints.Small),
      'screen-medium': this.breakpointObserver.isMatched(Breakpoints.Medium),
      'screen-large': this.isLargeScreen(),
      'screen-x-large:': this.breakpointObserver.isMatched(Breakpoints.XLarge),
    };
  }

  public get cols() : Observable<number>{
    return this.observer
    .pipe(
      map( o => {            
        if(o.breakpoints[Breakpoints.XSmall]) return 1;
        if(o.breakpoints[Breakpoints.Small]) return 2;
        if(o.breakpoints[Breakpoints.Medium] || o.breakpoints[Breakpoints.Large] || (o.breakpoints[Breakpoints.XLarge])) return 3;
        return 3                        
      })
    )
  }

  public get sideNavMode() : Observable<MatDrawerMode>{
    return this.observer
    .pipe(
      map( o => {            
        if(o.breakpoints[Breakpoints.XSmall]) return 'over';
        if(o.breakpoints[Breakpoints.Small]) return 'over';
        if(o.breakpoints[Breakpoints.Medium]) return 'over';
        if(o.breakpoints[Breakpoints.Large]) return 'side';
        if(o.breakpoints[Breakpoints.XLarge]) return 'side';
        return 'side'                        
      })
    )
  }



  public get leftSideNavWidth() : Observable<string>{
    return this.observer
    .pipe(
      map( o => {            
        if(o.breakpoints[Breakpoints.XSmall]) return '100vw';
        if(o.breakpoints[Breakpoints.Small]) return '70vw';
        if(o.breakpoints[Breakpoints.Medium]) return '40vw';
        if(o.breakpoints[Breakpoints.Large]) return '20vw';
        if(o.breakpoints[Breakpoints.XLarge]) return '20vw';
        return '33vw'                        
      })
    )
  }


  public calcWidth( n : number, margin: string = '0px' ){
    return this.observer
    .pipe(
      map( o => {            
        if(o.breakpoints[Breakpoints.XSmall]) return `calc(100% - ${margin})`;
        if(o.breakpoints[Breakpoints.Small]) return `calc(100% - ${margin})`;
        if(o.breakpoints[Breakpoints.Medium]) return `calc(100% / ${n} - ${margin})`;
        if(o.breakpoints[Breakpoints.Large]) return `calc(100% / ${n} - ${margin})`;
        if(o.breakpoints[Breakpoints.XLarge]) return `calc(100% / ${n} - ${margin})`;
        return 'side'                        
      })
    )
  }

 
  
}