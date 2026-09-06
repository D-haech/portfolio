export default function ProjectsSection() {
    return (
        <section id="projects" className="py-16 px-6 bg-white dark:bg-gray-950">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
                    My Projects
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {/* Project 1 */}
                    <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg transition">
                        <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                            Business Tracker
                        </h3>

                        <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                            A full-stack, offline-first business account management application
                            built to manage income, expenses, accounts, loans, repayments, and
                            financial statements for small businesses.
                        </p>

                        <p className="text-xs text-gray-500 dark:text-gray-400 mb-4">
                            Tech Stack: React · Django · Django REST Framework · MySQL · IndexedDB
                        </p>

                        <div className="flex gap-4">
                            <a
                                href="https://github.com/D-haech/Business_Tracker"
                                className="text-blue-600 hover:underline text-sm"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                GitHub
                            </a>

                            <a
                                href="https://frontend-peach-nine-30.vercel.app/"
                                className="text-blue-600 hover:underline text-sm"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Live Demo
                            </a>
                        </div>
                    </div>

                    {/* Project 2 */}
                    <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg transition">
                        <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                            Class Sphere
                        </h3>

                        <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                            A school management platform designed for Nigerian basic schools,
                            with features for student management, attendance, lesson notes,
                            results, fees, timetables, and school administration.
                        </p>

                        <p className="text-xs text-gray-500 dark:text-gray-400 mb-4">
                            Tech Stack: Django · Django REST Framework · React · Tailwind CSS · PostgreSQL
                        </p>

                        <div className="flex gap-4">
                            <a
                                href="https://github.com/D-haech/Class_Sphere"
                                className="text-blue-600 hover:underline text-sm"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                GitHub
                            </a>

                            
                        </div>
                    </div>

                    {/* Project 3 */}
                    <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg transition">
                        <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                            Imisifedara Farm
                        </h3>

                        <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                            A web application developed for a farm business to showcase and
                            manage agricultural products, providing customers with an online
                            platform for accessing farm produce.
                        </p>

                        <p className="text-xs text-gray-500 dark:text-gray-400 mb-4">
                            Tech Stack: React · Django · Django REST Framework · Tailwind CSS
                        </p>

                        <div className="flex gap-4">
                            <a
                                href="https://github.com/D-haech/Imisifedara-Farm"
                                className="text-blue-600 hover:underline text-sm"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                GitHub
                            </a>

                            <a
                                href="https://react-app-for-imisifedara.onrender.com/"
                                className="text-blue-600 hover:underline text-sm"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Live Demo
                            </a>
                        </div>
                    </div>

                    {/* Project 4 */}
                    <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg transition">
                        <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                            School Management System
                        </h3>

                        <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                            A school administration and academic management system developed
                            to handle student records, results, broadsheets, classes, subjects,
                            and other school operations.
                        </p>

                        <p className="text-xs text-gray-500 dark:text-gray-400 mb-4">
                            Tech Stack: Laravel · PHP · MySQL · Bootstrap
                        </p>

                        <div className="flex gap-4">
                            <a
                                href="https://github.com/D-haech/Broadsheet"
                                className="text-blue-600 hover:underline text-sm"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                GitHub
                            </a>


                            <a
                                href="https://sabec.com.ng/"
                                className="text-blue-600 hover:underline text-sm"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Live Demo
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}