interface IItem {
  title: string;
  text: string;
  duration: number;
}

export const items: IItem[] = [
  {
    title: 'Task estimation',
    text: 'I participated in the estimation of multiple tasks and their planning. I was involved in creating a plan for weeks ahead for work on a large project.',
    duration: 1,
  },
  {
    title: 'Responsive cross-browser layout',
    text: 'Experienced in developing a responsive website interface with support for responsiveness in complex logical blocks with a large number of details.',
    duration: 4,
  },
  {
    title: 'Architectural planning',
    text: 'Transferred a large commercial project of the largest real estate platform in Russia to a new architectural base.',
    duration: 7,
  },
  {
    title: 'Participation in CI/CD processes',
    text: 'Took an active role in deploying the project to production and test environments, monitored website performance, identified errors on multiple pages, and worked on resolving these issues.',
    duration: 10,
  },
];
