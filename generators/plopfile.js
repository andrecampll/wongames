module.exports = function (plop) {

  plop.setGenerator('component', {
    description: 'application component login',

    // inquirer prompts
    prompts: [{
      type: 'input',
      name: 'name',
      message: 'Component name please?'
    }],

    // actions to perform
    actions: [
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/index.tsx',
        templateFile: 'templates/index.tsx.hbs',
      },
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/index.stories.tsx',
        templateFile: 'templates/stories.tsx.hbs',
      },
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/styles.ts',
        templateFile: 'templates/styles.ts.hbs',
      },
      {
        type: 'add',
        path: '../src/__tests__/components/{{pascalCase name}}/index.spec.tsx',
        templateFile: 'templates/index.spec.tsx.hbs',
      },
    ]
  });

};
