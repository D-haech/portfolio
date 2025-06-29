export default function ContactSection() {
    return (
        <section id="contact" className="py-16 px-6 bg-gray-50 dark:bg-gray-900">
            <div className="max-w-xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Contact Me</h2>
                <p className="text-md text-gray-700 dark:text-gray-300 mb-6">
                    I'm open to opportunities, collaborations, or just a good tech chat. Reach me via email or find me on the platforms below.
                </p>

                <p className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
                    <a href="mailto:osarogiedanieligbinosa@gmail.com"> 📧 osarogiedanieligbinosa@gmail.com</a>
                </p>
                


                <div className="flex justify-center gap-6 mt-6">
                    <a href="https://github.com/yourusername" target="_blank" className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">
                        GitHub
                    </a>
                    <a href="https://linkedin.com/in/yourlinkedin" target="_blank" className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">
                        LinkedIn
                    </a>
                    {/* Optional add more: Twitter, Dev.to, etc. */}
                </div>

                <p className="text-sm text-gray-500 mt-8 dark:text-gray-400">
                    Thanks for stopping by! 👋
                </p>
            </div>
        </section>

    )
  }