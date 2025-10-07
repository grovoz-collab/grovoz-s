"use client";
import React from 'react'; // Import React for component typing
import { ArrowRight, Monitor, Zap, CheckCircle, Smartphone, BarChart3, Clock, TrendingUp, LucideIcon } from "lucide-react";

// --- TYPE DEFINITIONS ---

// 1. Define the type for a single toggle object
interface ToggleItem {
    label: string;
    status: boolean;
    icon: LucideIcon; // Use LucideIcon type for the icon component
}

// 2. Define the props for the ActionPanel component
interface ActionPanelProps {
    stageId: number; // FIX: Explicitly type stageId as a number
}

// 3. Define the props for the ToggleSwitch component
interface ToggleSwitchProps {
    status: boolean;
}


// --- HELPER COMPONENTS ---

// Helper function for rendering the toggle switch
const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ status }) => (
    <div className={`relative w-10 h-6 rounded-full transition-all duration-300 ${status ? 'bg-green-500' : 'bg-gray-300'}`}>
        {/* FIX: Changed class to className */}
        <div className={`absolute left-0 top-0.5 w-5 h-5 bg-white rounded-full shadow transition-all duration-300 ${status ? 'translate-x-4' : 'translate-x-0.5'}`}></div>
    </div>
);

// Helper component for the Action Panel (Right Side)
// FIX: Apply the ActionPanelProps interface to the component
const ActionPanel: React.FC<ActionPanelProps> = ({ stageId }) => {
    let title = "";
    let description = "";
    // FIX: Explicitly type toggles as an array of ToggleItem
    let toggles: ToggleItem[] = [];

    // Define content for each stage's action panel
    switch (stageId) {
        case 1: // Discovery
        title = "Discovery Action Panel";
        description = "Activate controls to initiate deep-dive analysis and define the strategic perimeter.";
        toggles = [
            { label: "Conduct Market Research", status: true, icon: BarChart3 },
            { label: "Define Target Profile", status: true, icon: Smartphone },
            { label: "Review Stakeholder Interviews", status: true, icon: Clock },
            { label: "Finalize Budget Scope", status: false, icon: CheckCircle },
        ];
        break;
        case 2: // Audit
        title = "Audit Control Panel";
        description = "Run specialized scans and analyses to identify technical debt and performance bottlenecks.";
        toggles = [
            { label: "Technical SEO Scan", status: true, icon: CheckCircle },
            { label: "Competitor Benchmarking", status: true, icon: TrendingUp },
            { label: "Content Gap Analysis", status: false, icon: Monitor },
            { label: "Performance Report Generation", status: true, icon: BarChart3 },
        ];
        break;
        case 3: // Planning
        title = "Strategy Activation";
        description = "Confirm all campaign plans and creative assets before moving to active development.";
        toggles = [
            { label: "SEO Strategy Finalized", status: true, icon: Monitor },
            { label: "PPC Budget Allocated", status: true, icon: TrendingUp },
            { label: "Creative Brief Approved", status: false, icon: Smartphone },
            { label: "Automation Logic Check", status: false, icon: Clock },
        ];
        break;
        case 4: // Implementation
        title = "Deployment Control";
        description = "Monitor the live launch sequence and QA checks across all advertising platforms.";
        toggles = [
            { label: "Campaign Launch QA", status: true, icon: CheckCircle },
            { label: "Monitoring Setup", status: true, icon: BarChart3 },
            { label: "A/B Testing Enabled", status: true, icon: Smartphone },
            { label: "Scaling Strategy Review", status: false, icon: TrendingUp },
        ];
        break;
        case 5: // Monitoring
        title = "Growth Management";
        description = "Utilize AI tools to fine-tune performance, analyze trends, and project future growth.";
        toggles = [
            { label: "Real-time Analytics Feed", status: true, icon: BarChart3 },
            { label: "A/B Test Rotation Schedule", status: true, icon: CheckCircle },
            { label: "Monthly Report Automation", status: true, icon: Clock },
            { label: "Innovation Integration Review", status: false, icon: Smartphone },
        ];
        break;
        default:
        // No default return needed as toggles is empty and it will render empty content
    }

    return (
        <div className="p-6 h-full bg-indigo-50/60 rounded-2xl shadow-inner border border-indigo-100">
        <div className="flex items-center text-indigo-700">
            <Zap className="h-6 w-6 mr-3" />
            <h3 className="text-xl font-bold tracking-tight">{title}</h3>
        </div>
        <p className="mt-2 text-sm text-indigo-600 border-b border-indigo-200 pb-4">
            {description}
        </p>

        <div className="mt-4 space-y-3">
            {toggles.map((toggle, index) => (
            <div key={index} className="flex items-center justify-between">
                <div className="flex items-center text-sm text-indigo-800">
                <toggle.icon className="h-4 w-4 mr-2 text-indigo-500" />
                <span>{toggle.label}</span>
                </div>
                {/* Using the custom ToggleSwitch component */}
                <ToggleSwitch status={toggle.status} />
            </div>
            ))}
        </div>
        </div>
    );
};


// --- MAIN COMPONENT ---

