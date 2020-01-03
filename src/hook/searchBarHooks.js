import { useState } from "react"

export const useSearchBarHooks = (initialValue = "") => {
    const [searchBar, setSearchBar] = useState(initialValue);

    return {
        searchBar,
        clearSearchBar: () => setSearchBar(""),
        setSearchBar,
    }
}