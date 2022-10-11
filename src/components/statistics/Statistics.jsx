export const Statistics = ({title, stats}) => {
    return (
        <section>
            <h2>Upload stats</h2>

            <ul>
                <li>
                    <span>{title}</span>
                    <span>{stats}%</span>
                </li>
                <li>
                    <span>{title}</span>
                    <span>{stats}%</span>
                </li>
                <li>
                    <span>{title}</span>
                    <span>{stats}%</span>
                </li>
                <li>
                    <span>{title}</span>
                    <span>{stats}%</span>
                </li>
            </ul>
        </section>
    )
}