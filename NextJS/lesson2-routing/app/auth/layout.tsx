import Footer from "@/components/Footer"
import React from "react"

interface RoutesLayoutProps {
    children: React.ReactNode
}

const RoutesLayout = ({ children }: RoutesLayoutProps) => {
    return (
        <>
            <div>{children}</div>
            <Footer />
        </>
    )
}

export default RoutesLayout