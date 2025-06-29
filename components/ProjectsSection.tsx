export default function ProjectsSection() {
    return (
        <section id="projects" className="py-16 px-6 bg-white dark:bg-gray-950">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">My Projects</h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Project 1 */}
                    <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg transition">
                        <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Class Sphere</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                            A school management system for Nigerian basic schools. Built with Django and React.
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mb-4">
                            Tech Stack: Django · React · Tailwind · PostgreSQL
                        </p>
                        <div className="flex gap-4">
                            <a
                                href="https://github.com/yourusername/class-sphere"
                                className="text-blue-600 hover:underline text-sm"
                                target="_blank"
                            >
                                GitHub
                            </a>
                            <a
                                href="https://class-sphere.vercel.app"
                                className="text-blue-600 hover:underline text-sm"
                                target="_blank"
                            >
                                Live Demo
                            </a>
                        </div>
                    </div>

                    {/* Project 2 */}
                    <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg transition">
                        <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Farm Produce App</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                            A marketplace for farm produce with real-time inventory and pricing.
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mb-4">
                            Tech Stack: Next.js · Django REST · Tailwind
                        </p>
                        <div className="flex gap-4">
                            <a
                                href="https://github.com/yourusername/farm-app"
                                className="text-blue-600 hover:underline text-sm"
                                target="_blank"
                            >
                                GitHub
                            </a>
                            <a
                                href="https://imisifedara.com.ng"
                                className="text-blue-600 hover:underline text-sm"
                                target="_blank"
                            >
                                Live Demo
                            </a>
                        </div>
                    </div>

                    {/* Add more projects... */}
                </div>
            </div>
        </section>
      
    )
}