export default function StickySections() { 
    const cardData = [
        {
        id: 1,
        title: '1. Discovery & Requirements Analysis',
        description: 'Comprehensive consultation to understand your business goals, target audience, budget realities, and growth expectations. Our professional team conducts in-depth market research and competitive analysis.',
        top: 'top-0',
        points: [
            'Business objective identification and goal setting',
            'Target audience profiling and psychology analysis',
            'Competitive landscape assessment and positioning strategy',
            'Budget planning and investment recommendations',
        ],
        },
        {
        id: 2,
        title: '2. Comprehensive Digital Audit & Analysis',
        description: 'State of the art analysis of your complete digital footprint using professional tools including SEMrush, Google Analytics, Ahrefs, and proprietary software',
        top: 'top-16',
        points: [
            'Website performance and user experience evaluation',
            'SEO strength and search engine visibility assessment',
            'Social media presence and engagement analysis',
            'Paid advertising campaign performance review',
            'Technical infrastructure and security assessment'
        ],
        },
        {
        id: 3,
        title: '3. Strategic Planning & Creative Development',
        description: 'Custom roadmap development based on data insights and market intelligence. Our creative team designs campaigns that resonate with your audience while driving measurable results.',
        top: 'top-32',
        points: [
            'SEO strategy for long-term organic growth',
            'PPC campaigns for immediate traffic and conversions',
            'Content calendar and creative asset development',
            'Social media tactics and community management',
            'Mobile app development and optimization'
        ],
        },
        {
        id: 4,
        title: '4. Implementation & Execution',
        description: 'Our team of certified specialists activate each campaign component with coordination and consistency across all platforms. Real-time monitoring ensures optimal performance.',
        top: 'top-48',
        points: [
            'Project management with clear timelines and deliverables',
            'Quality assurance and testing protocols',
            'Brand consistency across all channels',
            'Performance monitoring and real-time optimization',
            'Regular communication and progress reporting'
        ],
        },
        {
        id: 5,
        title: '5. Monitoring, Scaling & Optimization',
        description: 'Continuous performance analysis with monthly reporting and strategic adjustments. Our datadriven approach ensures sustainable growth and maximum ROI.',
        top: 'top-64',
        points: [
            'Real-time analytics and performance tracking',
            'A/B testing for continuous improvement',
            'Campaign scaling for successful initiatives',
            'Strategy refinement based on market feedback',
            'Innovation integration for competitive advantage'
        ],
        },
    ];

    return (

    <div className="bg-white min-h-[400vh]">
    {/* Main Title Section - Occupies the initial viewport */}
    <div id="process" className="flex flex-col items-center justify-center px-4 pt-0 pb-8">
        <span className="text-xs uppercase font-semibold tracking-widest text-indigo-600">DIGITAL TRANSFORMATION PARTNER</span>
        <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900 text-center mt-3">
            Grow Faster with <span className="text-indigo-600">Performance-Driven</span> Strategies
        </h2>
        <p className="mt-4 text-md text-gray-500 mx-auto max-w-3xl text-center leading-relaxed">
            We combine local market expertise with global technical excellence to deliver tangible results for SMEs in Dubai and the Middle East.
        </p>
    </div>
        {/* Scrolling section with sticky cards */}
        <div className="relative">
            {cardData.map((card, index) => (
            <div
        key={card.id}
        // Dynamic 'top-' value creates the staggering effect
        className={`sticky ${card.top} pt-6 lg:pt-10 px-4 z-[${20 - index * 2}]`} 
        style={{ minHeight: '80vh' }}
    >
                {/* Main Content Card */}
                <div className="max-w-6xl mx-auto w-full">
                {/* UPDATED: Increased grid gap from lg:gap-12 to lg:gap-20 */}
                <div className="bg-white rounded-3xl overflow-hidden shadow-2xl p-6 sm:p-12 border border-gray-100 lg:grid lg:grid-cols-2 lg:gap-20 lg:items-start">
                    
                    {/* Left Column - Focused on Measurable Growth / Features */}
                    <div className="lg:pr-12 mb-8 lg:mb-0">
                    
                    <div className="flex items-center text-gray-900">
                        <Monitor className="h-6 w-6 mr-3 text-indigo-600" />
                        <h3 className="text-xl font-bold tracking-tight">
                            {/* Dynamic Title for the Left Panel */}
                            {card.id === 1 ? 'Discovery Elements' : 
                            card.id === 2 ? 'Audit & Analysis Metrics' : 
                            card.id === 3 ? 'Strategic Roadmap' :
                            card.id === 4 ? 'Execution Checklist' : 'Scaling & Optimization'}
                        </h3>
                    </div>

                    <p className="mt-4 text-sm text-gray-600 leading-relaxed">
                        {card.description}
                    </p>
                    
                    {/* Checklist Section */}
                    <ul className="mt-6 space-y-3 text-gray-700">
                        {card.points.map((point, i) => (
                        <li key={i} className="flex items-start text-sm">
                            <CheckCircle className="h-5 w-5 mr-3 text-green-500 flex-shrink-0 mt-0.5" />
                            <span>{point}</span>
                        </li>
                        ))}
                    </ul>

                    {/* Explore Features Button */}
                    <div className="mt-8">
                        <a href="#" className="group inline-flex items-center gap-2 px-8 py-3 text-white bg-indigo-600 rounded-xl shadow-lg shadow-indigo-500/50 hover:bg-indigo-700 transition-all transform hover:scale-[1.01] font-semibold">
                        Explore Features
                        <ArrowRight className="h-5 w-5 transform transition-transform group-hover:translate-x-1" />
                        </a>
                    </div>
                    </div>

                    {/* Right Column - Marketing Automation Control Panel / Action Panel */}
                    <div className="relative h-full pt-1">
                        {/* Render the specific action panel based on the card ID */}
                        <ActionPanel stageId={card.id} />
                    </div>
                </div>
                </div>
            </div>
            ))}
        </div>
    </div>
    );
}