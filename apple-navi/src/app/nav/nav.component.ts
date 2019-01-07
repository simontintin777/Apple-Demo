import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  @ViewChild('open') open: ElementRef;
  @ViewChild('screen') screen: ElementRef;
  @ViewChild('connBars') connBars: ElementRef;
  @ViewChild('intellBars') intellBars: ElementRef;
  @ViewChild('workBars') workBars: ElementRef;
  title = 'Talent Point';
  isOpen = false;
  isIntellOpen = false;
  isConnOpen = false;
  isWorkOpen = false;
  constructor() { }

  ngOnInit() {
  }
  activate() {
    this.isOpen = !this.isOpen;
    if (this.isOpen) {
      this.title = 'Recruitment';
      this.open.nativeElement.classList.add('active');
      this.screen.nativeElement.style.backgroundColor = '#000000';
    } else {
      this.isIntellOpen = false;
      this.isConnOpen = false;
      this.title = 'Talent Point';
      this.open.nativeElement.classList.remove('active');
      this.screen.nativeElement.style.backgroundColor = '#aaa9a9cc';
    }
  }
  openIntell() {
    this.isIntellOpen = !this.isIntellOpen;
    const intell = this.intellBars.nativeElement;
    if (this.isIntellOpen === true) {
      intell.classList.remove('togglePanel');
      intell.classList.add('togglePanel2');
      intell.children[0].classList.add('active');
      intell.children[1].classList.add('active');
    } else {
      intell.children[0].classList.remove('active');
      intell.children[1].classList.remove('active');
      intell.classList.add('togglePanel');
    }
  }
  openConn() {
    this.isConnOpen = !this.isConnOpen;
    const conn = this.connBars.nativeElement;
    if (this.isConnOpen === true) {
      conn.classList.remove('togglePanel');
      conn.classList.add('togglePanel2');
      conn.children[0].classList.add('active');
      conn.children[1].classList.add('active');
    } else {
      conn.children[0].classList.remove('active');
      conn.children[1].classList.remove('active');
      conn.classList.add('togglePanel');
    }
  }
  openWork() {
    this.isWorkOpen = !this.isWorkOpen;
    const work = this.workBars.nativeElement;
    if (this.isWorkOpen === true) {
      work.classList.remove('togglePanel');
      work.classList.add('togglePanel2');
      work.children[0].classList.add('active');
      work.children[1].classList.add('active');
    } else {
      work.children[0].classList.remove('active');
      work.children[1].classList.remove('active');
      work.classList.add('togglePanel');
    }
  }
}
