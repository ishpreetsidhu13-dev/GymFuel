
import PageTitle from "@/app/components/pageTitle";

export default function About() {
    return (
        <main>
            <PageTitle
                title="About GymFuel"
                description="Simple calorie tracking for everyday fitness."
            />

            <div className="card">
                <h2>What is GymFuel?</h2>
                <p>
                    GymFuel is a student-built React and Next.js application that helps users track calories consumed  during the day.
                </p>

                <h2>How it works</h2>
                <p>
                    Search for recipes using a public API, add them to your food log, or enter your own food. Your dashboard calculates calories automatically.
                </p>

                <h2>Technologies</h2>
                <p>
                    Next.js App Router, TypeScript, React state and context hooks, props, fetch API, and CSS.
                </p>

                <p>
                    Food entries are kept in React state for the current session and reset when the page is refreshed.
                </p>
            </div>
        </main>
    );
}
