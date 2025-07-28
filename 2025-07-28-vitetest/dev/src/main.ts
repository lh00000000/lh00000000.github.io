import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <header>
      <h1>Testing Vite with GitHub Actions</h1>
      <p class="date">July 28, 2025</p>
    </header>
    
    <main>
      
      
      <section>
        <h2>Interactive Demo</h2>
        <p>Here's a simple counter to show that the TypeScript is working:</p>
        <div class="card">
          <button id="counter" type="button"></button>
        </div>
      </section>
      
      <section>
        <h2>Logos</h2>
        <div class="logos">
          <a href="https://vite.dev" target="_blank">
            <img src="${viteLogo}" class="logo" alt="Vite logo" />
          </a>
          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
            <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
          </a>
        </div>
      </section>
    </main>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
