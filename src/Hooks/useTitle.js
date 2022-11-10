import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - PHOTOHOLIC`;
    }, [title])
}

export default useTitle;