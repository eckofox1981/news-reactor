import { Card, CardContent, Typography } from "@mui/material";
import { UserCard } from "../components/UserCard";
import { LikeDislike } from "../components/LIkeDislike";

export function ArticlePage() {
  return (
    <main>
      <Card>
        <CardContent>
          <Typography variant="h2">Title</Typography>
          <Typography variant="body1">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam,
            vitae aperiam. At laudantium quaerat odio cum sed voluptas quos,
            commodi quidem illo cumque dicta a ex totam, exercitationem
            repudiandae veniam.
          </Typography>
          <LikeDislike likes={2} dislikes={3} />
          <UserCard userId={1} />
        </CardContent>
      </Card>
    </main>
  );
}
