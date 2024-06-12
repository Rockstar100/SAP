import { Component } from '@angular/core'
import { RouterModule } from '@angular/router'
import { LogoBoxComponent } from '@components/logo-box/logo-box.component'
import { createdBy, developedByLink } from 'src/app/states/constants'

@Component({
  selector: 'about-product-footer',
  standalone: true,
  imports: [RouterModule, LogoBoxComponent],
  templateUrl: './footer.component.html',
  styles: ``,
})
export class FooterComponent {
  author = createdBy
  developBy = developedByLink
  socialIcon = ['facebook', 'instagram', 'linkedin']
  company = ['Features', 'Reviews', 'How it works', 'Pricing']
  support = ['Help center', 'Terms of service', 'Legal', 'Privacy policy']
}