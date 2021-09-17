export default [
  {
    models: ['iPhone 8', 'iPhone 8 Plus', 'iPhone SE', 'iPod Touch - 7th generation'],
    cases: [
      {
        detect: () => (window.screen.height - window.innerHeight) == 40,
        mode: 'collapsed'
      },
      {
        detect: () => (window.screen.height - window.innerHeight) == 20,
        mode: 'overlayed'
      }
    ]
  },
  {
    models: ['iPhone 11'],
    cases: [
      {
        detect: () => (window.screen.height - window.innerHeight) == 100,
        mode: 'collapsed'
      },
      {
        detect: () => (window.screen.height - window.innerHeight) == 48,
        mode: 'overlayed'
      }
    ]
  },
  {
    models: ['iPhone 11 Pro', 'iPhone 11 Pro Max'],
    cases: [
      {
        detect: () => (window.screen.height - window.innerHeight) == 96,
        mode: 'collapsed'
      },
      {
        detect: () => (window.screen.height - window.innerHeight) == 44,
        mode: 'overlayed'
      }
    ]
  },
  {
    models: ['iPhone 12 mini'],
    cases: [
      {
        detect: () => (window.screen.height - window.innerHeight) == 102,
        mode: 'collapsed'
      },
      {
        detect: () => (window.screen.height - window.innerHeight) == 50,
        mode: 'overlayed'
      }
    ]
  },
  {
    models: ['iPhone 12', 'iPhone 12 Pro Max'],
    cases: [
      {
        detect: () => (window.screen.height - window.innerHeight) == 99,
        mode: 'collapsed'
      },
      {
        detect: () => (window.screen.height - window.innerHeight) == 47,
        mode: 'overlayed'
      }
    ]
  }
]
