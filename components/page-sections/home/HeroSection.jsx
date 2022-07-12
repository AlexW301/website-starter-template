import PrimaryButton from "../../ui/PrimaryButton"

export default function HeroSection() {
    return (
        <div className="container mx-auto flex flex-col space-y-6 items-center justify-center h-[700px] bg-blue-50">
            <h1 className="text-4xl font-bold">Hero Section</h1>
            <PrimaryButton text="Test Component"/>
        </div>
    )
}