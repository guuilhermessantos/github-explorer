export function RepositoryItem(props) {
  return (
    <li>
          <h1>{props.repository}</h1>
          <p>{props.repository.description}</p>

          <a href="">{props.repository.html_url}
            Acessar repositorios
          </a>
        </li>
  )
}