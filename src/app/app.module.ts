import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { TeamComponent } from './components/common/team/team.component';
import { NavbarComponent } from './components/common/navbar/navbar.component';
import { ContactComponent } from './components/common/contact/contact.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { CollaboratorsComponent } from './components/common/collaborators/collaborators.component';
import { BlogComponent } from './components/common/blog/blog.component';
import { TestimonialComponent } from './components/common/testimonial/testimonial.component';
import { SkillsComponent } from './components/common/skills/skills.component';
import { PricingComponent } from './components/common/pricing/pricing.component';
import { CounterComponent } from './components/common/counter/counter.component';
import { ServicesComponent } from './components/common/services/services.component';
import { FeatureComponent } from './components/common/feature/feature.component';
import { PromoComponent } from './components/common/promo/promo.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    TeamComponent,
    NavbarComponent,
    ContactComponent,
    FooterComponent,
    CollaboratorsComponent,
    BlogComponent,
    TestimonialComponent,
    SkillsComponent,
    PricingComponent,
    CounterComponent,
    ServicesComponent,
    FeatureComponent,
    PromoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
