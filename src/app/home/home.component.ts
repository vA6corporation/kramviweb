import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from '../header/header.component';
import { HeroComponent } from '../hero/hero.component';
import { BenefitsComponent } from '../benefits/benefits.component';
import { PlansComponent } from '../plans/plans.component';
import { ClientsComponent } from '../clients/clients.component';
import { EquipmentComponent } from '../equipment/equipment.component';
import { ContactComponent } from '../contact/contact.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [CommonModule, FormsModule, HeaderComponent, HeroComponent, BenefitsComponent, PlansComponent, ClientsComponent, ContactComponent, FooterComponent],
    templateUrl: './home.component.html',
    styleUrl: './home.component.sass'
})
export class HomeComponent {
    basic = [
        'Vende hasta S/ 30 mil mensuales',
        'Punto de venta',
        'Control de inventario',
        'Reportes de venta',
        'Soporte tecnico 24/7',
        'Boleta y factura electronica',
        'Sin tienda virtual',
    ]
    standar = [
        'Vende sin limites',
        'Punto de venta',
        'Control de inventario',
        'Reportes de venta',
        'Soporte tecnico 24/7',
        'Boleta y factura electronica',
        'Sin tienda virtual'
    ]
    enterprice = [
        'Vende sin limites',
        'Punto de venta',
        'Control de inventario',
        'Reportes de venta',
        'Soporte tecnico 24/7',
        'Boleta y factura electronica',
        'Tienda virtual',
    ]
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
