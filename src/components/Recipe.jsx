import ReactMarkdown from 'react-markdown'

export default function Recipe(p)
{
    return(
        <section className="suggested-recipe-container" aria-live="polite">
            <ReactMarkdown>{p.recipe}</ReactMarkdown>
        </section>
    )
}