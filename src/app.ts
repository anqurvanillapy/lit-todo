import { html, render } from 'lit-html'

const tmpl = (name: string) =>
  html`<p>Hello, ${name}!</p>`

render(tmpl('anqur'), document.body)
