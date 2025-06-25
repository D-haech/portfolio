export default function ProjectsSection() {
    return (
        <section id="projects">
            <h2 className="text-2xl font-semibold mb-2">Projects</h2>
            <div className="border p-4 rounded-md bg-white dark:bg-gray-800">
                <ol className="list-decimal px-3">
                    <li>
                        <h3 className="font-bold">Farm Product Showcase</h3>

                        <p>
                            A React + Django web app that displays farm animals, prices, and health benefits. Live at
                            <a href="https://imisifedara.com.ng" target="_blank" className="text-blue-500 ml-1"> imisifedara.com.ng</a>.
                        </p>
                    </li>
                    <li>
                        <h3 className="font-bold">Certficate Portal</h3>
                        <p>A certificate portal created for skyline ICT consult
                            used for issuing certificate to graduating students.
                            My role was really on the frontend of the app. We used pure HTML, CSS,
                            Bootstrap and Vanilla Javascript. The site is live
                        </p>
                    </li>

                </ol>

            </div>
        </section>
    )
}