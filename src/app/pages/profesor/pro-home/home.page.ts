import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { AnimationController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements AfterViewInit {

  @ViewChild('animacion') animacion!: ElementRef;

  constructor(private aniCtrl: AnimationController) { }

  ngAfterViewInit(): void {
    const mi_animacion = this.aniCtrl.create()
    .addElement(this.animacion.nativeElement)
    .duration(2000)
    .iterations(Infinity)
    .keyframes([
      { offset: 0, transform: 'scale(1)', opacity: '0.5' },
      { offset: 0.5, transform: 'scale(0.5)', opacity: '1' },
      { offset: 1, transform: 'scale(1)', opacity: '0.5' },
    ]);
    mi_animacion.play();
  }

  ngOnInit() {
  }

}

