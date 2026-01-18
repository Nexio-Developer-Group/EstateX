const Properties = () => {
    return (
        <div className="min-h-screen p-8">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-4xl font-bold text-foreground mb-6">Properties</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Placeholder for property cards */}
                    <div className="p-6 border border-border rounded-lg bg-card">
                        <h3 className="text-xl font-semibold mb-2">Property 1</h3>
                        <p className="text-muted-foreground">Coming soon...</p>
                    </div>
                    <div className="p-6 border border-border rounded-lg bg-card">
                        <h3 className="text-xl font-semibold mb-2">Property 2</h3>
                        <p className="text-muted-foreground">Coming soon...</p>
                    </div>
                    <div className="p-6 border border-border rounded-lg bg-card">
                        <h3 className="text-xl font-semibold mb-2">Property 3</h3>
                        <p className="text-muted-foreground">Coming soon...</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Properties
