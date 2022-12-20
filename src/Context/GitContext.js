import { createContext, useContext, useState } from 'react';
const api = 'https://api.github.com/';
const GithubContext = createContext();
function GitProvider({ children }) {
    const [name, setName] = useState('tao');
    const [repo, setRepo] = useState(1);
    const [follower, setFollower] = useState(1);
    const [following, setFollowing] = useState(1);
    const [isLoadingData, setIsLoadingData] = useState(false);
    const [git, setGit] = useState(1);
    const [followerUrl, setFollowerUrl] = useState('https://api.github.com/users/john-smilga/followers?per_page=100');
    const [userData, setUserData] = useState({
        login: 'khang-hy',
        html_url: 'https://github.com/giakhang94',
        bio: 'Ai Tan Giac La Huyen Diep',
        blog: 'macrowl.com',
        company: 'Tao',
        location: 'Viet Nam',
        reposUrl: 'https://api.github.com/users/john-smilga/repos',
        avtUrl: 'https://scontent.fsgn5-6.fna.fbcdn.net/v/t1.6435-9/71822248_2488634454564807_7830757830616416256_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=5LKvNYwICFYAX8Dot8G&_nc_ht=scontent.fsgn5-6.fna&oh=00_AfB6i_c-I1QJJw1P7DP-uXUX61QixlWjWcTuGlLb6Xf8tA&oe=63C65B8D',
    });
    async function gitSearch(user) {
        try {
            setIsLoadingData(true);
            const res = await fetch(api + 'users/' + user);
            if (res) {
                const resData = await res.json();
                setName(resData.name);

                setRepo(resData.public_repos);

                setFollowing(resData.following);

                setFollower(resData.followers);

                setGit(resData.public_gists);

                const login = resData.login;
                const bio = resData.bio;
                const blog = resData.blog;
                const company = resData.company;
                const location = resData.location;
                const avtUrl = resData.avatar_url;
                const reposUrl = resData.repos_url;
                const html_url = resData.html_url;
                setUserData({ login, bio, blog, company, location, avtUrl, reposUrl, html_url });
                setFollowerUrl(resData.followers_url);
                setIsLoadingData(false);
            }
        } catch (e) {
            console.log(e);
        }
    }
    return (
        <GithubContext.Provider
            value={{
                gitSearch,
                name,
                repo,
                follower,
                following,
                git,
                userData,
                followerUrl,
                isLoadingData,
            }}
        >
            {children}
        </GithubContext.Provider>
    );
}
export { GitProvider, GithubContext };
