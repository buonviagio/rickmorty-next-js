import styles from "./page.module.css";

export default function page() {
  return (
    <section className={styles.homepageWraper}>
      <div className={styles.homepageContainer}>
        <h1>Homepage</h1>
        <p>
          "I'm learning about rendering styles in "<b>Next.js</b>" - this page
          was " <b>Statically Rendered</b>" by default."
        </p>
        <p>
          "The " <i>Characters</i>" page is rendered " <b>Server-Side</b> " and
          shows a list of Rick and Morty characters. From there, you can click
          each character to follow a " <b>Statically-Generated</b>" path, and
          visit " <i>Character</i>" page rendering with "{" "}
          <b>Static-Site-Generation.</b>" I've fetched the data for these pages
          from a " <b>REST API.</b>
        </p>
        <p>
          " The" <i>Episodes</i>" page is rendered " <b>Client-Side.</b>" I've
          used a filtered " <b>GraphQL</b> " query to fetch the data. "
          <a
            href="https://www.netlify.com/blog/2020/12/21/send-graphql-queries-with-the-fetch-api-without-using-apollo-urql-or-other-graphql-clients/"
            target="blank"
          >
            Here
          </a>
          " is a good article to help you use Graph QL together with the Fetch
          API."
        </p>
      </div>
    </section>
  );
}
