import { pagesMock } from '../mocks/pages.mock'

export async function fetchDynamicPage(pageType, slug) {
	await new Promise(r => setTimeout(r, 250))

	const page = pagesMock?.[pageType]?.[slug]
	if (!page) {
		const err = new Error('Not found')
		err.status = 404
		throw err
	}

	return page
}
