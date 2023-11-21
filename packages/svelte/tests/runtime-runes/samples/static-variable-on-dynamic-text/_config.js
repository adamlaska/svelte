import { test } from '../../test';

export default test({
	html: `
		<p>static1 reactive1</p>
		<button>update</button>
	`,

	async test({ assert, target }) {
		const btn = target.querySelector('button');
		await btn?.click();
		assert.htmlEqual(
			target.innerHTML,
			`
				<p>static1 reactive2</p>
				<button>update</button>
			`
		);
	}
});
