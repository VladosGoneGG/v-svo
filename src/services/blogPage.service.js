import { blogPageMock } from '../mocks/blogPage.mock'

export async function fetchBlogPage() {
	// имитация реального запроса
	await new Promise(resolve => setTimeout(resolve, 300))

	return blogPageMock
}
