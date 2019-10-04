import { RegisterService } from '../register.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { HeroService } from '../hero.service';
import { Hero } from '../hero';
import { Register } from '../register';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [HeroService, RegisterService]
})
export class RegisterComponent {
  heroForm: FormGroup;
  hero: Hero = new Hero();
  submitted: boolean = false;
  model: Register = new Register();

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private registerService: RegisterService,
    private router: Router
  ){}

  ngOnInit(): void {
    this.heroForm = new FormGroup({
      name: new FormControl(this.model.name, [
        Validators.required,
        Validators.minLength(10)
      ]),
      email: new FormControl(this.model.email, [
        Validators.required,
        Validators.email
      ])
    });

    this.route.params.subscribe(res => {
      this.heroService.getHeroById(res.id).subscribe((x) => {
        this.hero = x;
        this.model.idHero = this.hero.id;
      });
    });
  }

  get name() { return this.heroForm.get('name'); }
  get email() { return this.heroForm.get('email'); }

  onSubmit() {
    this.submitted = true;

    this.registerService.save(this.model).subscribe(() => {});

    alert("Cadastro efetuado com sucesso!");

    this.router.navigate(['/home']);
  }
}
