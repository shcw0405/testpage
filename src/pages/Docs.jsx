import React from "react";
import {
  Container,
  Typography,
  Box,
  Grid,
  Paper,
  List,
  ListItem,
  ListItemText,
  Divider,
  Tabs,
  Tab,
} from "@mui/material";

const Docs = () => {
  const [tabValue, setTabValue] = React.useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  // 文档类别数据
  const docCategories = [
    {
      id: "getting-started",
      title: "入门指南",
      items: [
        {
          id: "installation",
          title: "安装说明",
          content:
            "详细的系统安装步骤和环境配置要求。包括所需的依赖项、兼容性信息以及常见安装问题的解决方案。",
        },
        {
          id: "quick-start",
          title: "快速开始",
          content:
            "帮助新用户快速上手的指南，包含基本功能的使用演示和简单示例。",
        },
        {
          id: "faq",
          title: "常见问题",
          content:
            "收集了用户最常遇到的问题和相应的解决方案，帮助用户快速解决常见困难。",
        },
      ],
    },
    {
      id: "user-guide",
      title: "用户指南",
      items: [
        {
          id: "features",
          title: "功能概述",
          content:
            "系统主要功能的详细介绍，包括每个功能的用途、操作方法和最佳实践。",
        },
        {
          id: "workflows",
          title: "工作流程",
          content:
            "常见业务场景的完整工作流程指南，帮助用户了解如何在实际工作中应用系统功能。",
        },
        {
          id: "settings",
          title: "系统设置",
          content:
            "系统各项设置的详细说明，包括个性化配置、权限管理和系统参数调整等内容。",
        },
      ],
    },
    {
      id: "api-docs",
      title: "API文档",
      items: [
        {
          id: "authentication",
          title: "认证方式",
          content:
            "API认证机制的详细说明，包括如何获取和使用访问令牌、权限范围以及安全最佳实践。",
        },
        {
          id: "endpoints",
          title: "接口列表",
          content:
            "所有可用API接口的详细文档，包括请求参数、响应格式、错误码以及示例代码。",
        },
        {
          id: "integration",
          title: "集成指南",
          content:
            "如何将API集成到第三方系统或应用程序中的指导，包含常见集成场景和示例代码。",
        },
      ],
    },
    {
      id: "developer",
      title: "开发者资源",
      items: [
        {
          id: "architecture",
          title: "系统架构",
          content:
            "系统整体架构的技术说明，包括组件结构、数据流和技术栈选择的理由。",
        },
        {
          id: "contribution",
          title: "贡献指南",
          content:
            "针对希望参与项目开发的开发者的指南，包括代码规范、提交流程和测试要求。",
        },
        {
          id: "roadmap",
          title: "开发路线",
          content: "项目未来的开发计划和功能路线图，让用户了解系统的发展方向。",
        },
      ],
    },
  ];

  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom align="center">
          Project Documentation Center
        </Typography>
        <Typography
          variant="h5"
          component="h2"
          gutterBottom
          align="center"
          color="text.secondary"
          sx={{ mb: 6 }}
        >
          Comprehensive Technical Documentation, User Guides, and API References
        </Typography>

        <Box sx={{ borderBottom: 1, borderColor: "divider", mb: 3 }}>
          <Tabs
            value={tabValue}
            onChange={handleTabChange}
            aria-label="文档类别"
            centered
          >
            {docCategories.map((category, index) => (
              <Tab
                key={category.id}
                label={category.title}
                id={`doc-tab-${index}`}
                aria-controls={`doc-tabpanel-${index}`}
              />
            ))}
          </Tabs>
        </Box>

        {docCategories.map((category, index) => (
          <div
            key={category.id}
            role="tabpanel"
            hidden={tabValue !== index}
            id={`doc-tabpanel-${index}`}
            aria-labelledby={`doc-tab-${index}`}
          >
            {tabValue === index && (
              <Box>
                <Typography
                  variant="h4"
                  component="h2"
                  gutterBottom
                  sx={{ mb: 3 }}
                >
                  {category.title}
                </Typography>

                <Grid container spacing={4}>
                  {category.items.map((item) => (
                    <Grid item xs={12} md={4} key={item.id}>
                      <Paper elevation={2} sx={{ p: 3, height: "100%" }}>
                        <Typography variant="h6" component="h3" gutterBottom>
                          {item.title}
                        </Typography>
                        <Divider sx={{ my: 2 }} />
                        <Typography variant="body1">{item.content}</Typography>
                      </Paper>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            )}
          </div>
        ))}

        <Box sx={{ mt: 8, p: 3, bgcolor: "background.paper", borderRadius: 2 }}>
          <Typography variant="h5" component="h2" gutterBottom>
            Need more help？
          </Typography>
          <Typography variant="body1" paragraph>
            Can't Find What You Need? We’re Here to Help
          </Typography>
          <List>
            <ListItem>
              <ListItemText
                primary="Technical Support"
                secondary="Get expert assistance from our dedicated team:1026343326@qq.com"
              />
            </ListItem>
          </List>
        </Box>
      </Box>
    </Container>
  );
};

export default Docs;
