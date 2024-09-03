// @ts-nocheck comment at the top of the file
// Пришлось отключить, потому что в документации нет внятных дефолтных настроек и их пояснения
import { IOptions } from 'tsparticles-engine';

export const options: IOptions = {
  fullScreen: false,
  autoPlay: true,
  fpsLimit: 120,
  style: {
    width: '100%',
    height: '500px',
    position: 'relative',
  },
  background: {
    opacity: 0.5,
  },
  particles: {
    number: {
      value: 80,
      limit: 160,
      density: {
        enable: true,
        area: 800,
      },
    },
    color: {
      value: ['#e2e3e7'],
    },
    shape: {
      type: 'circle',
    },
    opacity: {
      value: 1,
    },
    size: {
      value: { min: 1, max: 4 },
    },
    links: {
      enable: true,
      distance: 150,
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 2,
      direction: 'none',
      random: true,
      straight: false,
      outModes: 'out',
    },
  },
  interactivity: {
    events: {
      onClick: {
        enable: true,
        mode: 'push',
      },
      onHover: {
        enable: true,
        mode: 'grab',
        parallax: {
          enable: false,
          force: 10,
          smooth: 10,
        },
      },
    },
    modes: {
      push: {
        quantity: 1,
      },
      repulse: {
        distance: 80,
        duration: 0.3,
      },
    },
  },
};
