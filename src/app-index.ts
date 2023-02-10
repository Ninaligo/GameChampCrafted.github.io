import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { Router } from '@vaadin/router';

import './pages/app-home';
import './components/header';
import './styles/global.css';

@customElement('app-index')
export class AppIndex extends LitElement {
	static get styles() {
		return css`
    `;
	}

	constructor() {
		super();
	}

	firstUpdated() {
		// this method is a lifecycle even in lit
		// for more info check out the lit docs https://lit.dev/docs/components/lifecycle/

		// For more info on using the @vaadin/router check here https://vaadin.com/router
		const router = new Router(this.shadowRoot?.querySelector('#routerOutlet'));
		router.setRoutes([
			// temporarily cast to any because of a Type bug with the router
			{
				path: (import.meta as any).env.BASE_URL,
				animate: true,
				children: [
					{ path: '', component: 'app-home' },
					{
						path: 'about',
						component: 'app-about',
						action: async () => {
							await import('./pages/app-about/app-about.js');
						},
					},
					{
						path: 'shows',
						component: 'app-shows',
						action: async () => {
							await import('./pages/app-shows/app-shows.js');
						},
					}
				],
			} as any,
		]);
	}

	render() {
		return html`
      <div>
        <main>
          <div id="routerOutlet"></div>
        </main>
      </div>
    `;
	}
}
