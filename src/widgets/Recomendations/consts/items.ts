export type TItem = Record<
  'src' | 'name' | 'surname' | 'post' | 'role' | 'telephone',
  string
>;

export const items: TItem[] = [
  {
    src: '/widgets/Recomendations/pankratov.webp',
    name: 'Andrey',
    surname: 'P.',
    post: 'Senior Frontend-developer',
    role: '(team-lead)',
    telephone: '+7 (926)-462-09-53',
  },
  {
    src: '/widgets/Recomendations/beshlyaga.webp',
    name: 'Alexander',
    surname: 'B.',
    post: 'Senior Frontend-developer',
    role: '(tech-lead)',
    telephone: '+7 (926)-816-90-59',
  },
  {
    src: '/widgets/Recomendations/opalev.webp',
    name: 'Alexey',
    surname: 'O.',
    post: 'Senior Backend-developer',
    role: '(head of the IT sector)',
    telephone: '+7 (912)-212-60-74',
  },
  {
    src: '/widgets/Recomendations/ryazanova.webp',
    name: 'Alexandra',
    surname: 'R.',
    post: 'Senior Backend-developer',
    role: '(tech-lead)',
    telephone: '+7 (916)-538-70-24',
  },
];
