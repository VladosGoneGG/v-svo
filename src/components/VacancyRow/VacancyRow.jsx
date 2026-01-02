import IconList from '../../assets/svg/hi-1.svg?react'
const vacancyItemCls =
	'flex items-center justify-between bg-[#f9f9f9] rounded-[12px] p-4'
const vacancyTitleCls = 'font-golos font-semibold text-[18px]'
const vacancyTagsRowCls =
	'font-golos text-contrast font-medium text-[14px] flex flex-wrap gap-3 leading-none'
const vacancyTagsWrapCls =
	'font-golos text-contrast font-medium text-[14px] flex flex-wrap gap-x-3 gap-y-1 leading-none'

const VacancyRow = ({ title, tags }) => {
	const tagsClass = tags.length > 2 ? vacancyTagsWrapCls : vacancyTagsRowCls

	return (
		<div className={vacancyItemCls}>
			<div className='flex flex-col min-w-0'>
				<p className={vacancyTitleCls}>{title}</p>

				<div className={tagsClass}>
					{tags.map(tag => (
						<span key={tag}>{tag}</span>
					))}
				</div>
			</div>

			<div className='shrink-0 w-10 h-10 rounded-full bg-white flex items-center justify-center'>
				{/* принудительно чёрный (даже если svg с жёсткими fill/stroke) */}
				<IconList className='w-5 h-5 [&_*]:!fill-black ' />
			</div>
		</div>
	)
}

export default VacancyRow
