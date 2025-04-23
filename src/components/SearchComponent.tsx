'use client'

import { useTranslations } from 'next-intl';
import { useSearch } from './SearchContext';
import { Input } from './ui/Input'
import { Search } from 'lucide-react'

const SearchComponent = () => {
    const t = useTranslations()
    const { searchQuery, setSearchQuery } = useSearch();

    return (
        <section className="flex items-center gap-2">
            <Search size={25} />
            <Input
                type="text"
                placeholder={t('search')}
                name="title"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="h-15 text-xl dark:bg-zinc-300 dark:text-zinc-900 bg-zinc-900"
            />
        </section >
    )
}

export default SearchComponent