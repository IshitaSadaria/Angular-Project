import { Component, Input, computed, input } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {

  // @Input() avatar!: string;
  // @Input() name!: string;

  avatar = input.required<string>();
  name = input.required<string>();

  imagePath = computed(() => {
    return 'assets/users/' + this.avatar();
  })
  // get imagePath() {
  //   return 'assets/users/' + this.avatar;
  // }
  
  onSelectUser() {
  }
}
