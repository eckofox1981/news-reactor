import { Box, Card, CardContent, Paper, Typography } from "@mui/material";

export function ArticleCard() {
  return (
    <Paper elevation={10}>
      <Card>
        <CardContent>
          <Typography variant="h3" component="div">
            title
          </Typography>
          <Typography variant="body1">body</Typography>
          <Box>
            <Typography gutterBottom>Likes: </Typography>
            <Typography variant="overline">likes</Typography>
          </Box>
          <Box>
            <Typography gutterBottom>Dislikes: </Typography>
            <Typography variant="overline">dislikes</Typography>
          </Box>
          <Box>
            <Typography gutterBottom>Views: </Typography>
            <Typography variant="overline">views</Typography>
          </Box>
        </CardContent>
      </Card>
    </Paper>
  );
}
