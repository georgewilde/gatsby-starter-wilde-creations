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
    ],
    actions: data => {
      const actions = [
        {
          type: 'add',
          path: `${baseUrl}/{{name}}/{{name}}.tsx`,
          templateFile: 'templates/component/component.hbs',
        },
        {
          type: 'add',
          path: `${baseUrl}/{{name}}/index.ts`,
          templateFile: 'templates/component/index.hbs',
        },
      ];

      if (data.files.includes('test')) {
        actions.push({
          type: 'add',
          path: `${baseUrl}/{{name}}/{{name}}.test.tsx`,
          templateFile: 'templates/component/test.hbs',
        });
      }

      if (data.files.includes('stories')) {
        actions.push({
          type: 'add',
          path: `${baseUrl}/{{name}}/{{name}}.stories.tsx`,
          templateFile: 'templates/component/stories.hbs',
        });
      }

      return actions;
    },
  });
};
