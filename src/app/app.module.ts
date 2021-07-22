import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './shared/nav/nav.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { HeroComponent } from './shared/hero/hero.component';
import { OurServicesComponent } from './shared/our-services/our-services.component';
import { WhyKulkulComponent } from './shared/why-kulkul/why-kulkul.component';
import { TestimonialComponent } from './shared/testimonial/testimonial.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LandingPageComponent,
    HeroComponent,
    OurServicesComponent,
    WhyKulkulComponent,
    TestimonialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
