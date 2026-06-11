import { Button } from '@/components/ui/button'
import React from 'react'

const TestComponent = () => {
    return (
        <div>
            <div className="bg-background text-foreground">
                {/* Your content automatically switches between light/dark */}
            </div>

            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                Click Me
            </Button>

            <Button variant="secondary">
                Secondary Action
            </Button>

            <p className="text-muted-foreground">January 2024</p>
            <div className="bg-muted rounded-lg p-2">Subtle background</div>

            <div className="group bg-card rounded-lg p-6 transition-all duration-300 hover:bg-hover-card-bg hover:border-hover-card-border border-2 border-transparent">
                <h3 className="text-card-foreground">Project Title</h3>
                <p className="text-muted-foreground">Description</p>
            </div>

            <div className="bg-dark-layer-1">Layer 1</div>
            <div className="bg-dark-layer-2">Layer 2</div>
            <div className="bg-dark-layer-3">Layer 3</div>
        </div>
    )
}

export default TestComponent