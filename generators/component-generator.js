const { inputRequired } = require('./utils');

module.exports = function(plop) {
  const baseUrl = '../src/components';

  plop.setGenerator('component', {
    description: 'component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: `What's the name of this new component?`,
        validate: inputRequired('name'),
      },
      {
        type: 'checkbox',
        name: 'files',
        message: 'What files do you want to generate?',
        choices: () => [
          {
            name: `Styles`,
            value: 'styles',
            checked: true,
          },
          {
            name: `Unit tests`,
            value: 'test',
            checked: true,
          },
          {
            name: `Stories`,
            value: 'stories',
            checked: true,
          },
        ],
      },
      {
        type: 'confirm',
        name: 'hasProps',
        message: `Does this component have any props?`,
      },
    ],
    actions: data => {
      const actions = [
        {
          type: 'add',
          path: `${baseUrl}/{{lowerCase name}}/{{lowerCase name}}.tsx`,
          templateFile: 'templates/component/component.hbs',
          data: {
            includeStyles: data.files.includes('styles'),
            hasProps: data.hasProps,
          },
        },
        {
          type: 'add',
          path: `${baseUrl}/{{lowerCase name}}/index.ts`,
          templateFile: 'templates/component/index.hbs',
        },
      ];

      if (data.files.includes('styles')) {
        actions.push({
          type: 'add',
          path: `${baseUrl}/{{lowerCase name}}/{{lowerCase name}}.styled.tsx`,
          templateFile: 'templates/component/styled.hbs',
        });
      }

      if (data.files.includes('test')) {
        actions.push({
          type: 'add',
          path: `${baseUrl}/{{lowerCase name}}/{{lowerCase name}}.test.tsx`,
          templateFile: 'templates/component/test.hbs',
        });
      }

      if (data.files.includes('stories')) {
        actions.push({
          type: 'add',
          path: `${baseUrl}/{{lowerCase name}}/{{lowerCase name}}.stories.tsx`,
          templateFile: 'templates/component/stories.hbs',
        });
      }

      return actions;
    },
  });
};
