const fs = require('fs');
const inquirer = require("inquirer");
const jsToYaml = require('json-to-pretty-yaml');
const slugify = require('slugify');

( async () => {
  const args = process.argv;
  if (args.length < 3) {
    const { title, tags, description} = await inquirer.prompt([{
      type: 'input',
      name: 'title',
      message: 'Post Title'
    },
    {
      type: 'input',
      name: 'tags',
      message: 'Tags (Comma seperated):'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Post Description'
    }
  ])
  
  const slug = slugify(title)
  const createdOn = new Date()
  const blogPostFolder = './content/posts';
  const tagsList = tags.split(',').map(t => t.trim());

  if (!fs.existsSync(blogPostFolder)) {
    fs.mkdirSync(blogPostFolder, {
      recursive: true
  });
  
  const yaml = jsToYaml.stringify({
    slug,
    title,
    date: createdOn.toISOString(),
    published: false,
    description: description,
    tags: tagsList,
    canonical_url: true
  });

  const markdown = prettier.format(`---\n${yaml}\n---\n`, {
    parser: 'markdown',
    singleQuote: true
  });
})()