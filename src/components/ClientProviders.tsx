'use client'

import { ThemeProvider } from "@/components/Theme-provider"
import { Toaster } from "react-hot-toast"
import { ReactNode, useEffect, useState } from "react"

export default function ClientProviders({ children }: { children: ReactNode }) {
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null

    return (
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            {children}
            <Toaster position="bottom-center" reverseOrder={false} />
        </ThemeProvider>
    )
}