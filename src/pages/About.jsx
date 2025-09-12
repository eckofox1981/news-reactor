import { Typography } from "@mui/material";

export function About() {
  return (
    <main>
      <Typography variant="h2">About</Typography>
      <Typography variant="body1" sx={{ marginTop: "2rem" }}>
        React News is your go-to source for fast, witty, and occasionally
        outrageous updates from the world around us… or the world as we wish it
        were. Born from the chaos of modern media, we pride ourselves on
        delivering stories that make you think, laugh, and sometimes question
        reality—though mostly the last one. At React News, we don’t just report
        the news—we react to it. From trending memes and tech breakthroughs to
        bizarre happenings and the occasional imaginary scandal, our mission is
        to keep readers entertained, informed (sort of), and always guessing
        what’s real. Because in a world full of headlines, sometimes the best
        reaction is a good story.
      </Typography>
      <a href="mailto:eckofox1981@pm.me">
        <Typography
          variant="body1"
          sx={{
            marginTop: "2rem",
            alignSelf: "flex-end",

            marginRight: 0,
          }}
        >
          Contact us
        </Typography>
      </a>
    </main>
  );
}
