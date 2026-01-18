const NotFound = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-background">
            <div className="text-center space-y-4">
                <h1 className="text-9xl font-bold text-primary">404</h1>
                <h2 className="text-3xl font-semibold text-foreground">Page Not Found</h2>
                <p className="text-muted-foreground">
                    The page you're looking for doesn't exist.
                </p>
                <a
                    href="/"
                    className="inline-block mt-4 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity"
                >
                    Go Back Home
                </a>
            </div>
        </div>
    )
}

export default NotFound
