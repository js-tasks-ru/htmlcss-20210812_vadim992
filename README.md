# PostCSS

npm i -D postcss postcss-cli
npm i -D postcss-scss postcss-import postcss-advanced-variables postcss-nested postcss-strip-inline-comments
npm i -D autoprefixer
npm i -D cssnano

browserstack.com

# StyleLint
stylelint.io
что делает: ищет ошибки форматрирования кода, а правила в конфиге .stylelintrc.json

1. Use npm to install stylelint and its standard configuration:
npm i -D stylelint stylelint-config-standard

2. Create a .stylelintrc.json configuration file in the root of your project:
{
  "extends": "stylelint-config-standard"
}

3. Run stylelint on, for example, all the CSS files in your project:
npx stylelint "**/*.css"
This will lint your CSS for possible errors and stylistic issues.

search "npm stylelint-config-airbnb" - популярный конфиг для stylelint

расширение для линтера в редакторе vscode:
  stylelint - (найти по картинке костюма)

# Prettier
prettier.io
что делает: форматирует код
статья: Форматирование кода с помощью Prettier в Visual Studio Code
https://www.digitalocean.com/community/tutorials/how-to-format-code-with-prettier-in-visual-studio-code-ru

// https://prettier.io/docs/en/install.html
1. npm i -D --save-exact prettier
2. echo {}> .prettierrc.json
3. touch .prettierignore
  # Ignore artifacts:
  build
  coverage
  ..
  *.html  - если не нужно форматрифать html-файлы


Интеграция  prettier с редактором vscode:
prettier-vscode может быть установлен с помощью боковой панели расширения - она ​​называется «Prettier - Code formatter»

// Отключает все правила, которые не нужны или могут противоречить Prettier
npm i -D stylelint-config-prettier
// Затем добавьте stylelint-config-prettierк extendsмассиву в вашем .stylelintrc.*файле. Не забудьте поставить // его в последнюю очередь, чтобы он переопределил другие конфигурации.
{ 
  "extends" : [ 
    // другие 
    конфигурации 
  ... "stylelint-config-prettier" ] 
}