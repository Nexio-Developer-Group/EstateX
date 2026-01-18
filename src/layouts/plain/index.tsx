import { Outlet } from 'react-router-dom'

const PlainLayout = () => {
    return (
        <div className="min-h-screen bg-background">
            <Outlet />
        </div>
    )
}

export default PlainLayout
