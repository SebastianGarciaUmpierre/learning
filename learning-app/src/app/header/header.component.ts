import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})

export class HeaderComponent {
// send a string from child to Parent component
// instantiate EventEmitter and apply Output decorator 
@Output() displaySection = new EventEmitter<String>();

// on nav-click, send string of location to navigate to
navClick(section: String) {
    // eventEmitter object to emit the section string passed on click
    this.displaySection.emit(section);
}


}