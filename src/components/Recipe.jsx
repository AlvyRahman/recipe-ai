import ReactMarkdown from 'react-markdown'

export default function Recipe(p)
{
    return(
        <section className="suggested-recipe-container" aria-live="polite">
            <h1>Suggested recipe:</h1>
            <ReactMarkdown>{p.recipe}</ReactMarkdown>
        </section>
    )
}