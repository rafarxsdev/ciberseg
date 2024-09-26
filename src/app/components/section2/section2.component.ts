import { Component } from '@angular/core';

@Component({
  selector: 'app-section2',
  standalone: true,
  imports: [],
  templateUrl: './section2.component.html',
  styleUrl: './section2.component.scss'
})
export class Section2Component {
  conferencistas = [
    {
      nombre: 'Cristian Henao',
      foto: 'https://www.gravatar.com/avatar?d=mp',
      perfil: 'Instructor ADSO',
      linkedin: '#',
      youtube: '#',
    },
    {
      nombre: 'Henry Falla',
      foto: 'https://www.gravatar.com/avatar?d=mp',
      perfil: 'Instructor ADSO',
      linkedin: '#',
      youtube: '#',
    },
    {
      nombre: 'Hugo Hernan Henao Hernandez',
      foto: 'https://www.gravatar.com/avatar?d=mp',
      perfil: 'Instructor ADSO',
      linkedin: '#',
      youtube: '#',
    },
    {
      nombre: 'Carlos Enrique Navia',
      foto: 'https://www.gravatar.com/avatar?d=mp',
      perfil: 'Instructor ADSO',
      linkedin: 'https://www.linkedin.com/in/carlosnavia/',
      youtube: 'https://www.youtube.com/carlosnavia',
    },
    {
      nombre: 'Rafael Perez Grisales',
      foto: 'https://www.gravatar.com/avatar?d=mp',
      perfil: 'Instructor ADSO - Instructor Tecnico en Control de la Seguridad Digital',
      linkedin: 'https://www.linkedin.com/in/rafaelperezgrisales/',
      youtube: 'https://www.youtube.com/rafaelperez',
    },
    {
      nombre: 'Daniel Garibello',
      foto: 'https://www.gravatar.com/avatar?d=mp',
      perfil: 'Aprendiz Tecnico en Control de la Seguridad Digital',
      linkedin: '#',
      youtube: '#',
    },
    {
      nombre: 'Edwin Rozo Gomez',
      foto: 'https://www.gravatar.com/avatar?d=mp',
      perfil: 'Instructor ADSO',
      linkedin: '#',
      youtube: '#',
    },
    {
      nombre: 'Arle MOrales',
      foto: 'https://www.gravatar.com/avatar?d=mp',
      perfil: 'Instructor ADSO',
      linkedin: '#',
      youtube: '#',
    },
    {
      nombre: 'Jenny ',
      foto: 'https://www.gravatar.com/avatar?d=mp',
      perfil: '',
      linkedin: '#',
      youtube: '#',
    },
  ];
}
