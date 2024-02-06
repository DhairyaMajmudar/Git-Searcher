import { Header, Body } from "@/components";
import { getProps } from "@/gqlfetch";

// how to get the user from header in fetch function// usecontext & localstorage

export default async function Home() {
  const { user } = await getProps();

  return (
    <section className="flex justify-center">
      <div>
        <Header />
        <Body
          name={user.name}
          bio={user.bio}
          avatarUrl={user.avatarUrl}
          company={user.company}
          websiteUrl={user.websiteUrl}
          followers={user.followers.totalCount}
          following={user.following.totalCount}
          pullRequests={user.pullRequests.totalCount}
          twitterUsername={user.twitterUsername}
        />
      </div>
    </section>
  );
}
