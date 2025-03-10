import React from "react";
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Button,
  Divider,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const Team = () => {
  // 示例团队成员数据
  const teamMembers = [
    {
      id: 1,
      name: "蔡旭",
      title: "Leader",
      bio: "A lifelong learner driven by curiosity, I thrive on exploring complex ideas and pushing the boundaries of knowledge through research and innovation.",
      skills: [
        "Project Management",
        "Requirements Analysis",
        "Risk Control",
        "Team Leadership",
      ],
      email: "1026343326@qq.com",
      linkedin: "www.linkedin.com/in/shcw",
      github: "https://github.com/shcw0405",
      avatar: "pics/cx.jpg",
    },
    {
      id: 2,
      name: "吴博睿",
      title: "",
      bio: "",
      skills: [""],
      email: "",
      linkedin: "",
      github: "",
      avatar: "",
    },
    {
      id: 3,
      name: "杨功渤",
      title: "",
      bio: "",
      skills: [""],
      email: "",
      linkedin: "",
      github: "",
      avatar: "",
    },
    {
      id: 4,
      name: "朱元武",
      title: "",
      bio: "",
      skills: [""],
      email: "",
      linkedin: "",
      github: "",
      avatar: "",
    },
  ];

  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom align="center">
          Our Team
        </Typography>
        <Typography
          variant="h5"
          component="h2"
          gutterBottom
          align="center"
          color="text.secondary"
          sx={{ mb: 6 }}
        >
          Meet the Professionals Dedicated to Driving Project Success
        </Typography>

        <Grid container spacing={4}>
          {teamMembers.map((member) => (
            <Grid item xs={12} md={6} key={member.id}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                  }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      width: { xs: "100%", md: 200 },
                      height: { xs: 250, md: "auto" },
                      objectFit: "cover",
                    }}
                    image={member.avatar}
                    alt={member.name}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="div">
                      {member.name}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      color="primary"
                      gutterBottom
                    >
                      {member.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      paragraph
                    >
                      {member.bio}
                    </Typography>
                    <Typography variant="subtitle2" gutterBottom>
                      Professional Skills:
                    </Typography>
                    <Box
                      sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 2 }}
                    >
                      {member.skills.map((skill, index) => (
                        <Typography
                          key={index}
                          variant="body2"
                          sx={{
                            bgcolor: "primary.light",
                            color: "white",
                            px: 1,
                            py: 0.5,
                            borderRadius: 1,
                            fontSize: "0.75rem",
                          }}
                        >
                          {skill}
                        </Typography>
                      ))}
                    </Box>
                  </CardContent>
                </Box>
                <Divider />
                <CardActions sx={{ justifyContent: "center", p: 2 }}>
                  <Button
                    size="small"
                    startIcon={<EmailIcon />}
                    href={`mailto:${member.email}`}
                  >
                    邮箱
                  </Button>
                  <Button
                    size="small"
                    startIcon={<LinkedInIcon />}
                    href={member.linkedin}
                    target="_blank"
                  >
                    LinkedIn
                  </Button>
                  <Button
                    size="small"
                    startIcon={<GitHubIcon />}
                    href={member.github}
                    target="_blank"
                  >
                    GitHub
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default Team;
