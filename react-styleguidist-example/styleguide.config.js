const path = require('path');

module.exports = {
  title: 'React Style Guide Example',
  skipComponentsWithoutExample: true,
  pagePerSection: true,
  getComponentPathLine(componentPath) {
    const name = path.basename(componentPath, '.js')
    const dir = path.dirname(componentPath)
    return `import ${name} from '${dir}';`
  },
  sections: [
    {
      name: 'Components',
      content: 'src/lib/components/Readme.md',
      components: () => ['src/lib/components/*/*/*.{js,jsx,ts,tsx}'],
      sections: [
        {
          name: 'Cards',
          content: 'src/lib/components/Cards/Readme.md',
          components: () => ['src/lib/components/Cards/*/*.{js,jsx,ts,tsx}'],
        }
      ],
      sectionDepth: 2,
    },
  ],
  propsParser: require('react-docgen-typescript').withCustomConfig('./tsconfig.json').parse,
  resolver: require('react-docgen').resolver.findAllComponentDefinitions,
};
