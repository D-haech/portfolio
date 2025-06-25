import Image from 'next/image'
import ProfilePic from '../public/osarogie.jpg' // Save your uploaded image as public/osarogie.jpg

export default function HomeSection() {
    return (
        <section className="text-center">
            <Image src={ProfilePic} alt="Osarogie" width={120} height={120} className="rounded-[50%] mx-auto" />
            <h1 className="text-3xl font-bold mt-4">Osarogie Igbinosa Daniel</h1>
            <p className="text-blue-500">Full Stack Developer</p>
        </section>
    )
}