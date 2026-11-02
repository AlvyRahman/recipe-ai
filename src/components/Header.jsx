import icon from "../assets/chef-icon.png"

export default function Header()
{
    return(
        <header>
            <img src={icon} alt="chef-icon" />
            <h1>Recipe AI</h1>
        </header>
    )
}