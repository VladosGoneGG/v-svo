import { useQuery } from '@tanstack/react-query'
import { fetchDynamicPage } from '../services/pages.service'

export function useDynamicPage(pageType, slug) {
	return useQuery({
		queryKey: ['dynamicPage', pageType, slug],
		queryFn: () => fetchDynamicPage(pageType, slug),
		retry: false,
	})
}
