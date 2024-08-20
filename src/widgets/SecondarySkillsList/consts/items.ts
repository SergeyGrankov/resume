interface IItem {
  title: string;
  text: string;
  delay: number;
}

export const items: IItem[] = [
  {
    title: 'Task estimation',
    text: 'I participated in the estimation of multiple tasks and their planning. I was involved in creating a plan for weeks ahead for work on a large project.',
    delay: 0.2,
  },
  {
    title: 'Responsive cross-browser layout',
    text: 'Experienced in developing a responsive website interface with support for responsiveness in complex logical blocks with a large number of details.',
    delay: 0.4,
  },
  {
    title: 'Architectural planning',
    text: 'I transferred a large commercial project of the largest real estate platform in Russia to a new architectural base.',
    delay: 0.6,
  },
  {
    title: 'Participation in CI/CD processes',
    text: 'I Took an active role in deploying the project to production and test environments, monitored website performance, identified errors on multiple pages, and worked on resolving these issues.',
    delay: 0.8,
  },
];
