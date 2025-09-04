import { ArticleCard } from "../components/ArticleCard";
import { RetractableSideBar } from "../components/RetractableSideBar";

export function Home() {
  //SIDEBAR with nav, main content (20 articles)

  return (
    <main>
      <h1>You're home</h1>
      <ArticleCard post={""} />
    </main>
  );
}
