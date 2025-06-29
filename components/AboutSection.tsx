export default function AboutSection() {
    return (
        <section id="about" className="py-16 px-6 bg-gray-50 dark:bg-gray-900">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">About Me</h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                    I'm Osarogie Daniel, a Full Stack Developer from Nigeria with a background in Library and Information Science.
                    I specialize in building robust, scalable web apps using React, Next.js, Django, and REST APIs. I enjoy solving real-world problems through clean code and thoughtful design.
                </p>
                <p className="text-md text-gray-600 dark:text-gray-400 mb-4">
                    When I’m not coding, I’m probably mentoring, writing lesson notes, or planning community tech initiatives.
                </p>

                <h3 className="text-xl font-semibold mb-4 mt-8 text-gray-800 dark:text-white">Tech Stack</h3>
                <div className="flex flex-wrap justify-center gap-6">
                    <span className="bg-white dark:bg-gray-800 shadow px-4 py-2 rounded">HTML</span>
                    <span className="bg-white dark:bg-gray-800 shadow px-4 py-2 rounded">CSS</span>
                    <span className="bg-white dark:bg-gray-800 shadow px-4 py-2 rounded">JavaScript</span>
                    <span className="bg-white dark:bg-gray-800 shadow px-4 py-2 rounded">React</span>
                    <span className="bg-white dark:bg-gray-800 shadow px-4 py-2 rounded">Next.js</span>
                    <span className="bg-white dark:bg-gray-800 shadow px-4 py-2 rounded">Python</span>
                    <span className="bg-white dark:bg-gray-800 shadow px-4 py-2 rounded">Django</span>
                </div>

                {/* Optional CV Link */}
                <div className="mt-8">
                    <a
                        href="/Osarogie_Daniel_CV.pdf"
                        target="_blank"
                        className="underline text-blue-600 hover:text-blue-800 dark:text-blue-400"
                    >
                        View My CV
                    </a>
                </div>
            </div>
        </section>

    )
  }