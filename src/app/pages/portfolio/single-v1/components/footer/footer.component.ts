import { Component } from '@angular/core'
import { createdBy, developedByLink } from 'src/app/states/constants'

@Component({
  selector: 'single1-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styles: ``,
})
export class FooterComponent {
  author = createdBy
  developBy = developedByLink
}