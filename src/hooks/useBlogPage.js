import { useQuery } from '@tanstack/react-query'
import { fetchBlogPage } from '../services/blogPage.service'

export function useBlogPage() {
	return useQuery({
		queryKey: ['blogPage'],
		queryFn: fetchBlogPage,
	})
}
