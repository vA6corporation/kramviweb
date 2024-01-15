import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-plans',
    standalone: true,
    imports: [FormsModule, RouterModule],
    templateUrl: './plans.component.html',
    styleUrl: './plans.component.sass'
})
export class PlansComponent {


    discount = 50
    discountBasic = 10
    discountBusiness = 100
    quantityBasic = 1
    quantityPro = 1
    quantityEcommerce = 1
    priceStandar = 50
    priceEnterprice = 100
    priceBusiness = 150


    isMobile() {
        if (navigator.userAgent.match(/Android/i)
            || navigator.userAgent.match(/webOS/i)
            || navigator.userAgent.match(/iPhone/i)
            || navigator.userAgent.match(/iPad/i)
            || navigator.userAgent.match(/iPod/i)
            || navigator.userAgent.match(/BlackBerry/i)
            || navigator.userAgent.match(/Windows Phone/i)
        ) {
            return true;
        } else {
            return false;
        }
    }
}
