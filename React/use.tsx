import { use } from "react";

interface RepoTypes {
    id: number;
    name: string;
}

export default function Register() {
    const fetchRepos = async (): Promise<RepoTypes[]> => {
        const response = await fetch(
            "https://api.github.com/users/ricardo-script/repos"
        );
        return response.json();
    };

    const repos = use(fetchRepos());

    return (
        <main className="bg-slate-500 w-screen h-screen p-4">
            <ul>
                {repos.map((repo) => (
                    <li key={repo.id}>{repo.name}</li>
                ))}
            </ul>
        </main>
    );
}
