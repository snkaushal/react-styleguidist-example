module.exports = {
  title: 'React Style Guide Example',
  skipComponentsWithoutExample: true,
  // theme: {
  //   color: {
  //     link: 'firebrick',
  //     linkHover: 'salmon'
  //   },
  //   fontFamily: {
  //     base: '"Comic Sans MS", "Comic Sans", cursive'
  //   }
  // },
  // styles: {
  //   Logo: {
  //     logo: {
  //       animation: 'blink ease-in-out 2000ms infinite'
  //     },
  //     '@keyframes blink': {
  //       to: { opacity: 0 }
  //     }
  //   }
  // },
  usageMode: 'expand',
  pagePerSection: true,
  sections: [
    {
      name: 'Lib',
      content: 'src/lib/Readme.md',
      sections: [
        {
          name: 'Components',
          content: 'src/lib/components/Readme.md',
          components: 'src/lib/components/*/*.{js,jsx,ts,tsx}',
          sections: [
            {
              name: 'Cards',
              content: 'src/lib/components/Cards/Readme.md',
              components: 'src/lib/components/Cards/*/*.{js,jsx,ts,tsx}',
            }
          ]
        }
      ]
    }
  ],
  // components: 'src/lib/components/Cards/*/*.{js,jsx,ts,tsx}',
  propsParser: require('react-docgen-typescript').withCustomConfig('./tsconfig.json').parse,
  resolver: require('react-docgen').resolver.findAllComponentDefinitions,
};
